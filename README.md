# IndxTE - 多功能在线工具集

<div align="center">

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

**小小导航页，小何才露尖尖角**

[在线演示](https://tozi.uesmods.top) | [博客主站](https://uesmods.top)

</div>

---

## 📖 项目简介

**IndxTE** 是一个轻量级的多功能在线工具集合网站，提供多种实用工具的快速访问和在线使用。项目采用纯前端技术栈（HTML/CSS/JavaScript），无需后端服务器，部署简单，响应式设计支持多设备访问。

---

## ✨ 功能特性

### 🧭 导航主页
- 简洁美观的导航界面
- 毛玻璃效果按钮设计
- 流畅的交互动画
- 响应式布局适配

### 🔐 摩尔斯电码加密/解密
- 文本与摩尔斯电码双向转换
- 清晰的电码对照表展示
- 实时加密/解密功能
- 详细的摩尔斯电码历史介绍

### 📻 CW 摩尔斯电码练习
- 专业的 CW 电码练习功能
- 移动端与桌面端自适应
- 设备类型智能识别
- 听力训练模式

### 🕳️ 黑洞页面
- 创意互动页面
- 视觉特效展示

### 📱 响应式设计
- 支持桌面端、平板、手机端
- 设备类型自动检测
- 不同设备加载对应页面

---

## 📁 项目结构

```
MyTable/
├── index/                          # 主页面目录
│   ├── index.html                  # 导航主页
│   ├── index.css                   # 主页样式
│   ├── index.js                    # 主页脚本
│   ├── MorseCode.html              # 摩尔斯电码页面
│   ├── MorseCode.css               # 摩尔斯电码样式
│   ├── MorseCode.js                # 摩尔斯电码脚本
│   ├── CW.html                     # CW 练习入口
│   ├── CwDesktop.html              # 桌面端 CW 练习
│   ├── CwMobile.html               # 移动端 CW 练习
│   ├── CW.css                      # CW 练习样式
│   ├── CW.js                       # CW 练习脚本
│   ├── Blackhole.html              # 黑洞页面
│   ├── Blackhole.css               # 黑洞样式
│   ├── Blackhole.js                # 黑洞脚本
│   ├── audio/                      # 音频资源
│   │   └── Key.mp3                 # 按键音效
│   ├── image/                      # 图片资源
│   │   ├── 1.jpg, 2.jpg, 3.jpg
│   │   └── CWpng.png               # CW 图标
│   ├── img/                        # 图片资源
│   │   ├── backgrund.jpg           # 背景图
│   │   ├── DHY.png                 # 网站图标
│   │   ├── Morescode.png           # 摩尔斯图标
│   │   └── Mors.png                # 摩斯对照表
│   └── dw/                         # 下载资源
│       └── shing.apk               # 应用安装包
├── README.md                       # 项目说明文档
└── .user.ini                       # 服务器配置
```

---

## 🚀 快速开始

### 本地运行

1. **克隆项目**
```bash
git clone <your-repo-url>
cd MyTable
```

2. **直接打开**
```bash
# 使用浏览器打开 index/index.html
# 或使用任意静态服务器
```

3. **使用 VS Code Live Server**
```bash
# 安装 Live Server 扩展
# 右键 index.html -> Open with Live Server
```

### 服务器部署

1. **上传文件到 Web 服务器**
2. **确保服务器支持 HTML/CSS/JS 静态文件**
3. **访问对应 URL 即可使用**

---

## 🛠️ 技术栈

| 技术 | 说明 |
|------|------|
| **HTML5** | 页面结构 |
| **CSS3** | 样式设计、动画效果 |
| **JavaScript** | 交互逻辑、加密解密算法 |
| **响应式设计** | 多设备适配 |

---

## 📸 功能预览

### 摩尔斯电码对照表
| 字母 | 电码 | 字母 | 电码 |
|------|------|------|------|
| A | `.-` | N | `-.` |
| B | `-...` | O | `---` |
| C | `-.-.` | P | `.--.` |
| D | `-..` | Q | `--.-` |
| E | `.` | R | `.-.` |
| F | `..-.` | S | `...` |
| G | `--.` | T | `-` |
| H | `....` | U | `..-` |
| I | `..` | V | `...-` |
| J | `.---` | W | `.--` |
| K | `-.-` | X | `-..-` |
| L | `.-..` | Y | `-.--` |
| M | `--` | Z | `--..` |

---

## 🔧 配置说明

### 自定义背景
修改 `index/index.css` 中的背景图片路径：
```css
background-image: url("./img/backgrund.jpg");
```

### 修改导航链接
编辑 `index/index.html` 中的按钮链接：
```html
<a href="你的链接" class="nav-button">按钮文字</a>
```

### 设备适配
CW 练习页面会自动检测设备类型并跳转到对应页面：
- 移动端 → `CwMobile.html`
- 桌面端 → `CwDesktop.html`

### 下载资源
- **shing.apk**: 位于 `index/dw/` 目录，可通过链接提供下载

---

## ❓ 常见问题

**Q: 为什么页面加载后显示空白？**
A: 请确保通过 Web 服务器访问（如 Live Server），直接打开本地文件可能导致部分功能受限。

**Q: CW 练习没有声音？**
A: 检查浏览器是否允许自动播放音频，部分浏览器需要用户交互后才能播放声音。

**Q: 移动端显示异常？**
A: 请确保使用现代浏览器（Chrome、Safari、Firefox 等），并检查网络连接。

**Q: 如何下载 APK 文件？**
A: 访问 `index/dw/shing.apk` 路径即可下载。

---

## 📝 更新日志

### v1.0.0
- ✅ 完成导航主页设计
- ✅ 完成摩尔斯电码加密/解密功能
- ✅ 完成 CW 摩尔斯电码练习功能
- ✅ 完成设备适配（移动端/桌面端）
- ✅ 完成黑洞页面

---

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

## 📄 开源协议

本项目采用 MIT 协议开源。详见 [LICENSE](LICENSE) 文件。

---

## 👤 作者

- **作者**: 小何
- **博客**: [uesmods.top](https://uesmods.top)
- **邮箱**: (15631264036@163.com)

---

## 🙏 致谢

感谢所有使用和支持本项目的用户！

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给一个 Star 支持一下！⭐**

Made with ❤️ by 小何

</div>
