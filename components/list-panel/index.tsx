import { defineComponent, type ExtractPropTypes, type PropType, type VNodeChild } from "vue";
import Card from "../card";
import type { BooleanType, ShapeType, SizeType } from "../const/types";

const listPanelProps = {
  summary: [String, Number, Object, Array] as PropType<VNodeChild>,
  bordered: { type: Boolean as BooleanType, default: true },
  theme: { type: String as PropType<"fill" | "outline" | "plain">, default: "outline" },
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
      const hasSummary = props.summary != null || Boolean(slots.summary);
      const hasSelection =
        Number.isFinite(props.selectedCount) && props.selectedCount > 0 && Boolean(slots.selection);
      const hasToolbar = Boolean(slots.filters || slots.actions || hasSummary || hasSelection);
      return (
        <Card
          {...restAttrs}
          class={["k-list-panel", { "k-list-panel-borderless": !props.bordered }, customClass]}
          bordered={props.bordered}
          theme={props.theme}
          shape={props.shape}
          size={props.size}
        >
          {hasToolbar && (
            <div
              class={["k-list-panel-toolbar", { "k-list-panel-toolbar-selection": hasSelection }]}
              role="toolbar"
            >
              {hasSelection ? (
                <div class="k-list-panel-selection">
                  {slots.selection?.({ count: props.selectedCount })}
                </div>
              ) : (
                <>
                  {slots.filters && <div class="k-list-panel-filters">{slots.filters()}</div>}
                  {(hasSummary || slots.actions) && (
                    <div class="k-list-panel-toolbar-extra">
                      {hasSummary && (
                        <div class="k-list-panel-summary" aria-live="polite">
                          {slots.summary?.() || props.summary}
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
