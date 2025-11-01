import Vue, { VueConstructor } from "vue";

/** Tabs component props */
export interface TabsProps {
  value?: string;
  card?: boolean;
  sample?: boolean;
  centered?: boolean;
  /** default: true */
  animated?: boolean;
}

/** Tabs component instance */
export interface Tabs extends Vue {
  $props: TabsProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** Tabs Vue component type */
declare const Tabs: VueConstructor<Tabs>;

export default Tabs;
