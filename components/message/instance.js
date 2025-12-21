import { createVNode, render } from "vue";
import Group from "./group";

const newInstance = (props = {}) => {
  const vm = createVNode(Group, props);
  render(vm, document.body);
  return vm.component?.exposed; // for 3
};

export { newInstance };
