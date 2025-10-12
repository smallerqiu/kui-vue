import Vue from "vue";

/** Collapse component props */
export interface CollapseProps {
  value?: any[];
  accordion?: boolean;
  sample?: boolean;
}

declare class Collapse extends Vue {
  $props: CollapseProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Collapse;
