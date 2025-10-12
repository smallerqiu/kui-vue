import Vue from "vue";

/** imageProps component props */
export interface imagePropsProps {
  origin?: any;
  value?: any;
  showSwitch?: any;
  data?: any;
  showPanel?: any;
  global?: any;
  type?: any;
}

declare class imageProps extends Vue {
  $props: imagePropsProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default imageProps;
