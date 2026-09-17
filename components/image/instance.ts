import { createVNode, render, type Slots } from "vue";
import { getAppContext } from "../config/context";
import Preview from "./preview";
import type { ImagePreviewProps } from "./preview";

let seed = 0;

export interface ImagePreviewInstance {
  show: (props: ImagePreviewProps, slots?: Slots) => void;
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
  const appContext = getAppContext();
  const vm = createVNode(Preview, previewProps, { ...slots });
  vm.appContext = appContext;
  render(vm, container);
  const instance = vm.component?.exposed as ImagePreviewInstance | null;
  if (instance) {
    return {
      show(options, nextSlots) {
        if (nextSlots) {
          const next = createVNode(Preview, previewProps, { ...nextSlots });
          next.appContext = appContext;
          render(next, container);
        }
        instance.show(options);
      },
      close: () => instance.close(),
      togglePanel: () => instance.togglePanel(),
      destroy() {
        render(null, container);
        container.remove();
      },
    } satisfies ImagePreviewInstance;
  }
  return instance;
};

export default createInstance;
