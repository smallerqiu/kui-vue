import { createVNode, render, type Slots } from "vue";
import { getAppContext } from "../config/context";
import Preview from "./preview";
import type { ImagePreviewProps } from "./preview";

let seed = 0;

export interface ImagePreviewInstance {
  show: (props: ImagePreviewProps) => void;
  close: () => void;
  togglePanel: () => void;
  destroy: () => void;
}

const createInstance = (props = {}, slots: Slots) => {
  const container = document.createElement("div");
  container.id = `k-image-preview-box-${++seed}`;
  document.body.appendChild(container);
  const previewProps = { ...props } as Record<string, unknown>;
  delete previewProps.onClose;
  delete previewProps.onSwitch;
  const vm = createVNode(Preview, previewProps, slots);
  vm.appContext = getAppContext()?.appContext || null;
  render(vm, container);
  const instance = vm.component?.exposed as ImagePreviewInstance | null;
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
