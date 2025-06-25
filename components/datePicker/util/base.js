/**
 * chunk the array
 * @param {Array} arr
 * @param {Number} size
 */
export function chunk(arr, size) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const result = [];
  const len = arr.length;
  let i = 0;
  size = size || len;
  while (i < len) {
    result.push(arr.slice(i, (i += size)));
  }
  return result;
}

export function last(array) {
  return Array.isArray(array) ? array[array.length - 1] : undefined;
}

/**
 * isObject
 * @param {*} obj
 * @returns {Boolean}
 */
export function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
 * pick object
 * @param {Object} obj
 * @param {Array|String} props
 */
export function pick(obj, props) {
  const res = {};
  if (!isPlainObject(obj)) return res;
  if (!Array.isArray(props)) {
    props = [props];
  }
  props.forEach((prop) => {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      res[prop] = obj[prop];
    }
  });
  return res;
}

/**
 * deep merge two object without merging array
 * @param {object} target
 * @param {object} source
 */
export function mergeDeep(target, source) {
  if (!isPlainObject(target)) {
    return {};
  }
  let result = target;
  if (isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      let value = source[key];
      const targetValue = target[key];
      if (isPlainObject(value) && isPlainObject(targetValue)) {
        value = mergeDeep(targetValue, value);
      }
      result = { ...result, [key]: value };
    });
  }
  return result;
}

/**
 * pad number with zero
 * @param {string|number} value
 * @returns {string}
 */
export function padNumber(value) {
  const num = parseInt(String(value), 10);
  return num < 10 ? `0${num}` : `${num}`;
}

/**
 * convert kebab-case to camelCase
 * @param {string} str
 * @returns {string}
 */
export function camelcase(str) {
  const camelizeRE = /-(\w)/g;
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
}


/* istanbul ignore file */
export function rafThrottle(fn) {
  let isRunning = false;
  return function (...args) {
    if (isRunning) return;
    isRunning = true;
    requestAnimationFrame(() => {
      isRunning = false;
      fn.apply(this, args);
    });
  };
}