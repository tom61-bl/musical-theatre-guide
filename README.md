# 音乐剧观赏指南 · A Beginner's Guide to Musical Theatre

一份写给零基础观众的外国音乐剧入门科普网站：什么是音乐剧、它和歌剧的区别、一台戏是怎么演出来的、世界四大版图、观剧黑话、第一次看剧攻略，以及五部名剧赏析（《歌剧魅影》《悲惨世界》《巴黎圣母院》《摇滚莫扎特》《莫扎特！》）。

## 在线访问

GitHub Pages 部署地址（推送后开启）：
**https://tom61-bl.github.io/musical-theatre-guide/**

## 本地运行

纯静态、无构建步骤，直接双击 `index.html` 即可在浏览器打开；
或在项目根目录启动任意静态服务器：

```bash
python -m http.server 8000
```

然后访问 http://localhost:8000

## 目录结构

```
├── index.html          # 主页面（8 个栏目）
├── css/style.css       # 剧场视觉样式与响应式
├── js/main.js          # 滚动、标签、翻卡、测验等交互
└── assets/images/      # 剧目海报与舞台图片
```

## 互动一览

- 顶部阅读进度条 + 栏目导航高亮
- 音乐剧 vs 歌剧翻转卡片
- 歌曲类型时间轴（序曲 / 独唱 / 重唱 / 合唱 / 终曲）
- 四大版图标签切换
- 观剧黑话翻牌卡片
- 观剧礼仪小测验
- "你的第一部音乐剧"3 题推荐测试
- 名剧卡片赏析 + B 站官摄链接
- 入坑清单（localStorage 自动保存）

## 参考来源

**内容科普：**
- 三联生活周刊《悲惨世界》罕见史诗音乐剧系列
- 澎湃新闻《顶流"变形记"：法语音乐剧的前世今生》
- 京报网《音乐剧〈莫扎特！〉：天才音乐家的挣扎"暗面"》
- 文艺报《音乐无国界 爱亦无国界》（巴黎圣母院专题）
- 佛山Plus《音乐剧〈悲惨世界〉为何风靡全球》
- Playbill、Broadway.com、维基百科（剧目年表与资料）

**技术参考（GitHub 开源项目）：**
- [russellgoldenberg/scrollama](https://github.com/russellgoldenberg/scrollama) — 滚动驱动叙事
- [idyll-lang/idyll](https://github.com/idyll-lang/idyll) — 交互式文章
- Distill 风格科普排版、IntersectionObserver 滚动渐入

**视觉参考：**
- ZARA 官网（zara.com）编辑式设计语言：黑白二元配色、超大 Didone/Didot 高对比衬线标题（Playfair Display 免费替代）、零圆角、全出血大片、极简细字导航
- 开场为 CSS 幕布拉开动画（红丝绒褶皱渐变 + 双幕位移），支持 REPLAY 重播

**B 站官摄链接（点击剧目卡片即可跳转）：**
- 歌剧魅影 25 周年纪念演出
- 悲惨世界 10 周年纪念音乐会
- 巴黎圣母院 1998 原卡官摄
- 摇滚莫扎特（法扎）
- 莫扎特！（德扎）

## 版权说明

本站为个人学习与科普用途，所有海报、图片及官摄版权均归原作者与版权方所有，页面仅做介绍与链接跳转，不存储、不传播音视频内容。如涉版权问题，可联系删除。
