import Icon from "../icon";
import { defineComponent, ref, onMounted, onUpdated } from "vue";
import { withInstall } from "../utils/vue";
const Avatar = defineComponent({
  name: "Avatar",
  props: {
    icon: [String, Array],
    shape: { type: String },
    size: {
      type: [Number, String],
      default: "default",
      validator: (val) =>
        typeof val == "number"
          ? 1
          : ["large", "small", "default"].indexOf(val) >= 0,
    },
    src: String,
  },

  setup(props, { slots }) {
    const innerRef = ref();
    const root = ref();
    const updateSize = () => {
      if (innerRef.value) {
        const max = root.value.offsetWidth - 8;
        const scale =
          innerRef.value.scrollWidth > max
            ? max / innerRef.value.scrollWidth
            : 1;
        innerRef.value.style.transform = `scale(${scale}) translateX(-50%)`;
      }
    };
    onMounted(() => {
      updateSize();
    });

    onUpdated(() => {
      updateSize();
    });

    return () => {
      let { size, shape, src, icon } = props;
      let styles = {};
      if (typeof size == "number") {
        styles = {
          width: `${size}px`,
          height: `${size}px`,
          lineHeight: `${size}px`,
          fontSize: `${size / 2}px`,
        };
      }
      let children = slots.default?.();

      // let hasIcon = children?.filter((x) => x.type == "Icon").length; //for 3
      let hasIcon = children?.filter(
        (x) => x.componentOptions?.tag == "Icon"
      ).length; 
      // let text = children?.length == 1 && typeof children[0].children === "string"; //for 3
      let text = children?.length == 1 && typeof children[0].text; //for 3
      let cls = [
        "k-avatar",
        {
          "k-avatar-lg": size == "large",
          "k-avatar-sm": size == "small",
          "k-avatar-image": src,
          "k-avatar-icon": icon || hasIcon,
          "k-avatar-square": shape == "square",
        },
      ];
      let prop = {
        ref: root,
        class: cls,
        style: styles,
      };
      return (
        <div {...prop}>
          {icon ? (
            <Icon type={icon} />
          ) : src ? (
            <img src={src} />
          ) : text ? (
            <span class="k-avatar-string" ref={innerRef}>
              {children}
            </span>
          ) : (
            children
          )}
        </div>
      );
    };
  },
});
export default withInstall(Avatar);
