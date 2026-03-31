import { createVNode, render } from "vue";
import { getAppContext } from "../config/context";
import Group from "./group";

const newInstance = (props = {}, context = null) => {
  const containerId = `k-${props.type}-box`;
  let container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement("div");
    container.id = containerId;
    document.body.appendChild(container);
  }
  const vm = createVNode(Group, props);
  vm.appContext = context?.appContext || getAppContext()?.appContext;
  render(vm, container);
  const instance = vm.component?.exposed; 
  instance.destroy = () => {
    render(null, container);
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
  };
  return instance;
};

export { newInstance };
