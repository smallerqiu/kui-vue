const globalComponents = ["message", "modal", "notice", "loading", "theme"];
export { globalComponents };
export const installGlobal = (app, component) => {
  if (globalComponents.includes(component.name)) {
    app.config.globalProperties[`$${component.name}`] = component;
  }
};
export const withInstall = (component) => {
  component.install = function (app) {
    app.component(component.name, component);
    installGlobal(app, component);
  };

  return component;
};
