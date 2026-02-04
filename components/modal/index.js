import Modal from "./modal.jsx";
import Toast from "./toast";
import { createVNode, render, getCurrentInstance } from "vue";
import { recordMousePoint } from "../config/context";
import { getAppContext } from "../config/context";
import { withInstall } from "../utils/vue";

let modalList = [];
recordMousePoint();

let showModal = (props = {}, context = null) => {
  context = getCurrentInstance();
  const container = document.createElement("div");
  document.body.appendChild(container);
  const vm = createVNode(Toast, {
    ...props,
  });
  vm.appContext = context?.appContext || getAppContext()?.appContext;
  render(vm, container);

  let instance = vm.component?.exposed;
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

export default withInstall(Modal);
