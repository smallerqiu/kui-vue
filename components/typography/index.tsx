import {
  computed,
  defineComponent,
  nextTick,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
} from "vue";

type TypographyType = "secondary" | "success" | "warning" | "danger";
type TypographyTag = "span" | "p" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

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
  copyable: Boolean,
  editable: Boolean,
  ellipsis: { type: [Boolean, Number] as PropType<boolean | number>, default: false },
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
        const lines = typeof props.ellipsis === "number" ? props.ellipsis : 1;
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
                "is-ellipsis": props.ellipsis,
              },
            ]}
            style={props.ellipsis ? { WebkitLineClamp: lines } : undefined}
          >
            <span class="k-typography-content">{props.modelValue ?? slots.default?.()}</span>
            {props.editable && (
              <button class="k-typography-action" onClick={startEdit} aria-label="Edit">
                ✎
              </button>
            )}
            {props.copyable && (
              <button class="k-typography-action" onClick={copy} aria-label="Copy">
                {copied.value ? "✓" : "⧉"}
              </button>
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
