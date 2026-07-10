import { toJpeg, toPng, toSvg } from 'html-to-image';
import { saveAs } from 'file-saver';
import { sanitizeFilename } from './fileName';
import { MARKDOWN_DOCUMENT_CSS } from './markdownStyles';

export type ImageFormat = 'png' | 'jpg' | 'webp' | 'svg';
export type ImageScale = 1 | 2 | 3 | 4;

interface ImageExportOptions {
  format: ImageFormat;
  scale: ImageScale;
  backgroundColor?: string;
  width?: number;
}

const MAX_CANVAS_DIMENSION = 16384;

function buildExportSurface(element: HTMLElement, width: number, backgroundColor: string): HTMLDivElement {
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
    .markdown-body.image-export-body {
      max-width: none;
      width: ${width}px;
      margin: 0;
      background: ${backgroundColor};
    }
  `;

  const article = document.createElement('article');
  article.className = 'markdown-body image-export-body';
  article.innerHTML = element.innerHTML;

  host.appendChild(style);
  host.appendChild(article);
  document.body.appendChild(host);
  return host;
}

async function waitForSurfaceReady(surface: HTMLElement): Promise<void> {
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

function getSafeScale(width: number, height: number, preferredScale: number): number {
  if (width <= 0 || height <= 0) return 1;

  const widthScale = MAX_CANVAS_DIMENSION / width;
  const heightScale = MAX_CANVAS_DIMENSION / height;
  const maxAllowedScale = Math.max(Math.min(widthScale, heightScale, preferredScale), 0.1);

  return Math.min(preferredScale, maxAllowedScale);
}

function dataUrlToBlob(dataUrl: string, type?: string): Blob {
  if (type === 'image/svg+xml') {
    const svg = decodeURIComponent(dataUrl.replace('data:image/svg+xml;charset=utf-8,', ''));
    return new Blob([svg], { type: 'image/svg+xml' });
  }

  const parts = dataUrl.split(',');
  const mime = parts[0].match(/:(.*?);/)?.[1] || 'image/png';
  const bytes = atob(parts[1]);
  const arr = new Uint8Array(bytes.length);

  for (let i = 0; i < bytes.length; i++) {
    arr[i] = bytes.charCodeAt(i);
  }

  return new Blob([arr], { type: mime });
}

async function convertToWebP(dataUrl: string): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        reject(new Error('Canvas context is unavailable'));
        return;
      }

      ctx.drawImage(img, 0, 0);
      canvas.toBlob(
        (blob) => {
          if (blob) resolve(blob);
          else reject(new Error('WebP conversion failed'));
        },
        'image/webp',
        0.95
      );
    };
    img.onerror = reject;
    img.src = dataUrl;
  });
}

export async function exportToImage(
  element: HTMLElement,
  filename: string = 'document',
  options: ImageExportOptions = { format: 'png', scale: 2 }
) {
  const { format, scale, backgroundColor = '#ffffff' } = options;
  const exportWidth = options.width || Math.max(element.clientWidth || element.offsetWidth, 800);
  const safeFilename = sanitizeFilename(filename);
  const surface = buildExportSurface(element, exportWidth, backgroundColor);

  try {
    await waitForSurfaceReady(surface);

    const article = surface.querySelector<HTMLElement>('.image-export-body');
    if (!article) throw new Error('Image export surface is unavailable');

    const height = Math.ceil(article.scrollHeight);
    const effectiveScale = getSafeScale(exportWidth, height, scale);

    let blob: Blob | null = null;

    switch (format) {
      case 'png': {
        const dataUrl = await toPng(article, {
          pixelRatio: effectiveScale,
          backgroundColor,
          cacheBust: true,
          width: exportWidth,
          height,
          canvasWidth: Math.round(exportWidth * effectiveScale),
          canvasHeight: Math.round(height * effectiveScale),
        });
        blob = dataUrlToBlob(dataUrl);
        break;
      }

      case 'jpg': {
        const dataUrl = await toJpeg(article, {
          pixelRatio: effectiveScale,
          backgroundColor,
          quality: 0.95,
          cacheBust: true,
          width: exportWidth,
          height,
          canvasWidth: Math.round(exportWidth * effectiveScale),
          canvasHeight: Math.round(height * effectiveScale),
        });
        blob = dataUrlToBlob(dataUrl);
        break;
      }

      case 'svg': {
        const dataUrl = await toSvg(article, {
          cacheBust: true,
          width: exportWidth,
          height,
        });
        blob = dataUrlToBlob(dataUrl, 'image/svg+xml');
        break;
      }

      case 'webp': {
        const dataUrl = await toPng(article, {
          pixelRatio: effectiveScale,
          backgroundColor,
          cacheBust: true,
          width: exportWidth,
          height,
          canvasWidth: Math.round(exportWidth * effectiveScale),
          canvasHeight: Math.round(height * effectiveScale),
        });
        blob = await convertToWebP(dataUrl);
        break;
      }
    }

    if (blob) {
      const ext = format === 'jpg' ? 'jpg' : format;
      saveAs(blob, `${safeFilename}.${ext}`);
    }
  } finally {
    if (surface.parentNode) {
      surface.parentNode.removeChild(surface);
    }
  }
}
