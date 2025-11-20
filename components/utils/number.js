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

//正负,小数,科学计数法
export function isValidNumber(number) {
  if (isEmpty(number)) return false;
  const str = String(number).trim();
  return /^[+-]?((\d+(\.\d*)?)|(\.\d+))([eE][+-]?\d+)?$/.test(str);
}
// 将数值转为字符串并展开科学计数法
export function toDecimalString(num) {
  const str = String(num);
  if (!/e/i.test(str)) return num;
  return Number(num)
    .toFixed(20)
    .replace(/\.?0+$/, "");
}
// console.log(toDecimalString(1e3-10))

// 获取小数长度
export function getDecimalLength(numStr) {
  const parts = numStr.split(".");
  return parts[1] ? parts[1].length : 0;
}

// 加法
export function add(a, b) {
  const aStr = toDecimalString(a);
  const bStr = toDecimalString(b);
  const maxLen = Math.max(getDecimalLength(aStr), getDecimalLength(bStr));
  const factor = Math.pow(10, maxLen);
  const result =
    (Math.round(Number(aStr) * factor) + Math.round(Number(bStr) * factor)) /
    factor;
  return formatSmart(result);
}
// 判断结果是否为科学计数法
export function isScientificNotation(num) {
  return /e/i.test(String(num));
}
// 智能格式化结果
function formatSmart(num) {
  return isScientificNotation(num) ? toDecimalString(num) : num;
}
// 减法
export function subtract(a, b) {
  const aStr = toDecimalString(a);
  const bStr = toDecimalString(b);
  const maxLen = Math.max(getDecimalLength(aStr), getDecimalLength(bStr));
  const factor = Math.pow(10, maxLen);
  const result =
    (Math.round(Number(aStr) * factor) - Math.round(Number(bStr) * factor)) /
    factor;
  return formatSmart(result);
}

// 乘法
export function multiply(a, b) {
  const aStr = toDecimalString(a);
  const bStr = toDecimalString(b);
  const totalLen = getDecimalLength(aStr) + getDecimalLength(bStr);
  const intA = Number(aStr.replace(".", ""));
  const intB = Number(bStr.replace(".", ""));
  const result = (intA * intB) / Math.pow(10, totalLen);
  return formatSmart(result);
}

export function toFixed(value, n) {
  const rounded = Number(value).toFixed(n);
  return isScientificNotation(value) ? rounded : Number(rounded);
}

export const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

