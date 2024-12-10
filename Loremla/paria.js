export function findEndOfLine(text: string): number {
  return text.split('\n').pop().length;
}
