import Vue from "vue";

/** instance component props */
export interface instanceProps {
  origin?: any;
  value?: any;
  showSwitch?: any;
  data?: any;
  showPanel?: any;
  global?: any;
  type?: any;
}

declare class instance extends Vue {
  $props: instanceProps;
  $emit(event: string, ...args: any[]): this;
}

export default instance;
