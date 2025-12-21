export const withInstall = (component) => {
  component.install = function (app) {
    app.component(component.name, component);
  };

  return component;
}; 