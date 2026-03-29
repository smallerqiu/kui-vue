export const sizeMap = ["small", "default", "large", "middle"];

export const filterSize = (size?: string | null) => {
  return size && sizeMap.includes(size) ? size : null;
};
