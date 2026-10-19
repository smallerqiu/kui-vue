import { X } from "kui-icons";
import {
  computed,
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
  type SurfaceThemeType,
} from "../const/types";
import { colors } from "../const/var";
import { resolvePaintedTheme, useConfigAppearance } from "../config/context";
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
  theme: { type: String as PropType<SurfaceThemeType>, default: "fill" },
};

export type TagProps = ExtractPropTypes<typeof tagProps>;

// The tiers `tag/styles/index.less` paints. `underlined` is absent because an underline is the whole
// affordance of a field you type into and a chip has nothing to underline. Anything
// outside this set resolves to `fill` — the tier a tag reaches when no `theme` is written — rather than
// shipping a class no LESS rule answers.
const PAINTED_THEMES = ["fill", "outline", "plain", "solid", "dashed"] as const;

const Tag = defineComponent({
  name: "Tag",
  props: tagProps,
  emits: {
    close: () => true,
    afterClose: () => true,
  },
  setup(props, { slots, emit, attrs }) {
    const appearance = useConfigAppearance(props);
    const visible = ref(true);

    // Resolved here rather than at the class name so the guard sits after inheritance, not only on the
    // written prop: a `ConfigProvider theme="underlined"` has to land on `fill` too.
    const paintedTheme = computed(
      () => resolvePaintedTheme(appearance.theme.value, PAINTED_THEMES) ?? "fill",
    );

    const closeHandler = (e: MouseEvent) => {
      e.stopPropagation();
      if (!visible.value) return;
      visible.value = false;
      emit("close");
    };

    return () => {
      const { icon, color, closeable, compact } = props;
      const size = appearance.size.value;
      const shape = appearance.shape.value;

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
          // Always exactly one tier: `paintedTheme` resolves to a painted value or to `fill`.
          [`k-tag-${paintedTheme.value}`]: true,
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
        <Transition name="k-tag" duration={200} onAfterLeave={() => emit("afterClose")}>
          {visible.value && <div {...tagProps}>{content}</div>}
        </Transition>
      );
    };
  },
});
export default Tag;
