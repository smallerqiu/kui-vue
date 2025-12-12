// import {  createVNode, render } from "vue"; //for 3
import { createVNode, render } from "../utils/vue"; //for 2
import Preview from "./preview";

const newInstance = (props = {}) => {
  // const container = document.createElement("div");
  // document.body.appendChild(container);
  const vm = createVNode(Preview, props);
  render(vm, document.body);
  // return vm.component?.exposed // for 3
  return vm;
};

export default newInstance;
