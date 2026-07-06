# 本地隐私型 Markdown 多格式转换工具网站：产品功能清单与前端技术架构方案

> 版本：V1.0  
> 适用对象：产品经理、前端架构师、全栈工程师、创业团队  
> 产品目标：做一个类似 `md-to.com` 的在线工具网站，核心卖点是“浏览器本地处理、隐私安全、实时预览、一键导出 Word / PDF / HTML / 图片”，并重点支持代码块语法高亮、表格、LaTeX 数学公式在多格式导出中尽可能保真。

---

## 1. 产品定位

### 1.1 一句话定位

一个完全在浏览器本地运行的 Markdown 专业转换工具，面向开发者、产品经理、技术写作者、学生、研究人员和企业文档用户，支持将 Markdown 高质量转换为 Word、PDF、HTML、PNG/JPG/WebP 图片等格式。

### 1.2 核心价值主张

1. **隐私安全**：用户内容默认不上传服务器，Markdown 解析、预览、格式转换、文件导出均在浏览器本地完成。
2. **格式保真**：代码块、表格、任务列表、引用、图片、LaTeX 数学公式、目录、脚注等复杂 Markdown 结构在导出时尽可能保持一致。
3. **即开即用**：无需注册、无需安装、无需配置 Pandoc，即可完成常见文档转换。
4. **专业模板**：提供多套 Word / PDF / 图片模板，覆盖技术文档、产品文档、论文笔记、公众号排版、简历、报告等场景。
5. **可扩展架构**：前端本地转换为核心，后续可扩展高级能力，如批量转换、团队模板、云端同步、私有化部署、浏览器插件等。

---

## 2. 竞品与参考能力

### 2.1 参考站点能力

参考站点 `md-to.com` 官方页面展示的核心能力包括：Markdown 转 PDF、Word、HTML、图片；支持实时预览；强调所有处理均在浏览器本地完成，不上传服务器；并说明支持代码高亮、表格、LaTeX 数学公式，并在 Word、PDF、HTML、图片导出中保留这些格式。

### 2.2 差异化机会

| 方向 | 竞品常见能力 | 我们建议增强 |
|---|---|---|
| 隐私 | 声称本地处理 | 明确提供“本地处理证明”：离线模式、断网可用、网络请求面板说明 |
| 导出格式 | Word、PDF、HTML、图片 | 增加 EML、微信公众号 HTML、Notion HTML、Confluence、LaTeX、EPUB 预留 |
| 复杂 Markdown | 支持 GFM、代码、表格、数学公式 | 增加 Mermaid、PlantUML、流程图、Callout、Frontmatter、TOC |
| Word 保真 | 基础 DOCX | 建立 Markdown AST → DOCX 原生结构映射，不使用“HTML 改后缀”方案 |
| PDF 保真 | 浏览器打印 | 使用分页引擎 + CSS Paged Media + 智能分页策略 |
| 图片导出 | 单页截图 | 支持长图、分页图片、社交封面图、公众号卡片图、透明背景 |
| 模板 | 简单模板 | 模板市场、企业品牌模板、CSS 自定义、Word 样式映射 |
| 技术体验 | 在线编辑 | Monaco Editor、拖拽上传、本地历史、快捷键、PWA 离线 |

---

## 3. 目标用户

### 3.1 核心用户

1. **程序员 / 技术写作者**：需要把 README、技术方案、接口文档转成 PDF、Word、HTML。
2. **产品经理 / 项目经理**：需要将 PRD、需求文档、会议纪要快速导出给客户或团队。
3. **学生 / 研究人员**：需要处理包含数学公式、表格、参考资料的 Markdown 笔记。
4. **自媒体 / 内容运营**：需要将 Markdown 转成图片、公众号格式、长图、海报。
5. **企业用户**：关注隐私安全，希望文档不上传第三方服务器。

### 3.2 用户痛点

1. 在线转换工具担心文档泄露。
2. Pandoc / LaTeX / wkhtmltopdf 等本地工具安装门槛高。
3. Markdown 转 Word 后格式混乱，代码高亮、表格、公式丢失。
4. PDF 导出分页容易切断表格、代码块和公式。
5. 图片导出时长文档分辨率不清晰，或者背景、边距不可控。
6. 中文字体、英文代码字体、数学公式字体不统一。

---

## 4. 产品功能清单

## 4.1 MVP 核心功能

### 4.1.1 Markdown 输入

| 功能 | 说明 | 优先级 |
|---|---|---|
| 在线编辑器 | 左侧 Markdown 编辑，右侧实时预览 | P0 |
| 文件上传 | 支持 `.md`、`.markdown`、`.txt` | P0 |
| 拖拽上传 | 拖入文件自动读取 | P0 |
| 粘贴输入 | 支持直接粘贴 Markdown 文本 | P0 |
| 示例文档 | 内置示例：技术文档、数学公式、表格、代码块 | P0 |
| 清空内容 | 一键清空编辑区 | P0 |
| 本地保存 | 使用 IndexedDB / LocalStorage 保存草稿 | P1 |
| 自动恢复 | 页面刷新后恢复上次内容 | P1 |

### 4.1.2 Markdown 实时预览

| 功能 | 说明 | 优先级 |
|---|---|---|
| GFM 支持 | 标题、列表、表格、任务列表、删除线、自动链接 | P0 |
| 代码高亮 | 支持 JS、TS、PHP、Java、Python、Go、SQL、Bash 等 | P0 |
| LaTeX 数学公式 | 支持行内 `$x^2$` 与块级 `$$...$$` | P0 |
| 表格渲染 | 支持 Markdown 表格、宽表横向滚动 | P0 |
| 图片预览 | 支持本地图片、Base64、网络图片 | P0 |
| 引用块 | 支持多级引用 | P0 |
| 脚注 | 支持 `[^1]` 形式脚注 | P1 |
| 目录 TOC | 根据 H1-H6 自动生成目录 | P1 |
| Frontmatter | 解析 YAML 元信息，可作为标题、作者、日期 | P1 |
| Mermaid 图表 | 支持流程图、时序图、甘特图 | P2 |
| Callout 块 | 支持 Note / Tip / Warning / Important | P2 |

### 4.1.3 导出 Word / DOCX

| 功能 | 说明 | 优先级 |
|---|---|---|
| 导出 `.docx` | 生成真正的 Word 文档结构 | P0 |
| 标题层级 | H1-H6 映射为 Word Heading 1-6 | P0 |
| 段落样式 | 正文、加粗、斜体、链接、行内代码 | P0 |
| 列表 | 有序、无序、嵌套列表 | P0 |
| 表格 | Markdown 表格转 Word Table | P0 |
| 代码块 | 等宽字体、背景色、语法高亮保留 | P0 |
| 数学公式 | 优先转为 MathML / OMML，降级为 SVG/PNG | P0 |
| 图片 | 本地图片嵌入 DOCX | P0 |
| 页眉页脚 | 支持模板配置 | P1 |
| 目录 | 自动生成或静态目录 | P1 |
| 样式模板 | 技术文档、商务报告、论文、简历 | P1 |
| 自定义样式 | 字体、字号、行距、页边距、主题色 | P1 |

### 4.1.4 导出 PDF

| 功能 | 说明 | 优先级 |
|---|---|---|
| 导出 PDF | 基于浏览器渲染 HTML 后生成 PDF | P0 |
| A4 / Letter | 支持常见纸张尺寸 | P0 |
| 页边距 | 支持上下左右边距设置 | P0 |
| 代码高亮 | 保留 Shiki 高亮后的 HTML/CSS | P0 |
| 数学公式 | 保留 KaTeX HTML + CSS 或 SVG | P0 |
| 表格分页 | 避免表头丢失，尽量避免表格被切断 | P1 |
| 代码块分页 | 避免代码块被切断，可配置允许切断 | P1 |
| 页眉页脚 | 标题、页码、日期 | P1 |
| 主题模板 | 技术文档、白皮书、论文、产品方案 | P1 |
| 深色主题导出 | 适合代码文档和分享 | P2 |

### 4.1.5 导出 HTML

| 功能 | 说明 | 优先级 |
|---|---|---|
| 导出完整 HTML | 包含 `<html>`、`<head>`、样式、正文 | P0 |
| 导出片段 HTML | 只导出 body 内内容，便于 CMS 粘贴 | P0 |
| 内联 CSS | 支持将样式内联，便于邮件/公众号 | P0 |
| 外链 CSS | 支持样式分离，便于网站部署 | P1 |
| 复制 HTML | 一键复制源码 | P0 |
| 复制富文本 | 一键复制富文本到剪贴板 | P1 |
| 语义化 HTML5 | 生成可访问性较好的 HTML 结构 | P1 |

### 4.1.6 导出图片

| 功能 | 说明 | 优先级 |
|---|---|---|
| PNG 导出 | 高清 PNG | P0 |
| JPG 导出 | 可配置质量 | P0 |
| WebP 导出 | 更小体积 | P1 |
| 长图导出 | 将完整 Markdown 渲染为长图 | P0 |
| 分页图片 | 按 A4 或自定义高度切图 | P1 |
| 图片尺寸 | 支持 1x / 2x / 3x / 4x | P0 |
| 背景设置 | 透明、白色、自定义背景 | P0 |
| 社交媒体模板 | 小红书、公众号、技术海报比例 | P2 |

---

## 5. 高级功能清单

### 5.1 本地隐私能力

1. **本地转换模式标识**：页面明确展示“当前文档仅在本地浏览器处理”。
2. **断网可用**：通过 PWA + Service Worker 缓存核心 JS、CSS、字体、主题。
3. **隐私模式**：关闭历史记录、本地草稿、最近文件列表。
4. **本地文件引用处理**：用户导入 Markdown 所在文件夹后，自动解析相对路径图片。
5. **IndexedDB 资源库**：本地保存用户上传的图片、字体、模板。
6. **网络请求透明化**：提供“隐私说明”页面，说明不会上传 Markdown 内容。

### 5.2 模板能力

1. PDF 模板：极简、技术文档、商务报告、论文、Apple 风格、GitHub 风格。
2. Word 模板：标题、正文、代码块、表格、页眉页脚、目录样式。
3. 图片模板：白底长图、深色代码图、公众号文章图、小红书卡片图。
4. 自定义 CSS：用户可编辑预览 CSS。
5. 模板导入/导出：将模板保存为 JSON。
6. 企业品牌模板：Logo、主色、字体、页脚版权。

### 5.3 批量处理能力

1. 批量上传多个 `.md` 文件。
2. 批量导出为 ZIP。
3. 支持 Markdown 中引用的本地图片一起打包。
4. 支持批量套用同一模板。
5. 支持目录级导入，适合文档站批量导出。

### 5.4 开发者能力

1. CLI 版本：`mdtool convert input.md --to pdf`。
2. Web Worker SDK：核心转换能力封装为 npm 包。
3. 浏览器插件：一键把 GitHub README 转 PDF / Word。
4. API 版本：企业私有部署可开放 HTTP API。
5. GitHub Action：自动将仓库 Markdown 生成 PDF / Word。

---

## 6. 技术架构总览

### 6.1 推荐技术栈

| 层级 | 推荐技术 | 说明 |
|---|---|---|
| 前端框架 | Next.js 15 / React 19 / TypeScript | 适合 SEO、工具站、多页面落地页、组件化开发 |
| 构建工具 | Turbopack / Vite | Next 项目使用 Turbopack，纯前端版本可用 Vite |
| 编辑器 | Monaco Editor | VS Code 同源编辑体验，适合 Markdown 和代码 |
| Markdown AST | unified + remark + rehype | 通过 AST 管线处理 Markdown、HTML、插件扩展 |
| GFM | remark-gfm | 支持表格、任务列表、删除线、自动链接 |
| 数学公式 | remark-math + rehype-katex + KaTeX | LaTeX → HTML/MathML/SVG 方向 |
| 代码高亮 | Shiki | 基于 TextMate Grammar，接近 VS Code 高亮效果 |
| DOCX 生成 | docx.js | 浏览器端生成真实 `.docx` 文件 |
| PDF 生成 | 浏览器 Print API / Paged.js / 可选 Playwright 服务端 | MVP 本地优先，企业版可服务端增强 |
| 图片导出 | html-to-image / modern-screenshot / OffscreenCanvas | HTML 节点转 PNG/JPG/WebP |
| 文件保存 | File System Access API + file-saver | 浏览器下载和本地保存 |
| 本地存储 | IndexedDB + Dexie | 保存草稿、模板、图片资源 |
| 多线程 | Web Worker + Comlink | 避免大文档解析/导出阻塞 UI |
| 离线能力 | PWA + Service Worker | 支持断网使用 |
| 样式系统 | Tailwind CSS + CSS Variables | 快速构建多主题和模板 |
| UI 组件 | Radix UI / shadcn/ui | 高质量无障碍组件 |
| 测试 | Vitest + Playwright + Pixelmatch | 单元测试、端到端测试、导出快照测试 |
| 监控 | Sentry 可选 | 注意不能采集用户文档内容 |

### 6.2 总体架构图

```text
┌─────────────────────────────────────────────────────────────┐
│                         Web UI                              │
│  Landing Page / Editor / Preview / Export Panel / Templates │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    App State & Local Store                   │
│ Zustand / Jotai + IndexedDB + File System Access API         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Markdown Processing Core                  │
│ unified → remark-parse → remark-gfm → remark-math            │
│ → custom plugins → remark-rehype → rehype-katex → rehype     │
└─────────────────────────────────────────────────────────────┘
                              │
          ┌───────────────────┼────────────────────┐
          ▼                   ▼                    ▼
┌─────────────────┐  ┌─────────────────┐  ┌──────────────────┐
│ HTML Renderer   │  │ Intermediate IR │  │ Asset Resolver    │
│ Preview / HTML  │  │ Export AST      │  │ Image / Font / CSS│
└─────────────────┘  └─────────────────┘  └──────────────────┘
          │                   │                    │
          ├──────────────┬────┴───────┬────────────┤
          ▼              ▼            ▼            ▼
┌────────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐
│ Export HTML    │ │ Export PDF │ │ Export DOCX│ │ Export IMG │
└────────────────┘ └────────────┘ └────────────┘ └────────────┘
```

### 6.3 为什么推荐 AST 中间层

不要只把 Markdown 转成 HTML，然后再分别“截图 / 打印 / 塞进 Word”。这样虽然开发快，但 Word 导出会很难保真，尤其是表格、公式、代码高亮、列表嵌套和图片尺寸。

推荐建立两条渲染链路：

1. **HTML 渲染链路**：用于实时预览、HTML 导出、PDF、图片。
2. **结构化导出链路**：Markdown AST → 自定义 Export IR → DOCX 原生结构。

```text
Markdown Source
   │
   ▼
Markdown AST / mdast
   │
   ├── HTML Route：mdast → hast → HTML → Preview / PDF / Image / HTML
   │
   └── DOCX Route：mdast → Export IR → docx.js Document
```

这样可以保证 Word 是真实可编辑结构，而不是视觉上像 Word 的 HTML 内容。

---

## 7. Markdown 解析与渲染实现

### 7.1 解析管线

推荐使用 unified 生态：

```ts
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'

export async function markdownToHtml(markdown: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: false })
    .use(rehypeKatex, { strict: false, throwOnError: false })
    .use(rehypeStringify)
    .process(markdown)

  return String(file)
}
```

### 7.2 Markdown 能力支持范围

| Markdown 特性 | 插件/实现 | 导出策略 |
|---|---|---|
| 标题 | remark-parse | HTML h1-h6 / DOCX Heading |
| 段落 | remark-parse | p / Paragraph |
| 加粗斜体 | remark-parse | strong/em / TextRun |
| 链接 | remark-parse | a / ExternalHyperlink |
| 图片 | 自定义 asset resolver | img / ImageRun |
| 表格 | remark-gfm | table / docx Table |
| 任务列表 | remark-gfm | checkbox 样式 / 符号或复选框 |
| 删除线 | remark-gfm | del / strike |
| 代码块 | 自定义 Shiki 插件 | pre code / 高亮 TextRun |
| 行内代码 | remark-parse | code / 等宽 TextRun |
| 数学公式 | remark-math + KaTeX | HTML/MathML/SVG，DOCX 降级策略 |
| 脚注 | remark-gfm | footnote / docx footnotes 可后续支持 |
| HTML | rehype-sanitize | 默认禁用危险 HTML |

---

## 8. 代码块语法高亮方案

### 8.1 推荐方案：Shiki

Shiki 基于 TextMate Grammar，接近 VS Code 的语法高亮效果。它可以提前生成带样式的 HTML，运行时不需要再加载高亮 JS，适合导出 HTML、PDF 和图片。

### 8.2 HTML / PDF / 图片导出

处理流程：

```text
Markdown code block
   ↓
识别语言 lang
   ↓
Shiki codeToHtml(code, { lang, theme })
   ↓
输出 HTML tokens + inline style
   ↓
Preview / PDF / Image 直接复用
```

实现要点：

1. 默认主题：`github-light`、`github-dark`、`vitesse-light`、`vitesse-dark`。
2. 支持用户切换代码主题。
3. 支持行号、行高亮、diff 高亮、文件名展示。
4. 未识别语言自动 fallback 到 `text`。
5. 大文档高亮放入 Web Worker，避免主线程卡顿。

### 8.3 DOCX 导出代码高亮

Word 不直接支持 HTML 的 `<span style="color:...">`，所以需要把 Shiki token 映射为 DOCX 的 `TextRun`：

```text
Shiki token[]
   ↓
[{ content: 'const', color: '#d73a49' }, ...]
   ↓
docx Paragraph + TextRun[]
```

DOCX 代码块建议样式：

1. 字体：`JetBrains Mono` / `Consolas` / `Menlo`。
2. 字号：9.5pt 或 10pt。
3. 背景：浅灰色 `F6F8FA`。
4. 边框：左侧 3px 主题色或整体浅灰边框。
5. 保留空格：使用 `TextRun({ text, break })` 或按行生成 Paragraph。
6. 行号：可配置是否导出。

---

## 9. LaTeX 数学公式方案

### 9.1 推荐方案：KaTeX

KaTeX 适合浏览器端和 Node 环境渲染，速度快、依赖少，并支持将 LaTeX 公式渲染为 HTML / MathML。

### 9.2 公式输入支持

| 类型 | 示例 | 说明 |
|---|---|---|
| 行内公式 | `$E=mc^2$` | 用于段落内公式 |
| 块级公式 | `$$\int_0^1 x^2 dx$$` | 独立居中展示 |
| 转义美元符 | `\$100` | 避免误识别 |
| 多行公式 | `aligned` / `cases` | KaTeX 支持范围内渲染 |

### 9.3 HTML / PDF / 图片导出

直接使用 KaTeX 输出的 HTML + CSS：

```text
LaTeX source
   ↓
KaTeX renderToString
   ↓
HTML + MathML
   ↓
Preview / PDF / Image
```

注意：

1. PDF 和图片导出必须嵌入 KaTeX CSS。
2. 字体资源需要本地打包，保证离线导出一致。
3. 导出 HTML 时可选择内联 KaTeX CSS，保证外部环境可直接打开。

### 9.4 DOCX 数学公式策略

Word 中最理想的是 Office Math Markup Language（OMML），但前端浏览器端直接从 LaTeX 转 OMML 的成熟度有限。建议采用分级策略：

#### 方案 A：SVG 嵌入，MVP 推荐

1. LaTeX → KaTeX HTML。
2. KaTeX HTML → SVG 或 Canvas。
3. SVG/PNG 嵌入 DOCX。

优点：实现稳定、视觉保真。  
缺点：Word 中公式不可编辑。

#### 方案 B：MathML → OMML，高级版

1. KaTeX 输出 MathML。
2. MathML 通过 XSLT / 自定义转换器转 OMML。
3. 插入 DOCX 的 `w:oMath`。

优点：Word 中公式接近原生公式，可编辑性更好。  
缺点：实现复杂，需要大量兼容性测试。

#### 方案 C：本地 WASM / Pandoc 增强，专业版

1. 使用 Pandoc WASM 或服务端 Pandoc。
2. Markdown → DOCX 由 Pandoc 处理公式。
3. 前端产品仍保持本地优先，企业版可选择服务端增强。

优点：学术文档支持更强。  
缺点：WASM 包体积大，浏览器性能和兼容性需评估。

### 9.5 推荐落地

MVP：使用 **SVG/PNG 嵌入 DOCX**，确保视觉保真。  
V2：研究 **MathML → OMML**，提升 Word 可编辑性。  
企业版：可提供 **本地桌面版 / 私有部署服务端 Pandoc**。

---

## 10. 表格处理方案

### 10.1 基础表格

Markdown 表格通过 `remark-gfm` 解析为 AST table 节点。

导出映射：

| 目标格式 | 映射方式 |
|---|---|
| HTML | `<table><thead><tbody>` |
| PDF | HTML table + CSS Paged Media |
| 图片 | HTML table 截图 |
| DOCX | `docx.Table`、`TableRow`、`TableCell` |

### 10.2 表格样式

默认表格样式：

1. 表头加粗。
2. 表头背景浅灰。
3. 单元格边框 1px。
4. 内容垂直居中。
5. 长文本自动换行。
6. 宽表在预览中横向滚动。
7. PDF 导出时可以缩放宽表，或转为横向页面。

### 10.3 PDF 表格分页

分页策略：

```css
.markdown-body table {
  break-inside: auto;
}

.markdown-body tr {
  break-inside: avoid;
  break-after: auto;
}

.markdown-body thead {
  display: table-header-group;
}
```

如果表格过宽：

1. 优先缩小字体。
2. 仍然过宽则缩放表格。
3. 可选导出为横向页面。
4. 复杂大表建议转图片嵌入 PDF，避免分页错乱。

---

## 11. Word 导出详细实现

### 11.1 不推荐方案

不建议使用以下方式作为核心方案：

1. HTML 改后缀为 `.doc`。
2. 把整段 HTML 塞进 Word。
3. 先转 PDF 再转 Word。
4. 完全依赖浏览器复制富文本。

这些方案会导致 Word 中结构不可控，样式难编辑，兼容性差。

### 11.2 推荐方案：Markdown AST → Export IR → docx.js

建立中间结构：

```ts
type ExportNode =
  | { type: 'heading'; depth: 1 | 2 | 3 | 4 | 5 | 6; children: InlineNode[] }
  | { type: 'paragraph'; children: InlineNode[] }
  | { type: 'table'; rows: TableRowNode[] }
  | { type: 'codeBlock'; lang?: string; code: string; tokens?: CodeToken[][] }
  | { type: 'mathBlock'; latex: string; svg?: string }
  | { type: 'image'; src: string; alt?: string; width?: number; height?: number }
  | { type: 'blockquote'; children: ExportNode[] }
  | { type: 'list'; ordered: boolean; children: ListItemNode[] }
```

### 11.3 DOCX 映射规则

| Markdown 节点 | DOCX 节点 |
|---|---|
| heading | `Paragraph({ heading: HeadingLevel.HEADING_1 })` |
| paragraph | `Paragraph` |
| strong | `TextRun({ bold: true })` |
| emphasis | `TextRun({ italics: true })` |
| delete | `TextRun({ strike: true })` |
| inlineCode | `TextRun({ font: 'JetBrains Mono', shading })` |
| link | `ExternalHyperlink` |
| image | `ImageRun` |
| list | numbering config + Paragraph |
| table | `Table` |
| codeBlock | 多个 Paragraph + TextRun tokens |
| math | SVG/PNG ImageRun 或 OMML |

### 11.4 DOCX 样式系统

建议预设：

```ts
const defaultDocxTheme = {
  page: {
    size: 'A4',
    margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
  },
  fonts: {
    body: 'Aptos',
    chinese: 'Microsoft YaHei',
    code: 'JetBrains Mono',
    heading: 'Aptos Display'
  },
  colors: {
    primary: '2563EB',
    text: '111827',
    muted: '6B7280',
    border: 'E5E7EB',
    codeBg: 'F6F8FA'
  }
}
```

### 11.5 图片处理

1. 网络图片：默认受 CORS 限制，建议提示用户下载到本地或导入资源包。
2. 本地图片：通过 File API 读取为 ArrayBuffer，再嵌入 DOCX。
3. Base64 图片：直接解析。
4. SVG 图片：Word 兼容性不稳定，建议转 PNG。
5. WebP 图片：Word 兼容性不稳定，建议 Canvas 转 PNG。

---

## 12. PDF 导出详细实现

### 12.1 MVP 本地方案

使用浏览器原生打印能力：

```ts
function exportPdfByPrint() {
  const printWindow = window.open('', '_blank')
  printWindow.document.write(renderedHtml)
  printWindow.document.close()
  printWindow.focus()
  printWindow.print()
}
```

优点：完全本地、实现简单。  
缺点：不同浏览器打印体验不同，自动下载能力有限。

### 12.2 增强本地方案：Paged.js

使用 Paged.js 对 HTML 进行分页预览，模拟纸张和分页。

能力：

1. A4 / Letter 页面预览。
2. 页眉页脚。
3. 页码。
4. CSS Paged Media。
5. 更好控制分页。

### 12.3 专业方案：Playwright 服务端 / 私有部署版

对于企业版或私有部署，可增加可选服务端 PDF 渲染：

```text
Markdown HTML
   ↓
渲染为完整 HTML
   ↓
Playwright Chromium page.setContent
   ↓
page.pdf({ format: 'A4', printBackground: true })
```

说明：

1. 公共免费版坚持本地处理。
2. 企业私有化部署可选择服务端 PDF，以获得更稳定分页和自动下载体验。
3. 如果启用服务端，必须明确提示“该模式会上传文档内容”。

---

## 13. HTML 导出详细实现

### 13.1 完整 HTML 模板

```html
<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{{title}}</title>
  <style>{{resetCss}}</style>
  <style>{{markdownCss}}</style>
  <style>{{shikiCss}}</style>
  <style>{{katexCss}}</style>
</head>
<body>
  <main class="markdown-body">
    {{content}}
  </main>
</body>
</html>
```

### 13.2 HTML 导出选项

1. `完整 HTML`：适合下载后本地打开。
2. `HTML 片段`：适合粘贴到 CMS、博客后台。
3. `内联 CSS`：适合邮件、公众号、知识库。
4. `外链 CSS`：适合开发者部署。
5. `纯净 HTML`：去掉工具私有 class，仅保留语义结构。

---

## 14. 图片导出详细实现

### 14.1 推荐流程

```text
Markdown → HTML Preview Node
   ↓
克隆 DOM 到隐藏容器
   ↓
等待字体、图片、KaTeX、代码高亮完成
   ↓
html-to-image / modern-screenshot
   ↓
Canvas
   ↓
PNG / JPG / WebP
```

### 14.2 长图导出注意事项

浏览器 Canvas 有尺寸限制，长文档可能导出失败。建议策略：

1. 超过高度阈值时自动分片渲染。
2. 每片高度例如 4096px 或 8192px。
3. 用户选择“导出为多张图片”或“拼接成长图”。
4. 拼接时控制内存，避免移动端崩溃。

### 14.3 图片导出配置

| 配置项 | 说明 |
|---|---|
| 格式 | PNG / JPG / WebP |
| 缩放 | 1x / 2x / 3x / 4x |
| 宽度 | 720 / 960 / 1080 / 1280 / 自定义 |
| 背景 | 白色 / 透明 / 渐变 / 自定义 |
| 边距 | 0-128px |
| 圆角 | 用于卡片图 |
| 水印 | 默认关闭，高级模板可开启 |

---

## 15. 本地隐私与安全架构

### 15.1 核心原则

1. Markdown 文本不上传服务器。
2. 用户上传的图片不上传服务器。
3. 导出的 Word / PDF / HTML / 图片在本地生成。
4. 不记录用户文档内容。
5. 埋点只记录按钮点击、导出格式、耗时、错误类型，不记录内容。
6. 提供隐私模式，关闭本地历史。

### 15.2 安全处理

1. 禁止危险 HTML：默认不执行 Markdown 中的 `<script>`。
2. 使用 `rehype-sanitize` 清洗 HTML。
3. iframe、object、embed 默认禁用。
4. 外链图片需要明确提示 CORS 与隐私风险。
5. CSP 配置：限制脚本来源。
6. Worker 沙箱：复杂解析放入 Worker，降低 UI 风险。

### 15.3 离线策略

PWA 缓存内容：

1. 核心 JS/CSS。
2. Markdown 渲染插件。
3. Shiki 常用语言和主题。
4. KaTeX CSS 和字体。
5. 默认模板。
6. Logo 和基础图标。

不缓存内容：

1. 用户文档，除非用户开启自动保存。
2. 用户上传图片，除非用户选择保存到本地资源库。

---

## 16. 前端工程结构建议

```text
src/
  app/
    page.tsx
    markdown-to-word/page.tsx
    markdown-to-pdf/page.tsx
    markdown-to-html/page.tsx
    markdown-to-image/page.tsx
  components/
    editor/
      MarkdownEditor.tsx
      EditorToolbar.tsx
    preview/
      MarkdownPreview.tsx
      PreviewFrame.tsx
    export/
      ExportPanel.tsx
      PdfExportOptions.tsx
      DocxExportOptions.tsx
      ImageExportOptions.tsx
    template/
      TemplateSelector.tsx
      TemplateEditor.tsx
  core/
    markdown/
      parseMarkdown.ts
      markdownToHtml.ts
      markdownToExportIr.ts
      plugins/
    highlight/
      shikiHighlighter.ts
      tokenizeCode.ts
    math/
      renderKatex.ts
      mathToSvg.ts
    export/
      htmlExporter.ts
      pdfExporter.ts
      docxExporter.ts
      imageExporter.ts
    assets/
      resolveAssets.ts
      imageToPng.ts
    security/
      sanitizeHtml.ts
  workers/
    markdown.worker.ts
    export.worker.ts
  stores/
    editorStore.ts
    templateStore.ts
  db/
    indexedDb.ts
  styles/
    markdown.css
    print.css
    themes/
  tests/
    fixtures/
    export/
```

---

## 17. 性能优化方案

### 17.1 大文档性能

1. 编辑器输入防抖：300ms。
2. Markdown 解析放到 Web Worker。
3. 代码高亮缓存：`hash(code + lang + theme)`。
4. 图片压缩和尺寸探测异步化。
5. 预览虚拟滚动：长文档可选。
6. 导出任务显示进度。
7. 超大文档提示用户切换为“手动预览”。

### 17.2 包体积控制

1. Shiki 语言包按需加载。
2. 主题按需加载。
3. KaTeX 字体本地缓存。
4. DOCX 导出模块动态 import。
5. PDF / 图片导出模块动态 import。
6. Monaco Editor 独立 chunk。

### 17.3 Worker 拆分

```text
Main Thread
  - UI 交互
  - 编辑器
  - 预览展示

Markdown Worker
  - Markdown AST 解析
  - HTML 生成
  - 代码高亮 token 生成

Export Worker
  - DOCX 结构生成
  - 图片资源处理
  - ZIP 打包
```

---

## 18. SEO 与增长页面

### 18.1 页面结构

建议为每个转换方向做独立 SEO 页面：

1. `/markdown-to-word`
2. `/markdown-to-pdf`
3. `/markdown-to-html`
4. `/markdown-to-image`
5. `/word-to-markdown`（V2）
6. `/html-to-markdown`（V2）
7. `/markdown-table-to-image`（V2）

### 18.2 每个页面包含

1. H1：明确关键词。
2. 工具主体：首屏可直接使用。
3. 功能亮点。
4. 使用步骤。
5. 常见问题。
6. 格式支持说明。
7. 隐私说明。
8. 相关工具内链。

### 18.3 SEO 关键词

中文：

1. Markdown 转 Word
2. Markdown 转 PDF
3. Markdown 转 HTML
4. Markdown 转图片
5. MD 转 DOCX
6. MD 转 PDF
7. Markdown 表格转图片
8. Markdown 数学公式转 PDF
9. Markdown 代码高亮导出 Word

英文：

1. Markdown to Word
2. Markdown to PDF
3. Markdown to HTML
4. Markdown to Image
5. MD to DOCX
6. Markdown converter online
7. local markdown converter

---

## 19. 商业化设计

### 19.1 免费版

1. 单文件转换。
2. 基础模板。
3. 本地实时预览。
4. Word / PDF / HTML / 图片导出。
5. 无水印。

### 19.2 Pro 版

1. 批量转换。
2. 高级模板。
3. 自定义品牌模板。
4. 更高分辨率图片导出。
5. 本地历史文档管理。
6. 高级公式 / Mermaid / 图表支持。
7. ZIP 项目导入。

### 19.3 企业版

1. 私有化部署。
2. 企业模板库。
3. 团队共享模板。
4. 内网部署。
5. 可选服务端高保真 PDF / DOCX。
6. SSO 登录。
7. 审计和权限管理。

---

## 20. 开发里程碑

### 20.1 V0.1 原型阶段，1-2 周

目标：验证核心链路。

功能：

1. Markdown 编辑器。
2. 实时 HTML 预览。
3. GFM 表格。
4. KaTeX 公式。
5. Shiki 代码高亮。
6. 导出 HTML。
7. 浏览器打印 PDF。

### 20.2 V1.0 MVP，3-5 周

目标：可上线工具站。

功能：

1. Markdown 转 Word。
2. Markdown 转 PDF。
3. Markdown 转 HTML。
4. Markdown 转 PNG/JPG。
5. 本地文件上传。
6. 本地草稿保存。
7. 3-5 套模板。
8. SEO 页面。
9. 隐私说明页。

### 20.3 V1.5 增强版，4-6 周

目标：提高保真度和用户体验。

功能：

1. PWA 离线。
2. 批量转换。
3. 自定义 CSS。
4. 代码块行号和高亮行。
5. 图片资源库。
6. PDF 智能分页。
7. Word 页眉页脚和目录。

### 20.4 V2.0 专业版

目标：建立专业壁垒。

功能：

1. Mermaid 图表。
2. MathML → OMML 公式。
3. 企业模板。
4. CLI / SDK。
5. 私有化部署版。
6. 浏览器插件。
7. GitHub Action。

---

## 21. 关键技术风险与解决方案

| 风险 | 表现 | 解决方案 |
|---|---|---|
| Word 公式不可编辑 | 公式作为图片嵌入 | MVP 先保证视觉保真，V2 研究 OMML |
| PDF 分页不稳定 | 表格/代码块被切断 | Paged.js + CSS break 规则 + 服务端增强版 |
| 网络图片 CORS | 图片无法导出 | 提示导入本地图片；提供资源包导入 |
| 大文档卡顿 | 输入延迟、预览卡死 | Web Worker + 防抖 + 缓存 |
| Shiki 包体积大 | 首屏加载慢 | 按需加载语言和主题 |
| Canvas 长图限制 | 长图导出失败 | 分片渲染 + 多图导出 |
| HTML 安全 | XSS 风险 | rehype-sanitize + CSP |
| 中文字体不一致 | PDF/图片显示差异 | 内置字体回退和模板字体配置 |

---

## 22. MVP 验收标准

### 22.1 输入测试

1. 上传 `.md` 文件成功。
2. 粘贴 Markdown 成功。
3. 拖拽文件成功。
4. 刷新页面可恢复草稿。

### 22.2 Markdown 渲染测试

必须正确渲染：

1. H1-H6 标题。
2. 加粗、斜体、删除线。
3. 有序、无序、嵌套列表。
4. 表格。
5. 任务列表。
6. 引用。
7. 行内代码和代码块。
8. LaTeX 行内公式和块级公式。
9. 图片。
10. 链接。

### 22.3 导出测试

每种格式必须通过测试文档：

1. Word：标题层级、表格、代码块、公式、图片可见。
2. PDF：分页正常，代码高亮和公式可见。
3. HTML：离线打开正常，CSS 生效。
4. 图片：清晰，无内容截断。

### 22.4 隐私测试

1. 断网状态下核心转换可用。
2. 上传 Markdown 时没有网络请求发送文档内容。
3. 导出文件时没有网络请求发送文档内容。
4. 隐私模式下不保存草稿。

---

## 23. 推荐的最先进落地方案总结

### 23.1 公共在线版

采用 **纯前端本地处理架构**：

```text
Next.js + React + TypeScript
Monaco Editor
unified / remark / rehype
Shiki
KaTeX
DOCX.js
Paged.js / Browser Print
html-to-image
Web Worker
IndexedDB
PWA
```

优势：

1. 符合隐私安全定位。
2. 运营成本低。
3. SEO 友好。
4. 用户打开即用。
5. 适合工具站增长。

### 23.2 专业增强版

采用 **本地优先 + 可选服务端增强**：

1. 默认所有转换本地完成。
2. 高保真 PDF / Word 可选择私有化服务端。
3. 企业客户部署到自己服务器，不经过你的服务器。
4. 对外宣传时保持“默认本地处理，企业版支持私有化”。

### 23.3 最重要的技术决策

1. 不要只做 HTML 转 Word，要做 AST → DOCX 原生结构。
2. 代码高亮用 Shiki，不建议用 highlight.js 作为最终方案。
3. 数学公式 HTML/PDF/图片用 KaTeX，Word 先用 SVG/PNG 保真，后续再做 OMML。
4. PDF 免费版用本地打印 + Paged.js，企业版可用 Playwright 私有部署。
5. 图片导出必须做分片，否则长图一定会遇到浏览器 Canvas 限制。
6. 安全上必须默认禁用危险 HTML，并提供隐私模式。
7. 工具站要做多个独立 SEO 页面，而不是只有一个首页。

---

## 24. 技术参考来源

1. MD-To 官方页面：说明其支持 Markdown 转 Word、PDF、HTML、图片，并强调浏览器本地处理和隐私安全。https://md-to.com/
2. unified / remark-rehype：Markdown AST 到 HTML AST 的处理生态。https://unifiedjs.com/explore/package/remark-rehype/
3. remark：基于插件和 AST 的 Markdown 处理生态。https://remark.js.org/
4. Shiki：基于 TextMate Grammar 的现代语法高亮工具。https://shiki.style/
5. KaTeX：快速数学公式排版库，支持浏览器和服务端渲染。https://katex.org/
6. docx.js：TypeScript / JavaScript 生成 Word `.docx` 文档。https://docx.js.org/
7. Playwright：可用于浏览器自动化、截图和 PDF 生成的工具。https://playwright.dev/

---

## 25. 附录：建议测试 Markdown 样例

```md
# Markdown 转换测试文档

## 代码块

```ts
interface User {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: 'IdeaSeek'
}
```

## 表格

| 功能 | Word | PDF | HTML | 图片 |
|---|---:|---:|---:|---:|
| 代码高亮 | ✅ | ✅ | ✅ | ✅ |
| 表格 | ✅ | ✅ | ✅ | ✅ |
| LaTeX | ✅ | ✅ | ✅ | ✅ |

## 数学公式

行内公式：$E=mc^2$

块级公式：

$$
\int_0^1 x^2 dx = \frac{1}{3}
$$

## 任务列表

- [x] 支持 Markdown 解析
- [x] 支持实时预览
- [ ] 支持企业模板

## 引用

> 隐私优先，所有内容默认只在浏览器本地处理。
```
