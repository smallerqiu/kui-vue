import { onBeforeUnmount, ref, watch, type Ref } from "vue";

export const useSkeletonLoading = (
  loading: () => boolean | undefined,
  delay: () => number,
): Ref<boolean> => {
  const show = ref(false);
  let timer: ReturnType<typeof setTimeout> | undefined;

  const clearTimer = () => {
    if (timer !== undefined) {
      clearTimeout(timer);
      timer = undefined;
    }
  };

  watch(
    [loading, delay],
    ([value, rawDelay]) => {
      clearTimer();
      if (!value) {
        show.value = false;
        return;
      }
      if (show.value) return;

      const duration = Number.isFinite(rawDelay) ? Math.max(0, rawDelay) : 0;
      if (duration === 0) {
        show.value = true;
        return;
      }
      timer = setTimeout(() => {
        show.value = true;
        timer = undefined;
      }, duration);
    },
    { immediate: true },
  );

  onBeforeUnmount(clearTimer);
  return show;
};
