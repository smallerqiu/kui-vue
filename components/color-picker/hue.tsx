import { clamp } from "@vueuse/core";
import { defineComponent, onBeforeUnmount, onMounted, ref, watch } from "vue";

export default defineComponent({
  name: "Hue",
  props: {
    hue: { type: Number, default: 0 },
  },
  emits: ["updateHue"],
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
      // 190 是 CSS 中定义的宽度，减去圆点宽度的一半
      dotPos.value = (props.hue / 360) * 190 - 7;
    };

    const handleMove = (e: MouseEvent) => {
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
      isMousePressed.value = true;
      handleMove(e);
      document.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseup", onMouseUp);
      e.preventDefault();
    };

    watch(() => props.hue, updatePos);
    onMounted(() => {
      renderPaint();
      updatePos();
    });

    onBeforeUnmount(onMouseUp);

    return () => (
      <div class="k-color-picker-hue-box">
        <canvas 
          class="k-color-picker-hue" 
          width={190} 
          height={8} 
          ref={refPaint} 
          onMousedown={onMouseDown} 
        />
        <span 
          class="k-color-picker-hue-dot" 
          style={{ left: `${dotPos.value}px` }} 
        />
      </div>
    );
  },
});