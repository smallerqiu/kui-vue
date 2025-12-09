import Icon from "../icon";
import { defineComponent, ref, onMounted, onUpdated, inject, computed } from "vue";
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
          ? true 
          : ["large", "small", "default"].indexOf(val) >= 0,
    },
    src: String,
  },

  setup(props, { slots }) {
    const group = inject("KAvatarGroup", null);

    const innerRef = ref();
    const root = ref();

    const computedSize = computed(() => {
      return group?.size.value || props.size;
    });

    const computedShape = computed(() => {
      return group?.shape.value || props.shape;
    });

    const updateSize = () => {
      if (innerRef.value && root.value) {
        const max = root.value.offsetWidth - 8;
        const innerWidth = innerRef.value.offsetWidth || innerRef.value.scrollWidth;
        
        if (innerWidth > max) {
           const scale = max / innerWidth;
           innerRef.value.style.transform = `scale(${scale}) translateX(-50%)`;
        } else {
           innerRef.value.style.transform = 'scale(1) translateX(-50%)';
        }
      }
    };

    onMounted(updateSize);
    onUpdated(updateSize);

    return () => {
      const sizeVal = computedSize.value;
      const shapeVal = computedShape.value;
      const { src, icon } = props;

      let styles = {};
      if (typeof sizeVal == "number") {
        styles = {
          width: `${sizeVal}px`,
          height: `${sizeVal}px`,
          lineHeight: `${sizeVal}px`,
          fontSize: `${sizeVal / 2}px`,
        };
      }

      let children = slots.default?.();


      // [Vue 3 Upgrade]: Vue 3  
      // const hasIcon = children?.some(c => c.type?.name === 'Icon');
      const hasIcon = children?.filter(
        (x) => x.componentOptions?.tag === "Icon"
      ).length;

      // [Vue 3 Upgrade]:  Vue 3
      // const isText = children?.length === 1 && typeof children[0].children === 'string';
      const isText = children?.length === 1 && (typeof children[0].text === 'string' && children[0].text.trim() !== '');

      const cls = [
        "k-avatar",
        {
          "k-avatar-lg": sizeVal == "large",
          "k-avatar-sm": sizeVal == "small",
          "k-avatar-image": src, 
          "k-avatar-icon": icon || hasIcon,
          "k-avatar-square": shapeVal == "square",
        },
      ];

      return (
        <div ref={root} class={cls} style={styles}>
          {icon ? (
            <Icon type={icon} />
          ) : src ? (
            <img src={src} />
          ) : isText ? (
            <span class="k-avatar-string" ref={innerRef}>
              {/* [Vue 3 Upgrade]:  children */}
              {/* Vue 2 use children[0].text safely to get text */}
              {children[0].text || children} 
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