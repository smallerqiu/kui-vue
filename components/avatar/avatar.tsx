import {
  computed,
  defineComponent,
  inject,
  onBeforeUnmount,
  onMounted,
  ref,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import Icon, { type IconType } from "../icon";

const avatarProps = {
  icon: [Array] as PropType<IconType[]>,
  shape: {
    type: String as PropType<"circle" | "square">,
    default: "circle",
  },
  size: {
    type: [Number, String] as PropType<number | "large" | "small" | "default">,
    default: "default",
  },
  src: String,
};

export type AvatarProps = ExtractPropTypes<typeof avatarProps>;

const Avatar = defineComponent({
  name: "Avatar",
  props: avatarProps,
  setup(props, { slots }) {
    const group = inject<any>("KAvatarGroup", null);

    const innerRef = ref<HTMLElement | null>(null);
    const rootRef = ref<HTMLElement | null>(null);
    const textStyles = ref<CSSProperties>({});
    let observer: ResizeObserver | null = null;

    const computedSize = computed(() => group?.size?.value || props.size);
    const computedShape = computed(() => group?.shape?.value || props.shape);

    const updateSize = () => {
      if (innerRef.value && rootRef.value) {
        const max = rootRef.value.offsetWidth - 8;
        const innerWidth = innerRef.value.offsetWidth || innerRef.value.scrollWidth;

        if (innerWidth > 0 && innerWidth > max) {
          const scale = Math.min(max / innerWidth, 1);
          textStyles.value = {
            transform: `scale(${scale}) translateX(-50%)`,
          };
        } else {
          textStyles.value = {
            transform: "scale(1) translateX(-50%)",
          };
        }
      }
    };

    onMounted(() => {
      observer = new ResizeObserver(() => {
        window.requestAnimationFrame(updateSize);
      });

      if (rootRef.value) observer.observe(rootRef.value);
      if (innerRef.value) observer.observe(innerRef.value);

      updateSize();
    });

    onBeforeUnmount(() => {
      observer?.disconnect();
      observer = null;
    });

    return () => {
      const sizeVal = computedSize.value;
      const shapeVal = computedShape.value;
      const { src, icon } = props;

      const rootStyles: CSSProperties = {};
      if (typeof sizeVal === "number") {
        rootStyles.width = `${sizeVal}px`;
        rootStyles.height = `${sizeVal}px`;
        rootStyles.lineHeight = `${sizeVal}px`;
        rootStyles.fontSize = `${sizeVal / 2}px`;
      }

      const children = slots.default?.();
      const hasIcon = children?.some((c: any) => c.type?.name === "Icon");
      const isText = children?.length === 1 && typeof children[0].children === "string";

      const rootProps = {
        ref: rootRef,
        style: rootStyles,
        class: [
          "k-avatar",
          {
            "k-avatar-lg": sizeVal === "large",
            "k-avatar-sm": sizeVal === "small",
            "k-avatar-image": src,
            "k-avatar-icon": icon || hasIcon,
            "k-avatar-square": shapeVal === "square",
          },
        ],
      };

      const textProps = {
        ref: innerRef,
        class: "k-avatar-string",
        style: textStyles.value,
      };

      return (
        <div {...rootProps}>
          {icon ? (
            <Icon type={icon} />
          ) : src ? (
            <img src={src} alt="" />
          ) : isText ? (
            <span {...textProps}>{children}</span>
          ) : (
            children
          )}
        </div>
      );
    };
  },
});

export default Avatar;
