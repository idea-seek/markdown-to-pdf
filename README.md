# MarkdownToPDF

免费在线 Markdown 多格式转换器，支持实时预览。将 Markdown 转换为 Word、PDF、HTML、图片。所有处理在浏览器本地完成，无需注册，无需安装。

> **演示地址：** [https://markdown-to-pdf.ideaseek.cn/](https://markdown-to-pdf.ideaseek.cn/)

---

## 品牌信息

本项目由 **ideaseek 智寻科技** 开发与维护。

---

## 功能特性

- **Markdown → Word (.docx)** — 可编辑的 Word 文档，保留标题层级、表格、代码高亮、数学公式
- **Markdown → PDF** — 浏览器打印为 PDF，A4 排版
- **Markdown → HTML** — 完整 HTML 文档或代码片段导出
- **Markdown → 图片** — PNG/JPG/WebP 高清图片，2x 像素密度
- **实时预览** — 150ms 防抖，边写边看
- **代码语法高亮** — 190+ 编程语言，highlight.js
- **LaTeX 数学公式** — KaTeX 渲染
- **100% 本地处理** — 所有转换在浏览器本地完成，数据不上传服务器
- **完全免费** — 无需注册，无使用次数限制

---

## 技术栈

| 功能 | 方案 |
|---|---|
| Markdown 解析 | `marked` + `marked-highlight` |
| 代码语法高亮 | `highlight.js` (190+ 语言) |
| LaTeX 公式 | `KaTeX` |
| Word 导出 | `docx` (HTML AST → DOCX 原生结构) |
| PDF 导出 | 浏览器 Print API |
| 图片导出 | `html-to-image` (PNG/JPG/WebP/SVG) |
| 路由 | History API (SPA) |
| 构建工具 | Vite + TypeScript |

---

## 项目结构

```
ideasee-mdtopdf/
├── index.html                  # 主页面 (完整 UI)
├── public/
│   └── images/
│       ├── logo.png            # Logo
│       └── favicon.ico         # Favicon
├── src/
│   ├── main.ts                 # 应用入口 + 事件处理 + 状态管理
│   ├── router.ts               # 轻量 History API 路由器
│   └── core/
│       ├── parseMarkdown.ts    # Markdown → HTML
│       ├── renderMath.ts       # LaTeX 数学公式
│       ├── exportPdf.ts        # PDF 导出
│       ├── exportHtml.ts       # HTML 导出
│       ├── exportImage.ts      # 图片导出
│       └── exportDocx.ts       # Word 导出
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev
# → http://localhost:3000

# 生产构建
npm run build

# 预览生产构建
npm run preview
```

---

## 页面路由

| 路由 | 页面 |
|---|---|
| `/` | Markdown 转 PDF（首页） |
| `/markdown-to-word/` | Markdown 转 Word |
| `/markdown-to-pdf/` | Markdown 转 PDF |
| `/markdown-to-html/` | Markdown 转 HTML |
| `/markdown-to-image/` | Markdown 转图片 |

---

## 线上部署

本项目为纯前端 SPA，构建产物在 `dist/` 目录。部署时需配置 SPA fallback（所有路由返回 `index.html`）。

Nginx 示例：

```nginx
server {
    listen 443 ssl;
    server_name markdown-to-pdf.ideaseek.cn;

    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## 隐私说明

所有 Markdown 内容、上传文件和生成的文档仅在您的浏览器本地处理，**不会上传到任何服务器**。我们无法访问、查看或存储您的任何数据。

---

## License

MIT License

Copyright (c) 2026 ideaseek [珠海市智寻科技有限公司](https://www.ideaseek.cn)
