import {  createVNode, render } from "vue";
import Group from "./group";

const newInstance = (props = {}) => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  const vm = createVNode(Group, props);
  render(vm, container);

  return vm.component?.exposed
};

export default newInstance;
