import { createVNode, getCurrentInstance, render } from "vue";
import { getAppContext, recordMousePoint } from "../config/context";
import type { IconType } from "../icon";
import Modal, { ModalPanel } from "./modal";
import Toast from "./toast";
export type { ModalProps } from "./modal";
export { ModalPanel };

interface ModalInstance {
  show: () => void;
  hide: () => void;
  destroy: () => void;
}
let modalList: ModalInstance[] = [];
recordMousePoint();

const showModal = (props = {}) => {
  const context = getCurrentInstance();
  const container = document.createElement("div");
  document.body.appendChild(container);
  let instance: ModalInstance | null = null;
  let destroyTimer: ReturnType<typeof setTimeout> | undefined;
  const destroy = () => {
    if (destroyTimer) return;
    if (instance) modalList = modalList.filter((item) => item !== instance);
    destroyTimer = setTimeout(() => {
      render(null, container);
      container.remove();
    }, 300);
  };
  const vm = createVNode(Toast, {
    ...props,
    onDestroy: destroy,
  });
  vm.appContext = context?.appContext || getAppContext()?.appContext || null;
  render(vm, container);

  instance = vm.component?.exposed as ModalInstance | null;
  if (instance) {
    instance.destroy = () => {
      instance.hide();
      destroy();
    };
    instance.show();
    modalList.push(instance);
  }
  return instance;
};
export interface ModalApiProps {
  title: string;
  okText?: string;
  cancelText?: string;
  content: string;
  color?: string;
  icon?: IconType[];
  onOk?: () => void;
  onCancel?: () => void;
  type?: "info" | "success" | "error" | "warning" | "confirm";
}
export interface ModalApi {
  name?: "modal";
  show(props: ModalApiProps): void;
  info(props: ModalApiProps): void;
  success(props: ModalApiProps): void;
  warning(props: ModalApiProps): void;
  confirm(props: ModalApiProps): void;
  error(props: ModalApiProps): void;
  destroyAll(): void;
}
export const modal: ModalApi = {
  show(props: ModalApiProps) {
    return showModal(props);
  },

  destroyAll() {
    modalList.forEach((toast) => {
      toast.destroy();
    });
  },
  info(props: ModalApiProps) {
    return showModal({ type: "info", ...props });
  },
  success(props: ModalApiProps) {
    return showModal({ type: "success", ...props });
  },
  warning(props: ModalApiProps) {
    return showModal({ type: "warning", ...props });
  },
  error(props: ModalApiProps) {
    return showModal({ type: "error", ...props });
  },
  confirm(props: ModalApiProps) {
    return showModal({ type: "confirm", ...props });
  },
};
export default Modal;
