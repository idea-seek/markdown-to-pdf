/**
 * Export to PDF using browser print API
 */
export function exportPdf(title: string = 'document') {
  // Open print dialog - user can choose "Save as PDF" in print dialog
  const style = document.createElement('style');
  style.textContent = `
    @media print {
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 12pt;
        line-height: 1.6;
        color: #333;
      }
      h1 { page-break-before: always; font-size: 20pt; }
      h1:first-child { page-break-before: avoid; }
      h2, h3, h4 { page-break-after: avoid; }
      pre, blockquote, table { page-break-inside: avoid; }
      pre {
        background: #f5f7fa !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      th {
        background: #1671FA !important;
        color: white !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      img { max-width: 100% !important; }
      a { color: #1671FA !important; }
    }
  `;
  document.head.appendChild(style);

  window.print();

  // Remove style after print dialog
  setTimeout(() => {
    document.head.removeChild(style);
  }, 500);
}
