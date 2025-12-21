import {  createVNode, render } from "vue"; //for 3
import Preview from "./preview";

const newInstance = (props = {}) => {
  const vm = createVNode(Preview, props);
  render(vm, document.body);
  // return vm.component?.exposed // for 3
  return vm;
};

export default newInstance;
