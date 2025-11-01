import Vue, { VueConstructor } from "vue";

/** Alert component props */
export interface AlertProps {
  /** default: warning */
  type?: string;
  closable?: boolean;
  showIcon?: boolean;
  message?: string;
  description?: string;
}

/** Alert component instance */
export interface Alert extends Vue {
  $props: AlertProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** Alert Vue component type */
declare const Alert: VueConstructor<Alert>;

export default Alert;
