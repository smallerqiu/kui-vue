import Modal from "./modal.jsx";
import Toast from "./toast";
// import { /*createVNode, render,*/ inject } from "vue"; // for 3
import { createVNode, render } from "../utils/vue"; //for 2
import { getCurrentInstance } from "vue";

let modalList = [];

if (typeof window !== "undefined") {
  document.addEventListener("mousedown", (e) => {
    window.__kui__point = { x: e.clientX, y: e.clientY };
  });
}
let createInstance = (props = {}, context = null) => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const vm = createVNode(
    Toast,
    {
      props,
      on: {
        destroy: () => {
          setTimeout(() => {
            modalList = modalList.filter((item) => item !== instance);
            document.body.contains(container) &&
              document.body.removeChild(container);
          }, 300);
        },
      },
    },
    context
  );
  render(vm, container);

  // let instance = vm.component?.exposed; //for 3
  let instance = vm; //  for 2
  instance.destroy = () => {
    instance.hide();
    modalList = modalList.filter((item) => item !== instance);
    setTimeout(() => {
      document.body.contains(container) && document.body.removeChild(container);
    }, 300);
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
  // app.config.globalProperties.$modal = Modal;
  app.prototype.$modal = Modal;
};

Modal.useModal = () => {
  // return inject("modal"); //for 3
  const instance = getCurrentInstance();
  const proxy = instance ? instance.proxy : null;
  // console.log(proxy);
  const modalWrapper = {};

  ["info", "success", "warning", "error", "confirm", "show"].forEach((type) => {
    modalWrapper[type] = (props = {}) => {
      const config = type === "show" ? props : Object.assign({ type }, props);
      return getModal(config, proxy);
    };
  });

  modalWrapper.destroyAll = Modal.destroyAll;

  return modalWrapper;
};
export default Modal;
