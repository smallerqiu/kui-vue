import { Close } from "kui-icons";
import { defineComponent, ref, Transition } from "vue";
import { colors } from "../const/var";
import Icon from "../icon";
import { isColor } from "../utils/color";
import { withInstall } from "../utils/vue";
const Tag = defineComponent({
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
    theme: { type: String, default: "light" },
  },
  setup(ps, { slots, emit, listeners }) {
    const visible = ref(true);
    const hidden = ref(false);
    const closeHandler = () => {
      emit("close");
      visible.value = false;
      setTimeout(() => {
        hidden.value = true;
      }, 300);
    };
    return () => {
      const { shape, icon, size, color, closeable } = ps;
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
            ["k-tag-hidden"]: hidden.value,
            ["k-tag-light"]: ps.theme == "light",
          },
        ],
        ...listeners,
        style: {
          backgroundColor: isColor(color) && !colors.includes(color) ? color : null,
        },
      };
      const children = [];
      if (icon) {
        children.push(<Icon class="k-tag-icon" type={icon} />);
      }
      children.push(<span class="k-tag-text">{slots.default?.()}</span>);
      if (closeable) {
        children.push(<Icon class="k-tag-close" type={Close} onClick={closeHandler} />);
      }
      return (
        <Transition name="k-tag">
          <div {...props} v-show={visible.value}>
            {...children}
          </div>
        </Transition>
      );
    };
  },
});
export default withInstall(Tag);
