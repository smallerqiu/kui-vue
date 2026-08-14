import { inject, type InjectionKey } from "vue";

export type PopupContainerGetter = () => HTMLElement | null | undefined;

export const popupContainerKey: InjectionKey<PopupContainerGetter> = Symbol("kui-popup-container");

export const usePopupContainer = () => {
  const injected = inject(popupContainerKey, undefined);
  return (): HTMLElement | null => {
    const target = injected?.();
    if (target instanceof HTMLElement) return target;
    return typeof document !== "undefined" ? document.body : null;
  };
};
