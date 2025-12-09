import Vue, { VueConstructor } from "vue";

/** CollapsePanel component props */
export interface CollapsePanelProps {
  title?: string;
  active?: boolean;
}

/** CollapsePanel component instance */
export interface CollapsePanel extends Vue {
  $props: CollapsePanelProps;
  $emit(event: string, ...args: any[]): void;
}

/** CollapsePanel Vue component type */
declare const CollapsePanel: VueConstructor<CollapsePanel>;

export default CollapsePanel;
