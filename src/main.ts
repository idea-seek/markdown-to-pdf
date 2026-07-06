/**
 * MarkdownToPDF - 纯前端 Markdown 多格式转换器
 * 所有处理在浏览器本地完成，不上传任何数据
 */

import 'highlight.js/styles/github.css';
import 'katex/dist/katex.min.css';
import { renderMarkdown } from './core/parseMarkdown';
import { preProcessMath, renderMathInElement } from './core/renderMath';
import { exportPdf } from './core/exportPdf';
import { exportHtml } from './core/exportHtml';
import { exportToImage } from './core/exportImage';
import { exportToDocx } from './core/exportDocx';
import {
  getRouteConfig,
  initLinkInterception,
  onRouteChange,
  updateMeta,
  type RouteConfig,
} from './router';

// ─── Default sample content ─────────────────────────────────
const DEFAULT_MARKDOWN = `# Markdown 转换测试文档

欢迎使用 **MarkdownToPDF**！这是一个完全在浏览器本地运行的 Markdown 转换工具。

## 代码块高亮

\`\`\`typescript
interface User {
  id: number
  name: string
  email: string
}

const user: User = {
  id: 1,
  name: 'IdeaSeek',
  email: 'hello@ideasee.com'
}

// Async function example
async function fetchUser(id: number): Promise<User> {
  const response = await fetch(\`/api/users/\${id}\`)
  return response.json()
}
\`\`\`

\`\`\`python
def fibonacci(n: int) -> list[int]:
    """Generate Fibonacci sequence"""
    a, b = 0, 1
    result = []
    for _ in range(n):
        result.append(a)
        a, b = b, a + b
    return result

print(fibonacci(10))
\`\`\`

## 表格支持

| 功能 | 状态 | 说明 |
|:---|:---:|---:|
| 代码高亮 | ✅ | 支持 190+ 语言 |
| 表格 | ✅ | GFM 标准表格 |
| LaTeX 公式 | ✅ | 数学公式渲染 |
| 任务列表 | ✅ | GFM Task List |
| 图片导出 | ✅ | PNG/JPG/WebP |

## 数学公式 (LaTeX)

行内公式：$E = mc^2$

块级公式：

$$
\\int_{0}^{\\infty} e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}
$$

$$
f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n
$$

## 任务列表

- [x] 支持 Markdown 解析
- [x] 支持实时预览
- [x] 代码语法高亮
- [x] LaTeX 数学公式
- [ ] 自定义模板
- [ ] 批量导出

## 引用块

> **隐私优先**：所有内容默认只在浏览器本地处理，不会将任何数据上传到服务器。
> 
> 无需注册，无需安装，打开即用。

## 有序 & 无序列表

1. 第一步：编写 Markdown
2. 第二步：实时预览效果
3. 第三步：选择导出格式

- 支持 \`.md\` / \`.markdown\` 文件
- 拖拽上传或粘贴输入
- 自动保存草稿
- 支持 Ctrl+S 快速导出

## 链接与图片

访问 [Markdown-to-PDF 官网](https://markdown-to-pdf.ideaseek.cn) 了解更多。

---

*享受 Markdown 的简洁，获得专业文档的优雅。*`;

// ─── App State ──────────────────────────────────────────────
const state = {
  markdown: '',
  previewHtml: '',
  currentRoute: getRouteConfig(),
};

// ─── DOM Elements ───────────────────────────────────────────
const editorEl = document.getElementById('editor') as HTMLTextAreaElement;
const previewEl = document.getElementById('preview') as HTMLElement;
const lineNumbersEl = document.getElementById('line-numbers') as HTMLElement;
const fileInput = document.getElementById('file-input') as HTMLInputElement;
const uploadArea = document.getElementById('upload-area') as HTMLElement;
const exportBtn = document.getElementById('export-btn') as HTMLButtonElement;
const exportBtnText = document.getElementById('export-btn-text') as HTMLElement;
const formatLabelEl = document.getElementById('format-label') as HTMLElement;
const formatDescEl = document.getElementById('format-desc') as HTMLElement;
const toastEl = document.getElementById('toast') as HTMLElement;
const navEl = document.getElementById('main-nav') as HTMLElement;

// ─── Debounce utility ───────────────────────────────────────
function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): T {
  let timer: ReturnType<typeof setTimeout>;
  return ((...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  }) as T;
}

// ─── Update Line Numbers ────────────────────────────────────
function updateLineNumbers() {
  const lines = state.markdown.split('\n');
  const count = Math.max(lines.length, 1);
  let html = '';
  for (let i = 1; i <= count; i++) {
    html += `<span>${i}</span>`;
  }
  lineNumbersEl.innerHTML = html;
}

// ─── Update Preview ─────────────────────────────────────────
async function updatePreview() {
  try {
    // Pre-process math blocks before markdown parsing
    const processed = preProcessMath(state.markdown);
    const html = renderMarkdown(processed);
    state.previewHtml = html;
    previewEl.innerHTML = html;

    // Render KaTeX for math blocks
    await renderMathInElement(previewEl);
  } catch (e) {
    previewEl.innerHTML = '<p style="color:red">渲染错误</p>';
  }
}

// ─── Sync scroll ────────────────────────────────────────────
function syncScroll() {
  if (!editorEl || !previewEl) return;
  const ratio = editorEl.scrollTop / (editorEl.scrollHeight - editorEl.clientHeight);
  previewEl.scrollTop = ratio * (previewEl.scrollHeight - previewEl.clientHeight);
}

// ─── Handle input ───────────────────────────────────────────
function handleInput(text: string) {
  state.markdown = text;
  updateLineNumbers();
  updatePreview();
  // Save to localStorage
  try {
    localStorage.setItem('mdtopdf_draft', text);
  } catch (_) {}
}

const debouncedHandleInput = debounce(handleInput, 150);

// ─── Toast notification ─────────────────────────────────────
let toastTimer: ReturnType<typeof setTimeout>;
function showToast(message: string) {
  toastEl.textContent = message;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2500);
}

// ─── File handling ──────────────────────────────────────────
function loadFile(file: File) {
  if (!file.name.match(/\.(md|markdown|txt)$/i)) {
    showToast('请选择 .md 或 .markdown 文件');
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    const text = e.target?.result as string;
    editorEl.value = text;
    handleInput(text);
    showToast(`已加载: ${file.name}`);
  };
  reader.readAsText(file);
}

// ─── Export functions (current route determines export format) ────
function getTitle(): string {
  const firstHeading = state.markdown.match(/^#\s+(.+)/m);
  return firstHeading?.[1]?.trim() || 'document';
}

async function handleExport() {
  if (!state.markdown.trim()) {
    showToast('请先输入或上传 Markdown 内容');
    return;
  }

  const title = getTitle();
  const route = state.currentRoute.id;

  try {
    switch (route) {
      case 'word':
        showToast('正在生成 Word 文档...');
        await exportToDocx(previewEl, title);
        showToast('Word 文档已下载');
        break;

      case 'pdf':
        showToast('正在准备打印，请在打印对话框中选择"另存为 PDF"...');
        setTimeout(() => exportPdf(title), 300);
        break;

      case 'html':
        exportHtml(previewEl.innerHTML, title);
        showToast('HTML 文件已下载');
        // Also provide HTML fragment download with Ctrl+Shift+S
        break;

      case 'image':
        showToast('正在生成 PNG 图片...');
        await exportToImage(previewEl, title, { format: 'png', scale: 2, backgroundColor: '#ffffff' });
        showToast('PNG 图片已下载');
        break;

      default:
        // Home page - default to HTML export
        exportHtml(previewEl.innerHTML, title);
        showToast('HTML 文件已下载');
        break;
    }
  } catch (e) {
    console.error('Export error:', e);
    showToast('导出失败，请重试');
  }
}

// ─── Keyboard shortcuts ─────────────────────────────────────
function handleKeydown(e: KeyboardEvent) {
  // Ctrl/Cmd + S: Export with current route's format
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault();
    handleExport();
  }
  // Tab: Insert 2 spaces
  if (e.key === 'Tab') {
    e.preventDefault();
    const start = editorEl.selectionStart;
    const end = editorEl.selectionEnd;
    const text = editorEl.value;
    editorEl.value = text.substring(0, start) + '  ' + text.substring(end);
    editorEl.selectionStart = editorEl.selectionEnd = start + 2;
    handleInput(editorEl.value);
  }
}

// ─── Event listeners ────────────────────────────────────────
editorEl.addEventListener('input', () => {
  debouncedHandleInput(editorEl.value);
});
editorEl.addEventListener('scroll', syncScroll);
editorEl.addEventListener('keydown', handleKeydown);

// Upload area
uploadArea.addEventListener('click', () => fileInput.click());
uploadArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadArea.classList.add('drag-over');
});
uploadArea.addEventListener('dragleave', () => {
  uploadArea.classList.remove('drag-over');
});
uploadArea.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadArea.classList.remove('drag-over');
  if (e.dataTransfer?.files.length) {
    loadFile(e.dataTransfer.files[0]);
  }
});

// Upload area button
document.getElementById('upload-area-btn')?.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', () => {
  if (fileInput.files?.length) {
    loadFile(fileInput.files[0]);
    fileInput.value = '';
  }
});

// Export button (route-based)
exportBtn.addEventListener('click', handleExport);

// Route change handler - updates nav, format info, and meta tags
onRouteChange((config: RouteConfig) => {
  state.currentRoute = config;
  // Update nav active state
  navEl.querySelectorAll('a').forEach((a) => {
    const href = a.getAttribute('href') || '';
    const currentPath = config.path.replace(/\/$/, '') || '/';
    // Extract pathname from full URL (e.g. https://markdown-to-pdf.ideaseek.cn/ → /)
    let linkPath: string;
    try {
      linkPath = new URL(href).pathname;
    } catch {
      linkPath = href;
    }
    linkPath = linkPath.replace(/\/$/, '') || '/';
    a.classList.toggle('active', linkPath === currentPath);
  });
  // Update format label and description
  formatLabelEl.textContent = config.formatLabel;
  formatDescEl.textContent = config.formatDesc;
  exportBtnText.textContent = config.id === 'home'
    ? '导出 HTML'
    : `导出 ${config.label.replace('转 ', '')}`;
  // Update SEO meta tags
  updateMeta(config);
});

// Intercept internal <a> clicks for SPA navigation
initLinkInterception();

// Clear button
document.getElementById('clear-btn')?.addEventListener('click', () => {
  if (state.markdown.trim() && !confirm('确定要清空所有内容吗？')) return;
  editorEl.value = '';
  handleInput('');
});

// Sample button
document.getElementById('sample-btn')?.addEventListener('click', () => {
  editorEl.value = DEFAULT_MARKDOWN;
  handleInput(DEFAULT_MARKDOWN);
  showToast('已加载示例文档');
});

// Paste handler for the whole page
document.addEventListener('paste', (e) => {
  // Only if editor is focused
  if (document.activeElement === editorEl) return;
  const items = e.clipboardData?.items;
  if (items) {
    for (const item of items) {
      if (item.kind === 'string' && item.type === 'text/plain') {
        item.getAsString((text) => {
          editorEl.value = text;
          handleInput(text);
          showToast('已粘贴 Markdown 内容');
        });
        break;
      }
    }
  }
});

// ─── Initialization ─────────────────────────────────────────
function init() {
  // Restore saved draft
  try {
    const draft = localStorage.getItem('mdtopdf_draft');
    if (draft?.trim()) {
      editorEl.value = draft;
      state.markdown = draft;
    } else {
      editorEl.value = DEFAULT_MARKDOWN;
      state.markdown = DEFAULT_MARKDOWN;
    }
  } catch {
    editorEl.value = DEFAULT_MARKDOWN;
    state.markdown = DEFAULT_MARKDOWN;
  }

  updateLineNumbers();
  updatePreview();
}

init();
