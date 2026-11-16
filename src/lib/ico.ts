/** Wraps one square PNG in an ICO container. Browsers accept PNG data inside ICO since Windows Vista. */
export function pngToIco(
  png: Uint8Array,
  size: number
): Uint8Array<ArrayBuffer> {
  const headerSize = 6;
  const entrySize = 16;
  const ico = new Uint8Array(headerSize + entrySize + png.length);
  const view = new DataView(ico.buffer);
  view.setUint16(2, 1, true);
  view.setUint16(4, 1, true);
  ico[6] = size >= 256 ? 0 : size;
  ico[7] = size >= 256 ? 0 : size;
  view.setUint16(10, 1, true);
  view.setUint16(12, 32, true);
  view.setUint32(14, png.length, true);
  view.setUint32(18, headerSize + entrySize, true);
  ico.set(png, headerSize + entrySize);
  return ico;
}
