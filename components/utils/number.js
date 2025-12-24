import Big from "big.js";
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
  return precision !== undefined ? b.toFixed(precision) : b.toFixed();
};

export const isValidBig = (val) => {
  if (val === null || val === undefined || val === "") return false;

  const str = String(val).trim();
  if (str === "-" || str === "." || str === "-.") return false;

  try {
    new Big(str);
    return true;
  } catch (e) {
    return false;
  }
};

const toBigSafe = (val, name) => {
  try {
    if (val === null || val === undefined || val === '') {
      throw new Error();
    }
    return new Big(val);
  } catch (e) {
    console.error(`Slider Error: [${name}] is an invalid number:`, val);
    return new Big(0); // 降级处理
  }
};

export const getClosestStep = (val, { min, max, step, marks }) => {
  const safeStep = (step && step > 0) ? step : 1;

  const bMin = toBigSafe(min, 'min');
  const bMax = toBigSafe(max, 'max');
  const bVal = toBigSafe(val, 'val');
  const bStep = toBigSafe(safeStep, 'step');

  // 公式: min + round((val - min) / step) * step
  const diff = bVal.minus(bMin);
  
  const stepCount = Math.round(Number(diff.div(bStep)));
  let closest = bMin.plus(bStep.times(stepCount));

  // 如果存在 marks，检查是否有 marks 比当前 step 计算出的点更近
  if (marks && Object.keys(marks).length > 0) {
    const markValues = Object.keys(marks).map(m => Number(m));
    markValues.forEach(m => {
      if (Math.abs(m - val) < Math.abs(Number(closest.minus(val)))) {
        closest = new Big(m);
      }
    });
  }

  // 4. 边界约束
  if (closest.gt(bMax)) return Number(bMax.toFixed());
  if (closest.lt(bMin)) return Number(bMin.toFixed());

  return Number(closest.toFixed());
};
