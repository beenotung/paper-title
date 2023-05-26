import { fixWindowsFilename } from './utils';

export function replaceRepeated<T>(xs: T[], x: T, replace: T[]): T[] {
  for (let i = 0; i < xs.length; i++) {
    if (xs[i] === x && xs[i + 1] === x) {
      const start = i;
      let end = i;
      /* tslint:disable:semicolon no-empty */
      /* tslint:disable: */
      for (; xs[end + 1] === x; end++) {}
      /* tslint:enable:semicolon no-empty */
      console.log({ start, end, s: xs[start], e: xs[end] });
      xs = [...xs.slice(0, start), ...replace, ...xs.splice(end + 1)];
    }
  }
  return xs;
}

export function convertTitle(s: string): string {
  /* deduplicate repeated space */
  s = s.replace(/\n/g, ' ');

  /* split by hyphen */
  let words: string[] = s.split('-').flatMap(s => [s, '-']);
  words.pop();

  /* split by space */
  words = words.flatMap(s => s.split(' '));
  words = words.filter(s => s);

  /* fix broken words */
  const acc: string[] = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length === 1 && word.toLowerCase() !== 'a' && word !== '-') {
      i++;
      acc.push(word + (words[i] || ''));
    } else {
      acc.push(word);
    }
  }
  words = acc;

  /* fix all cap case */
  if (words.every(s => s === s.toUpperCase())) {
    words = words.map(
      s => s.substr(0, 1).toUpperCase() + s.substr(1).toLowerCase(),
    );
  }

  /* fix adjective case */
  words = words.map((s, i) => {
    switch (s) {
      case 'For':
      case 'Of':
      case 'An':
      case 'A':
      case 'The':
      case 'And': {
        let last = words[i - 1] || '';
        last = last[last.length - 1] || '';
        if (
          between('0', last, '9') ||
          between('A', last, 'Z') ||
          between('a', last, 'z')
        ) {
          return s.toLowerCase();
        } else {
          return s;
        }
      }
      default:
        return s;
    }
  });

  /* join back to sentence */
  s = words
    .join(' ')
    /* remove duplicated space */
    .replace(/ {2}/g, ' ')
    /* remove space between hypend */
    .replace(/ - /g, '-')
    /* remove space before question mark */
    .replace(/ \?/g, '?')
    /* tail placeholder for git-friendly additions */
    .replace('', '');

  s = fixWindowsFilename(s);

  /* change first char in title to be uppercase */
  s = s[0].toUpperCase() + s.substring(1);

  return s;
}

function between(l: string, m: string, h: string): boolean {
  return l <= m && m <= h;
}
