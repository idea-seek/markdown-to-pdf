import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code: string, lang: string) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(code, { language: lang }).value;
        } catch (_) {}
      }
      try {
        return hljs.highlightAuto(code).value;
      } catch (_) {}
      return code;
    },
  })
);

marked.setOptions({
  gfm: true,
  breaks: false,
  pedantic: false,
});

/**
 * Convert markdown text to HTML string
 */
export function markdownToHtml(markdown: string): string {
  return marked.parse(markdown) as string;
}

/**
 * Convert markdown text to HTML string with KaTeX support
 * We do KaTeX rendering in the DOM because marked-katex-extension
 * needs DOM access for server-side
 */
export function renderMarkdown(markdown: string, enableMath: boolean = true): string {
  try {
    return markdownToHtml(markdown);
  } catch {
    return `<p style="color:red">Markdown 解析错误</p>`;
  }
}
