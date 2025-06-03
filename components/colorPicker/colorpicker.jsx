import {
  canvasHelper,
  limit,
  hslToRgb,
  rgbToHsl,
  parseColor,
  rgbToHex,
  cssColorToRgba,
} from "./canvasHelper";
import transfer from "../directives/transfer";
import { Input } from "../input";
import { Button } from "../button";
import Icon from "../icon";
import { ChevronDown, CaretHor } from "kui-icons";
import { setPlacement } from "../utils/placement";
const modes = ["rgba", "hex", "hsla"];
import {
  defineComponent,
  ref,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick,
  reactive,
  toRaw,
  Transition,
} from "vue";
export default defineComponent({
  name: "ColorPicker",
  directives: {
    transfer,
  },
  props: {
    value: String,
    transfer: { type: Boolean, default: true },
    showMode: Boolean,
    disabled: Boolean,
    noAlpha: Boolean,
    placement: {
      validator(value) {
        return [
          "top",
          "top-left",
          "top-right",
          "bottom",
          "bottom-left",
          "bottom-right",
        ].includes(value);
      },
      default: "bottom",
    },
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
    mode: {
      type: String,
      default: "hex",
      validator: function (value) {
        return modes.indexOf(value) !== -1;
      },
    },
    shape: String,
    show: Boolean,
    icon: [String, Array],
    showArrow: { type: Boolean, default: true },
    defalutColors: {
      type: Array,
      default: () => [
        "#f44336",
        "#e91e63",
        "#9c27b0",
        "#673ab7",
        "#3f51b5",
        "#2196f3",
        "#03a9f4",
        "#00bcd4",
        "#009688",
        "#4caf50",
        "#8bc34a",
        "#cddc39",
        "#ffeb3b",
        "#ffc107",
        "#ff9800",
        "#ff5722",
        "#795548",
        "#9e9e9e",
        "#607d8b",
        "#000",
      ],
      validator: function (value) {
        return value.length <= 20;
      },
    },
  },
  watch: {
    value(v1) {
      // console.log(v1, v2, currentColor.value)
      if (v1 != currentColor.value) {
        valueChange("COLOR", v1);
      }
    },
  },

  setup(ps, { emit }) {
    const currentMode = ref(ps.mode);
    const currentColor = ref(ps.value || "#000000");
    const color = reactive({
      H: 0,
      S: 0,
      L: 0,
      A: 1,
      R: 0,
      G: 0,
      B: 0,
    });

    const HEX = ref("");
    const huePointerX = ref(0);
    const aplhaPointerX = ref(0);
    const paintPointer = reactive({ x: 0, y: 0 });
    const visible = ref(ps.show);
    const isMousePressed = ref(false);
    const paintHelper = ref(null);
    const refAlpha = ref(null);
    const refHue = ref(null);
    const refPaint = ref(null);
    const refPopper = ref(null);
    const refCtx = ref(null);
    const left = ref(0);
    const top = ref(0);
    const currentPlacement = ref(ps.placement);
    const transOrigin = ref("bottom");
    const rendered = ref(false);

    watch(
      () => ps.value,
      (v) => {
        currentColor.value = v1;
        valueChange("COLOR", v1);
      }
    );
    const updatePosition = () => {
      nextTick(() => {
        setPlacement(
          refCtx,
          refPopper,
          currentPlacement,
          transOrigin,
          top,
          left,
          3
        );
      });
    };
    const toggle = (open) => {
      if (ps.disabled) {
        return false;
      }
      if (open) {
        if (!rendered.value) {
          rendered.value = true;
          document.addEventListener("click", outsideClick);
          nextTick(() => {
            visible.value = true;
            paintHelper.value = canvasHelper(refPaint.value);
            initHueCanvas(refHue.value);
            !ps.noAlpha && initAlphaCanvas(refAlpha.value);
            initPaintCanvas(paint);
            valueChange("COLOR", ps.value);
            updatePosition();
          });
        } else {
          visible.value = true;
        }
      } else {
        visible.value = false;
      }
      // currentColor = value || "#000"; ??
    };
    const updatePostion = () => {
      //alpha
      {
        const x = 190 * color.A;
        aplhaPointerX.value = x - 7;
      }
      //updaet hue pointer
      {
        const x = (190 * color.H) / 360;
        huePointerX.value = x - 7;
      }
      //paint
      {
        const [r, g, b] = hslToRgb(color.H, color.S, color.L);
        const [x, y] = paintHelper.value.findColor(r, g, b);
        if (x >= 0) {
          paintPointer.x = x - 7 + 10;
          paintPointer.y = y - 7 + 10;
        }
      }
    };
    const valueChange = (prop, value) => {
      switch (prop) {
        case "COLOR":
          [color.R, color.G, color.B, color.A] = parseColor(value, "rgba") || [
            0, 0, 0, 1,
          ];
          [color.H, color.S, color.L] = rgbToHsl(color.R, color.G, color.B);
          if (paintHelper.value) {
            paintHelper.value.setHue(color.H);
            alphaCanvsSetHue(refAlpha.value);
          }
          break;
        case "HUE":
          color.H = value;
          // console.log(color.H);
          [color.R, color.G, color.B] = hslToRgb(color.H, color.S, color.L);
          if (paintHelper.value) {
            paintHelper.value.setHue(value);
            alphaCanvsSetHue(refAlpha.value);
          }
          break;
        case "RGB":
          [color.R, color.G, color.B] = value;
          [color.H, color.S, color.L] = rgbToHsl(color.R, color.G, color.B);
          // let colors = rgbToHsl(color.R, color.G, color.B);
          // [color.H, color.S, color.L] = colors
          if (paintHelper.value) {
            alphaCanvsSetHue(refAlpha.value);
          }
          break;
        case "ALPHA":
          color.A = value;
          break;
      }
      setHEX();
    };
    const setHEX = () => {
      if (color.A != 1) {
        HEX.value = parseColor([color.R, color.G, color.B, color.A], "hexcss4");
      } else {
        HEX.value = rgbToHex(color.R, color.G, color.B);
      }

      // currentColor.value = HEX.value
      // emit('input', currentColor.value)
      // emit('change', currentColor.value)

      updateValue();
    };
    const updateValue = () => {
      let { R, G, B, A, H, S, L } = toRaw(color),
        value = null;
      if (currentMode.value == "hex") {
        value = HEX.value;
      } else if (currentMode.value == "rgba") {
        value = A < 1 ? `rgba(${R},${G},${B},${A})` : `rgba(${R},${G},${B})`;
      } else {
        value = A < 1 ? `hsla(${H},${S}%,${L}%,${A})` : `hsl(${H},${S}%,${L}%)`;
      }
      // console.log(value)
      currentColor.value = value;
      emit("update:value", value);
    };
    const setMode = () => {
      let i = modes.indexOf(currentMode.value) + 1;
      i = i > 2 ? 0 : i;
      currentMode.value = modes[i];
      updateValue();
    };
    const initHueCanvas = (canvas) => {
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

      const onMouseMove = (e) => {
        const x = limit(
            e.clientX - canvas.getBoundingClientRect().left,
            0,
            width
          ),
          hue = Math.round((x * 360) / width);
        huePointerX.value = x - 7;
        valueChange("HUE", hue);
      };

      const onMouseUp = () => {
        setTimeout(() => {
          isMousePressed.value = false;
        }, 300);
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      canvas.addEventListener("mousedown", (e) => {
        isMousePressed.value = true;
        onMouseMove(e);
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
        e.preventDefault();
      });
    };
    const alphaCanvsSetHue = (canvas) => {
      if (ps.noAlpha || !canvas) return;
      const ctx = canvas.getContext("2d", { willReadFrequently: true }),
        { width, height } = canvas,
        gradient = ctx.createLinearGradient(0, 0, width - 1, 0);
      let { H, S, L } = toRaw(color);
      ctx.clearRect(0, 0, width, height);
      gradient.addColorStop(0, `hsla(${H},${S}%,${L}%,0)`);
      gradient.addColorStop(1, `hsla(${H},${S}%,${L}%,1)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };
    const initAlphaCanvas = (canvas) => {
      alphaCanvsSetHue(canvas);
      const { width, height } = canvas;
      const onMouseMove = (e) => {
        const x = limit(
            e.clientX - canvas.getBoundingClientRect().left,
            0,
            width
          ),
          alpha = +(x / width).toFixed(2);
        aplhaPointerX.value = x - 7;
        valueChange("ALPHA", alpha);
      };

      const onMouseUp = () => {
        setTimeout(() => {
          isMousePressed.value = false;
        }, 300);

        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      canvas.addEventListener("mousedown", (e) => {
        isMousePressed.value = true;

        onMouseMove(e);
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
        e.preventDefault();
      });
    };
    const initPaintCanvas = (canvas) => {
      const { width, height } = canvas;
      const onMouseMove = (e) => {
        const x = limit(
            e.clientX - canvas.getBoundingClientRect().left,
            0,
            width - 1
          ),
          y = limit(
            e.clientY - canvas.getBoundingClientRect().top,
            0,
            height - 1
          ),
          color = paintHelper.value.grabColor(x, y);

        paintPointer.x = x - 7 + 10;
        paintPointer.y = y - 7 + 10;
        valueChange("RGB", color);
      };
      const onMouseUp = () => {
        setTimeout(() => {
          isMousePressed.value = false;
        }, 300);

        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      canvas.addEventListener("mousedown", (e) => {
        isMousePressed.value = true;

        onMouseMove(e);
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
        e.preventDefault();
      });
    };
    const renderPaint = () => {
      let prop = {
        class: "k-color-picker-paint",
        attrs: { width: 234, height: 136 },
        ref: "paint",
      };
      return <canvas {...prop} />;
    };
    const renderAlpha = () => {
      let prop = {
        class: "k-color-picker-alpha",
        attrs: { width: 190, height: 8 },
        ref: "alpha",
      };
      return !ps.noAlpha ? <canvas {...prop} /> : null;
    };
    const renderHue = () => {
      let prop = {
        class: "k-color-picker-hue",
        attrs: { width: 190, height: 8 },
        ref: "hue",
      };
      return <canvas {...prop} />;
    };
    const renderValueInput = (key) => {
      let prop = {
        attrs: {
          maxlength: key == "HEX" ? 9 : 4,
        },
        props: {
          value: color[key] + ("SL".indexOf(key) >= 0 ? "%" : ""),
          size: "small",
        },
        on: {
          input: (e) => {
            let value = e.replace("%", "");
            if (!value) return;
            if (key == "HEX") {
              value = value.toString().toLowerCase();
              if (/^#([0-9A-F]{6}|[0-9A-F]{3}|[0-9A-F]{8})$/i.test(value)) {
                [color.R, color.G, color.B, color.A] = cssColorToRgba(
                  value
                ) || [color.R, color.G, color.B, color.A];
                [color.H, color.S, color.L] = rgbToHsl(
                  color.R,
                  color.G,
                  color.B
                );
              } else {
                return;
              }
            } else if (key == "A") {
              if (!/^\d(.)\d*$/.test(value) || value > 1) return;
            } else {
              if (!/^\d*$/.test(value)) return;
            }

            color[key] = value;
            // console.log(e,key)
            if ("RGB".indexOf(key) >= 0) {
              [color.H, color.S, color.L] = rgbToHsl(color.R, color.G, color.B);
            }
            updatePostion();
            paintHelper.value.setHue(color.H);
            alphaCanvsSetHue(refAlpha.value);
          },
        },
      };
      return <Input {...prop} />;
    };
    const renderValue = () => {
      if (ps.showMode) {
        let node = [];
        let mode = "RGB";
        let alpha = (
          <Input
            v-model:value={color.A}
            size="small"
            class="k-color-picker-alpha-input"
          />
        );
        if (currentMode.value == "rgba") {
          let keys = ["R", "G", "B"];
          let v = (
            <div class="k-color-picker-val">
              {keys.map((k) => renderValueInput(k))}
              {alpha}
            </div>
          );
          // let k = <div class="k-color-picker-key">{keys.map(k => <span>{k}</span>)}</div>
          node.push(v);
        } else if (currentMode.value == "hsla") {
          mode = "HSB";
          let keys = ["H", "S", "L"];
          let v = (
            <div class="k-color-picker-val">
              {keys.map((k) => renderValueInput(k))}
              {alpha}
            </div>
          );
          // let k = <div class="k-color-picker-key">{keys.map(k => <span>{k}</span>)}</div>
          node.push(v);
        } else {
          //hex
          mode = "HEX";
          let v = (
            <div class="k-color-picker-val">
              {renderValueInput("HEX")}
              {alpha}
            </div>
          );
          // let k = <div class="k-color-picker-key"><span>HEX</span></div>
          node.push(v);
        }
        node.unshift(<span class="k-color-picker-mode-label">{mode}:</span>);
        let btn = (
          <Button
            size="small"
            theme="normal"
            icon={CaretHor}
            onClick={setMode}
          />
        );
        node.push(btn);
        return (
          <div class={`k-color-picker-mode k-color-picker-${currentMode}`}>
            {node}
          </div>
        );
      }
    };
    const renderDefaultColor = () => {
      let color = ps.defalutColors.map((c) => (
        <span
          style={"background-color:" + c}
          onClick={(e) => valueChange("COLOR", c)}></span>
      ));
      // let okBtn = <Button circle onClick={updateValue}>OK</Button>
      return <div class="k-coclor-picker-defaults">{[color]}</div>;
    };
    const renderDrop = () => {
      if (!rendered.value) return null;

      let paint = renderPaint();
      let alpha = renderAlpha();
      let hue = renderHue();
      // let colors = renderDefaultColor()
      let valueNode = renderValue();

      const props = {
        ref: refPopper,
        placement: "bottom-left",
        className: "k-color-picker-dropdown",
      };
      let [r, g, b] = hslToRgb(color.H, color.S, color.L);
      return (
        <Transition name="k-color-picker">
          <div v-transfer={true} v-show={visible.value} {...props}>
            {paint}
            <span
              class="k-color-picker-paint-dot"
              style={
                "left:" + paintPointer.x + "px;top:" + paintPointer.y + "px"
              }></span>
            <div class="k-color-picker-bar">
              <div class="k-color-picker-avatar">
                <div
                  class="k-color-picker-avatar-inner"
                  style={`background-color:rgba(${color.R}, ${color.G}, ${color.B}, ${color.A})`}></div>
              </div>
              <div class="k-color-picker-bar-box">
                {[hue, alpha]}
                <span
                  class="k-color-picker-hue-dot"
                  style={{
                    left: huePointerX.value + "px",
                    backgroundColor: `rgba(${r},${g},${b},1`,
                  }}></span>
                {!ps.noAlpha ? (
                  <span
                    class="k-color-picker-alpha-dot"
                    style={{
                      left: aplhaPointerX.value + "px",
                      backgroundColor: `rgba(${r},${g},${b},${color.A}`,
                    }}></span>
                ) : null}
              </div>
            </div>
            {valueNode}
            {renderDefaultColor()}
          </div>
        </Transition>
      );
    };

    return () => {
      let drop = renderDrop();
      let { showArrow, icon } = ps;
      let style = [
        "k-color-picker",
        {
          "k-color-picker-opened": visible.value,
          "k-color-picker-disabled": ps.disabled,
          "k-color-picker-sm": ps.size == "small",
          "k-color-picker-circle": ps.shape == "circle" && !showArrow,
          "k-color-picker-lg": ps.size == "large",
        },
      ];
      return (
        <div class={style}>
          <div class="k-color-picker-selection" onClick={toggle}>
            <div class="k-color-picker-color">
              <div
                class="k-color-picker-color-inner"
                style={`background-color:${currentColor.value}`}></div>
            </div>
            {/* <div class="k-color-picker-trigger-text">{triggerText}</div> */}
            {showArrow && (
              <Icon class="k-color-picker-arrow" type={icon || ChevronDown} />
            )}
          </div>
          {drop}
        </div>
      );
    };
  },
});
