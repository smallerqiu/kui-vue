import { camelcase } from './base';

/**
 * defineVueComponent: 工具函数用于定义 Vue 组件并附带 props 列表（用于自动收集 prop key）
 * @param {Function} setup
 * @param {string[]} props
 * @returns {Object}
 */
export function defineVueComponent(setup, props) {
  return {
    setup,
    name: setup.name,
    props,
  };
}

/**
 * withDefault: 提供默认 props 的 Proxy 封装
 * @param {Object} props
 * @param {Object} defaultProps
 * @returns {Proxy}
 */
export function withDefault(props, defaultProps) {
  return new Proxy(props, {
    get(target, key) {
      const value = target[key];
      if (value !== undefined) {
        return value;
      }
      return defaultProps[key];
    },
  });
}

/**
 * keys<T>() => (keysArray) => keysArray
 * 用于收集 props key 并保持类型安全（TS）
 * 在 JS 中可直接调用：keys()(['a', 'b'])
 */
export const keys = () => (props) => props;

/**
 * resolveProps: 将 props 对象中的 key 转为 camelCase，并处理 boolean 类型空字符串为 true
 * @param {Object} obj - 原始 props
 * @param {string[]} booleanKeys - 布尔类型的 props 列表
 * @returns {Object} 转换后的 camelCase props
 */
export const resolveProps = (obj, booleanKeys) => {
  const props = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const camelizeKey = camelcase(key);
      let value = obj[key];
      if (booleanKeys.includes(camelizeKey) && value === '') {
        value = true;
      }
      props[camelizeKey] = value;
    }
  }
  return props;
};