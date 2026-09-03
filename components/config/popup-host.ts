import { inject, onBeforeUnmount, onMounted, provide, type InjectionKey } from "vue";

type PopupCloser = () => void;
type PopupRegistrar = (close: PopupCloser) => () => void;

const popupHostKey: InjectionKey<PopupRegistrar> = Symbol("kui-popup-host");

/** Creates an isolated popup scope for components whose overlays are teleported elsewhere. */
export const providePopupHost = () => {
  const closers = new Set<PopupCloser>();
  const register: PopupRegistrar = (close) => {
    closers.add(close);
    return () => closers.delete(close);
  };

  provide(popupHostKey, register);
  onBeforeUnmount(() => closers.clear());

  return () => {
    closers.forEach((close) => close());
  };
};

/** Registers a teleported popup with its nearest Modal or Drawer. */
export const usePopupHost = (close: PopupCloser) => {
  const register = inject(popupHostKey, undefined);
  let unregister: (() => void) | undefined;

  onMounted(() => {
    unregister = register?.(close);
  });
  onBeforeUnmount(() => unregister?.());
};
