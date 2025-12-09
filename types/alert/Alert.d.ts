import Vue, { VueConstructor } from "vue";

/** Alert component props */
export interface AlertProps {
  /** default: warning */
  type?: string;
  closable?: boolean;
  showIcon?: boolean;
  icon?: string | Record<string, any> | any[];
  message?: string;
  description?: string;
}

/** Alert component instance */
export interface Alert extends Vue {
  $props: AlertProps;
  $emit(event: string, ...args: any[]): void;
}

/** Alert Vue component type */
declare const Alert: VueConstructor<Alert>;

export default Alert;
