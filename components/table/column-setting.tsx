import {
  computed,
  defineComponent,
  inject,
  type ExtractPropTypes,
  type PropType,
  type Ref,
} from "vue";
import { Button } from "../button";
import { CheckboxGroup } from "../checkbox";
import type { CheckboxValue } from "../checkbox/types";
import Poptip from "../poptip";
import type { BooleanType, SizeType } from "../const/types";
import zhCN from "../locale/zh-CN";
import type { Column } from "./types";

const tableColumnSettingProps = {
  columns: { type: Array as PropType<Column[]>, default: () => [] },
  hiddenKeys: { type: Array as PropType<string[]>, default: () => [] },
  disabledKeys: { type: Array as PropType<string[]>, default: () => [] },
  title: String,
  resetText: String,
  size: String as PropType<SizeType>,
  showReset: { type: Boolean as BooleanType, default: true },
};

export type TableColumnSettingProps = ExtractPropTypes<typeof tableColumnSettingProps>;

const TableColumnSetting = defineComponent({
  name: "TableColumnSetting",
  props: tableColumnSettingProps,
  emits: {
    "update:hiddenKeys": (keys: string[]) => Array.isArray(keys),
    change: (keys: string[]) => Array.isArray(keys),
  },
  setup(props, { emit, slots }) {
    type Locale = typeof zhCN;
    const injectedLocale = inject<Locale | Ref<Locale>>("locale", zhCN);
    const locale = computed(() =>
      "value" in injectedLocale ? injectedLocale.value : injectedLocale,
    );
    const title = computed(
      () => props.title || locale.value.k.table.columnSettings || "Column settings",
    );
    const resetText = computed(
      () => props.resetText || locale.value.k.table.resetColumns || "Reset",
    );
    const leafColumns = computed(() => {
      const result: Column[] = [];
      const collect = (columns: Column[]) =>
        columns.forEach((column) =>
          column.children?.length ? collect(column.children) : result.push(column),
        );
      collect(props.columns);
      return result;
    });
    const configurableColumns = computed(() =>
      leafColumns.value.filter((column) => !props.disabledKeys.includes(column.key)),
    );
    const visibleKeys = computed(() =>
      configurableColumns.value
        .map((column) => column.key)
        .filter((key) => !props.hiddenKeys.includes(key)),
    );
    const options = computed(() =>
      configurableColumns.value.map((column) => ({ label: column.title, value: column.key })),
    );
    const update = (values: CheckboxValue[]) => {
      const selected = new Set(values.map(String));
      const configurable = new Set(configurableColumns.value.map((column) => column.key));
      const next = [
        ...props.hiddenKeys.filter((key) => !configurable.has(key)),
        ...configurableColumns.value
          .map((column) => column.key)
          .filter((key) => !selected.has(key)),
      ];
      emit("update:hiddenKeys", next);
      emit("change", next);
    };
    const reset = () => update(configurableColumns.value.map((column) => column.key));

    return () => (
      <Poptip trigger="click" placement="bottom-right" title={title.value}>
        {{
          default: () => slots.default?.() || <Button size={props.size}>{title.value}</Button>,
          content: () => (
            <div class="k-table-column-setting">
              <CheckboxGroup
                modelValue={visibleKeys.value}
                options={options.value}
                direction="vertical"
                size={props.size}
                onChange={update}
              />
              {props.showReset && (
                <Button
                  class="k-table-column-setting-reset"
                  theme="plain"
                  size="small"
                  onClick={reset}
                >
                  {resetText.value}
                </Button>
              )}
            </div>
          ),
        }}
      </Poptip>
    );
  },
});

export default TableColumnSetting;
