import { jsPDF } from 'jspdf';
import { sanitizeFilename } from './fileName';
import { buildExportSurface, cleanupExportSurface, waitForSurfaceReady } from './exportSurface';

const PDF_MARGIN_TOP = 48;
const PDF_MARGIN_RIGHT = 40;
const PDF_MARGIN_BOTTOM = 54;
const PDF_MARGIN_LEFT = 40;

export async function exportPdf(element: HTMLElement, title: string = 'document'): Promise<void> {
  const safeFilename = sanitizeFilename(title);
  const exportWidth = Math.max(element.clientWidth || element.offsetWidth, 860);
  const surface = buildExportSurface(element.innerHTML, {
    width: exportWidth,
    backgroundColor: '#ffffff',
    className: 'pdf-export-body',
  });

  try {
    await waitForSurfaceReady(surface);

    const article = surface.querySelector<HTMLElement>('.pdf-export-body');
    if (!article) {
      throw new Error('PDF export surface is unavailable');
    }

    const pdf = new jsPDF({
      orientation: 'p',
      unit: 'pt',
      format: 'a4',
      compress: true,
      putOnlyUsedFonts: true,
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const usableWidth = pageWidth - PDF_MARGIN_LEFT - PDF_MARGIN_RIGHT;

    await pdf.html(article, {
      x: PDF_MARGIN_LEFT,
      y: PDF_MARGIN_TOP,
      width: usableWidth,
      windowWidth: exportWidth,
      autoPaging: 'text',
      margin: [PDF_MARGIN_TOP, PDF_MARGIN_RIGHT, PDF_MARGIN_BOTTOM, PDF_MARGIN_LEFT],
      html2canvas: {
        scale: 1.5,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
      },
    });

    pdf.save(`${safeFilename}.pdf`);
  } finally {
    cleanupExportSurface(surface);
  }
}
