import Vue from "vue";

/** Alert component props */
export interface AlertProps {
  /** default: warning */
  type?: string;
  closable?: boolean;
  showIcon?: boolean;
  message?: string;
  description?: string;
}

declare class Alert extends Vue {
  $props: AlertProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Alert;
