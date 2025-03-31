import Icon from "../icon";
import { defineComponent, ref, onMounted, onUpdated } from "vue";
export default defineComponent({
  name: "Avatar",
  props: {
    icon: [String, Array],
    shape: { type: String },
    size: {
      type: [Number, String],
      default: "default",
      validator: (val) => (typeof val == "number" ? 1 : ["large", "small", "default"].indexOf(val) >= 0),
    },
    src: String,
  },

  setup(props, { slots }) {
    const innerRef = ref(null);
    const root = ref(null);
    const updateSize = () => {
      if (innerRef.value) {
        const max = root.value.offsetWidth - 8;
        const scale = innerRef.value.scrollWidth > max ? max / innerRef.value.scrollWidth : 1;
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
      let childs = slots.default?.();

      let hasIcon = childs?.filter((x) => x.type == "Icon").length;
      let text = childs?.length == 1 && typeof childs[0].children === "string";
      console.log(childs);
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
              {childs}
            </span>
          ) : (
            childs
          )}
        </div>
      );
    };
  },
});
