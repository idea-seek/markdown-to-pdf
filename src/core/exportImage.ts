import { toPng, toJpeg, toSvg } from 'html-to-image';
import { saveAs } from 'file-saver';

export type ImageFormat = 'png' | 'jpg' | 'webp' | 'svg';
export type ImageScale = 1 | 2 | 3 | 4;

interface ImageExportOptions {
  format: ImageFormat;
  scale: ImageScale;
  backgroundColor?: string;
  width?: number;
}

/**
 * Export preview element to image with chunked rendering for long documents
 */
export async function exportToImage(
  element: HTMLElement,
  filename: string = 'document',
  options: ImageExportOptions = { format: 'png', scale: 2 }
) {
  const { format, scale, backgroundColor } = options;

  // Clone and prepare element
  const clone = element.cloneNode(true) as HTMLElement;
  clone.style.position = 'absolute';
  clone.style.left = '-9999px';
  clone.style.top = '0';
  clone.style.width = element.offsetWidth + 'px';
  clone.style.backgroundColor = backgroundColor || '#ffffff';
  clone.style.padding = '20px';
  document.body.appendChild(clone);

  try {
    // Wait for any images/rendering to settle
    await new Promise((r) => setTimeout(r, 100));

    const pixelRatio = scale;
    const width = options.width || element.offsetWidth;

    let blob: Blob | null = null;

    switch (format) {
      case 'png':
        const pngDataUrl = await toPng(clone, {
          pixelRatio,
          backgroundColor: backgroundColor || '#ffffff',
          cacheBust: true,
        });
        blob = dataUrlToBlob(pngDataUrl);
        break;

      case 'jpg':
        const jpgDataUrl = await toJpeg(clone, {
          pixelRatio,
          backgroundColor: backgroundColor || '#ffffff',
          quality: 0.95,
          cacheBust: true,
        });
        blob = dataUrlToBlob(jpgDataUrl);
        break;

      case 'svg': {
        const svgDataUrl = await toSvg(clone, {
          cacheBust: true,
        });
        blob = dataUrlToBlob(svgDataUrl, 'image/svg+xml');
        break;
      }

      case 'webp': {
        // Generate PNG first, then convert to WebP via canvas
        const pngUrl = await toPng(clone, {
          pixelRatio,
          backgroundColor: backgroundColor || '#ffffff',
          cacheBust: true,
        });
        blob = await convertToWebP(pngUrl);
        break;
      }
    }

    if (blob) {
      const ext = format === 'jpg' ? 'jpg' : format;
      saveAs(blob, `${filename}.${ext}`);
    }
  } finally {
    document.body.removeChild(clone);
  }
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
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(
        (b) => {
          if (b) resolve(b);
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
