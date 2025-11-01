import Vue, { VueConstructor } from "vue";

/** Panel component props */
export interface PanelProps {
  title?: string;
  active?: boolean;
}

/** Panel component instance */
export interface Panel extends Vue {
  $props: PanelProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** Panel Vue component type */
declare const Panel: VueConstructor<Panel>;

export default Panel;
