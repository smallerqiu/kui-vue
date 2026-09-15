export type CssLength = number | string | null | undefined;

const numericLengthPattern = /^-?(?:\d+\.?\d*|\.\d+)$/;

export const toCssLength = (value: CssLength): string | undefined => {
  if (typeof value === "number") return Number.isFinite(value) ? `${value}px` : undefined;
  if (typeof value !== "string") return undefined;

  const normalized = value.trim();
  if (!normalized) return undefined;
  return numericLengthPattern.test(normalized) ? `${normalized}px` : normalized;
};
