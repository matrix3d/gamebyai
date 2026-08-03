# html5gameByAI

游戏内容（仿《血污：夜之仪式》的 2.5D 横版动作）

主角米莉娅：奔跑、可变高度跳跃、三段剑击（带剑光轨迹）、标志性后撤步闪避、耗魔烈焰术
敌人：巡逻骷髅（持剑追击）、俯冲蝙蝠、追踪怨灵，掉红魂（回血）/蓝魂（回魔）
关卡：210 米长哥特回廊——血月、星空、远景城堡剪影（视差滚动）、彩窗、吊灯烛火、红毯、单向平台
Boss「鲜血领主·巴洛尔」：进入竞技场触发魔法屏障，技能含冲锋撞墙眩晕（受伤×1.5）、跳劈冲击波（跳跃躲避）、召唤蝙蝠，血量 40% 以下狂暴；击杀后走到王座通关
打击感：顿帧、屏幕震动、伤害数字、粒子血液、WebAudio 合成音效（无需音频文件）
操作

移动	跳跃	攻击	后撤步	法术
PC	A/D 或 ←/→	K/空格/W	J	L/Shift	I
手机	左侧虚拟摇杆	跳	攻	闪	法
竖屏会提示旋转，窄屏自动拉远相机。死亡/通关后点击重来。

给想改的人：关卡布局在 PLATFORMS 数组，敌人生成在文件末尾"初始化生成"段，Boss AI 是 updateBoss 状态机，数值（移速/跳力/伤害）都在开头常量区。已验证跳跃物理保证每个平台缺口可达。

<a href="https://matrix3d.github.io/gamebyai/%E8%A1%80%E6%B1%A1-%E6%9C%88%E4%B8%8B%E4%B9%8B%E5%9F%8E.html">血污月下之城</a> 


<a href="https://matrix3d.github.io/gamebyai/carai.html">carai.html</a>  

只用一个 HTML 文件,一次输出,直接做出一个完整的、可以玩的 极品飞车 克隆版。可以流畅在手机上操作适配。所以要加入虚拟摇杆之类的。加一个全屏按钮

<a href="https://matrix3d.github.io/gamebyai/minecraft.html">minecraft.html</a>  

只用一个 HTML 文件,一次输出,直接做出一个完整的、可以玩的 Minecraft 克隆版。可以流畅在手机上操作适配。所以要加入虚拟摇杆之类的。加一个全屏按钮

<a href="https://matrix3d.github.io/gamebyai/kimi3TanChiSHe.html">kimi3TanChiSHe.html</a>

<a href="https://matrix3d.github.io/gamebyai/gemini-car.html">gemini-car.html</a>

<a href="https://matrix3d.github.io/gamebyai/physics.html">physics.html</a>

<a href="https://matrix3d.github.io/gamebyai/pool_applovin.html">pool_applovin.html</a>

<a href="https://matrix3d.github.io/gamebyai/cocosNavMesh_applovin.html">cocosNavMesh_applovin.html</a>

<a href="https://matrix3d.github.io/gamebyai/inputapi.html">inputapi.html</a>

<a href="https://matrix3d.github.io/gamebyai/ocr.html">ocr.html</a>

<a href="https://matrix3d.github.io/gamebyai/lastwar.html">lastwar.html</a>

<a href="https://matrix3d.github.io/gamebyai/xiangqi.html">xiangqi.html</a>

<a href="https://matrix3d.github.io/gamebyai/water.html">water.html</a>

<a href="https://matrix3d.github.io/gamebyai/water_applovin.html">water_applovin.html</a> 

<a href="https://matrix3d.github.io/gamebyai/weixin/index.html">weixin</a> 

<a href="https://matrix3d.github.io/gamebyai/macos.html">macos.html</a> 

<a href="https://matrix3d.github.io/gamebyai/kdtree2.html">kdtree2.html</a> 

<a href="https://matrix3d.github.io/gamebyai/cocosrvo2.html">cocosrvo2</a> 

<a href="https://matrix3d.github.io/gamebyai/placepepon.html">placepepon</a> 



<a href="https://matrix3d.github.io/gamebyai/placepepon2.html">placepepon2</a> 


<a href="https://matrix3d.github.io/gamebyai/ai_studio_hundouluo.html">魂斗罗</a> 

<a href="https://matrix3d.github.io/gamebyai/saolei.html">扫雷</a> 

<a href="https://matrix3d.github.io/gamebyai/llk.html">连连看</a> 

<a href="https://matrix3d.github.io/gamebyai/llkgoogle.html">连连看bygoogle</a> 

<a href="https://matrix3d.github.io/gamebyai/llkgemini2.5pro.html">连连看gemini2.5pro</a> 

<a href="https://matrix3d.github.io/gamebyai/flygemini2.5pro.html">飞机gemini2.5pro</a> 

<a href="https://matrix3d.github.io/gamebyai/sortwatergpt5.html">sortwater</a> 

<a href="https://matrix3d.github.io/gamebyai/road.html">road</a> 
