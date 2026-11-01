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

const NUMBER_SPACE = /(\d) (?=\d|%|€)|(€) (?=\d)/g;

/** Keeps "10 621 103", "4,1 %" and "2 243 €" on one line by using no-break spaces. */
export function keepNumbersTogether(text: string): string {
  return text.replace(
    NUMBER_SPACE,
    (_match, digit: string | undefined, euro: string | undefined) =>
      `${digit ?? euro ?? ''}\u00a0`
  );
}
