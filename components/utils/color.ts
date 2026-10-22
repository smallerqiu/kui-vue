import Color from "color";

export function isColor(value?: string) {
  if (typeof value !== "string" || typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("color", value);
  // 弃用
  // const s = new Option().style;
  // s.color = str;
  // return s.color !== "";
}

/**
 * `color-mix(in srgb, <colour> <share>%, transparent)` written out as a plain colour.
 *
 * Mixing with `transparent` in srgb only scales the colour's own alpha, so the result is the same
 * rgb triple at `share × alpha` — a value every engine can paint, including the Electron build on
 * Windows 7, where `color-mix()` needs Chrome 111 and a declaration that uses it simply gets no
 * value at all.
 *
 * `share` is the percentage the stylesheet would have written. Colours that only resolve in the
 * browser (`currentColor`, `var(--token)`) and anything unparseable return `undefined`, so callers
 * keep the shade their stylesheet baked instead of shipping a broken declaration.
 */
export function wash(value: string | undefined, share: number): string | undefined {
  if (!value) return undefined;
  try {
    const { r, g, b, alpha = 1 } = Color(value).rgb().object();
    // Two decimals of alpha are far below one 8-bit step on any channel; keeping the string short
    // also means a re-render of the same colour produces an identical inline style.
    const washAlpha = Math.round(((alpha * share) / 100) * 100) / 100;
    return `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${washAlpha})`;
  } catch {
    return undefined;
  }
}
