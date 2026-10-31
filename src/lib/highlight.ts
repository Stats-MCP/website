export interface TextPart {
  text: string;
  highlight: boolean;
}

export function splitHighlight(text: string, highlight: string): TextPart[] {
  const index = highlight ? text.indexOf(highlight) : -1;
  if (index < 0) return [{ text, highlight: false }];
  return [
    { text: text.slice(0, index), highlight: false },
    { text: highlight, highlight: true },
    { text: text.slice(index + highlight.length), highlight: false }
  ].filter((part) => part.text.length > 0);
}
