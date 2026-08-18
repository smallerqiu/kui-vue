import { X } from "kui-icons";
import { defineComponent, ref, watch, type ExtractPropTypes, type PropType } from "vue";
import type { ShapeType, SizeType, ThemeType } from "../const/types";
import Icon from "../icon";

const propsDef = {
  size: String as PropType<SizeType>,
  shape: String as PropType<ShapeType>,
  theme: { type: String as PropType<ThemeType>, default: "fill" },
  modelValue: Array as PropType<string[]>,
  defaultValue: { type: Array as PropType<string[]>, default: () => [] },
  placeholder: String,
  disabled: Boolean,
  allowDuplicates: Boolean,
  max: Number,
  separators: { type: Array as PropType<string[]>, default: () => [","] },
  onChange: Function as PropType<(value: string[]) => void>,
  onAdd: Function as PropType<(value: string) => void>,
  onRemove: Function as PropType<(value: string, index: number) => void>,
};
export type InputTagProps = ExtractPropTypes<typeof propsDef>;

export default defineComponent({
  name: "InputTag",
  inheritAttrs: false,
  props: propsDef,
  setup(props, { emit, attrs }) {
    const inner = ref([...props.defaultValue]);
    const draft = ref("");
    const input = ref<HTMLInputElement>();
    watch(
      () => props.modelValue,
      (value) => {
        if (value) inner.value = [...value];
      },
      { deep: true }
    );
    const values = () => props.modelValue ?? inner.value;
    const update = (next: string[]) => {
      inner.value = next;
      emit("update:modelValue", next);
      emit("change", next);
    };
    const commit = (raw = draft.value) => {
      const text = raw.trim();
      const tags = values();
      if (!text || (props.max !== undefined && tags.length >= props.max)) return;
      if (
        !props.allowDuplicates &&
        tags.some((tag) => tag.toLocaleLowerCase() === text.toLocaleLowerCase())
      ) {
        draft.value = "";
        return;
      }
      update([...tags, text]);
      draft.value = "";
      emit("add", text);
    };
    const remove = (index: number) => {
      if (props.disabled || index < 0) return;
      const tags = values();
      const removed = tags[index];
      update(tags.filter((_, itemIndex) => itemIndex !== index));
      emit("remove", removed, index);
    };
    return () => (
      <div
        {...attrs}
        data-multiple=""
        class={[
          "k-input",
          "k-input-tag",
          {
            "k-input-disabled": props.disabled,
            "k-input-sm": props.size === "small",
            "k-input-lg": props.size === "large",
            "k-input-circle": props.shape === "circle",
            "k-input-square": props.shape === "square",
            [`k-input-${props.theme}`]: props.theme !== "outline",
          },
          attrs.class,
        ]}
        onClick={() => input.value?.focus()}
      >
        {values().map((tag, index) => (
          <span class="k-select-tag k-input-tag-item">
            {tag}
            <Icon
              type={X}
              onClick={(event) => {
                event.stopPropagation();
                remove(index);
              }}
            />
          </span>
        ))}
        <input
          ref={input}
          class="k-input-text k-input-tag-input"
          disabled={props.disabled}
          value={draft.value}
          placeholder={!values().length ? props.placeholder : undefined}
          onInput={(event) => (draft.value = (event.target as HTMLInputElement).value)}
          onBlur={() => commit()}
          onKeydown={(event) => {
            if (event.key === "Enter") {
              commit();
              event.preventDefault();
            } else if (event.key === "Backspace" && !draft.value) {
              remove(values().length - 1);
            } else if (props.separators.includes(event.key)) {
              commit();
              event.preventDefault();
            }
          }}
        />
      </div>
    );
  },
});
