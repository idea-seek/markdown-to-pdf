import { saveAs } from 'file-saver';
import {
  HIGHLIGHT_STYLESHEET_URL,
  KATEX_STYLESHEET_URL,
  MARKDOWN_DOCUMENT_CSS,
} from './markdownStyles';
import { sanitizeFilename } from './fileName';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Export as a complete HTML document
 */
export function exportHtml(htmlContent: string, title: string = 'document', inlineCss: boolean = true) {
  const safeTitle = escapeHtml(title);
  const safeFilename = sanitizeFilename(title);

  const fullHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${safeTitle}</title>
  <link rel="stylesheet" href="${HIGHLIGHT_STYLESHEET_URL}" />
  <link rel="stylesheet" href="${KATEX_STYLESHEET_URL}" />
  <style>${inlineCss ? MARKDOWN_DOCUMENT_CSS : ''}</style>
</head>
<body>
  <main class="markdown-body">
    ${htmlContent}
  </main>
</body>
</html>`;

  const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
  saveAs(blob, `${safeFilename}.html`);
}

/**
 * Export as HTML fragment (body content only)
 */
export function exportHtmlFragment(htmlContent: string, title: string = 'document') {
  const safeFilename = sanitizeFilename(title);
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  saveAs(blob, `${safeFilename}-fragment.html`);
}
