import { MARKDOWN_DOCUMENT_CSS } from './markdownStyles';

export interface ExportSurfaceOptions {
  backgroundColor?: string;
  width: number;
  className: string;
}

export function buildExportSurface(
  htmlContent: string,
  { width, backgroundColor = '#ffffff', className }: ExportSurfaceOptions
): HTMLDivElement {
  const host = document.createElement('div');
  host.style.position = 'fixed';
  host.style.left = '-100000px';
  host.style.top = '0';
  host.style.width = `${width}px`;
  host.style.padding = '0';
  host.style.margin = '0';
  host.style.background = backgroundColor;
  host.style.opacity = '0';
  host.style.pointerEvents = 'none';
  host.style.zIndex = '-1';

  const style = document.createElement('style');
  style.textContent = `
    ${MARKDOWN_DOCUMENT_CSS}
    .markdown-body.${className} {
      max-width: none;
      width: ${width}px;
      margin: 0;
      background: ${backgroundColor};
    }
  `;

  const article = document.createElement('article');
  article.className = `markdown-body ${className}`;
  article.innerHTML = htmlContent;

  host.appendChild(style);
  host.appendChild(article);
  document.body.appendChild(host);
  return host;
}

export async function waitForSurfaceReady(surface: HTMLElement): Promise<void> {
  if ('fonts' in document) {
    try {
      await document.fonts.ready;
    } catch (_) {}
  }

  const images = Array.from(surface.querySelectorAll<HTMLImageElement>('img'));
  await Promise.all(
    images.map((img) => {
      if (img.complete) return Promise.resolve();

      return new Promise<void>((resolve) => {
        img.addEventListener('load', () => resolve(), { once: true });
        img.addEventListener('error', () => resolve(), { once: true });
      });
    })
  );

  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
}

export function cleanupExportSurface(surface: HTMLElement) {
  if (surface.parentNode) {
    surface.parentNode.removeChild(surface);
  }
}
