import { defineComponent, type ExtractPropTypes, type PropType } from "vue";
import Card from "../card";
import type { BooleanType, ShapeType, SizeType, ThemeType } from "../const/types";

const listPanelProps = {
  summary: [String, Number] as PropType<string | number>,
  bordered: { type: Boolean as BooleanType, default: false },
  theme: { type: String as PropType<ThemeType>, default: "outline" },
  shape: { type: String as PropType<ShapeType>, default: "round" },
  size: { type: String as PropType<SizeType>, default: "medium" },
  selectedCount: { type: Number, default: 0 },
};

export type ListPanelProps = ExtractPropTypes<typeof listPanelProps>;

const ListPanel = defineComponent({
  name: "ListPanel",
  props: listPanelProps,
  setup(props, { attrs, slots }) {
    return () => {
      const { class: customClass, ...restAttrs } = attrs;
      const hasSummary = props.summary !== undefined || Boolean(slots.summary);
      const hasSelection = props.selectedCount > 0 && Boolean(slots.selection);
      const hasToolbar = Boolean(slots.filters || slots.actions || hasSummary || hasSelection);
      return (
        <Card
          {...restAttrs}
          class={["k-list-panel", customClass]}
          bordered={props.bordered}
          theme={props.theme}
          shape={props.shape}
          size={props.size}
        >
          {hasToolbar && (
            <div
              class={[
                "k-list-panel-toolbar",
                { "k-list-panel-toolbar-selection": hasSelection },
              ]}
            >
              {hasSelection ? (
                <div class="k-list-panel-selection">
                  {slots.selection?.({ count: props.selectedCount })}
                </div>
              ) : (
                <>
                  {slots.filters && (
                    <div class="k-list-panel-filters">{slots.filters()}</div>
                  )}
                  {(hasSummary || slots.actions) && (
                    <div class="k-list-panel-toolbar-extra">
                      {hasSummary && (
                        <div class="k-list-panel-summary">
                          {slots.summary?.() || String(props.summary ?? "")}
                        </div>
                      )}
                      {slots.actions?.()}
                    </div>
                  )}
                </>
              )}
            </div>
          )}
          <div class="k-list-panel-content">{slots.default?.()}</div>
          {slots.footer && <div class="k-list-panel-footer">{slots.footer()}</div>}
        </Card>
      );
    };
  },
});

export default ListPanel;
