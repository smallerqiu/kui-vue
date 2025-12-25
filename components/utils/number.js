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
    if (val === null || val === undefined || val === "") {
      throw new Error();
    }
    return new Big(val);
  } catch (e) {
    console.error(`Slider Error: [${name}] is an invalid number:`, val);
    return new Big(0); // 降级处理
  }
};

export const getClosestStep = (val, { min, max, step, marks }) => {
  const bMin = toBigSafe(min);
  const bMax = toBigSafe(max);
  const bVal = toBigSafe(val);

  const markValues = marks ? Object.keys(marks).map(Number) : [];

  // 如果 step 为 null，强制吸附到最近的 mark 点
  if (step === null || step === undefined) {
    if (markValues.length > 0) {
      // 在 marks 数组中寻找绝对值差最小的点
      const closestMark = markValues.reduce((prev, curr) => {
        return Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev;
      });
      return closestMark;
    }
    // 如果既没有 step 也没有 marks，则不做吸附，直接返回经边界约束的值
    const clampedVal = bVal.gt(bMax) ? bMax : bVal.lt(bMin) ? bMin : bVal;
    return Number(clampedVal.toFixed());
  }

  // 存在步长 step
  const bStep = toBigSafe(step || 1);
  const diff = bVal.minus(bMin);
  const stepCount = Math.round(Number(diff.div(bStep)));
  let closest = bMin.plus(bStep.times(stepCount));

  // 同时对比 step 点和 marks 点，谁近取谁
  if (markValues.length > 0) {
    markValues.forEach((m) => {
      if (Math.abs(m - val) < Math.abs(Number(closest.minus(val)))) {
        closest = new Big(m);
      }
    });
  }

  // 边界约束
  if (closest.gt(bMax)) return Number(bMax.toFixed());
  if (closest.lt(bMin)) return Number(bMin.toFixed());

  return Number(closest.toFixed());
};
