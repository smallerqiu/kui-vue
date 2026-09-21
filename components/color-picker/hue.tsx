import { defineComponent, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { clamp } from "../utils/share";
export default defineComponent({
  name: "Hue",
  props: {
    disabled: Boolean,
    hue: { type: Number, default: 0 },
  },
  emits: {
    updateHue: (hue: number) => typeof hue === "number",
  },
  setup(props, { emit }) {
    const dotPos = ref(0);
    const refPaint = ref<HTMLCanvasElement | null>(null);
    const isMousePressed = ref(false);

    const renderPaint = () => {
      const canvas = refPaint.value;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;

      const { width, height } = canvas;
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      for (let i = 0; i <= 360; i += 10) {
        gradient.addColorStop(i / 360, `hsl(${i}, 100%, 50%)`);
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    const updatePos = () => {
      const canvas = refPaint.value;
      if (!canvas) return;
      const width = canvas.getBoundingClientRect().width || canvas.width;
      dotPos.value = (props.hue / 360) * width - 7;
    };

    const handleMove = (e: MouseEvent) => {
      if (props.disabled) return;
      const canvas = refPaint.value;
      if (!canvas) return;
      const { width, left } = canvas.getBoundingClientRect();
      const x = clamp(e.clientX - left, 0, width);
      const newHue = (x / width) * 360;
      emit("updateHue", Math.round(newHue));
    };

    const onMouseUp = () => {
      isMousePressed.value = false;
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseDown = (e: MouseEvent) => {
      if (props.disabled) return;
      isMousePressed.value = true;
      handleMove(e);
      document.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseup", onMouseUp);
      e.preventDefault();
    };
    watch(
      () => props.disabled,
      (disabled) => {
        if (disabled) onMouseUp();
      },
    );
    const onKeydown = (event: KeyboardEvent) => {
      if (props.disabled) return;
      const step = event.shiftKey ? 10 : 1;
      let value = props.hue;
      if (event.key === "ArrowRight" || event.key === "ArrowUp") value += step;
      else if (event.key === "ArrowLeft" || event.key === "ArrowDown") value -= step;
      else if (event.key === "Home") value = 0;
      else if (event.key === "End") value = 360;
      else return;
      event.preventDefault();
      emit("updateHue", clamp(value, 0, 360));
    };

    watch(() => props.hue, updatePos);
    onMounted(() => {
      renderPaint();
      updatePos();
    });

    onBeforeUnmount(onMouseUp);

    return () => (
      <div class="k-color-picker-slider-hue">
        <canvas
          class="k-color-picker-hue"
          width={190}
          height={8}
          ref={refPaint}
          role="slider"
          tabindex={props.disabled ? -1 : 0}
          aria-disabled={props.disabled || undefined}
          aria-label="Hue"
          aria-valuemin={0}
          aria-valuemax={360}
          aria-valuenow={Math.round(props.hue)}
          onMousedown={onMouseDown}
          onKeydown={onKeydown}
        />
        <span class="k-color-picker-hue-dot" style={{ left: `${dotPos.value}px` }} />
      </div>
    );
  },
});
