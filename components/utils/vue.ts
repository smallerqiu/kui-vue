import type { App, Component, Plugin } from "vue";
// export type WithInstall<T> = T & Plugin;

const globalComponents = ["message", "modal", "notice", "loading", "theme"];
export { globalComponents };
export const installGlobal = (app: App, component: Component) => {
  if (globalComponents.includes(component.name as string)) {
    app.config.globalProperties[`$${component.name}`] = component;
  }
};
export const WithInstall = <T extends Component>(component: T): T & Plugin => {
  const c = component as T & Plugin & { name: string };
  c.install = function (app: App) {
    app.component(c.name, c);
    installGlobal(app, c);
  };

  return c;
};
