// Mock Data
const currentUser = {
    id: 'me',
    name: '我',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'
};

const contacts = [
    { id: '1', name: '文件传输助手', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=File', type: 'system' },
    { id: '2', name: '张三', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ZhangSan' },
    { id: '3', name: '李四', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LiSi' },
    { id: '4', name: '王五', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=WangWu' },
    { id: '5', name: '产品经理', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PM' },
    { id: '6', name: '老板', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Boss' }
];

// Initial Chat History
let chats = [
    {
        contactId: '1',
        messages: [
            { id: 1, senderId: 'me', content: '图片.png', timestamp: Date.now() - 100000 },
            { id: 2, senderId: '1', content: '收到', timestamp: Date.now() - 90000 }
        ],
        lastMessage: '收到',
        lastTime: '12:30'
    },
    {
        contactId: '2',
        messages: [
            { id: 1, senderId: '2', content: '今晚有空吗？', timestamp: Date.now() - 500000 }
        ],
        lastMessage: '今晚有空吗？',
        lastTime: '昨天'
    },
    {
        contactId: '5',
        messages: [
            { id: 1, senderId: '5', content: '需求改一下', timestamp: Date.now() - 2000 }
        ],
        lastMessage: '需求改一下',
        lastTime: '刚刚'
    }
];

let activeChatId = '1'; // Default active chat

// DOM Elements
const chatListEl = document.getElementById('chat-list');
const contactListEl = document.getElementById('contact-list');
const chatMessagesEl = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const currentChatNameEl = document.getElementById('current-chat-name');
const navChat = document.getElementById('nav-chat');
const navContacts = document.getElementById('nav-contacts');
const chatPanel = document.getElementById('chat-panel');
const emptyState = document.getElementById('empty-state');

// Initialization
function init() {
    renderChatList();
    renderContactList();
    loadChat(activeChatId);
    setupEventListeners();
}

// Render Chat List
function renderChatList() {
    chatListEl.innerHTML = '';
    chats.forEach(chat => {
        const contact = contacts.find(c => c.id === chat.contactId);
        if (!contact) return;

        const el = document.createElement('div');
        el.className = `chat-item ${chat.contactId === activeChatId ? 'active' : ''}`;
        el.onclick = () => switchChat(chat.contactId);
        
        el.innerHTML = `
            <img src="${contact.avatar}" class="avatar" alt="${contact.name}">
            <div class="info">
                <div class="top-row">
                    <span class="name">${contact.name}</span>
                    <span class="time">${chat.lastTime}</span>
                </div>
                <div class="message-preview">${chat.lastMessage}</div>
            </div>
        `;
        chatListEl.appendChild(el);
    });
}

// Render Contact List
function renderContactList() {
    // Simple rendering for demo
    const container = document.getElementById('contact-list');
    // Keep headers, remove dynamic items if re-rendering (simplified here)
    
    // Append contacts
    contacts.forEach(contact => {
        if (contact.type === 'system') return; // Skip system contacts in main list for now
        
        const el = document.createElement('div');
        el.className = 'contact-item';
        el.onclick = () => startChat(contact.id);
        
        el.innerHTML = `
            <div class="avatar">
                <img src="${contact.avatar}" alt="${contact.name}">
            </div>
            <div class="info">
                <div class="name">${contact.name}</div>
            </div>
        `;
        container.appendChild(el);
    });
}

// Switch Chat
function switchChat(contactId) {
    activeChatId = contactId;
    renderChatList(); // Update active state styling
    loadChat(contactId);
    
    // Ensure we are on the chat tab
    showTab('chat');

    // Mobile: Show chat panel
    document.querySelector('.app-container').classList.add('mobile-chat-active');
}

// Start Chat (from contact list)
function startChat(contactId) {
    // Check if chat exists
    let chat = chats.find(c => c.contactId === contactId);
    if (!chat) {
        // Create new chat
        chat = {
            contactId: contactId,
            messages: [],
            lastMessage: '',
            lastTime: ''
        };
        chats.unshift(chat); // Add to top
    }
    switchChat(contactId);
}

// Load Chat Messages
function loadChat(contactId) {
    const chat = chats.find(c => c.contactId === contactId);
    const contact = contacts.find(c => c.id === contactId);
    
    if (!chat || !contact) return;

    currentChatNameEl.textContent = contact.name;
    chatMessagesEl.innerHTML = '';

    chat.messages.forEach(msg => {
        appendMessageToView(msg, contact);
    });

    scrollToBottom();
}

// Append Message to View
function appendMessageToView(msg, contact) {
    const isSelf = msg.senderId === 'me';
    const avatar = isSelf ? currentUser.avatar : contact.avatar;
    
    const el = document.createElement('div');
    el.className = `message ${isSelf ? 'self' : ''}`;
    
    el.innerHTML = `
        <img src="${avatar}" class="avatar">
        <div class="content">${msg.content}</div>
    `;
    
    chatMessagesEl.appendChild(el);
}

// Send Message
function sendMessage() {
    const content = messageInput.value.trim();
    if (!content) return;

    const chat = chats.find(c => c.contactId === activeChatId);
    if (chat) {
        const newMessage = {
            id: Date.now(),
            senderId: 'me',
            content: content,
            timestamp: Date.now()
        };
        
        chat.messages.push(newMessage);
        chat.lastMessage = content;
        chat.lastTime = '刚刚';
        
        // Move chat to top
        chats = chats.filter(c => c.contactId !== activeChatId);
        chats.unshift(chat);
        
        appendMessageToView(newMessage, null);
        messageInput.value = '';
        scrollToBottom();
        renderChatList();
        
        // Simulate reply
        setTimeout(() => {
            receiveMockReply(activeChatId);
        }, 1000 + Math.random() * 2000);
    }
}

// Mock Reply
function receiveMockReply(contactId) {
    const chat = chats.find(c => c.contactId === contactId);
    if (!chat) return;
    
    const replies = ['收到', '好的', '没问题', '哈哈哈哈', '确实', '稍等一下', 'OK'];
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    
    const newMessage = {
        id: Date.now(),
        senderId: contactId,
        content: randomReply,
        timestamp: Date.now()
    };
    
    chat.messages.push(newMessage);
    chat.lastMessage = randomReply;
    chat.lastTime = '刚刚';
    
    // Move chat to top
    chats = chats.filter(c => c.contactId !== contactId);
    chats.unshift(chat);
    
    if (activeChatId === contactId) {
        const contact = contacts.find(c => c.id === contactId);
        appendMessageToView(newMessage, contact);
        scrollToBottom();
    }
    renderChatList();
}

function scrollToBottom() {
    chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
}

// Tab Switching
function showTab(tabName) {
    if (tabName === 'chat') {
        navChat.classList.add('active');
        navContacts.classList.remove('active');
        chatListEl.classList.remove('hidden');
        contactListEl.classList.add('hidden');
        chatPanel.classList.remove('hidden');
        emptyState.classList.add('hidden');
    } else if (tabName === 'contacts') {
        navChat.classList.remove('active');
        navContacts.classList.add('active');
        chatListEl.classList.add('hidden');
        contactListEl.classList.remove('hidden');
        // Optionally hide chat panel or keep it
    }
}

// Event Listeners
function setupEventListeners() {
    navChat.onclick = () => showTab('chat');
    navContacts.onclick = () => showTab('contacts');

    sendBtn.onclick = sendMessage;

    // Mobile Back Button
    const mobileBackBtn = document.getElementById('mobile-back-btn');
    if (mobileBackBtn) {
        mobileBackBtn.onclick = () => {
            document.querySelector('.app-container').classList.remove('mobile-chat-active');
        };
    }

    messageInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.ctrlKey) {
            e.preventDefault();
            sendMessage();
        } else if (e.key === 'Enter' && e.ctrlKey) {
            // Allow default behavior (new line)
            messageInput.value += '\n';
        }
    });
}

// Run
init();
