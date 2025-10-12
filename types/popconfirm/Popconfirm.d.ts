import Vue from "vue";

/** Popconfirm component props */
export interface PopconfirmProps {
  dark?: boolean;
  /** default: true */
  transfer?: boolean;
  title?: string | number | Record<string, any> | any[];
  width?: number | string;
  okText?: string;
  cancelText?: string;
  /** default: top */
  placement?: any;
}

declare class Popconfirm extends Vue {
  $props: PopconfirmProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Popconfirm;
