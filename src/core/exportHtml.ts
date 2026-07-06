import { saveAs } from 'file-saver';

/**
 * Export as a complete HTML document
 */
export function exportHtml(htmlContent: string, title: string = 'document', inlineCss: boolean = true) {
  // Build KaTeX CSS inline if needed
  const katexCssLink = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css" />';

  const fullHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      font-size: 14pt;
      line-height: 1.8;
      color: #333;
      max-width: 800px;
      margin: 40px auto;
      padding: 0 20px;
    }
    h1 { font-size: 24pt; color: #1a1a2e; border-bottom: 2px solid #1671FA; padding-bottom: 8px; margin-top: 30px; }
    h2 { font-size: 20pt; color: #1a1a2e; border-bottom: 1px solid #e0e0e0; padding-bottom: 5px; margin-top: 25px; }
    h3 { font-size: 16pt; color: #2d2d44; margin-top: 20px; }
    h4 { font-size: 14pt; color: #2d2d44; margin-top: 15px; }
    p { margin: 8px 0; }
    pre {
      background: #f5f7fa;
      border: 1px solid #e0e4ea;
      border-left: 3px solid #1671FA;
      padding: 12px 16px;
      font-family: 'Consolas', 'Monaco', 'Menlo', monospace;
      font-size: 10pt;
      border-radius: 4px;
      overflow-x: auto;
    }
    code {
      font-family: 'Consolas', 'Monaco', 'Menlo', monospace;
      background: #f0f2f5;
      padding: 2px 5px;
      border-radius: 3px;
      font-size: 10pt;
    }
    pre code { background: none; padding: 0; }
    blockquote {
      border-left: 4px solid #A070FF;
      padding: 10px 15px;
      margin: 15px 0;
      background: #f8f6ff;
      color: #555;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 15px 0;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px 12px;
      text-align: left;
    }
    th { background: #1671FA; color: white; }
    tr:nth-child(even) { background: #f8f9fa; }
    ul, ol { margin: 8px 0; padding-left: 25px; }
    li { margin: 4px 0; }
    img { max-width: 100%; height: auto; }
    hr { border: none; border-top: 1px solid #e0e0e0; margin: 20px 0; }
    a { color: #1671FA; text-decoration: none; }
    ${inlineCss ? '/* KATEX_CSS_PLACEHOLDER */' : ''}
  </style>
  ${inlineCss ? '' : katexCssLink}
</head>
<body>
  <main class="markdown-body">
    ${htmlContent}
  </main>
</body>
</html>`;

  const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
  saveAs(blob, `${title}.html`);
}

/**
 * Export as HTML fragment (body content only)
 */
export function exportHtmlFragment(htmlContent: string, title: string = 'document') {
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  saveAs(blob, `${title}-fragment.html`);
}
