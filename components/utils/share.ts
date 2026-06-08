export const isClient = typeof window !== "undefined" && typeof document !== "undefined";
// export const isWorker = typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
export const isDef = <T = any>(val?: T): val is T => typeof val !== "undefined";
export const notNullish = <T = any>(val?: T | null | undefined): val is T => val != null;
export const assert = (condition: boolean, ...infos: any[]) => {
  if (!condition) console.warn(...infos);
};
const toString = Object.prototype.toString;
export const isObject = (val: any): val is object => toString.call(val) === "[object Object]";
export const now = () => Date.now();
export const timestamp = () => +Date.now();
export const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));
export const noop = () => {};
export const rand = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const hasOwn = <T extends object, K extends keyof T>(val: T, key: K): key is K =>
  Object.hasOwn(val, key);

export async function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.error("Clipboard API 复制失败:", err);
    }
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;

  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);

  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);
    return successful;
  } catch (err) {
    document.body.removeChild(textArea);
    return false;
  }
}
