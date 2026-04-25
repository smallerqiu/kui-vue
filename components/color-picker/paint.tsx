import { clamp } from "@vueuse/core";
import Color, { type ColorObject } from "color";
import { defineComponent, onMounted, reactive, ref, watch, type PropType } from "vue";

export default defineComponent({
  name: "Paint",
  props: {
    hue: { type: Number, default: 0 },
    modelValue: { type: [String, Object] as PropType<any>, required: true },
    onUpdateRGB: Function as PropType<(color: ColorObject) => void>,
  },
  setup(props, { emit }) {
    const refPaint = ref<HTMLCanvasElement | null>(null);
    const dotPos = reactive({ x: 0, y: 0 });

    const renderPaint = () => {
      const canvas = refPaint.value;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;

      const { width, height } = canvas;
      ctx.fillStyle = `hsl(${props.hue}, 100%, 50%)`;
      ctx.fillRect(0, 0, width, height);

      const whiteGrad = ctx.createLinearGradient(0, 0, width, 0);
      whiteGrad.addColorStop(0, "#fff");
      whiteGrad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = whiteGrad;
      ctx.fillRect(0, 0, width, height);

      const blackGrad = ctx.createLinearGradient(0, 0, 0, height);
      blackGrad.addColorStop(0, "rgba(0,0,0,0)");
      blackGrad.addColorStop(1, "#000");
      ctx.fillStyle = blackGrad;
      ctx.fillRect(0, 0, width, height);
    };

    const updatePos = () => {
      const hsv = Color(props.modelValue).hsv().object();
      dotPos.x = (hsv.s / 100) * 234 - 7;
      dotPos.y = (1 - hsv.v / 100) * 136 - 7;
    };

    const handleMove = (e: MouseEvent) => {
      const canvas = refPaint.value;
      if (!canvas) return;
      const { width, height, left, top } = canvas.getBoundingClientRect();
      const x = clamp(e.clientX - left, 0, width);
      const y = clamp(e.clientY - top, 0, height);

      const s = (x / width) * 100;
      const v = (1 - y / height) * 100;
      const color = Color().hsv(props.hue, s, v);
      emit("updateRGB", color.rgb().object());
    };

    const onMouseDown = (e: MouseEvent) => {
      handleMove(e);
      document.addEventListener("mousemove", handleMove);
      document.addEventListener(
        "mouseup",
        () => {
          document.removeEventListener("mousemove", handleMove);
        },
        { once: true }
      );
    };

    watch([() => props.hue, () => props.modelValue], () => {
      renderPaint();
      updatePos();
    });

    onMounted(() => {
      renderPaint();
      updatePos();
    });

    return () => (
      <div class="k-color-picker-paint-container">
        <canvas
          class="k-color-picker-paint"
          width={234}
          height={136}
          ref={refPaint}
          onMousedown={onMouseDown}
        />
        <span
          class="k-color-picker-paint-dot"
          style={{ left: `${dotPos.x}px`, top: `${dotPos.y}px` }}
        />
      </div>
    );
  },
});
