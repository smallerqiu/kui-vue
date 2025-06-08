import { defineComponent, reactive, ref, onMounted, watch } from "vue";
import Color from "color";
import { clamp } from "@vueuse/core";
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
    const currentColor = ref(ps.value || "#000000");
    const dotColor = ref(null);
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
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      const { width } = canvas;
      const x = clamp(
        e.clientX - canvas.getBoundingClientRect().left,
        0,
        width - 0.1
      );
      dotPos.value = x - 7;
      const [r, g, b, alpha] = ctx.getImageData(x, 1, 1, 1).data;
      // updatePainter("HUE", hue);
      // currentColor.value = Color({ r, g, b, alpha }).hsv();
      const color = Color({ r, g, b, alpha }).hsl();
      dotColor.value = color;
      emit("updateHue", color.hue());
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
        gradient = ctx.createLinearGradient(0, 0, width, height);

      for (let i = 0; i <= 1; i += setp) {
        gradient.addColorStop(i, `hsl(${360 * i},100%,50%)`);
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };
    const updatePos = () => {
      if (currentColor.value) {
        const canvas = refPaint.value;
        let { width } = canvas;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        const H = Color(currentColor.value).hsv().hue();
        const x = clamp(Math.round((width * H) / 360), 0, width);

        // if (x > 0) {
        dotPos.value = x - 7;
        // console.log("x", x);

        const [r, g, b, alpha] = ctx.getImageData(x, 1, 1, 1).data;
        dotColor.value = Color({ r, g, b, alpha }).hex();
        // }
        // currentColor.value = Color({ r, g, b, alpha }).hex();
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
              backgroundColor: dotColor.value,
            }}></span>
          <canvas {...prop} />
        </div>
      );
    };
  },
});
