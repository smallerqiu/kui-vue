import Vue, { VueConstructor } from "vue";

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

/** imageProps component instance */
export interface imageProps extends Vue {
  $props: imagePropsProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** imageProps Vue component type */
declare const imageProps: VueConstructor<imageProps>;

export default imageProps;
