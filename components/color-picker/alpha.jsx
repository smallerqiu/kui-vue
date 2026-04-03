import { defineComponent, ref, onMounted, watch, onBeforeUnmount, type PropType } from "vue";
import Color from "color";
import { clamp } from "@vueuse/core";

export default defineComponent({
  name: "Alpha",
  props: {
    modelValue: { type: [String, Object] as PropType<any>, required: true },
  },
  emits: ["updateAlpha"],
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
      const a = Color(props.modelValue).alpha();
      dotPos.value = a * 190 - 7;
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

    watch(() => props.modelValue, () => {
      renderPaint();
      updatePos();
    });

    onMounted(() => {
      renderPaint();
      updatePos();
    });

    onBeforeUnmount(onMouseUp);

    return () => (
      <div class="k-color-picker-alpha-box">
        <canvas class="k-color-picker-alpha" width={190} height={8} ref={refPaint} onMousedown={onMouseDown} />
        <span class="k-color-picker-alpha-dot" style={{ left: `${dotPos.value}px` }} />
      </div>
    );
  },
});