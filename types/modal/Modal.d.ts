import Vue, { VueConstructor } from "vue";

/** Modal component props */
export interface ModalProps {
  value?: boolean;
  title?: string;
  okText?: string;
  cancelText?: string;
  top?: number;
  width?: number;
  /** default: true */
  mask?: boolean;
  /** default: false */
  maskClosable?: boolean;
  maximized?: boolean;
  centered?: boolean;
  draggable?: boolean;
  /** default: true */
  showClose?: boolean;
  loading?: boolean;
  footer?: string;
  /** default: true */
  transfer?: boolean;
}

/** Modal component instance */
export interface Modal extends Vue {
  $props: ModalProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** Modal Vue component type */
declare const Modal: VueConstructor<Modal>;

export default Modal;
