export const loadImage = (src, callback, err) => {
  if (!src) return;

  let image = new Image();
  let isCompleted = false;

  const cleanup = () => {
    if (isCompleted) return;
    isCompleted = true;
    image.onload = null;
    image.onerror = null;
    image = null;
  };

  image.onload = () => {
    if (!isCompleted) {
      const { width, height } = image;
      callback && callback({ width, height });
    }
    cleanup();
  };

  image.onerror = () => {
    if (!isCompleted) {
      err && err();
    }
    cleanup();
  };

  image.src = src;
};
