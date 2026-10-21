import { Loading } from "kui-icons";
import {
  Comment,
  computed,
  defineComponent,
  inject,
  type ButtonHTMLAttributes,
  type DefineComponent,
  type ExtractPropTypes,
  type PropType,
  type Ref,
  type VNode,
  type VNodeChild,
} from "vue";
import type { BooleanType, ButtonType, ShapeType, SizeType, SurfaceThemeType } from "../const/types";
import { resolvePaintedTheme, useConfigAppearance } from "../config/context";
import { colors } from "../const/var";
import Icon, { type IconType } from "../icon";
import { getChildren } from "../utils/vnode";

// The tiers `button/styles/index.less` actually paints. `default` is not a theme value any more —
// asking for the button's own look means writing no `theme`, and that look is type-driven, so the
// class `k-btn-default` belongs to `type="default"` and no tier may collide with it.
// `underlined` is absent too — an underline is a surface tier, and a button has nothing to underline.
const PAINTED_THEMES = ["fill", "outline", "plain", "solid", "dashed"] as const;

const buttonProps = {
  htmlType: {
    type: String as PropType<"button" | "submit" | "reset">,
    default: "button",
  },
  icon: [Array] as PropType<IconType[]>,
  block: { type: Boolean as BooleanType, default: false },
  size: {
    type: String as PropType<SizeType>,
  },
  // 色板之外的字符串是一条写在文档里的行为（当没写、`type` 照常生效），所以这里收 `string`
  // 而不是那 17 个名字：禁在类型里就等于让调用方写不出这条契约。
  color: {
    type: String as PropType<string>,
  },
  loading: { type: Boolean as BooleanType, default: false },
  type: {
    type: String as PropType<ButtonType>,
    default: "default",
  },
  disabled: Boolean as BooleanType,
  theme: {
    type: String as PropType<SurfaceThemeType>,
  },
  shape: String as PropType<ShapeType>,
  href: String,
  target: String,
};

export type ButtonProps = Partial<ExtractPropTypes<typeof buttonProps>> &
  Omit<ButtonHTMLAttributes, "type">;

const Button = defineComponent({
  name: "Button",
  props: buttonProps,
  setup(props, { slots, attrs }) {
    const appearance = useConfigAppearance(props);
    const buttonGroup = inject<{ size?: SizeType; shape?: Ref<ShapeType> } | null>(
      "KButtonGroup",
      null,
    );
    const parentSize = inject<string | null>("size", null);

    const computedSize = computed(() => {
      return props.size || buttonGroup?.size || parentSize || appearance.size.value || "default";
    });

    const computedShape = computed(() => {
      return props.shape || buttonGroup?.shape?.value || appearance.shape.value;
    });

    const paintedTheme = computed(() =>
      resolvePaintedTheme(appearance.theme.value, PAINTED_THEMES),
    );

    const handleClick = (e: MouseEvent) => {
      if (props.loading || props.disabled) {
        e.preventDefault();
        return;
      }
    };

    const children = computed(() => getChildren(slots.default?.()));

    return () => {
      const iconOnly = () => {
        const excluded = children.value.filter((c: VNode) => c.type !== Comment);
        if (!excluded?.length) {
          return props.icon || props.loading;
        }
        if (excluded.length === 1) {
          const type = excluded[0].type;
          return (
            type &&
            ((typeof type === "object" && "name" in type && type.name === "Icon") || type === Icon)
          );
        }
        return false;
      };

      // A `color` only counts when `button/styles/index.less` can paint it, which is the shared palette and
      // nothing else — there is no inline arm here. So a name outside the palette must be read as "no color
      // written" rather than as a color that cancels `type` and leaves the button with no surface at all.
      const isPresetColor = !!props.color && colors.some((preset) => preset === props.color);

      const classes = [
        "k-btn",
        {
          [`k-btn-${props.type}`]: !!props.type && !isPresetColor,
          ["k-btn-sm"]: computedSize.value === "small",
          ["k-btn-block"]: !!props.block,
          ["k-btn-loading"]: props.loading,
          ["k-btn-icon-only"]: iconOnly(),
          [`k-btn-${props.color}`]: isPresetColor,
          ["k-btn-lg"]: computedSize.value === "large",
          ["k-btn-circle"]: computedShape.value === "circle",
          ["k-btn-square"]: computedShape.value === "square",
          [`k-btn-${paintedTheme.value}`]: !!paintedTheme.value,
        },
      ];

      let childNodes: VNodeChild[] = [];
      const iconType = props.loading ? Loading : props.icon;

      if (iconType) {
        childNodes.push(
          props.loading ? (
            <span class={["k-btn-loading-icon", { "k-btn-loading-icon-replace": !!props.icon }]}>
              <Icon type={iconType} spin />
            </span>
          ) : (
            <Icon type={iconType} />
          ),
        );
      }

      const processedChildren = children.value?.map((c: VNode) => {
        return typeof c.children === "string" ? <span>{c.children.trim()}</span> : c;
      });

      if (processedChildren) {
        childNodes = childNodes.concat(processedChildren);
      }

      const commonProps = {
        ...attrs,
        class: classes,
        href: props.href,
        target: props.target,
        disabled: props.disabled || props.loading,
        type: props.htmlType,
        onClick: handleClick,
      };

      return props.type === "link" && props.href && !props.disabled ? (
        <a {...commonProps}>{childNodes}</a>
      ) : (
        <button {...commonProps}>{childNodes}</button>
      );
    };
  },
});
export default Button as DefineComponent<ButtonProps>;
