import { createVNode, getCurrentInstance, render } from "vue";
import { getAppContext, recordMousePoint } from "../config/context";
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

["info", "success", "warning", "error", "confirm"].forEach((type) => {
  Modal[type] = (props = {}) => showModal(Object.assign({ type }, props));
});

Modal.show = (props = {}) => {
  return showModal(props);
};

Modal.destroyAll = () => {
  modalList.forEach((toast) => {
    toast.destroy();
  });
};

export default Modal;
