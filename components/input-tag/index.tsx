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
};
export type InputTagProps = ExtractPropTypes<typeof propsDef>;

export default defineComponent({
  name: "InputTag",
  inheritAttrs: false,
  props: propsDef,
  emits: {
    "update:modelValue": (value: string[]) => Array.isArray(value),
    change: (value: string[]) => Array.isArray(value),
    add: (value: string) => typeof value === "string",
    remove: (value: string, index: number) =>
      typeof value === "string" && Number.isInteger(index),
    clear: () => true,
  },
  setup(props, { emit, attrs }) {
    const inner = ref([...props.value]);
    const draft = ref("");
    const input = ref<HTMLInputElement>();
    watch(
      () => props.modelValue,
      (value) => {
        if (value) inner.value = [...value];
      },
      { deep: true },
    );
    const values = () => props.modelValue ?? inner.value;
    const update = (next: string[]) => {
      inner.value = next;
      emit("update:modelValue", next);
      emit("change", next);
    };
    const addValues = (items: string[]) => {
      if (props.disabled || props.readonly) return;
      const next = [...values()];
      const added: string[] = [];
      for (const item of items) {
        const text = item.trim();
        if (!text || (props.max !== undefined && next.length >= props.max)) continue;
        if (
          !props.allowDuplicates &&
          next.some((tag) => tag.toLocaleLowerCase() === text.toLocaleLowerCase())
        )
          continue;
        next.push(text);
        added.push(text);
      }
      if (!added.length) return;
      update(next);
      added.forEach((text) => emit("add", text));
    };
    const commit = (raw = draft.value) => {
      addValues([raw]);
      draft.value = "";
    };
    const remove = (index: number) => {
      if (props.disabled || props.readonly || index < 0) return;
      const tags = values();
      const removed = tags[index];
      update(tags.filter((_, itemIndex) => itemIndex !== index));
      emit("remove", removed, index);
    };
    const clear = (event: Event) => {
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

      const separators = props.separators.filter(Boolean).sort((a, b) => b.length - a.length);
      if (!separators.some((separator) => value.includes(separator))) return;
      const pattern = new RegExp(
        separators.map((item) => item.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"),
        "g",
      );
      const items = value.split(pattern);
      const trailing = separators.some((separator) => value.endsWith(separator));
      draft.value = trailing ? "" : (items.pop() ?? "");
      addValues(items);
    };
    const focusInput = (event: MouseEvent) => {
      const listener = attrs.onClick;
      if (Array.isArray(listener)) listener.forEach((handler) => handler(event));
      else if (typeof listener === "function") listener(event);
      if (!event.defaultPrevented && !props.disabled) input.value?.focus();
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
          aria-disabled={props.disabled || undefined}
          aria-readonly={props.readonly || undefined}
          onClick={focusInput}
        >
          {visibleValues.map((tag, index) => (
            <Tag
              key={`${tag}-${index}`}
              class="k-input-tag-item"
              size={props.size}
              shape={props.shape}
              theme={props.theme}
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
                <div class="k-input-tag-tooltip-tags">
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
                </div>
              }
            >
              <Tag
                class="k-input-tag-item k-input-tag-rest"
                size={props.size}
                shape={props.shape}
                theme={props.theme}
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
            <Icon
              class="k-input-tag-clearable"
              type={CircleX}
              role="button"
              tabindex={0}
              aria-label="Clear"
              onClick={clear}
              onKeydown={(event: KeyboardEvent) => {
                if (event.key === "Enter" || event.key === " ") clear(event);
              }}
            />
          )}
        </div>
      );
    };
  },
});
