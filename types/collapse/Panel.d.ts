import Vue from "vue";

/** Panel component props */
export interface PanelProps {
  title?: string;
  active?: boolean;
}

declare class Panel extends Vue {
  $props: PanelProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Panel;
