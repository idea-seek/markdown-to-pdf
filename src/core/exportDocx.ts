import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  AlignmentType,
  ExternalHyperlink,
  Header,
  Footer,
  PageNumber,
} from 'docx';
import { saveAs } from 'file-saver';

interface ExportNode {
  type: 'heading' | 'paragraph' | 'codeBlock' | 'table' | 'blockquote' | 'list' | 'image' | 'math' | 'hr';
  depth?: number;
  content?: string;
  children?: any[];
  lang?: string;
  code?: string;
  rows?: InlineNode[][];
  headers?: InlineNode[];
  src?: string;
  alt?: string;
  latex?: string;
  ordered?: boolean;
  items?: any[][];
}

interface InlineNode {
  type: 'text' | 'strong' | 'em' | 'code' | 'link' | 'image' | 'math';
  content?: string;
  url?: string;
  src?: string;
  alt?: string;
  latex?: string;
}

/**
 * Parse rendered HTML back to a simplified AST for DOCX export
 */
function htmlToNodes(html: string): ExportNode[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const nodes: ExportNode[] = [];
  const body = doc.body;

  for (const child of body.children) {
    const node = elementToNode(child);
    if (node) nodes.push(node);
  }

  return nodes;
}

function elementToNode(el: Element): ExportNode | null {
  const tag = el.tagName.toLowerCase();

  switch (tag) {
    case 'h1': return { type: 'heading', depth: 1, children: parseInline(el) };
    case 'h2': return { type: 'heading', depth: 2, children: parseInline(el) };
    case 'h3': return { type: 'heading', depth: 3, children: parseInline(el) };
    case 'h4': return { type: 'heading', depth: 4, children: parseInline(el) };
    case 'h5': return { type: 'heading', depth: 5, children: parseInline(el) };
    case 'h6': return { type: 'heading', depth: 6, children: parseInline(el) };
    case 'p': return { type: 'paragraph', children: parseInline(el) };
    case 'pre': {
      const codeEl = el.querySelector('code');
      const lang = codeEl?.className.match(/language-(\w+)/)?.[1] || 'text';
      return { type: 'codeBlock', lang, code: codeEl?.textContent || el.textContent || '' };
    }
    case 'blockquote': {
      const children: ExportNode[] = [];
      for (const c of el.children) {
        const n = elementToNode(c);
        if (n) children.push(n);
      }
      return { type: 'blockquote', children };
    }
    case 'ul': {
      const items: ExportNode[][] = [];
      for (const li of el.children) {
        if (li.tagName === 'LI') {
          items.push([{ type: 'paragraph', children: parseInline(li) }]);
        }
      }
      return { type: 'list', ordered: false, items };
    }
    case 'ol': {
      const items: ExportNode[][] = [];
      for (const li of el.children) {
        if (li.tagName === 'LI') {
          items.push([{ type: 'paragraph', children: parseInline(li) }]);
        }
      }
      return { type: 'list', ordered: true, items };
    }
    case 'table': return parseTable(el);
    case 'div': {
      if (el.getAttribute('data-math') === 'block') {
        return { type: 'math', latex: el.getAttribute('data-latex') || el.textContent || '' };
      }
      const children: ExportNode[] = [];
      for (const c of el.children) {
        const n = elementToNode(c);
        if (n) children.push(n);
      }
      return children.length === 1 ? children[0] : { type: 'paragraph', children: [] };
    }
    case 'hr': return { type: 'hr' };
    default: {
      if (el.textContent?.trim()) {
        return { type: 'paragraph', children: parseInline(el) };
      }
      return null;
    }
  }
}

function parseInline(el: Element): InlineNode[] {
  const nodes: InlineNode[] = [];

  for (const child of el.childNodes) {
    if (child.nodeType === Node.TEXT_NODE) {
      if (child.textContent) {
        nodes.push({ type: 'text', content: child.textContent });
      }
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      const elem = child as Element;
      const tag = elem.tagName.toLowerCase();

      switch (tag) {
        case 'strong':
        case 'b':
          nodes.push({ type: 'strong', content: elem.textContent || '' });
          break;
        case 'em':
        case 'i':
          nodes.push({ type: 'em', content: elem.textContent || '' });
          break;
        case 'code':
          nodes.push({ type: 'code', content: elem.textContent || '' });
          break;
        case 'a':
          nodes.push({
            type: 'link',
            content: elem.textContent || '',
            url: elem.getAttribute('href') || '',
          });
          break;
        case 'img':
          nodes.push({
            type: 'image',
            src: elem.getAttribute('src') || '',
            alt: elem.getAttribute('alt') || '',
          });
          break;
        case 'span':
          if (elem.getAttribute('data-math') === 'inline') {
            nodes.push({
              type: 'math',
              latex: elem.getAttribute('data-latex') || elem.textContent || '',
            });
          } else {
            if (elem.textContent) {
              nodes.push({ type: 'text', content: elem.textContent });
            }
          }
          break;
        case 'del':
        case 's':
          nodes.push({ type: 'text', content: elem.textContent || '' });
          break;
        default:
          if (elem.textContent) {
            nodes.push({ type: 'text', content: elem.textContent });
          }
      }
    }
  }

  return nodes;
}

function parseTable(el: Element): ExportNode {
  const rows: InlineNode[][] = [];
  let headers: InlineNode[] | undefined;

  const thead = el.querySelector('thead');
  const tbody = el.querySelector('tbody') || el;

  if (thead) {
    const headerRow = thead.querySelector('tr');
    if (headerRow) {
      headers = [];
      for (const th of headerRow.querySelectorAll('th, td')) {
        headers.push({ type: 'text', content: th.textContent || '' });
      }
    }
  }

  for (const tr of tbody.querySelectorAll('tr')) {
    const row: InlineNode[] = [];
    for (const td of tr.querySelectorAll('td, th')) {
      row.push({ type: 'text', content: td.textContent || '' });
    }
    if (row.length > 0) rows.push(row);
  }

  return { type: 'table', headers, rows };
}

// ─── DOCX Generation ────────────────────────────────────────

function buildTextRun(node: InlineNode): TextRun[] {
  switch (node.type) {
    case 'text':
      return [new TextRun({ text: node.content || '' })];
    case 'strong':
      return [new TextRun({ text: node.content || '', bold: true })];
    case 'em':
      return [new TextRun({ text: node.content || '', italics: true })];
    case 'code':
      return [
        new TextRun({
          text: node.content || '',
          font: 'Consolas',
          size: 20, // 10pt in half-points
          shading: { type: 'solid', color: 'F6F8FA' },
        }),
      ];
    case 'link':
      return [
        new ExternalHyperlink({
          children: [new TextRun({ text: node.content || '', style: 'Hyperlink', color: '2563EB' })],
          link: node.url || '',
        }),
      ] as unknown as TextRun[];
    case 'image':
    case 'math':
      return [new TextRun({ text: node.content || node.latex || '' })];
    default:
      return [new TextRun({ text: node.content || '' })];
  }
}

function buildParagraph(children: InlineNode[]): Paragraph {
  const runs: (TextRun | ExternalHyperlink)[] = [];

  for (const child of children) {
    if (child.type === 'link') {
      runs.push(
        new ExternalHyperlink({
          children: [new TextRun({ text: child.content || '', style: 'Hyperlink', color: '2563EB' })],
          link: child.url || '',
        })
      );
    } else {
      runs.push(...buildTextRun(child));
    }
  }

  return new Paragraph({ children: runs as any, spacing: { after: 120 } });
}

function buildHeading(depth: number, children: InlineNode[]): Paragraph {
  const headingMap: Record<number, any> = {
    1: HeadingLevel.HEADING_1,
    2: HeadingLevel.HEADING_2,
    3: HeadingLevel.HEADING_3,
    4: HeadingLevel.HEADING_4,
    5: HeadingLevel.HEADING_5,
    6: HeadingLevel.HEADING_6,
  };

  return new Paragraph({
    heading: headingMap[depth] || HeadingLevel.HEADING_1,
    children: children.map((c) => new TextRun({ text: c.content || '', bold: true })),
    spacing: { before: 240, after: 120 },
  });
}

function buildCodeBlock(node: ExportNode): Paragraph[] {
  const lines = (node.code || '').split('\n');
  return lines.map(
    (line) =>
      new Paragraph({
        children: [
          new TextRun({
            text: line || ' ',
            font: 'Consolas',
            size: 19,
          }),
        ],
        shading: { type: 'solid', color: 'F6F8FA' },
        spacing: { after: 0, line: 240 },
        indent: { left: 200, right: 200 },
      })
  );
}

function buildTable(node: ExportNode): Table {
  const rows: TableRow[] = [];

  if (node.headers) {
    rows.push(
      new TableRow({
        children: node.headers.map(
          (h) =>
            new TableCell({
              children: [new Paragraph({ children: [new TextRun({ text: h.content || '', bold: true })] })],
              shading: { type: 'solid', color: 'E5E7EB' },
              width: { size: 100 / node.headers!.length, type: WidthType.PERCENTAGE },
            })
        ),
      })
    );
  }

  if (node.rows) {
    for (const row of node.rows) {
      rows.push(
        new TableRow({
          children: row.map(
            (cell) =>
              new TableCell({
                children: [new Paragraph({ children: [new TextRun({ text: cell.content || '' })] })],
                width: { size: 100 / row.length, type: WidthType.PERCENTAGE },
              })
          ),
        })
      );
    }
  }

  return new Table({
    rows,
    width: { size: 100, type: WidthType.PERCENTAGE },
  });
}

function buildBlockquote(node: ExportNode): Paragraph {
  const children = node.children || [];
  const textParts: string[] = [];
  for (const child of children) {
    textParts.push(child.content || (child.children?.[0]?.content) || '');
  }
  return new Paragraph({
    children: [new TextRun({ text: textParts.join('\n'), italics: true, color: '6B7280' })],
    indent: { left: 400 },
    spacing: { after: 120 },
    border: { left: { style: BorderStyle.SINGLE, color: 'A070FF', size: 4 } },
  });
}

function buildList(node: ExportNode): Paragraph[] {
  const result: Paragraph[] = [];
  const items = node.items || [];
  for (let i = 0; i < items.length; i++) {
    const prefix = node.ordered ? `${i + 1}. ` : '• ';
    const text = items[i].map((n) => n.content || '').join('');
    result.push(
      new Paragraph({
        children: [new TextRun({ text: prefix + text })],
        indent: { left: 400 },
        spacing: { after: 60 },
      })
    );
  }
  return result;
}

function nodeToDocxParagraph(node: ExportNode): Paragraph | Paragraph[] {
  switch (node.type) {
    case 'heading':
      return buildHeading(node.depth || 1, node.children || []);
    case 'paragraph':
      return buildParagraph(node.children || []);
    case 'codeBlock':
      return buildCodeBlock(node);
    case 'table':
      return new Paragraph({}); // handled separately
    case 'blockquote':
      return buildBlockquote(node);
    case 'list':
      return buildList(node);
    case 'hr':
      return new Paragraph({
        children: [],
        border: { bottom: { style: BorderStyle.SINGLE, color: 'E5E7EB' } },
        spacing: { after: 200 },
      });
    case 'math':
      return buildParagraph([{ type: 'text', content: node.latex || '[公式]' }]);
    default:
      return buildParagraph([{ type: 'text', content: node.content || '' }]);
  }
}

export async function exportToDocx(appElement: HTMLElement, filename: string = 'document.docx') {
  const nodes = htmlToNodes(appElement.innerHTML);

  const docChildren: (Paragraph | Table)[] = [];

  for (const node of nodes) {
    if (node.type === 'table') {
      docChildren.push(buildTable(node));
    } else {
      const result = nodeToDocxParagraph(node);
      if (Array.isArray(result)) {
        docChildren.push(...result);
      } else {
        docChildren.push(result);
      }
    }
  }

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
          },
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                children: [new TextRun({ text: filename.replace('.docx', ''), size: 18, color: '999999' })],
                alignment: AlignmentType.RIGHT,
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                children: [
                  new TextRun({ text: '第 ' }),
                  new TextRun({ children: [PageNumber.CURRENT] }),
                  new TextRun({ text: ' 页' }),
                ],
                alignment: AlignmentType.CENTER,
              }),
            ],
          }),
        },
        children: docChildren,
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, filename);
}
