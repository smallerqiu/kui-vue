interface ImageInfo {
  width: number;
  height: number;
}
export const loadImage = (src: string, callback?: (info: ImageInfo) => void, err?: () => void) => {
  if (!src) return () => {};

  let image: HTMLImageElement | null = new Image();
  let isCompleted = false;

  const cleanup = () => {
    if (isCompleted || !image) return;
    isCompleted = true;
    image.onload = null;
    image.onerror = null;
    image = null;
  };

  image.onload = () => {
    if (!isCompleted && image) {
      const { naturalWidth: width, naturalHeight: height } = image;
      callback?.({ width, height });
    }
    cleanup();
  };

  image.onerror = () => {
    if (!isCompleted) {
      err?.();
    }
    cleanup();
  };

  image.src = src;
  return cleanup;
};
