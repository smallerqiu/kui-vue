import Vue, { VueConstructor } from "vue";

/** Poptip component props */
export interface PoptipProps {
  dark?: boolean;
  /** default: hover */
  trigger?: string;
  /** default: true */
  transfer?: boolean;
  title?: string;
  width?: number | string;
  /** default: top */
  placement?: any;
  value?: boolean;
}

/** Poptip component instance */
export interface Poptip extends Vue {
  $props: PoptipProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** Poptip Vue component type */
declare const Poptip: VueConstructor<Poptip>;

export default Poptip;
