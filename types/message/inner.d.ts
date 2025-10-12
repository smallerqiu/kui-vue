import Vue from "vue";

/** inner component props */
export interface innerProps {
  /** default: info */
  type?: string;
  title?: string;
  name?: string;
  content?: string | Record<string, any>;
  icon?: string | any[];
  color?: string;
  closable?: boolean;
  /** default: message */
  noticeType?: string;
  /** default: undefined */
  onClose?: (...args: any[]) => any;
}

declare class inner extends Vue {
  $props: innerProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default inner;
