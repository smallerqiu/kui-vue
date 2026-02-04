import { createVNode, render } from "vue";
import Preview from "./preview";
import { getAppContext } from "../config/context";

const newInstance = (props = {}, context = null, slots) => {
  const containerId = `k-image-preview-box`;
  let container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement("div");
    container.id = containerId;
    document.body.appendChild(container);
  }
  const vm = createVNode(Preview, props, slots);
  render(vm, container);
  vm.appContext = context?.appContext || getAppContext()?.appContext;
  const instance = vm.component?.exposed;
  instance.destroy = () => {
    render(null, container);
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
  };
  return instance;
};

export default newInstance;
