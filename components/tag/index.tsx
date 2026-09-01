import { X } from "kui-icons";
import {
  defineComponent,
  onBeforeUnmount,
  ref,
  Transition,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import {
  type BooleanType,
  type ColorType,
  type ShapeType,
  type SizeType,
  type ThemeType,
} from "../const/types";
import { colors } from "../const/var";
import Icon, { type IconType } from "../icon";
import { isColor } from "../utils/color";

const tagProps = {
  closeable: Boolean as BooleanType,
  compact: Boolean as BooleanType,
  color: String as ColorType,
  shape: String as PropType<ShapeType>,
  icon: Array as PropType<IconType[]>,
  size: {
    type: String as PropType<SizeType>,
    default: "small",
  },
  theme: { type: String as PropType<ThemeType>, default: "fill" },
  onClose: { type: Function as PropType<() => void> },
};

export type TagProps = ExtractPropTypes<typeof tagProps>;

const Tag = defineComponent({
  name: "Tag",
  props: tagProps,
  setup(props, { slots, emit, attrs }) {
    const visible = ref(true);
    const hidden = ref(false);
    let hideTimer: ReturnType<typeof setTimeout> | undefined;

    const closeHandler = (e: MouseEvent) => {
      e.stopPropagation();
      emit("close");
      visible.value = false;
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => {
        hidden.value = true;
        hideTimer = undefined;
      }, 300);
    };
    onBeforeUnmount(() => clearTimeout(hideTimer));

    return () => {
      const { shape, icon, size, color, closeable, compact } = props;

      const isPresetColor = color && colors.some((preset) => preset === color);
      const isCustomColor = color && isColor(color) && !isPresetColor;

      const tagClasses = [
        "k-tag",
        {
          "k-tag-sm": size === "small",
          "k-tag-lg": size === "large",
          [`k-tag-${color}`]: isPresetColor,
          "k-tag-circle": shape === "circle",
          "k-tag-square": shape === "square",
          "k-tag-has-color": isCustomColor,
          "k-tag-closeable": closeable,
          "k-tag-compact": compact,
          "k-tag-hidden": hidden.value,
          [`k-tag-${props.theme}`]: !!props.theme,
        },
      ];

      const tagStyle: CSSProperties = {
        backgroundColor: isCustomColor ? color : undefined,
      };

      const content = [];
      if (icon) {
        content.push(<Icon class="k-tag-icon" type={icon} />);
      }
      content.push(<span class="k-tag-text">{slots.default?.()}</span>);
      if (closeable) {
        content.push(<Icon class="k-tag-close" type={X} onClick={closeHandler} />);
      }
      const tagProps = {
        ...attrs,
        class: tagClasses,
        style: tagStyle,
      };

      return (
        <Transition name="k-tag">
          <div v-show={visible.value} {...tagProps}>
            {content}
          </div>
        </Transition>
      );
    };
  },
});
export default Tag;
