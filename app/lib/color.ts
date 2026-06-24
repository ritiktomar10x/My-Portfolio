export function hexToRgba(hex: string, alpha: number) {
  const x = hex.replace("#", "");
  const r = parseInt(x.slice(0, 2), 16);
  const g = parseInt(x.slice(2, 4), 16);
  const b = parseInt(x.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}
