import { defineComponent, reactive, ref, onMounted, watch } from "vue";
import {
  canvasHelper,
  limit,
  hslToRgb,
  rgbToHsl,
  parseColor,
  rgbToHex,
  cssColorToRgba,
} from "./canvasHelper";
export default defineComponent({
  name: "Hue",
  props: {
    value: String,
  },
  setup(ps, { emit }) {
    const dotPos = ref(0);
    const refPaint = ref(null);
    const isMousePressed = ref(false);
    // const painter = ref(null);
    const currentColor = ref(ps.value, "#000000");
    watch(
      () => ps.value,
      (val) => {
        currentColor.value = val;
        updatePos();
      }
    );

    onMounted(() => {
      // painter.value = canvasHelper(refPaint.value);
      renderPaint();
      updatePos();
    });

    const onMouseMove = (e) => {
      const canvas = refPaint.value;
      const { width } = canvas;
      const x = limit(
          e.clientX - canvas.getBoundingClientRect().left,
          0,
          width
        ),
        hue = Math.round((x * 360) / width);
      dotPos.value = x - 7;
      const [r, g, b, a] = ctx.getImageData(hue, 1, 1, 1).data;
      // updatePainter("HUE", hue);
      currentColor.value = rgbToHex(r, g, b);
      emit("update:value", currentColor.value);
    };

    const onMouseUp = () => {
      setTimeout(() => {
        isMousePressed.value = false;
      }, 300);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMousedown = (e) => {
      isMousePressed.value = true;
      onMouseMove(e);
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      e.preventDefault();
    };

    const renderPaint = () => {
      const canvas = refPaint.value;
      const ctx = canvas.getContext("2d", { willReadFrequently: true }),
        setp = 1 / 360,
        width = canvas.width,
        height = canvas.height,
        gradient = ctx.createLinearGradient(0, 0, width, 0);

      for (let i = 0; i <= 1; i += setp) {
        gradient.addColorStop(i, `hsl(${360 * i},100%,50%)`);
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };
    const updatePos = () => {
      if (currentColor.value) {
        const [r, g, b, a] = parseColor(currentColor.value, "rgba");
        const [H, , ,] = rgbToHsl(r, g, b);
        const x = (190 * H) / 360;
        dotPos.value = x - 7;

        const [r1, g1, b1, a1] = ctx.getImageData(x, 1, 1, 1).data;
        currentColor.value = rgbToHex(r1, g1, b1);
      }
    };
    return () => {
      let prop = {
        class: "k-color-picker-hue",
        width: 190,
        height: 8,
        ref: refPaint,
        onMousedown: onMousedown,
      };
      return (
        <div class="k-color-picker-slider-hue">
          <span
            class="k-color-picker-hue-dot"
            style={{
              left: dotPos.value + "px",
              backgroundColor: currentColor.value,
            }}></span>
          <canvas {...prop} />
        </div>
      );
    };
  },
});
