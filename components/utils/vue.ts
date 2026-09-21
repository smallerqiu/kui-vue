import type { App, Component, Plugin, PropType } from "vue";
/** Attr-forwarding wrappers expose the source props/events, not its instance methods. */
export type ForwardedComponent<
  Source extends abstract new (...args: never[]) => { $props: object },
> = new () => { $props: InstanceType<Source>["$props"] };
// export type WithInstall<T> = T & Plugin;

const globalComponents = ["message", "modal", "notice", "loading", "theme"];
export { globalComponents };
export const installGlobal = (app: App, component: Component) => {
  if (globalComponents.includes(component.name as string)) {
    app.config.globalProperties[`$${component.name}`] = component;
  }
};

/**
 * Keeps an Array runtime validator while exposing a fixed-length tuple to TypeScript.
 * Vue's ArrayConstructor is typed as producing any[], so the compatibility bridge
 * belongs here instead of being repeated in every component prop declaration.
 */
export const tuplePropType = <T extends readonly unknown[]>(): PropType<T> =>
  Array as unknown as PropType<T>;

export const WithInstall = <T extends Component>(component: T): T & Plugin => {
  const c = component as T & Plugin & { name: string };
  c.install = function (app: App) {
    app.component(c.name, c);
    installGlobal(app, c);
  };

  return c;
};
