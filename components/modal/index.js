import Modal from "./modal.jsx";
import Toast from "./toast";
import { /*createVNode, render,*/ inject } from "vue"; // for 3
import { createVNode, render } from "../utils/vue"; //for 2

let modalList = [];

if (typeof window !== "undefined") {
  document.addEventListener("mousedown", (e) => {
    window.__kui__point = { x: e.clientX, y: e.clientY };
  });
}
let createInstance = (props = {}) => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  const vm = createVNode(Toast, {
    ...props,
    onDestroy: () => {
      setTimeout(() => {
        modalList = modalList.filter((item) => item !== instance);
        document.body.contains(container) && document.body.removeChild(container);
      }, 300);
    },
  });
  render(vm, container);

  let instance = vm.component?.exposed;
  instance.destroy = () => {
    instance.hide();
    modalList = modalList.filter((item) => item !== instance);
    setTimeout(() => {
      document.body.contains(container) && document.body.removeChild(container);
    }, 300);
  };
  return instance;
};

let getModal = (props = {}) => {
  let instance = createInstance(props);
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

Modal.destroyAll = (e) => {
  modalList.forEach((toast) => {
    toast.destroy();
  });
};
Modal.install = (app) => {
  app.provide("modal", Modal);
  app.config.globalProperties.$modal = Modal;
};

Modal.useModal = () => {
  return inject("modal");
};
export default Modal;
