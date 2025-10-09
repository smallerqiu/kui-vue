export function isColor(str) {
  const s = new Option().style;
  s.color = str;
  return s.color !== "";
}
