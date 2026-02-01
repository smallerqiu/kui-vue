import Vue, { VueConstructor } from "vue";

/** Poptip component props */
export interface PoptipProps {
  dark?: boolean;
  show?: boolean;
  title?: string | number | Record<string, any> | any[];
  size?: string;
  width?: number | string;
  /** default: hover */
  trigger?: any;
  /** default: top */
  placement?: any;
}

/** Poptip component instance */
export interface Poptip extends Vue {
  $props: PoptipProps;
  $emit(event: string, ...args: any[]): this;
}

/** Poptip Vue component type */
declare const Poptip: VueConstructor<Poptip>;

export default Poptip;
