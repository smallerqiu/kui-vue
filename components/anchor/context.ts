import type { InjectionKey, Ref } from "vue";

export interface AnchorContext {
  activeLink: Ref<string>;
  registerLink: (link: string) => void;
  unregisterLink: (link: string) => void;
  handleScrollTo: (link: string) => void;
}

export const anchorContextKey: InjectionKey<AnchorContext> = Symbol("anchor-context");
