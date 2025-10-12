import Vue from "vue";

/** BasePop component props */
export interface BasePopProps {
  transfer?: any;
  offsetLeft?: any;
  value?: any;
  className?: any;
  width?: any;
  selection?: any;
  placement?: any;
  updateKey?: any;
  color?: any;
  trigger?: any;
  transitionName?: any;
  extendWidth?: any;
}

declare class BasePop extends Vue {
  $props: BasePopProps;
  $emit(event: string, ...args: any[]): this;
}

export default BasePop;
