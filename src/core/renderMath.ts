/**
 * Render LaTeX math in a DOM element
 * Uses KaTeX to find and render $...$ and $$...$$ blocks
 */
export async function renderMathInElement(element: HTMLElement): Promise<void> {
  const katex = await import('katex');

  // Process block math $$...$$
  const mathBlocks = element.querySelectorAll<HTMLElement>('[data-math="block"]');
  for (const block of mathBlocks) {
    try {
      const latex = block.getAttribute('data-latex') || block.textContent || '';
      const html = katex.renderToString(latex, {
        displayMode: true,
        throwOnError: false,
        strict: false,
      });
      block.innerHTML = html;
      block.classList.add('katex-rendered');
    } catch {
      block.classList.add('math-error');
    }
  }

  // Process inline math $...$
  const inlineMaths = element.querySelectorAll<HTMLElement>('[data-math="inline"]');
  for (const span of inlineMaths) {
    try {
      const latex = span.getAttribute('data-latex') || span.textContent || '';
      const html = katex.renderToString(latex, {
        displayMode: false,
        throwOnError: false,
        strict: false,
      });
      span.innerHTML = html;
      span.classList.add('katex-rendered');
    } catch {
      span.classList.add('math-error');
    }
  }
}

/**
 * Pre-process markdown to escape math blocks before marked parsing
 * Returns { processedMd, mathBlocks }
 */
export function preProcessMath(markdown: string): string {
  // Replace $$...$$ with placeholder
  let result = markdown.replace(/\$\$([\s\S]*?)\$\$/g, (_, latex) => {
    const escaped = latex.trim().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `<div data-math="block" data-latex="${escaped.replace(/"/g, '&quot;')}">${escaped}</div>`;
  });

  // Replace inline $...$ (but not $$)
  result = result.replace(/(?<!\$)\$(?!\$)([^\$\n]+?)\$(?!\$)/g, (_, latex) => {
    const escaped = latex.trim().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `<span data-math="inline" data-latex="${escaped.replace(/"/g, '&quot;')}">${escaped}</span>`;
  });

  return result;
}
