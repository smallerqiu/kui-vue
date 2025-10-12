import Vue from "vue";

/** Tabs component props */
export interface TabsProps {
  value?: string;
  card?: boolean;
  sample?: boolean;
  centered?: boolean;
  /** default: true */
  animated?: boolean;
}

declare class Tabs extends Vue {
  $props: TabsProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Tabs;
