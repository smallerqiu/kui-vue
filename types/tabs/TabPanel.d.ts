import Vue from "vue";

/** TabPanel component props */
export interface TabPanelProps {
  title?: string;
  icon?: string | any[];
  disabled?: boolean;
  closable?: boolean;
  activeKey?: string;
}

declare class TabPanel extends Vue {
  $props: TabPanelProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default TabPanel;
