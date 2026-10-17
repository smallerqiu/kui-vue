import { defineComponent, type ExtractPropTypes, type PropType, type VNodeChild } from "vue";
import Card, { type CardShape } from "../card";
import { resolvePaintedTheme, useConfigAppearance } from "../config/context";
import type { BooleanType, SizeType, ThemeType } from "../const/types";

// The five tiers the card this panel renders actually paints.
const PAINTED_THEMES = ["fill", "outline", "plain", "solid", "dashed"] as const;

const listPanelProps = {
  summary: [String, Number, Object, Array] as PropType<VNodeChild>,
  bordered: { type: Boolean as BooleanType, default: true },
  // The panel draws no plate of its own — the card it renders paints the tier — so it answers every tier
  // the card can, and resolves them here: the panel is the caller of that card and the one that decides which
  // appearance it asks for, and its own look is the outlined card, so a tier the card cannot paint lands on
  // `outline` rather than on the card's own `fill`. The `default` sits behind `useConfigAppearance`'s own
  // check of whether the caller wrote the attribute, so a `ConfigProvider` tier still reaches the guard.
  theme: { type: String as PropType<ThemeType>, default: "outline" },
  shape: { type: String as PropType<CardShape>, default: "round" },
  size: { type: String as PropType<SizeType>, default: "medium" },
  selectedCount: { type: Number, default: 0 },
};

export type ListPanelProps = ExtractPropTypes<typeof listPanelProps>;

const ListPanel = defineComponent({
  name: "ListPanel",
  props: listPanelProps,
  setup(props, { attrs, slots }) {
    const appearance = useConfigAppearance(props);
    return () => {
      const { class: customClass, ...restAttrs } = attrs;
      const theme = resolvePaintedTheme(appearance.theme.value, PAINTED_THEMES) ?? "outline";
      const hasSummary = props.summary != null || Boolean(slots.summary);
      const hasSelection =
        Number.isFinite(props.selectedCount) && props.selectedCount > 0 && Boolean(slots.selection);
      const hasToolbar = Boolean(slots.filters || slots.actions || hasSummary || hasSelection);
      return (
        <Card
          {...restAttrs}
          class={["k-list-panel", { "k-list-panel-borderless": !props.bordered }, customClass]}
          bordered={props.bordered}
          theme={theme}
          shape={appearance.shape.value === "square" ? "square" : "round"}
          size={appearance.size.value}
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
