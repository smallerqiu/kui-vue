import Color from "color";
import { defineComponent, onBeforeUnmount, onMounted, ref, watch, type PropType } from "vue";
import { clamp } from "../utils/share";

export default defineComponent({
  name: "Alpha",
  props: {
    modelValue: { type: [String, Object] as PropType<Parameters<typeof Color>[0]>, required: true },
  },
  emits: {
    updateAlpha: (alpha: number) => typeof alpha === "number",
  },
  setup(props, { emit }) {
    const dotPos = ref(0);
    const refPaint = ref<HTMLCanvasElement | null>(null);
    const isMousePressed = ref(false);

    const renderPaint = () => {
      const canvas = refPaint.value;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { width, height } = canvas;
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      const c = Color(props.modelValue).rgb();
      gradient.addColorStop(0, `rgba(${c.red()}, ${c.green()}, ${c.blue()}, 0)`);
      gradient.addColorStop(1, `rgba(${c.red()}, ${c.green()}, ${c.blue()}, 1)`);

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    const updatePos = () => {
      const canvas = refPaint.value;
      if (!canvas) return;
      const a = Color(props.modelValue).alpha();
      const width = canvas.getBoundingClientRect().width || canvas.width;
      dotPos.value = a * width - 7;
    };

    const handleMove = (e: MouseEvent) => {
      const canvas = refPaint.value;
      if (!canvas) return;
      const { width, left } = canvas.getBoundingClientRect();
      const x = clamp(e.clientX - left, 0, width);
      const alpha = parseFloat((x / width).toFixed(2));
      emit("updateAlpha", alpha);
    };

    const onMouseDown = (e: MouseEvent) => {
      isMousePressed.value = true;
      handleMove(e);
      document.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    const onMouseUp = () => {
      isMousePressed.value = false;
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
    const onKeydown = (event: KeyboardEvent) => {
      const current = Color(props.modelValue).alpha();
      const step = event.shiftKey ? 0.1 : 0.01;
      let value = current;
      if (event.key === "ArrowRight" || event.key === "ArrowUp") value += step;
      else if (event.key === "ArrowLeft" || event.key === "ArrowDown") value -= step;
      else if (event.key === "Home") value = 0;
      else if (event.key === "End") value = 1;
      else return;
      event.preventDefault();
      emit("updateAlpha", Number(clamp(value, 0, 1).toFixed(2)));
    };

    watch(
      () => props.modelValue,
      () => {
        renderPaint();
        updatePos();
      },
    );

    onMounted(() => {
      renderPaint();
      updatePos();
    });

    onBeforeUnmount(onMouseUp);

    return () => (
      <div class="k-color-picker-alpha-box">
        <canvas
          class="k-color-picker-alpha"
          width={190}
          height={8}
          ref={refPaint}
          role="slider"
          tabindex={0}
          aria-label="Opacity"
          aria-valuemin={0}
          aria-valuemax={1}
          aria-valuenow={Color(props.modelValue).alpha()}
          onMousedown={onMouseDown}
          onKeydown={onKeydown}
        />
        <span
          class="k-color-picker-alpha-dot"
          style={{ left: `${dotPos.value}px`, backgroundColor: Color(props.modelValue).string() }}
        />
      </div>
    );
  },
});
