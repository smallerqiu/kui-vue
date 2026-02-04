import { defineComponent, ref, onMounted, watch } from "vue";
import Color from "color";
import { clamp } from "@vueuse/core";
export default defineComponent({
  name: "Alpha",
  props: {
    modelValue: [String, Object],
  },
  setup(ps, { emit }) {
    const dotPos = ref(0);
    const refPaint = ref();
    const isMousePressed = ref(false);
    // const painter = ref();
    const currentColor = ref(ps.modelValue || "#000000");
    watch(
      () => ps.modelValue,
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

    const updatePos = () => {
      const a = Color(currentColor.value).alpha();
      const x = refPaint.value.width * a;
      dotPos.value = x - 7;
    };

    const renderPaint = () => {
      const canvas = refPaint.value;
      const ctx = canvas.getContext("2d", { willReadFrequently: true }),
        { width, height } = canvas,
        gradient = ctx.createLinearGradient(0, 0, width - 1, 0);
      let [r, g, b] = Color(currentColor.value).rgb().array();
      ctx.clearRect(0, 0, width, height);
      gradient.addColorStop(0, `rgba(${r},${g},${b},0)`);
      gradient.addColorStop(1, `rgba(${r},${g},${b},1)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };
    const onMouseMove = (e) => {
      const canvas = refPaint.value;
      let width = canvas.width;
      const x = clamp(e.clientX - canvas.getBoundingClientRect().left, 0, width),
        alpha = +(x / width).toFixed(2);
      dotPos.value = x - 7;

      let [r, g, b] = Color(currentColor.value).rgb().array();
      const color = `rgba(${r},${g},${b},${alpha})`;
      currentColor.value = color;
      emit("updateAlpha", alpha);
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
      let prop = {
        class: "k-color-picker-alpha",
        width: 190,
        height: 8,
        ref: refPaint,
        onMousedown: onMousedown,
      };
      return (
        <div class="k-color-picker-alpha-box">
          <canvas {...prop} />
          <span
            class="k-color-picker-alpha-dot"
            style={{
              left: dotPos.value + "px",
              backgroundColor: `${currentColor.value}`,
            }}
          ></span>
        </div>
      );
    };
  },
});
