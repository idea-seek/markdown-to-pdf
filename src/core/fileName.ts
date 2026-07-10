const INVALID_FILENAME_CHARS = /[<>:"/\\|?*\u0000-\u001F]/g;
const TRAILING_DOTS_AND_SPACES = /[. ]+$/g;
const RESERVED_NAMES = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i;

export function sanitizeFilename(input: string, fallback: string = 'document'): string {
  const trimmed = input.trim();
  const replaced = trimmed.replace(INVALID_FILENAME_CHARS, '_').replace(TRAILING_DOTS_AND_SPACES, '');
  const normalized = replaced || fallback;

  if (RESERVED_NAMES.test(normalized)) {
    return `${normalized}_file`;
  }

  return normalized;
}
