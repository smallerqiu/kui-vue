import Vue, { VueConstructor } from "vue";

/** Drawer component props */
export interface DrawerProps {
  show?: boolean;
  /** default: Title */
  title?: string;
  /** default: 520 */
  width?: number | string;
  /** default: 256 */
  height?: number | string;
  okText?: string;
  cancelText?: string;
  /** default: right */
  placement?: string;
  /** default: true */
  closable?: boolean;
  /** default: true */
  footer?: boolean;
  /** default: true */
  maskClosable?: boolean;
  /** default: undefined */
  target?: (...args: any[]) => any;
  /** default: true */
  mask?: boolean;
  /** default: false */
  loading?: boolean;
  /** default: true */
  escKey?: boolean;
}

/** Drawer component instance */
export interface Drawer extends Vue {
  $props: DrawerProps;
  $emit(event: string, ...args: any[]): void;
}

/** Drawer Vue component type */
declare const Drawer: VueConstructor<Drawer>;

export default Drawer;
