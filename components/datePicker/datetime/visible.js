import { ref, computed } from 'vue';

export function useTimePanelVisible(props) {
  const defaultTimeVisible = ref(false);

  const closeTimePanel = () => {
    defaultTimeVisible.value = false;
    props.onShowTimePanelChange?.(false);
  };

  const openTimePanel = () => {
    defaultTimeVisible.value = true;
    props.onShowTimePanelChange?.(true);
  };

  const timeVisible = computed(() => {
    return typeof props.showTimePanel === 'boolean'
      ? props.showTimePanel
      : defaultTimeVisible.value;
  });

  return {
    timeVisible,
    openTimePanel,
    closeTimePanel,
  };
}