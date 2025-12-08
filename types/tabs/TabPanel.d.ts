import Vue, { VueConstructor } from "vue";

/** TabPanel component props */
export interface TabPanelProps {
  title?: string;
  icon?: string | any[];
  disabled?: boolean;
  closable?: boolean;
  activeKey?: string;
}

/** TabPanel component instance */
export interface TabPanel extends Vue {
  $props: TabPanelProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** TabPanel Vue component type */
declare const TabPanel: VueConstructor<TabPanel>;

export default TabPanel;
