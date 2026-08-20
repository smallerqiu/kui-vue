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
import Icon from "../icon";

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
    type: Array as unknown as PropType<[string, string]>,
    default: () => ["Source", "Target"],
  },
  operations: { type: Array as unknown as PropType<[string, string]>, default: () => ["", ""] },
  searchable: Boolean,
  disabled: Boolean,
  filterOption: Function as PropType<(keyword: string, item: TransferItem) => boolean>,
  render: Function as PropType<(item: TransferItem) => VNodeChild>,
  onChange: Function as PropType<
    (targetKeys: TransferKey[], direction: "left" | "right", movedKeys: TransferKey[]) => void
  >,
  onSearch: Function as PropType<(direction: "left" | "right", value: string) => void>,
  onSelectChange: Function as PropType<
    (sourceSelectedKeys: TransferKey[], targetSelectedKeys: TransferKey[]) => void
  >,
};

export type TransferProps = ExtractPropTypes<typeof transferProps>;

export default defineComponent({
  name: "Transfer",
  props: transferProps,
  emits: ["update:modelValue", "change", "search", "selectChange"],
  setup(props, { emit, slots }) {
    const sourceSelected = ref<TransferKey[]>([]);
    const targetSelected = ref<TransferKey[]>([]);
    const sourceKeyword = ref("");
    const targetKeyword = ref("");
    const targetKeys = computed(() => new Set(props.modelValue));
    const sourceItems = computed(() =>
      props.dataSource.filter((item) => !targetKeys.value.has(item.key))
    );
    const targetItems = computed(() =>
      props.dataSource.filter((item) => targetKeys.value.has(item.key))
    );
    const filter = (items: TransferItem[], keyword: string) =>
      keyword
        ? items.filter((item) =>
            props.filterOption
              ? props.filterOption(keyword, item)
              : `${item.title} ${item.description || ""}`
                  .toLowerCase()
                  .includes(keyword.toLowerCase())
          )
        : items;
    const visibleSource = computed(() => filter(sourceItems.value, sourceKeyword.value));
    const visibleTarget = computed(() => filter(targetItems.value, targetKeyword.value));

    watch(
      () => props.modelValue,
      () => {
        sourceSelected.value = sourceSelected.value.filter((key) => !targetKeys.value.has(key));
        targetSelected.value = targetSelected.value.filter((key) => targetKeys.value.has(key));
      }
    );

    const notifySelection = () =>
      emit("selectChange", [...sourceSelected.value], [...targetSelected.value]);
    const toggle = (direction: "left" | "right", key: TransferKey) => {
      const selected = direction === "left" ? sourceSelected : targetSelected;
      selected.value = selected.value.includes(key)
        ? selected.value.filter((item) => item !== key)
        : [...selected.value, key];
      notifySelection();
    };
    const selectable = (items: TransferItem[]) =>
      items.filter((item) => !item.disabled).map((item) => item.key);
    const toggleAll = (direction: "left" | "right", items: TransferItem[]) => {
      const selected = direction === "left" ? sourceSelected : targetSelected;
      const keys = selectable(items);
      selected.value =
        keys.length > 0 && keys.every((key) => selected.value.includes(key)) ? [] : keys;
      notifySelection();
    };
    const move = (direction: "left" | "right") => {
      if (props.disabled) return;
      const movedKeys = direction === "right" ? sourceSelected.value : targetSelected.value;
      if (!movedKeys.length) return;
      const next =
        direction === "right"
          ? [...props.modelValue, ...movedKeys]
          : props.modelValue.filter((key) => !movedKeys.includes(key));
      emit("update:modelValue", next);
      emit("change", next, direction, [...movedKeys]);
      if (direction === "right") sourceSelected.value = [];
      else targetSelected.value = [];
      notifySelection();
    };
    const updateSearch = (direction: "left" | "right", value: string) => {
      if (direction === "left") sourceKeyword.value = value;
      else targetKeyword.value = value;
      emit("search", direction, value);
    };
    const renderList = (direction: "left" | "right", items: TransferItem[], title: string) => {
      const selected = direction === "left" ? sourceSelected.value : targetSelected.value;
      const enabledKeys = selectable(items);
      const allChecked =
        enabledKeys.length > 0 && enabledKeys.every((key) => selected.includes(key));
      return (
        <section class="k-transfer-list">
          <header class="k-transfer-header">
            <Checkbox
              checked={allChecked}
              disabled={props.disabled || !enabledKeys.length}
              onChange={() => toggleAll(direction, items)}
            >
              {title}
            </Checkbox>
            <span>
              {selected.length}/{items.length}
            </span>
          </header>
          {props.searchable && (
            <label class="k-transfer-search">
              <Icon type={Search} />
              <input
                value={direction === "left" ? sourceKeyword.value : targetKeyword.value}
                disabled={props.disabled}
                placeholder="Search"
                onInput={(event) =>
                  updateSearch(direction, (event.target as HTMLInputElement).value)
                }
              />
            </label>
          )}
          <div class="k-transfer-body">
            {items.length ? (
              items.map((item) => (
                <div class={["k-transfer-item", item.disabled && "is-disabled"]} key={item.key}>
                  <Checkbox
                    checked={selected.includes(item.key)}
                    disabled={props.disabled || item.disabled}
                    onChange={() => toggle(direction, item.key)}
                  />
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
          {slots.footer?.({ direction })}
        </section>
      );
    };
    return () => (
      <div class={["k-transfer", props.disabled && "is-disabled"]}>
        {renderList("left", visibleSource.value, props.titles[0])}
        <div class="k-transfer-operations">
          <Button
            type="primary"
            size="small"
            disabled={props.disabled || !sourceSelected.value.length}
            icon={ChevronRight}
            onClick={() => move("right")}
          >
            {props.operations[0]}
          </Button>
          <Button
            type="primary"
            size="small"
            disabled={props.disabled || !targetSelected.value.length}
            icon={ChevronLeft}
            onClick={() => move("left")}
          >
            {props.operations[1]}
          </Button>
        </div>
        {renderList("right", visibleTarget.value, props.titles[1])}
      </div>
    );
  },
});
