import {  createVNode, render } from "vue";
import Preview from "./preview";

const newInstance = (props = {}) => {
  const vm = createVNode(Preview, props);
  render(vm, document.body);
  return vm.component?.exposed
};

export default newInstance;
