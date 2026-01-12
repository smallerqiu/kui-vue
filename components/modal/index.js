import Modal from "./modal.jsx";
import Toast from "./toast";
// import { /*createVNode, render,*/ inject } from "vue"; // for 3
import { createVNode, render } from "../utils/vue"; //for 2
import { recordMousePoint } from "../config/context";
let modalList = [];

recordMousePoint();
let showModal = (props = {}, context = null) => {
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
Modal.install = (app) => {
  // app.provide("modal", Modal);
  // app.config.globalProperties.$modal = Modal;
  app.prototype.$modal = Modal;
};
export default Modal;
