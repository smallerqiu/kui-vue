import { User } from "kui-icons";
import {
  computed,
  defineComponent,
  inject,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import Icon, { type IconType } from "../icon";
import { getChildren } from "../utils/vnode";
import { avatarGroupContextKey, type AvatarShape, type AvatarSize } from "./context";

const avatarProps = {
  icon: [Array] as PropType<IconType[]>,
  shape: {
    type: String as PropType<AvatarShape>,
    default: "circle",
  },
  size: {
    type: [Number, String] as PropType<AvatarSize>,
    default: "default",
  },
  src: String,
  alt: String,
  onError: Function as PropType<(event: Event) => boolean | void>,
};

export type AvatarProps = ExtractPropTypes<typeof avatarProps>;

const Avatar = defineComponent({
  name: "Avatar",
  props: avatarProps,
  setup(props, { slots }) {
    const group = inject(avatarGroupContextKey, null);

    const innerRef = ref<HTMLElement | null>(null);
    const rootRef = ref<HTMLElement | null>(null);
    const textStyles = ref<CSSProperties>({});
    const imageFailed = ref(false);
    let observer: ResizeObserver | null = null;
    let animationFrame = 0;

    const computedSize = computed(() => group?.size?.value || props.size);
    const computedShape = computed(() => group?.shape?.value || props.shape);

    watch(
      () => props.src,
      () => {
        imageFailed.value = false;
      },
    );

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
      if (typeof ResizeObserver !== "undefined") {
        observer = new ResizeObserver(() => {
          cancelAnimationFrame(animationFrame);
          animationFrame = window.requestAnimationFrame(updateSize);
        });

        if (rootRef.value) observer.observe(rootRef.value);
        if (innerRef.value) observer.observe(innerRef.value);
      }

      updateSize();
    });

    onBeforeUnmount(() => {
      observer?.disconnect();
      observer = null;
      cancelAnimationFrame(animationFrame);
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

      const children = getChildren(slots.default?.());
      const hasIcon = children?.some(
        (c) => typeof c.type === "object" && "name" in c.type && c.type.name === "Icon",
      );
      const isText = children?.length === 1 && typeof children[0].children === "string";
      const showImage = !!src && !imageFailed.value;
      const fallbackIcon = imageFailed.value && src ? icon || User : icon;

      const rootProps = {
        ref: rootRef,
        style: rootStyles,
        class: [
          "k-avatar",
          {
            "k-avatar-lg": sizeVal === "large",
            "k-avatar-sm": sizeVal === "small",
            "k-avatar-image": showImage,
            "k-avatar-icon": fallbackIcon || hasIcon,
            "k-avatar-square": shapeVal === "square",
            "k-avatar-round": shapeVal === "round",
          },
        ],
      };

      const textProps = {
        ref: innerRef,
        class: "k-avatar-string",
        style: textStyles.value,
      };

      const handleImageError = (event: Event) => {
        if (props.onError?.(event) !== false) imageFailed.value = true;
      };

      return (
        <div {...rootProps}>
          {showImage ? (
            <img src={src} alt={props.alt || ""} onError={handleImageError} />
          ) : fallbackIcon ? (
            <Icon type={fallbackIcon} />
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
