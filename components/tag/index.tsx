import { X } from "kui-icons";
import {
  defineComponent,
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
import Icon from "../icon";
import { isColor } from "../utils/color";

export const tagProps = {
  closeable: Boolean as BooleanType,
  color: String as ColorType,
  shape: String as PropType<ShapeType>,
  icon: [String, Array] as PropType<any>,
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

    const closeHandler = (e: MouseEvent) => {
      e.stopPropagation();
      emit("close");
      visible.value = false;
      setTimeout(() => {
        hidden.value = true;
      }, 300);
    };

    return () => {
      const { shape, icon, size, color, closeable } = props;

      const isPresetColor = color && colors.includes(color);
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
          "k-tag-hidden": hidden.value,
          "k-tag-fill": props.theme === "fill",
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
        class: tagClasses,
        style: tagStyle,
        ...attrs,
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
