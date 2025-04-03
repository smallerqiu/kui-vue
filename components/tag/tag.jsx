import Icon from "../icon";
import { Close } from "kui-icons";
import { defineComponent, Transition, ref } from "vue";
import { isColor } from "../utils/color";
export default defineComponent({
  name: "Tag",
  props: {
    closeable: Boolean,
    color: String,
    shape: String,
    icon: [String, Array],
    size: {
      default: "small",
      validator(value) {
        return ["small", "large", "middle"].indexOf(value) >= 0;
      },
    },
  },
  setup(ps, { slots, emit }) {
    const visible = ref(true);
    const closeHandler = () => {
      emit("close");
      visible.value = false;
    };
    return () => {
      const { shape, icon, size, color, closeable } = ps;
      const colors = ["pink", "red", "yellow", "orange", "cyan", "green", "blue", "purple", "geekblue", "magenta", "volcano", "gold", "lime"];
      const props = {
        class: [
          "k-tag",
          {
            ["k-tag-sm"]: size == "small",
            ["k-tag-lg"]: size == "large",
            [`k-tag-${color}`]: colors.includes(color),
            ["k-tag-circle"]: shape == "circle",
            ["k-tag-has-color"]: isColor(color) && !colors.includes(color),
            ["k-tag-closeable"]: closeable,
          },
        ],
        style: { backgroundColor: isColor(color) && !colors.includes(color) ? color : null },
      };
      return (
        <Transition name="k-tag">
          <div {...props} v-show={visible.value}>
            {icon ? <Icon class="k-tag-icon" type={icon} /> : null}
            <span class="k-tag-text">{slots.default?.()}</span>
            {closeable ? <Icon class="k-tag-close" type={Close} onClick={closeHandler} /> : null}
          </div>
        </Transition>
      );
    };
  },
});
