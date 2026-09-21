import { createFrameScheduler, isEventOutside } from "./popup";
import { onMounted, onUnmounted, ref, watch, type Ref } from "vue";
import type { PlacementsType } from "../const/types";
import { setPlacement } from "./placement";

export function usePopoverPosition(
  props: { placement: PlacementsType; panelOnly?: boolean },
  visible: Ref<boolean>,
) {
  const refPopper = ref<HTMLElement | null>(null);
  const refSelection = ref<HTMLElement | null>(null);
  const left = ref(0);
  const top = ref(0);
  const currentPlacement = ref(props.placement);
  const transOrigin = ref("bottom");
  const positionRaf = createFrameScheduler();
  const updatePosition = () => {
    positionRaf.schedule(() => {
      if (!visible.value) return;
      setPlacement({ refSelection, refPopper, currentPlacement, transOrigin, top, left });
    });
  };
  onMounted(() => {
    if (props.panelOnly) return;
    updatePosition();
    window.addEventListener("resize", updatePosition);
    document.addEventListener("scroll", updatePosition, true);
  });
  onUnmounted(() => {
    positionRaf.cancel();
    document.removeEventListener("scroll", updatePosition, true);
    window.removeEventListener("resize", updatePosition);
  });
  watch(
    () => props.placement,
    (placement) => {
      currentPlacement.value = placement;
      if (visible.value) updatePosition();
    },
  );
  return { refPopper, refSelection, left, top, currentPlacement, transOrigin, updatePosition };
}

export function usePopoverOutsideClick(
  visible: Ref<boolean>,
  panelOnly: () => boolean | undefined,
  refSelection: Ref<HTMLElement | null>,
  refPopper: Ref<HTMLElement | null>,
  updateShow: (value: boolean) => void,
) {
  const outsideClick = (event: MouseEvent) => {
    if (isEventOutside(event, [refSelection.value, refPopper.value])) updateShow(false);
  };
  watch(
    () => visible.value && !panelOnly(),
    (active, _previous, onCleanup) => {
      if (!active || typeof document === "undefined") return;
      document.addEventListener("click", outsideClick);
      onCleanup(() => document.removeEventListener("click", outsideClick));
    },
    { immediate: true },
  );
}
