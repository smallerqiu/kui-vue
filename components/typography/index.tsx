import { Check, Copy, Pencil } from "kui-icons";
import {
  computed,
  defineComponent,
  nextTick,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
  type VNodeChild,
} from "vue";
import Icon from "../icon";
import Tooltip from "../tooltip";

type TypographyType = "secondary" | "success" | "warning" | "danger";
type TypographyTag = "span" | "p" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TypographyCopyableOptions {
  tooltip?: string;
  copiedTooltip?: string;
}

export interface TypographyEditableOptions {
  tooltip?: string;
}

export interface TypographyEllipsisOptions {
  rows?: number;
  expandable?: boolean;
  expandText?: string;
  collapseText?: string;
  tooltip?: boolean | string;
}

const typographyProps = {
  modelValue: String,
  tag: String as PropType<TypographyTag>,
  type: String as PropType<TypographyType>,
  strong: Boolean,
  italic: Boolean,
  underline: Boolean,
  delete: Boolean,
  mark: Boolean,
  code: Boolean,
  disabled: Boolean,
  copyable: {
    type: [Boolean, Object] as PropType<boolean | TypographyCopyableOptions>,
    default: false,
  },
  editable: {
    type: [Boolean, Object] as PropType<boolean | TypographyEditableOptions>,
    default: false,
  },
  ellipsis: {
    type: [Boolean, Number, Object] as PropType<boolean | number | TypographyEllipsisOptions>,
    default: false,
  },
  onCopy: Function as PropType<(text: string) => void>,
  onChange: Function as PropType<(text: string) => void>,
};

export type TypographyProps = ExtractPropTypes<typeof typographyProps>;

const createTypography = (name: string, defaultTag: TypographyTag) =>
  defineComponent({
    name,
    inheritAttrs: false,
    props: typographyProps,
    emits: ["update:modelValue", "change", "copy"],
    setup(props, { attrs, slots, emit }) {
      const editing = ref(false);
      const copied = ref(false);
      const expanded = ref(false);
      const input = ref<HTMLInputElement>();
      const draft = ref(props.modelValue || "");
      watch(
        () => props.modelValue,
        (value) => (draft.value = value || "")
      );
      const text = computed(() => props.modelValue ?? String(slots.default?.()[0]?.children ?? ""));
      const startEdit = () => {
        if (props.disabled) return;
        draft.value = text.value;
        editing.value = true;
        nextTick(() => input.value?.focus());
      };
      const finishEdit = () => {
        if (!editing.value) return;
        editing.value = false;
        emit("update:modelValue", draft.value);
        emit("change", draft.value);
      };
      const copy = async () => {
        if (props.disabled) return;
        await navigator.clipboard?.writeText(text.value);
        copied.value = true;
        emit("copy", text.value);
        window.setTimeout(() => (copied.value = false), 1500);
      };
      return () => {
        if (editing.value) {
          return (
            <input
              {...attrs}
              ref={input}
              class="k-typography-editor"
              value={draft.value}
              onInput={(event) => (draft.value = (event.target as HTMLInputElement).value)}
              onBlur={finishEdit}
              onKeydown={(event) => event.key === "Enter" && finishEdit()}
            />
          );
        }
        const Tag = (props.tag || defaultTag) as TypographyTag;
        const ellipsisOptions = typeof props.ellipsis === "object" ? props.ellipsis : undefined;
        const lines = Math.max(
          1,
          Math.floor(
            typeof props.ellipsis === "number" ? props.ellipsis : (ellipsisOptions?.rows ?? 1)
          )
        );
        const expandable = ellipsisOptions?.expandable === true;
        const ellipsisActive = Boolean(props.ellipsis) && !expanded.value;
        const tooltipTitle = ellipsisOptions?.tooltip
          ? typeof ellipsisOptions.tooltip === "string"
            ? ellipsisOptions.tooltip
            : text.value
          : undefined;
        const copyOptions = typeof props.copyable === "object" ? props.copyable : undefined;
        const editableOptions = typeof props.editable === "object" ? props.editable : undefined;
        const contentNode = (
          <span
            class={["k-typography-content", ellipsisActive && "is-ellipsis"]}
            style={ellipsisActive ? { WebkitLineClamp: lines } : undefined}
          >
            {props.modelValue ?? slots.default?.()}
          </span>
        );
        const withTooltip = (node: VNodeChild, title?: string) =>
          title ? <Tooltip title={title}>{node}</Tooltip> : node;
        return (
          <Tag
            {...attrs}
            class={[
              "k-typography",
              `k-typography-${name.toLowerCase().replace("typography", "") || "text"}`,
              props.type && `k-typography-${props.type}`,
              {
                "is-strong": props.strong,
                "is-italic": props.italic,
                "is-underline": props.underline,
                "is-delete": props.delete,
                "is-mark": props.mark,
                "is-code": props.code,
                "is-disabled": props.disabled,
                "has-ellipsis": props.ellipsis,
              },
            ]}
          >
            {withTooltip(contentNode, ellipsisActive ? tooltipTitle : undefined)}
            {expandable && (
              <button
                class="k-typography-action k-typography-expand"
                disabled={props.disabled}
                aria-expanded={expanded.value}
                onClick={() => !props.disabled && (expanded.value = !expanded.value)}
              >
                {expanded.value
                  ? (ellipsisOptions?.collapseText ?? "Collapse")
                  : (ellipsisOptions?.expandText ?? "More")}
              </button>
            )}
            {props.editable &&
              withTooltip(
                <button
                  class="k-typography-action"
                  disabled={props.disabled}
                  onClick={startEdit}
                  aria-label="Edit"
                >
                  <Icon type={Pencil} />
                </button>,
                editableOptions?.tooltip
              )}
            {props.copyable &&
              withTooltip(
                <button
                  class="k-typography-action"
                  disabled={props.disabled}
                  onClick={copy}
                  aria-label="Copy"
                >
                  <Icon type={copied.value ? Check : Copy} />
                </button>,
                copied.value
                  ? (copyOptions?.copiedTooltip ?? copyOptions?.tooltip)
                  : copyOptions?.tooltip
              )}
          </Tag>
        );
      };
    },
  });

export const TypographyText = createTypography("TypographyText", "span");
export const TypographyParagraph = createTypography("TypographyParagraph", "p");
export const TypographyTitle = createTypography("TypographyTitle", "h2");
const Typography = createTypography("Typography", "span");
export default Typography;
