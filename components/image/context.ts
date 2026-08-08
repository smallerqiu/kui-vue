import type { InjectionKey, Slots } from "vue";
import type { ImagePreviewProps } from "./preview";

export interface ImageGroupContext {
  show: (props: ImagePreviewProps, slots: Slots) => void;
  togglePanel: () => void;
  register: (src?: string) => void;
  unregister: (src?: string) => void;
}

export const imageGroupKey: InjectionKey<ImageGroupContext> = Symbol("ImageGroup");
