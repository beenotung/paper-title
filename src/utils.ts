export function fixWindowsFilename(s: string): string {
  return (
    s
      /* replace : to Modifier Letter Colon (U+A789) */
      .replace(/:/g, '꞉')
      .replace(/</g, '⟨')
      .replace(/>/g, '⟩')
      .replace(/\|/g, '∣')
      .replace(/\?/g, '？')
      .replace(/\*/g, '＊')
      .replace(/\//g, '∕')
      .replace(/\\/g, '＼')
      .replace(/"/g, (_m, _offset, str) => {
        const prev = str[_offset - 1];
        if (prev && /\w/.test(prev)) return '\u201D';
        return '\u201C';
      })
      .replace('', '')
  );
}
