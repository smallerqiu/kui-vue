import { defineComponent, onBeforeUnmount, ref, watch, type PropType } from "vue";
import { clamp } from "../utils/share";
import type { GradientStop } from "./types";

const round = (value: number) => Math.round(value * 100) / 100;
type StartEvent = Pick<
  MouseEvent,
  "clientX" | "clientY" | "currentTarget" | "preventDefault" | "stopPropagation"
>;
const touchStart = (event: TouchEvent): StartEvent => ({
  clientX: event.touches[0].clientX,
  clientY: event.touches[0].clientY,
  currentTarget: event.currentTarget,
  preventDefault: () => event.preventDefault(),
  stopPropagation: () => event.stopPropagation(),
});

export default defineComponent({
  name: "GradientStops",
  props: {
    disabled: Boolean,
    stops: { type: Array as PropType<GradientStop[]>, required: true },
    selected: { type: Number, default: 0 },
  },
  emits: {
    add: (offset: number) => typeof offset === "number",
    move: (index: number, offset: number) =>
      typeof index === "number" && typeof offset === "number",
    remove: (index: number) => typeof index === "number",
    select: (index: number) => typeof index === "number",
    activate: (index: number, element: HTMLElement) =>
      typeof index === "number" && element instanceof HTMLElement,
  },
  setup(props, { emit }) {
    const lane = ref<HTMLDivElement>();
    // The stop being dragged out of the bar; drawing it faded is the only sign of the pending delete.
    const removingIndex = ref(-1);
    let dragging = false;
    let moved = false;
    let dragIndex = -1;
    let dragElement: HTMLElement | null = null;
    let startX = 0;
    let startY = 0;
    let minOffset = 0;
    let maxOffset = 100;

    const offsetAt = (clientX: number) => {
      const rect = lane.value?.getBoundingClientRect();
      if (!rect || !rect.width) return 0;
      return round(clamp(((clientX - rect.left) / rect.width) * 100, 0, 100));
    };

    const stopDrag = () => {
      dragging = false;
      moved = false;
      dragElement = null;
      removingIndex.value = -1;
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleUp);
      document.removeEventListener("touchcancel", stopDrag);
    };

    const handleMove = (event: Pick<MouseEvent, "clientX" | "clientY">) => {
      if (!dragging) return;
      // A press that travels is a drag, not a click asking for the color panel.
      if (Math.abs(event.clientX - startX) > 2 || Math.abs(event.clientY - startY) > 2)
        moved = true;
      const offset = round(clamp(offsetAt(event.clientX), minOffset, maxOffset));
      emit("move", dragIndex, offset);
      removingIndex.value = event.clientY - startY > 24 && props.stops.length > 2 ? dragIndex : -1;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.cancelable) event.preventDefault();
      if (event.touches[0]) handleMove(event.touches[0]);
    };
    const handleUp = () => {
      if (!dragging) return;
      const index = dragIndex;
      const element = dragElement;
      const removing = removingIndex.value >= 0;
      const activating = !removing && !moved && element !== null;
      stopDrag();
      if (removing) emit("remove", index);
      else if (activating) emit("activate", index, element as HTMLElement);
    };

    const beginDrag = (
      index: number,
      event: StartEvent,
      min: number,
      max: number,
      element: HTMLElement | null,
    ) => {
      dragging = true;
      moved = false;
      dragIndex = index;
      dragElement = element;
      startX = event.clientX;
      startY = event.clientY;
      minOffset = min;
      maxOffset = max;
      document.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseup", handleUp);
      document.addEventListener("touchmove", handleTouchMove, { passive: false });
      document.addEventListener("touchend", handleUp);
      document.addEventListener("touchcancel", stopDrag);
    };

    // Empty space below the bar adds a stop; a press near an existing one grabs it instead.
    const startLaneDrag = (event: StartEvent) => {
      if (props.disabled) return;
      event.preventDefault();
      const offset = offsetAt(event.clientX);
      const near = props.stops.findIndex((stop) => Math.abs(stop.offset - offset) <= 2);
      let index = near;
      if (near < 0) {
        index = props.stops.filter((stop) => stop.offset < offset).length;
        emit("add", offset);
        emit("select", index);
      }
      const previous = props.stops[index - 1];
      const next = near >= 0 ? props.stops[index + 1] : props.stops[index];
      const low = previous ? previous.offset + 0.1 : 0;
      const high = next ? next.offset - 0.1 : 100;
      const current = near >= 0 ? props.stops[index].offset : offset;
      beginDrag(index, event, Math.min(low, current), Math.max(high, current), null);
    };

    const startStopDrag = (event: StartEvent, index: number) => {
      if (props.disabled) return;
      event.preventDefault();
      event.stopPropagation();
      emit("select", index);
      const previous = props.stops[index - 1];
      const next = props.stops[index + 1];
      const low = previous ? previous.offset + 0.1 : 0;
      const high = next ? next.offset - 0.1 : 100;
      const current = props.stops[index].offset;
      const element = event.currentTarget as HTMLElement;
      beginDrag(index, event, Math.min(low, current), Math.max(high, current), element);
    };

    const onKeydown = (event: KeyboardEvent, index: number) => {
      if (props.disabled) return;
      const stop = props.stops[index];
      const previous = props.stops[index - 1];
      const next = props.stops[index + 1];
      const low = previous ? previous.offset + 0.1 : 0;
      const high = next ? next.offset - 0.1 : 100;
      const current = stop.offset;
      const lower = Math.min(low, current);
      const upper = Math.max(high, current);
      const step = event.shiftKey ? 10 : 1;
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        const offset = stop.offset + (event.key === "ArrowRight" ? step : -step);
        emit("move", index, round(clamp(offset, lower, upper)));
      } else if (event.key === "Home" || event.key === "End") {
        event.preventDefault();
        emit("move", index, round(event.key === "Home" ? lower : upper));
      } else if ((event.key === "Delete" || event.key === "Backspace") && props.stops.length > 2) {
        event.preventDefault();
        emit("remove", index);
      } else if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        emit("select", index);
        emit("activate", index, event.currentTarget as HTMLElement);
      }
    };

    watch(
      () => props.disabled,
      (disabled) => {
        if (disabled) stopDrag();
      },
    );
    onBeforeUnmount(stopDrag);

    return () => (
      <div
        class="k-gradient-picker-stops"
        ref={lane}
        onMousedown={startLaneDrag}
        onTouchstart={(event: TouchEvent) => {
          if (event.touches.length === 1) startLaneDrag(touchStart(event));
        }}
      >
        {props.stops.map((stop, index) => (
          <span
            class={[
              "k-gradient-picker-stop",
              {
                "k-gradient-picker-stop-active": index === props.selected,
                "k-gradient-picker-stop-removing": index === removingIndex.value,
              },
            ]}
            style={{ left: `${stop.offset}%` }}
            role="slider"
            tabindex={props.disabled ? -1 : 0}
            aria-label={`Color stop ${index + 1}`}
            aria-haspopup="dialog"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={stop.offset}
            aria-disabled={props.disabled || undefined}
            onMousedown={(event: MouseEvent) => startStopDrag(event, index)}
            onTouchstart={(event: TouchEvent) => {
              if (event.touches.length === 1) startStopDrag(touchStart(event), index);
            }}
            onKeydown={(event: KeyboardEvent) => onKeydown(event, index)}
          >
            <span class="k-gradient-picker-stop-color" style={{ backgroundColor: stop.color }} />
          </span>
        ))}
      </div>
    );
  },
});
