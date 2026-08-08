import { createVNode, render } from "vue";
import { getAppContext } from "../config/context";
import Preview from "./preview";

let seed = 0;

const createInstance = (props = {}, slots: any) => {
  const container = document.createElement("div");
  container.id = `k-image-preview-box-${++seed}`;
  document.body.appendChild(container);
  const {
    onClose: _onClose,
    onSwitch: _onSwitch,
    ...previewProps
  } = props as Record<string, unknown>;
  const vm = createVNode(Preview, previewProps, slots);
  vm.appContext = getAppContext()?.appContext || null;
  render(vm, container);
  const instance = vm.component?.exposed;
  if (instance) {
    instance.destroy = () => {
      render(null, container);
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };
  }
  return instance;
};

export default createInstance;
