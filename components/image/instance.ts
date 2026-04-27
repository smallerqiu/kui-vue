import { createVNode, render } from "vue";
import { getAppContext } from "../config/context";
import Preview from "./preview";

const createInstance = (props = {}, slots:any) => {
  const containerId = `k-image-preview-box`;
  let container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement("div");
    container.id = containerId;
    document.body.appendChild(container);
  }
  const vm = createVNode(Preview, props, slots);
  render(vm, container);
  vm.appContext = getAppContext()?.appContext || null;
  const instance = vm.component?.exposed;
  if (instance) {
    instance.destroy = () => {
      render(null, container);
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };
  }
  return instance;
};

export default createInstance;
