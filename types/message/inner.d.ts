import Vue, { VueConstructor } from "vue";

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

/** inner component instance */
export interface inner extends Vue {
  $props: innerProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** inner Vue component type */
declare const inner: VueConstructor<inner>;

export default inner;
