import { onBeforeUnmount, ref, watch, type Ref } from "vue";

export const useSkeletonLoading = (
  loading: () => boolean | undefined,
  delay: () => number
): Ref<boolean> => {
  const show = ref(!!loading());
  let timer: ReturnType<typeof setTimeout> | undefined;

  const clearTimer = () => {
    if (timer !== undefined) {
      clearTimeout(timer);
      timer = undefined;
    }
  };

  watch(loading, (value) => {
    clearTimer();
    if (value) {
      show.value = true;
      return;
    }

    const duration = Math.max(0, delay());
    if (duration === 0) {
      show.value = false;
    } else {
      timer = setTimeout(() => {
        show.value = false;
        timer = undefined;
      }, duration);
    }
  });

  onBeforeUnmount(clearTimer);
  return show;
};
