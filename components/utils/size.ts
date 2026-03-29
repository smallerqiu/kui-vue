export const sizeMap = ["small", "default", "large", "middle"];

export const filterSize = (size:string) => {
  return sizeMap.includes(size) ? size : null;
};
