import { createVNode, render } from "vue";
import Group from "./group";

const newInstance = (props = {}) => {
  const containerId = `k-${props.type}-box`;
  let container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement("div");
    container.id = containerId;
    document.body.appendChild(container);
  }
  const vm = createVNode(Group, props);
  render(vm, container);
  const instance = vm.component?.exposed; // for 3
  instance.destroy = () => {
    render(null, container);
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
  };
  return instance;
};

export { newInstance };
