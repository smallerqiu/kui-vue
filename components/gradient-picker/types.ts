import Color, { type ColorInstance } from "color";

export type GradientType = "linear" | "corner";

export interface GradientStop {
  /** Any CSS color; alpha is stored in the string itself (`#rrggbbaa` / `rgba()`). */
  color: string;
  /** Position along the gradient, 0–100. */
  offset: number;
}

/** Fixed corners: top-left, top-right, bottom-left, bottom-right. */
export type CornerGradientValue = [string, string, string, string];

/**
 * The value is the colors, not the CSS: `linear` is the stop list left to right, `corner` is the four
 * corner colors. Wrap it in whichever function you paint with — `linear-gradient`, `radial-gradient`,
 * `conic-gradient` or a canvas — via the exported `formatGradient` helpers when the built-in preview
 * shape is enough.
 */
export type GradientValue = GradientStop[] | CornerGradientValue;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, Number.isFinite(value) ? value : min));

const round = (value: number) => Math.round(value * 100) / 100;

const clampOffset = (value: number) => round(clamp(value, 0, 100));

export function createLinearGradient(): GradientStop[] {
  return [
    { color: "#ff0000", offset: 0 },
    { color: "#0000ff", offset: 100 },
  ];
}

export function createCornerGradient(): CornerGradientValue {
  return ["#ff0000", "#ffff00", "#00ff00", "#0000ff"];
}

export function formatColor(color: string | ColorInstance): string {
  const instance = Color(color);
  // `color` prints hex in upper case; the picker's structured output stays lower case so values
  // built by hand and values read back compare equal.
  return (instance.alpha() < 1 ? instance.hexa() : instance.hex()).toLowerCase();
}

export function mixGradientColor(from: string, to: string, ratio: number): string {
  const start = Color(from);
  const end = Color(to);
  const weight = clamp(ratio, 0, 1);
  const alpha = start.alpha() + (end.alpha() - start.alpha()) * weight;
  const channel = (a: number, b: number) =>
    alpha === 0
      ? 0
      : Math.round((a * start.alpha() * (1 - weight) + b * end.alpha() * weight) / alpha);
  const mixed = Color({
    r: channel(start.red(), end.red()),
    g: channel(start.green(), end.green()),
    b: channel(start.blue(), end.blue()),
    alpha: Math.round(alpha * 1000) / 1000,
  });
  return formatColor(mixed);
}

function normalizeStops(stops?: GradientStop[]): GradientStop[] {
  const list = (stops ?? [])
    .filter((stop) => stop && typeof stop.color === "string")
    .map((stop) => ({ color: formatColor(stop.color), offset: clampOffset(stop.offset) }))
    .sort((a, b) => a.offset - b.offset);
  if (list.length === 0) return createLinearGradient();
  if (list.length === 1) {
    const only = list[0];
    return only.offset <= 50
      ? [only, { color: "#000000", offset: 100 }]
      : [{ color: "#000000", offset: 0 }, only];
  }
  return list;
}

const isColorList = (value: unknown[]): value is string[] =>
  value.every((item) => typeof item === "string");

const isStopList = (value: unknown[]): value is GradientStop[] =>
  value.some((item) => typeof item === "object" && item !== null);

/**
 * Fill in a complete value of `type`. A value of the other shape is converted the way the panel
 * switches: stops → corner takes the two end colors for the left and right edges; corner → stops
 * runs the diagonal (top-left to bottom-right).
 */
export function normalizeGradient(
  value?: GradientValue | null,
  type: GradientType = "linear",
): GradientValue {
  const list = Array.isArray(value) ? value : [];
  if (type === "corner") {
    if (list.length && isColorList(list)) {
      const fallback = createCornerGradient();
      const colors = list.slice(0, 4).map((color) => formatColor(color));
      while (colors.length < 4) colors.push(fallback[colors.length]);
      return colors as CornerGradientValue;
    }
    if (list.length) {
      const stops = normalizeStops(list as GradientStop[]);
      const first = stops[0].color;
      const last = stops[stops.length - 1].color;
      return [first, last, first, last];
    }
    return createCornerGradient();
  }
  if (list.length && isStopList(list)) return normalizeStops(list);
  if (list.length) {
    const colors = list as string[];
    return [
      { color: formatColor(colors[0]), offset: 0 },
      { color: formatColor(colors[colors.length - 1]), offset: 100 },
    ];
  }
  return createLinearGradient();
}

export function gradientColorAtOffset(value: GradientStop[], offset: number): string {
  const stops = value;
  if (!stops.length) return "#000000";
  const target = clampOffset(offset);
  if (target <= stops[0].offset) return stops[0].color;
  const last = stops[stops.length - 1];
  if (target >= last.offset) return last.color;
  for (let index = 1; index < stops.length; index++) {
    const previous = stops[index - 1];
    const next = stops[index];
    if (target <= next.offset) {
      const span = next.offset - previous.offset;
      return mixGradientColor(
        previous.color,
        next.color,
        span === 0 ? 0 : (target - previous.offset) / span,
      );
    }
  }
  return last.color;
}

/**
 * CSS for the component's own preview and for demos: stops render left to right; the four-corner
 * value has no single native CSS gradient, so the default is a layered approximation. Consumers who
 * need another function (radial, conic, direction) build it from the value instead.
 */
export function formatGradient(value: GradientValue): string {
  if (Array.isArray(value) && value.length && isColorList(value)) {
    const [topLeft, topRight, bottomLeft, bottomRight] = value as CornerGradientValue;
    const fade = (color: string) => {
      const instance = Color(color);
      return `rgba(${Math.round(instance.red())}, ${Math.round(instance.green())}, ${Math.round(
        instance.blue(),
      )}, 0)`;
    };
    return [
      `radial-gradient(at 0% 0%, ${topLeft} 0%, ${fade(topLeft)} 70%)`,
      `radial-gradient(at 100% 0%, ${topRight} 0%, ${fade(topRight)} 70%)`,
      `radial-gradient(at 0% 100%, ${bottomLeft} 0%, ${fade(bottomLeft)} 70%)`,
      `radial-gradient(at 100% 100%, ${bottomRight} 0%, ${fade(bottomRight)} 70%)`,
      `linear-gradient(135deg, ${topLeft} 0%, ${bottomRight} 100%)`,
    ].join(", ");
  }
  const stops = [...(value as GradientStop[])]
    .sort((a, b) => a.offset - b.offset)
    .map((stop) => `${stop.color} ${round(stop.offset)}%`)
    .join(", ");
  return `linear-gradient(90deg, ${stops})`;
}
