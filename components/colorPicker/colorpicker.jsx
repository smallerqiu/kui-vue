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
import { setPlacement } from "../utils/placement";
const modes = ["rgba", "hex", "hsla"];
import Mode from "./mode";
import Hue from "./hue";
import Alpha from "./alpha";
import Paint from "./paint";
import {
  defineComponent,
  ref,
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
      default: "bottom-left",
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

    const visible = ref(ps.show);
    const paintHelper = ref(null);
    const huePaintHelper = ref(null);
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
        currentColor.value = v;
      }
    );
    onBeforeUnmount(() => {
      document.removeEventListener("click", outsideClick);
    });
    const updatePopPosition = () => {
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
    const outsideClick = (e) => {
      const ctx = refCtx.value?.$el || refCtx.value;
      if (
        refPopper.value &&
        !refPopper.value.contains(e.target) &&
        ctx &&
        !ctx.contains(e.target)
      ) {
        visible.value = false;
      }
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
            huePaintHelper.value = canvasHelper(refHue.value);
            !ps.noAlpha && initAlphaCanvas(refAlpha.value);
            initPaintCanvas(refPaint.value);
            updatePainter("COLOR", currentColor.value);
            updatePopPosition();
            updateDotPostion();
          });
        } else {
          visible.value = true;
        }
      } else {
        visible.value = false;
      }
      // currentColor = value || "#000"; ??
    };

    const renderDefaultColor = () => {
      let color = ps.defalutColors.map((c) => (
        <span
          style={"background-color:" + c}
          onClick={(e) => updatePainter("COLOR", c)}></span>
      ));
      // let okBtn = <Button circle onClick={updateValue}>OK</Button>
      return <div class="k-coclor-picker-defaults">{[color]}</div>;
    };
    const renderDrop = () => {
      if (!rendered.value) return null;

      const props = {
        ref: refPopper,
        placement: "bottom-left",
        className: "k-color-picker-dropdown",
        style: {
          left: `${left.value}px`,
          top: `${top.value}px`,
          transformOrigin: transOrigin.value,
        },
      };
      let [r, g, b] = hslToRgb(color.H, color.S, color.L);
      return (
        <Transition name="k-color-picker">
          <div v-transfer={true} v-show={visible.value} {...props}>
            <Paint />

            <div class="k-color-picker-bar">
              <div class="k-color-picker-avatar">
                <div
                  class="k-color-picker-avatar-inner"
                  style={`background-color:rgba(${color.R}, ${color.G}, ${color.B}, ${color.A})`}></div>
              </div>
              <div class="k-color-picker-bar-box">
                <Hue />
                <Alpha />
              </div>
            </div>
            <Mode />
            {renderDefaultColor()}
          </div>
        </Transition>
      );
    };

    return () => {
      let drop = renderDrop();
      let { icon } = ps;
      let style = [
        "k-color-picker",
        {
          "k-color-picker-opened": visible.value,
          "k-color-picker-disabled": ps.disabled,
          "k-color-picker-sm": ps.size == "small",
          "k-color-picker-circle": ps.shape == "circle",
          "k-color-picker-lg": ps.size == "large",
        },
      ];
      return (
        <div class={style} ref={refCtx}>
          <div
            class="k-color-picker-selection"
            onClick={() => toggle(!visible.value)}>
            <div class="k-color-picker-color">
              <div
                class="k-color-picker-color-inner"
                style={`background-color:${currentColor.value}`}></div>
            </div>
            {/* <div class="k-color-picker-trigger-text">{triggerText}</div> */}
          </div>
          {drop}
        </div>
      );
    };
  },
});
