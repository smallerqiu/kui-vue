/**
 * onOk / validate 这类回调允许返回 Promise，组件得先认出 thenable 才决定要不要挂 loading。
 * 两个仓库这份实现逐字符相同。
 */
export function isPromiseLike(value: unknown): value is PromiseLike<unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as PromiseLike<unknown>).then === "function"
  );
}
