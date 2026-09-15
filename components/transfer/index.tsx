import { ChevronLeft, ChevronRight, Search } from "kui-icons";
import {
  computed,
  defineComponent,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
  type VNodeChild,
} from "vue";
import { Button } from "../button";
import { Checkbox } from "../checkbox";
import Empty from "../empty";
import { markFormFieldComponent, useFormAppearance, useFormField } from "../form/context";
import Input from "../input";
import { tuplePropType } from "../utils/vue";

export type TransferKey = string | number;
export interface TransferItem {
  key: TransferKey;
  title: string;
  description?: string;
  disabled?: boolean;
}

const transferProps = {
  modelValue: { type: Array as PropType<TransferKey[]>, default: () => [] },
  dataSource: { type: Array as PropType<TransferItem[]>, default: () => [] },
  titles: {
    type: tuplePropType<[string, string]>(),
    default: () => ["Source", "Target"],
    validator: (value: unknown[]) =>
      value.length === 2 && value.every((item) => typeof item === "string"),
  },
  operations: {
    type: tuplePropType<[string, string]>(),
    default: () => ["", ""],
    validator: (value: unknown[]) =>
      value.length === 2 && value.every((item) => typeof item === "string"),
  },
  searchable: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  theme: {
    type: String as PropType<"outline" | "fill">,
    default: "outline",
  },
  filterOption: Function as PropType<(keyword: string, item: TransferItem) => boolean>,
  render: Function as PropType<(item: TransferItem) => VNodeChild>,
};

export type TransferProps = ExtractPropTypes<typeof transferProps>;

const Transfer = defineComponent({
  name: "Transfer",
  props: transferProps,
  emits: {
    "update:modelValue": (keys: TransferKey[]) => Array.isArray(keys),
    change: (targetKeys: TransferKey[], direction: "left" | "right", movedKeys: TransferKey[]) =>
      Array.isArray(targetKeys) &&
      ["left", "right"].includes(direction) &&
      Array.isArray(movedKeys),
    search: (direction: "left" | "right", value: string) =>
      ["left", "right"].includes(direction) && typeof value === "string",
    selectChange: (sourceKeys: TransferKey[], targetKeys: TransferKey[]) =>
      Array.isArray(sourceKeys) && Array.isArray(targetKeys),
  },
  setup(props, { emit, slots }) {
    const field = useFormField(true);
    const appearance = useFormAppearance(props, field);
    const modelValue = computed<TransferKey[]>(() =>
      field?.prop && Array.isArray(field.value.value)
        ? (field.value.value as TransferKey[])
        : props.modelValue,
    );
    const sourceSelected = ref<TransferKey[]>([]);
    const targetSelected = ref<TransferKey[]>([]);
    const sourceKeyword = ref("");
    const targetKeyword = ref("");
    const targetKeys = computed(() => new Set(modelValue.value));
    const sourceItems = computed(() =>
      props.dataSource.filter((item) => !targetKeys.value.has(item.key)),
    );
    const targetItems = computed(() =>
      props.dataSource.filter((item) => targetKeys.value.has(item.key)),
    );
    const itemMap = computed(() => new Map(props.dataSource.map((item) => [item.key, item])));
    const filter = (items: TransferItem[], keyword: string) =>
      keyword
        ? items.filter((item) =>
            props.filterOption
              ? props.filterOption(keyword, item)
              : `${item.title} ${item.description || ""}`
                  .toLowerCase()
                  .includes(keyword.toLowerCase()),
          )
        : items;
    const visibleSource = computed(() => filter(sourceItems.value, sourceKeyword.value));
    const visibleTarget = computed(() => filter(targetItems.value, targetKeyword.value));

    watch([modelValue, () => props.dataSource], () => {
      sourceSelected.value = sourceSelected.value.filter(
        (key) => itemMap.value.has(key) && !targetKeys.value.has(key),
      );
      targetSelected.value = targetSelected.value.filter(
        (key) => itemMap.value.has(key) && targetKeys.value.has(key),
      );
    });

    const notifySelection = () =>
      emit("selectChange", [...sourceSelected.value], [...targetSelected.value]);
    const toggle = (direction: "left" | "right", key: TransferKey) => {
      if (
        props.disabled ||
        field?.disabled.value ||
        props.readonly ||
        field?.readonly.value ||
        itemMap.value.get(key)?.disabled
      )
        return;
      const selected = direction === "left" ? sourceSelected : targetSelected;
      selected.value = selected.value.includes(key)
        ? selected.value.filter((item) => item !== key)
        : [...selected.value, key];
      notifySelection();
    };
    const selectable = (items: TransferItem[]) =>
      items.filter((item) => !item.disabled).map((item) => item.key);
    const toggleAll = (direction: "left" | "right", items: TransferItem[]) => {
      if (props.readonly || field?.readonly.value) return;
      const selected = direction === "left" ? sourceSelected : targetSelected;
      const keys = selectable(items);
      const unfilteredKeys = selected.value.filter((key) => !keys.includes(key));
      selected.value =
        keys.length > 0 && keys.every((key) => selected.value.includes(key))
          ? unfilteredKeys
          : [...unfilteredKeys, ...keys];
      notifySelection();
    };
    const move = (direction: "left" | "right") => {
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value)
        return;
      const selected = direction === "right" ? sourceSelected : targetSelected;
      const movedKeys = selected.value.filter((key) => {
        const item = itemMap.value.get(key);
        return item && !item.disabled;
      });
      if (!movedKeys.length) return;
      const next =
        direction === "right"
          ? [...new Set([...modelValue.value, ...movedKeys])]
          : modelValue.value.filter((key) => !movedKeys.includes(key));
      emit("update:modelValue", next);
      if (field?.prop) field.update(next);
      emit("change", next, direction, [...movedKeys]);
      selected.value = selected.value.filter((key) => !movedKeys.includes(key));
      notifySelection();
    };
    const updateSearch = (direction: "left" | "right", value: string) => {
      if (direction === "left") sourceKeyword.value = value;
      else targetKeyword.value = value;
      emit("search", direction, value);
    };
    const renderList = (
      direction: "left" | "right",
      items: TransferItem[],
      allItems: TransferItem[],
      title: string,
      theme: "outline" | "fill",
    ) => {
      const selected = direction === "left" ? sourceSelected.value : targetSelected.value;
      const enabledKeys = selectable(items);
      const selectedCount = allItems.filter((item) => selected.includes(item.key)).length;
      const allChecked =
        enabledKeys.length > 0 && enabledKeys.every((key) => selected.includes(key));
      return (
        <section class="k-transfer-list">
          <header class="k-transfer-header">
            <Checkbox
              checked={allChecked}
              disabled={props.disabled || field?.disabled.value || !enabledKeys.length}
              readonly={props.readonly || field?.readonly.value}
              onChange={() => toggleAll(direction, items)}
            >
              {title}
            </Checkbox>
            <span>
              {selectedCount}/{allItems.length}
            </span>
          </header>
          {props.searchable && (
            <div class="k-transfer-search">
              <Input
                modelValue={direction === "left" ? sourceKeyword.value : targetKeyword.value}
                disabled={props.disabled || field?.disabled.value}
                theme={theme}
                clearable
                icon={Search}
                placeholder="Search"
                onChange={(value) => updateSearch(direction, value)}
              />
            </div>
          )}
          <div
            class="k-transfer-body"
            role="listbox"
            aria-label={title}
            aria-multiselectable="true"
          >
            {items.length ? (
              items.map((item) => (
                <div
                  class={[
                    "k-transfer-item",
                    selected.includes(item.key) && "is-selected",
                    item.disabled && "is-disabled",
                  ]}
                  key={item.key}
                  role="option"
                  aria-selected={selected.includes(item.key)}
                  aria-disabled={props.disabled || field?.disabled.value || item.disabled}
                  tabindex={props.disabled || field?.disabled.value || item.disabled ? -1 : 0}
                  onClick={() => toggle(direction, item.key)}
                  onKeydown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      toggle(direction, item.key);
                    }
                  }}
                >
                  <span
                    class="k-transfer-item-checkbox"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Checkbox
                      checked={selected.includes(item.key)}
                      disabled={props.disabled || field?.disabled.value || item.disabled}
                      readonly={props.readonly || field?.readonly.value}
                      onChange={() => toggle(direction, item.key)}
                    />
                  </span>
                  <span class="k-transfer-item-content">
                    {slots.item?.({ item }) ?? props.render?.(item) ?? item.title}
                    {item.description && <small>{item.description}</small>}
                  </span>
                </div>
              ))
            ) : (
              <Empty />
            )}
          </div>
          {slots.footer && <footer class="k-transfer-footer">{slots.footer({ direction })}</footer>}
        </section>
      );
    };
    return () => {
      const formTheme = appearance.theme.value;
      const theme = formTheme === "outline" || formTheme === "fill" ? formTheme : props.theme;
      return (
        <div
          id={field?.prop ? field.id : undefined}
          class={[
            "k-transfer",
            `k-transfer-${theme}`,
            (props.disabled || field?.disabled.value) && "is-disabled",
            (props.readonly || field?.readonly.value) && "is-readonly",
          ]}
          aria-labelledby={field?.prop ? field.labelId : undefined}
          aria-describedby={field?.describedBy.value}
          aria-invalid={field?.invalid.value || undefined}
          aria-required={field?.required.value || undefined}
          aria-disabled={props.disabled || field?.disabled.value || undefined}
          aria-readonly={props.readonly || field?.readonly.value || undefined}
          onFocusout={() => field?.blur()}
        >
          {renderList("left", visibleSource.value, sourceItems.value, props.titles[0], theme)}
          <div class="k-transfer-operations">
            <Button
              type="primary"
              size="small"
              disabled={
                props.disabled ||
                field?.disabled.value ||
                props.readonly ||
                field?.readonly.value ||
                !sourceSelected.value.length
              }
              icon={ChevronRight}
              onClick={() => move("right")}
            >
              {props.operations[0]}
            </Button>
            <Button
              type="primary"
              size="small"
              disabled={
                props.disabled ||
                field?.disabled.value ||
                props.readonly ||
                field?.readonly.value ||
                !targetSelected.value.length
              }
              icon={ChevronLeft}
              onClick={() => move("left")}
            >
              {props.operations[1]}
            </Button>
          </div>
          {renderList("right", visibleTarget.value, targetItems.value, props.titles[1], theme)}
        </div>
      );
    };
  },
});

export default markFormFieldComponent(Transfer);
