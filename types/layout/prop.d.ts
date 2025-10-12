import Vue from "vue";

/** prop component props */
export interface propProps {
  suffixCls?: any;
}

declare class prop extends Vue {
  $props: propProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default prop;
