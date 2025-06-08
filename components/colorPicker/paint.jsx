import { defineComponent, reactive, ref, onMounted, watch } from "vue";
import { clamp } from "@vueuse/core";
import Color from "color";
export default defineComponent({
  name: "Paint",
  props: {
    value: String,
  },
  setup(ps, { emit }) {
    const refPaint = ref(null);
    const dotPos = reactive({ x: 0, y: 0 });
    const isMousePressed = ref(false);
    const currentColor = ref(ps.value || "#000000");
    // const painter = ref(null);

    watch(
      () => ps.value,
      (val) => {
        currentColor.value = val;
        renderPaint();
        updatePos();
      }
    );

    onMounted(() => {
      renderPaint();
      updatePos();
    });

    const renderPaint = () => {
      const canvas = refPaint.value;
      const { width, height } = canvas;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });

      const hue = Color(currentColor.value).hue();

      const back = ctx.createLinearGradient(1, 1, 1, height - 1);
      back.addColorStop(0, "white");
      back.addColorStop(1, "black");

      const colorGradient = ctx.createLinearGradient(1, 0, width - 1, 0);
      colorGradient.addColorStop(0, `hsla(${hue},100%,50%,0)`);
      colorGradient.addColorStop(1, `hsla(${hue},100%,50%,1)`);
      ctx.fillStyle = back;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = colorGradient;
      ctx.globalCompositeOperation = "multiply";
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";
    };
    const updatePos = () => {
      if (currentColor.value) {
        const [h, s, v] = Color(currentColor.value).hsv().array();
        const { width, height } = refPaint.value;

        const x = (s / 100) * width; // s 为 0~100，映射到宽度
        const y = height - (v / 100) * height; // v 为 0~100，映射到高度（注意你是从上白到下黑）
        dotPos.x = x - 7 + 10;
        dotPos.y = y - 7 + 10;
      }
    };
    const onMouseMove = (e) => {
      const canvas = refPaint.value;
      const { width, height } = canvas;
      const x = clamp(
          e.clientX - canvas.getBoundingClientRect().left,
          0,
          width - 0.1
        ),
        y = clamp(
          e.clientY - canvas.getBoundingClientRect().top,
          0,
          height - 0.1
        );
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      const [r, g, b, alpha] = ctx.getImageData(x, y, 1, 1).data;

      const color = Color({ r, g, b, alpha }).rgb();

      dotPos.x = x - 7 + 10;
      dotPos.y = y - 7 + 10;
      currentColor.value = color;
      console.log(color.object())
      emit("updateRGB", color.object());
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

    return () => {
      let { x, y } = dotPos;
      let prop = {
        class: "k-color-picker-paint",
        width: 234,
        height: 136,
        ref: refPaint,
        onMousedown: onMousedown,
      };
      return (
        <div class="k-color-picker-paint-container">
          <canvas {...prop} />
          <span
            class="k-color-picker-paint-dot"
            style={{ left: x + "px", top: y + "px" }}></span>
        </div>
      );
    };
  },
});
