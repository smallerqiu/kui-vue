// import {  createVNode, render } from "vue"; //for 3
import { createVNode, render } from "../utils/vue"; //for 2
import Group from "./group";

const newInstance = (props = {}) => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  const vm = createVNode(Group, props);
  render(vm, container);
  // return vm.component?.exposed // for 3
  return vm
};

export default newInstance;
