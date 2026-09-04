import { CircleX } from "kui-icons";
import { defineComponent, ref, watch, type ExtractPropTypes, type PropType } from "vue";
import type { ShapeType, SizeType, ThemeType } from "../const/types";
import Icon from "../icon";
import Space from "../space";
import Tag from "../tag";
import Tooltip from "../tooltip";

const propsDef = {
  size: { type: String as PropType<SizeType>, default: "medium" },
  shape: String as PropType<ShapeType>,
  theme: { type: String as PropType<ThemeType>, default: "fill" },
  modelValue: Array as PropType<string[]>,
  value: { type: Array as PropType<string[]>, default: () => [] },
  placeholder: String,
  disabled: Boolean,
  readonly: Boolean,
  clearable: { type: Boolean, default: true },
  block: Boolean,
  allowDuplicates: Boolean,
  max: Number,
  maxTagCount: Number,
  separators: { type: Array as PropType<string[]>, default: () => [","] },
  onChange: Function as PropType<(value: string[]) => void>,
  onAdd: Function as PropType<(value: string) => void>,
  onRemove: Function as PropType<(value: string, index: number) => void>,
  onClear: Function as PropType<() => void>,
};
export type InputTagProps = ExtractPropTypes<typeof propsDef>;

export default defineComponent({
  name: "InputTag",
  inheritAttrs: false,
  props: propsDef,
  setup(props, { emit, attrs }) {
    const inner = ref([...props.value]);
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
      if (props.disabled || props.readonly) return;
      const text = raw.trim();
      const tags = values();
      if (!text || (props.max !== undefined && tags.length >= props.max)) {
        draft.value = "";
        return;
      }
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
      if (props.disabled || props.readonly || index < 0) return;
      const tags = values();
      const removed = tags[index];
      update(tags.filter((_, itemIndex) => itemIndex !== index));
      emit("remove", removed, index);
    };
    const clear = (event: MouseEvent) => {
      if (props.disabled || props.readonly) return;
      event.stopPropagation();
      draft.value = "";
      update([]);
      emit("clear");
    };
    const inputHandler = (event: Event) => {
      const inputEvent = event as InputEvent;
      const value = (event.target as HTMLInputElement).value;
      draft.value = value;
      if (inputEvent.isComposing) return;

      const separator = props.separators.find((item) => item && value.endsWith(item));
      if (!separator) return;
      draft.value = value.slice(0, -separator.length);
      commit();
    };
    return () => {
      const currentValues = values();
      const hasDisplayLimit =
        typeof props.maxTagCount === "number" && Number.isFinite(props.maxTagCount);
      const displayCount = hasDisplayLimit
        ? Math.max(0, Math.floor(props.maxTagCount as number))
        : currentValues.length;
      const visibleValues = currentValues.slice(0, displayCount);
      const hiddenValues = currentValues.slice(displayCount);
      const hiddenCount = hiddenValues.length;

      return (
        <div
          {...attrs}
          class={[
            "k-input-tag",
            {
              "k-input-tag-disabled": props.disabled,
              "k-input-tag-readonly": props.readonly,
              "k-input-tag-has-clear": props.clearable && currentValues.length > 0,
              "k-input-tag-sm": props.size === "small",
              "k-input-tag-block": props.block,
              "k-input-tag-lg": props.size === "large",
              [`k-input-tag-${props.shape}`]: props.shape,
              [`k-input-tag-${props.theme}`]: props.theme,
            },
            attrs.class,
          ]}
          aria-readonly={props.readonly || undefined}
          onClick={() => !props.disabled && input.value?.focus()}
        >
          {visibleValues.map((tag, index) => (
            <Tag
              key={`${tag}-${index}`}
              class="k-input-tag-item"
              size={props.size}
              shape={props.shape}
              theme="fill"
              compact
              closeable={!props.disabled && !props.readonly}
              onClose={() => remove(index)}
            >
              {tag}
            </Tag>
          ))}
          {hiddenCount > 0 && (
            <Tooltip
              title={
                <Space wrap size={4}>
                  {hiddenValues.map((tag, index) => (
                    <Tag
                      key={`${tag}-${index}`}
                      size={props.size}
                      shape={props.shape}
                      theme={props.theme}
                      compact
                      closeable={!props.disabled && !props.readonly}
                      onClose={() => remove(displayCount + index)}
                    >
                      {tag}
                    </Tag>
                  ))}
                </Space>
              }
            >
              <Tag
                class="k-input-tag-item k-input-tag-rest"
                size={props.size}
                shape={props.shape}
                theme="fill"
                compact
              >
                +{hiddenCount}...
              </Tag>
            </Tooltip>
          )}
          <input
            ref={input}
            class="k-input-text k-input-tag-input"
            disabled={props.disabled}
            readonly={props.readonly}
            value={draft.value}
            placeholder={!values().length ? props.placeholder : undefined}
            onInput={inputHandler}
            onBlur={() => commit()}
            onKeydown={(event) => {
              if (event.isComposing) return;
              if (event.key === "Enter") {
                commit((event.currentTarget as HTMLInputElement).value);
                event.preventDefault();
              } else if (event.key === "Backspace" && !draft.value) {
                remove(values().length - 1);
              } else if (props.separators.includes(event.key)) {
                commit((event.currentTarget as HTMLInputElement).value);
                event.preventDefault();
              }
            }}
          />
          {props.clearable && currentValues.length > 0 && !props.disabled && !props.readonly && (
            <Icon class="k-input-tag-clearable" type={CircleX} onClick={clear} />
          )}
        </div>
      );
    };
  },
});
