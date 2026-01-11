import Modal from "./modal.jsx";
import Toast from "./toast";
import { createVNode, render, getCurrentInstance } from "vue";

let modalList = [];

if (typeof window !== "undefined") {
  document.addEventListener("mousedown", (e) => {
    window.__kui__point = { x: e.clientX, y: e.clientY };
  });
}
let createInstance = (props = {}, context = null) => {
  context = getCurrentInstance();
  const container = document.createElement("div");
  document.body.appendChild(container);
  const vm = createVNode(Toast, {
    ...props,
  });
  vm.appContext = context?.appContext || window.__kui_context?.appContext;
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
  return instance;
};

let getModal = (props = {}, context = null) => {
  let instance = createInstance(props, context);
  instance.show();
  modalList.push(instance);
  return instance;
};

["info", "success", "warning", "error", "confirm"].forEach((type) => {
  Modal[type] = (props = {}) => getModal(Object.assign({ type }, props));
});

Modal.show = (props = {}) => {
  return getModal(props);
};

Modal.destroyAll = () => {
  modalList.forEach((toast) => {
    toast.destroy();
  });
};
Modal.install = (app) => {
  // app.provide("modal", Modal);
  app.config.globalProperties.$modal = Modal;
};

export default Modal;
