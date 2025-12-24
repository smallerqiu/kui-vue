export function isEmpty(value) {
  return (
    value == null || // null 或 undefined
    (typeof value === "string" && value.trim() === "") || // 空字符串
    (Array.isArray(value) && value.length === 0) || // 空数组
    (typeof value === "object" &&
      !Array.isArray(value) &&
      Object.keys(value).length === 0) // 空对象
  );
}

export const clamp = (v, min, max) => Math.min(Math.max(v, min), max);



import Big from "big.js";

export const isRealNum = (val) => {
  if (val === null || val === "" || Array.isArray(val)) return false;
  try {
    new Big(val);
    return true;
  } catch (e) {
    return false;
  }
};

export const normalize = (val, precision) => {
  if (!isRealNum(val)) return "";
  const b = new Big(val);
  // precision 为空时返回原始精度字符串，否则强制截断/四舍五入
  return precision !== undefined ? b.toFixed(precision) : b.toFixed();
};

export const isValidBig = (val) => {
  if (val === null || val === undefined || val === "") return false;

  // 过滤掉只有符号或只有小数点的中间状态
  const str = String(val).trim();
  if (str === "-" || str === "." || str === "-.") return false;

  try {
    new Big(str);
    return true;
  } catch (e) {
    return false;
  }
}; 