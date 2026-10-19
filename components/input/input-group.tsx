import {
  cloneVNode,
  computed,
  defineComponent,
  inject,
  provide,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import { type BooleanType, type SizeType, type ThemeType } from "../const/types";
import { getChildren } from "../utils/vnode";
import { CONFIG_PROVIDER_INJECTION_KEY, resolveTheme } from "../config/context";
import { markFormFieldWrapper, useFormField, useFormAppearance } from "../form/context";

const inputGroupProps = {
  block: { type: Boolean as PropType<boolean | undefined>, default: false },
  compact: { type: Boolean as BooleanType, default: true },
  // No `default: "fill"`: react declares none, and the component's own tier belongs to `resolveTheme`
  // below — the one place that runs *after* inheritance. `useFormAppearance` decides explicitness from the
  // keys the caller wrote, so a default here would only ever surface on a written-but-undefined `theme`,
  // where the caller asked for nothing and the component's own look is the right answer anyway.
  // The six tiers stay here even though only `fill` changes anything this component paints, because the
  // value this wrapper most often carries is the tier `Input` already resolved for the field inside it —
  // and `Input` is typed to take `underlined`. A group refusing that list could not match its own field.
  theme: { type: String as PropType<ThemeType> },
  size: {
    type: [String, Array, Number] as PropType<SizeType | number | number[]>,
  },
};

export type InputGroupProps = ExtractPropTypes<typeof inputGroupProps>;

const InputGroup = defineComponent({
  name: "InputGroup",
  inheritAttrs: false,
  props: inputGroupProps,
  setup(props, { slots, attrs }) {
    // Borrowing the field context without isolating it: the controls inside the group are still the form's,
    // and they have to keep reading the field this component only takes a tier from.
    const field = useFormField();
    // Only `theme` goes through the resolver. This component's `size` also accepts a pixel gap for
    // `compact={false}`, which is wider than the `SizeType` the resolver is contracted to — the same reason
    // `QRCode` hands over only the keys a stylesheet can name — so size keeps its own chain below. With no
    // prop default on `size`, "written, else inherited" is the same order the resolver applies.
    const appearance = useFormAppearance(
      {
        get theme() {
          return props.theme;
        },
      },
      field,
    );
    const config = inject(CONFIG_PROVIDER_INJECTION_KEY, null);
    const parentSize = inject<SizeType | undefined>("size", undefined);
    const currentSize = computed(
      () => props.size ?? parentSize ?? field?.size.value ?? config?.size.value,
    );
    // Size still travels down the inject chain — a `Button` in the group reads it the way it reads a
    // `ConfigProvider` — so what children inherit is the size resolved here, not merely the one written on
    // the group. A number sizes the group's own gap rather than a child's control box, so it stays out.
    provide("size", typeof currentSize.value === "string" ? currentSize.value : undefined);

    return () => {
      const { compact, block } = props;
      const size = currentSize.value;
      const theme = resolveTheme(appearance.theme.value, "fill");
      const styles: CSSProperties = {};

      const rootProps = {
        style: [attrs.style, styles],
        class: [
          "k-input-group",
          {
            "k-input-group-compact": compact,
            "k-input-group-block": block,
            "k-input-group-fill": theme === "fill",
            "k-input-group-lg": size === "large",
            "k-input-group-sm": size === "small",
          },
          attrs.class,
        ],
      };

      if (!compact && size !== undefined) {
        if (typeof size === "number") {
          styles.gap = `${size}px`;
        }
      }

      let children = getChildren(slots.default?.());
      if (compact && children) {
        children = children.map((child, i) => {
          return cloneVNode(
            child,
            {
              class: {
                "k-input-group-first-item": i === 0,
                "k-input-group-item": i > 0 && i < children!.length - 1,
                "k-input-group-last-item": i === children!.length - 1,
              },
            },
            true,
            true,
          );
        });
      }
      return <div {...rootProps}>{children}</div>;
    };
  },
});

// Registered as a field wrapper so `FormItem` hands this node the field even when the control it belongs to is
// nested inside: the group borrows the tier without isolating the context, and the input reads the value,
// label wiring and error state from the field it now sees.
export default markFormFieldWrapper(InputGroup);
