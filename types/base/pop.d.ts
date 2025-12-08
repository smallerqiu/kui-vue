import Vue, { VueConstructor } from "vue";

/** pop component props */
export interface popProps {
  preCls?: string;
  /** default: hover */
  trigger?: string;
  confirm?: boolean;
  dark?: boolean;
  color?: string;
  /** default: true */
  transfer?: boolean;
  value?: boolean;
  title?: string;
  /** default: true */
  showPlacementArrow?: boolean;
  width?: number | string;
  /** default: 0 */
  offsetLeft?: number;
  /** default: top */
  placement?: any;
  okText?: string;
  cancelText?: string;
  updateKey?: string | Record<string, any> | any[];
  show?: boolean;
  /** default: false */
  isMenu?: boolean;
  extendWidth?: boolean;
}

/** pop component instance */
export interface pop extends Vue {
  $props: popProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** pop Vue component type */
declare const pop: VueConstructor<pop>;

export default pop;
