import { createVNode, getCurrentInstance, render } from "vue";
import { getAppContext, recordMousePoint } from "../config/context";
import type { IconType } from "../icon";
import Modal from "./modal";
import Toast from "./toast";

let modalList: any[] = [];
recordMousePoint();

let showModal = (props = {}) => {
  const context = getCurrentInstance();
  const container = document.createElement("div");
  document.body.appendChild(container);
  const vm = createVNode(Toast, {
    ...props,
  });
  vm.appContext = context?.appContext || getAppContext()?.appContext || null;
  render(vm, container);

  let instance = vm.component?.exposed;
  if (instance) {
    instance.destroy = () => {
      instance.hide();
      modalList = modalList.filter((item) => item !== instance);
      setTimeout(() => {
        render(null, container);
        if (container.parentNode) {
          container.parentNode.removeChild(container);
        }
      }, 100);
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
  onOk?: Function;
  onCancel?: Function;
  type?: "info" | "success" | "error" | "warning" | "confirm";
}
export const modal = {
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
    return showModal({ type: "", ...props });
  },
  confirm(props: ModalApiProps) {
    return showModal({ type: "confirm", ...props });
  },
};
export default Modal;
