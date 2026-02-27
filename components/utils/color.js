export function isColor(value) {
  if (typeof value !== "string" || typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("color", value);
  // 弃用
  // const s = new Option().style;
  // s.color = str;
  // return s.color !== "";
}
