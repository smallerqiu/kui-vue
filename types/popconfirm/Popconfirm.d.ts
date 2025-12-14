import Vue, { VueConstructor } from "vue";

/** Popconfirm component props */
export interface PopconfirmProps {
  dark?: boolean;
  title?: string | number | Record<string, any> | any[];
  size?: string;
  width?: number | string;
  /** default: 确认 */
  okText?: string;
  /** default: 取消 */
  cancelText?: string;
  /** default: top */
  placement?: any;
}

/** Popconfirm component instance */
export interface Popconfirm extends Vue {
  $props: PopconfirmProps;
  $emit(event: string, ...args: any[]): void;
}

/** Popconfirm Vue component type */
declare const Popconfirm: VueConstructor<Popconfirm>;

export default Popconfirm;
