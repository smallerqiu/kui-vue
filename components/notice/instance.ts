import { createVNode, render, type VNode } from "vue";
import { getAppContext } from "../config/context";
import Container from "./container";
import type { ContentProps } from "./content";
export interface NoticeInstance {
  show: (options: ContentProps) => () => void;
  clean: () => void;
  destroy: () => void;
}
export const createInstance = (type: string, context?: VNode) => {
  const containerId = `k-${type}-box`;
  let container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement("div");
    container.id = containerId;
    document.body.appendChild(container);
  }
  const vm = createVNode(Container, { type });
  vm.appContext = context?.appContext || getAppContext()?.appContext || null;
  render(vm, container);
  const instance = vm.component?.exposed as NoticeInstance;
  if (instance)
    instance.destroy = () => {
      render(null, container);
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };
  return instance;
};
