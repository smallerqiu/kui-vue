import Vue from "vue";

/** collapse component props */
export interface collapseProps {
  name?: string;
  /** default: true */
  collapse?: boolean;
}

declare class collapse extends Vue {
  $props: collapseProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default collapse;
