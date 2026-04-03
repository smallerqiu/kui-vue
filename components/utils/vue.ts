import type { App, Component, Plugin } from "vue";
export type WithInstall<T> = T & Plugin;

const globalComponents = ["message", "modal", "notice", "loading", "theme"];
export { globalComponents };
export const installGlobal = (app: App, component: Component) => {
  if (globalComponents.includes(component.name as string)) {
    app.config.globalProperties[`$${component.name}`] = component;
  }
};
export const withInstall = <T>(component: T):WithInstall<T>  => {
  const c = component as any;
  c.install = function (app: App) {
    app.component(c.name, c);
    installGlobal(app, c);
  };

  return component as WithInstall<T> ;
};
