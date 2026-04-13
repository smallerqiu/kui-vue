import { Loading } from "kui-icons";
import {
  Comment,
  computed,
  defineComponent,
  inject,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import type { BooleanType, ButtonTheme, ButtonType, ColorType, SizeType } from "../const/types";
import { colors } from "../const/var";
import Icon, { type IconType } from "../icon";
import { getChildren } from "../utils/vnode";

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
  color: {
    type: String as ColorType,
  },
  loading: { type: Boolean as BooleanType, default: false },
  type: {
    type: String as PropType<ButtonType>,
    default: "default",
  },
  disabled: Boolean as BooleanType,
  theme: {
    type: String as PropType<ButtonTheme>,
  },
  shape: String as PropType<"circle" | string>,
  href: String,
  target: String,
  onClick: Function as PropType<(e: MouseEvent) => void>,
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

const Button = defineComponent({
  name: "Button",
  props: buttonProps,
  // emits: ["click", "mouseenter", "mouseleave"],
  setup(props, { emit, slots, attrs }) {
    const buttonGroup = inject<any>("KButtonGroup", null);
    const parentSize = inject<string | null>("size", null);

    const computedSize = computed(() => {
      return props.size || buttonGroup?.size || parentSize || "default";
    });

    const computedShape = computed(() => {
      return props.shape || buttonGroup?.shape?.value;
    });

    const handleClick = (e: MouseEvent) => {
      if (props.loading || props.disabled) {
        e.preventDefault();
        return;
      }
      emit("click", e);
    };

    const children = computed(() => getChildren(slots.default?.()));

    return () => {
      const iconOnly = () => {
        const excluded = children.value.filter((c: any) => c.type !== Comment);
        if (!excluded?.length) {
          return props.icon || props.loading;
        }
        if (excluded.length === 1) {
          const type = excluded[0].type;
          return type && (type.name === "Icon" || type === Icon);
        }
        return false;
      };

      const classes = [
        "k-btn",
        {
          [`k-btn-${props.type}`]: !!props.type && !props.color,
          [`k-btn-outline`]: props.theme === "outline",
          ["k-btn-sm"]: computedSize.value === "small",
          ["k-btn-block"]: !!props.block,
          ["k-btn-loading"]: props.loading,
          ["k-btn-icon-only"]: iconOnly(),
          [`k-btn-${props.color}`]: props.color && colors.includes(props.color),
          ["k-btn-lg"]: computedSize.value === "large",
          ["k-btn-circle"]: computedShape.value === "circle",
          [`k-btn-${props.theme}`]: !!props.theme,
        },
      ];

      let childNodes: any[] = [];
      const iconType = props.loading ? Loading : props.icon;

      if (iconType) {
        childNodes.push(<Icon type={iconType} spin={props.loading} />);
      }

      const processedChildren = children.value?.map((c: any) => {
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
export default Button;
