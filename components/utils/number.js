function isEmpty(num) {
  return num === "" || num === null || num === undefined;
}

//正负,小数,科学技术法
function isValidNumber(number) {
  if (isEmpty(number)) return false;
  const str = String(number).trim();
  return /^[+-]?((\d+(\.\d*)?)|(\.\d+))([eE][+-]?\d+)?$/.test(str);
}
// 将数值转为字符串并展开科学计数法
function toDecimalString(num) {
  const str = String(num);
  if (!/e/i.test(str)) return str;
  return Number(num)
    .toFixed(20)
    .replace(/\.?0+$/, "");
}

// 获取小数长度
function getDecimalLength(numStr) {
  const parts = numStr.split(".");
  return parts[1] ? parts[1].length : 0;
}

// 加法
function add(a, b) {
  const aStr = toDecimalString(a);
  const bStr = toDecimalString(b);
  const maxLen = Math.max(getDecimalLength(aStr), getDecimalLength(bStr));
  const factor = Math.pow(10, maxLen);
  const result = (Math.round(Number(aStr) * factor) + Math.round(Number(bStr) * factor)) / factor;
  return formatSmart(result);
}
// 判断结果是否为科学计数法
function isScientificNotation(num) {
  return /e/i.test(String(num));
}
// 智能格式化结果
function formatSmart(num) {
  return isScientificNotation(num) ? toDecimalString(num) : num;
}
// 减法
function subtract(a, b) {
  const aStr = toDecimalString(a);
  const bStr = toDecimalString(b);
  const maxLen = Math.max(getDecimalLength(aStr), getDecimalLength(bStr));
  const factor = Math.pow(10, maxLen);
  const result = (Math.round(Number(aStr) * factor) - Math.round(Number(bStr) * factor)) / factor;
  return formatSmart(result);
}

// 乘法
function multiply(a, b) {
  const aStr = toDecimalString(a);
  const bStr = toDecimalString(b);
  const totalLen = getDecimalLength(aStr) + getDecimalLength(bStr);
  const intA = Number(aStr.replace(".", ""));
  const intB = Number(bStr.replace(".", ""));
  const result = (intA * intB) / Math.pow(10, totalLen);
  return formatSmart(result);
}

function toFixed(value, n) {
  const rounded = Number(value).toFixed(n);
  return isScientificNotation(value) ? rounded : Number(rounded);
}

export { add, subtract, toFixed, isValidNumber, isEmpty, multiply };
