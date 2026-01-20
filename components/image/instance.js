import {  createVNode, render } from "vue";
import Preview from "./preview";
import { getAppContext } from "../config/context";

const newInstance = (props = {}) => {
  const vm = createVNode(Preview, props);
  render(vm, document.body);
  vm.appContext = context?.appContext || getAppContext()?.appContext;
  return vm.component?.exposed
};

export default newInstance;
