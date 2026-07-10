import { MARKDOWN_DOCUMENT_CSS } from './markdownStyles';

const PRINT_DOCUMENT_CSS = `
  @page {
    size: A4;
    margin: 16mm 14mm 18mm;
  }

  :root {
    color-scheme: light;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    background: #ffffff !important;
  }

  body {
    color: #1a1a2e;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .pdf-export-root {
    width: 100%;
  }

  .markdown-body.pdf-preview {
    min-height: auto !important;
    overflow: visible !important;
    max-width: none !important;
    padding: 0 !important;
    margin: 0 !important;
    background: #ffffff !important;
  }

  .markdown-body.pdf-preview * {
    box-sizing: border-box;
  }

  .markdown-body.pdf-preview h1,
  .markdown-body.pdf-preview h2,
  .markdown-body.pdf-preview h3,
  .markdown-body.pdf-preview h4,
  .markdown-body.pdf-preview h5,
  .markdown-body.pdf-preview h6 {
    break-after: avoid-page;
    page-break-after: avoid;
  }

  .markdown-body.pdf-preview p,
  .markdown-body.pdf-preview li,
  .markdown-body.pdf-preview blockquote {
    orphans: 3;
    widows: 3;
  }

  .markdown-body.pdf-preview img,
  .markdown-body.pdf-preview figure,
  .markdown-body.pdf-preview tr,
  .markdown-body.pdf-preview .katex-display {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  .markdown-body.pdf-preview pre,
  .markdown-body.pdf-preview blockquote {
    break-inside: auto;
    page-break-inside: auto;
  }

  .markdown-body.pdf-preview pre {
    overflow: visible !important;
    white-space: pre-wrap !important;
    word-break: break-word;
    overflow-wrap: anywhere;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }

  .markdown-body.pdf-preview pre code,
  .markdown-body.pdf-preview pre .hljs {
    white-space: inherit !important;
    word-break: break-word;
    overflow-wrap: anywhere;
  }

  .markdown-body.pdf-preview table {
    table-layout: fixed;
    break-inside: auto;
    page-break-inside: auto;
  }

  .markdown-body.pdf-preview thead {
    display: table-header-group;
  }

  .markdown-body.pdf-preview tfoot {
    display: table-footer-group;
  }

  .markdown-body.pdf-preview th,
  .markdown-body.pdf-preview td {
    word-break: break-word;
    overflow-wrap: anywhere;
    vertical-align: top;
  }

  .markdown-body.pdf-preview .katex-display {
    overflow: visible !important;
  }

  .markdown-body.pdf-preview a {
    color: inherit;
    text-decoration: none;
  }
`;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getPrintableHead(): string {
  const nodes = Array.from(document.head.querySelectorAll('style, link[rel="stylesheet"]'));
  return nodes.map((node) => node.outerHTML).join('\n');
}

async function waitForStylesheets(doc: Document): Promise<void> {
  const links = Array.from(doc.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]'));

  await Promise.all(
    links.map((link) => {
      if (link.sheet) return Promise.resolve();

      return new Promise<void>((resolve) => {
        link.addEventListener('load', () => resolve(), { once: true });
        link.addEventListener('error', () => resolve(), { once: true });
      });
    })
  );
}

async function waitForImages(doc: Document): Promise<void> {
  const images = Array.from(doc.images);

  await Promise.all(
    images.map((img) => {
      if (img.complete) return Promise.resolve();

      return new Promise<void>((resolve) => {
        img.addEventListener('load', () => resolve(), { once: true });
        img.addEventListener('error', () => resolve(), { once: true });
      });
    })
  );
}

async function waitForPrintReady(doc: Document): Promise<void> {
  await waitForStylesheets(doc);

  if ('fonts' in doc) {
    try {
      await (doc as Document & { fonts: FontFaceSet }).fonts.ready;
    } catch (_) {}
  }

  await waitForImages(doc);

  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
}

function cleanupFrame(frame: HTMLIFrameElement) {
  if (frame.parentNode) {
    frame.parentNode.removeChild(frame);
  }
}

export async function exportPdf(element: HTMLElement, title: string = 'document'): Promise<void> {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('aria-hidden', 'true');
  iframe.style.position = 'fixed';
  iframe.style.right = '0';
  iframe.style.bottom = '0';
  iframe.style.width = '0';
  iframe.style.height = '0';
  iframe.style.border = '0';
  iframe.style.opacity = '0';
  iframe.style.pointerEvents = 'none';

  document.body.appendChild(iframe);

  const frameWindow = iframe.contentWindow;
  const frameDocument = iframe.contentDocument;

  if (!frameWindow || !frameDocument) {
    cleanupFrame(iframe);
    throw new Error('Print frame is unavailable');
  }

  const safeTitle = escapeHtml(title);
  const baseHref = escapeHtml(window.location.href);
  const printableHead = getPrintableHead();
  const printableHtml = `
    <!DOCTYPE html>
    <html lang="zh-CN">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${safeTitle}</title>
        <base href="${baseHref}" />
        ${printableHead}
        <style>${MARKDOWN_DOCUMENT_CSS}</style>
        <style>${PRINT_DOCUMENT_CSS}</style>
      </head>
      <body>
        <main class="pdf-export-root">
          <article class="markdown-body pdf-preview">${element.innerHTML}</article>
        </main>
      </body>
    </html>
  `;

  frameDocument.open();
  frameDocument.write(printableHtml);
  frameDocument.close();

  await waitForPrintReady(frameDocument);

  const cleanup = () => window.setTimeout(() => cleanupFrame(iframe), 1000);
  frameWindow.addEventListener('afterprint', cleanup, { once: true });
  window.setTimeout(cleanup, 60000);

  frameWindow.focus();
  frameWindow.print();
}
