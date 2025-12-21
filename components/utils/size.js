export const sizeMap = ["small", "default", "large", "middle"];

export const filterSize = (size) => {
  return sizeMap.includes(size) ? size : null;
};
