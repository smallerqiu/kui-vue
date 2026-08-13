export const getPosition = (e: MouseEvent | TouchEvent): number[] => {
  if ("touches" in e) {
    return [e.touches[0].clientX, e.touches[0].clientY];
  }
  return [e.clientX, e.clientY];
};
