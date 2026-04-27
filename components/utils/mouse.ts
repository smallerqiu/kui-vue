export const getPosition = (e: MouseEvent | TouchEvent): number[] => {
  let clientX = 0,
    clientY = 0;
  if ("touches" in e) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else {
    clientX = e.clientX;
    clientY = e.clientY;
  }
  return [clientX, clientY];
};
