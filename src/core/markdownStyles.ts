export const KATEX_STYLESHEET_URL = 'https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css';
export const HIGHLIGHT_STYLESHEET_URL = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/github.min.css';

export const MARKDOWN_DOCUMENT_CSS = `
  :root {
    color-scheme: light;
    --md-blue: #1671FA;
    --md-purple: #A070FF;
    --md-text: #1a1a2e;
    --md-text-soft: #555;
    --md-border: #e8ecf4;
    --md-code-bg: #f0f2f5;
    --md-pre-bg: #f6f8fa;
    --md-quote-bg: rgba(160, 112, 255, 0.06);
    --md-table-zebra: #f8f9fb;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    background: #ffffff;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans SC', sans-serif;
    color: var(--md-text);
  }

  .markdown-body {
    max-width: 860px;
    margin: 0 auto;
    padding: 32px 24px 48px;
    line-height: 1.7;
    color: var(--md-text);
  }

  .markdown-body * {
    box-sizing: border-box;
  }

  .markdown-body h1 {
    font-size: 24pt;
    color: var(--md-text);
    border-bottom: 2px solid var(--md-blue);
    padding-bottom: 8px;
    margin: 28px 0 16px;
  }

  .markdown-body h1:first-child {
    margin-top: 0;
  }

  .markdown-body h2 {
    font-size: 18pt;
    color: var(--md-text);
    border-bottom: 1px solid var(--md-border);
    padding-bottom: 6px;
    margin: 24px 0 12px;
  }

  .markdown-body h3 {
    font-size: 15pt;
    color: #2d2d44;
    margin: 20px 0 10px;
  }

  .markdown-body h4 {
    font-size: 13pt;
    color: #2d2d44;
    margin: 16px 0 8px;
  }

  .markdown-body p {
    margin: 8px 0;
  }

  .markdown-body a {
    color: var(--md-blue);
    text-decoration: none;
  }

  .markdown-body a:hover {
    text-decoration: underline;
  }

  .markdown-body strong {
    font-weight: 600;
  }

  .markdown-body code {
    font-family: 'Consolas', 'Monaco', 'Menlo', monospace;
    background: var(--md-code-bg);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
    color: #d73a49;
  }

  .markdown-body pre {
    background: var(--md-pre-bg);
    border: 1px solid var(--md-border);
    border-left: 3px solid var(--md-blue);
    border-radius: 8px;
    padding: 14px 18px;
    margin: 12px 0;
    overflow-x: auto;
  }

  .markdown-body pre code {
    display: block;
    background: none;
    padding: 0;
    color: inherit;
    font-size: 12px;
    line-height: 1.6;
  }

  .markdown-body blockquote {
    border-left: 4px solid var(--md-purple);
    padding: 10px 16px;
    margin: 12px 0;
    background: var(--md-quote-bg);
    color: var(--md-text-soft);
    border-radius: 0 6px 6px 0;
  }

  .markdown-body blockquote p {
    margin: 4px 0;
  }

  .markdown-body table {
    width: 100%;
    border-collapse: collapse;
    margin: 12px 0;
    font-size: 13px;
  }

  .markdown-body th,
  .markdown-body td {
    border: 1px solid #e0e4ea;
    padding: 8px 14px;
    text-align: left;
    vertical-align: top;
  }

  .markdown-body th {
    background: var(--md-blue);
    color: #ffffff;
    font-weight: 600;
  }

  .markdown-body tr:nth-child(even) {
    background: var(--md-table-zebra);
  }

  .markdown-body ul,
  .markdown-body ol {
    margin: 8px 0;
    padding-left: 24px;
  }

  .markdown-body li {
    margin: 4px 0;
  }

  .markdown-body li > input[type="checkbox"] {
    margin-right: 8px;
  }

  .markdown-body img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .markdown-body hr {
    border: none;
    border-top: 1px solid #e0e4ea;
    margin: 20px 0;
  }

  .markdown-body .katex {
    font-size: 1.1em;
  }

  .markdown-body .katex-display {
    overflow-x: auto;
    overflow-y: hidden;
    padding: 8px 0;
  }

  .markdown-body .math-error {
    color: #ef4444;
    border: 1px dashed #ef4444;
    padding: 2px 6px;
    border-radius: 3px;
  }
`;
