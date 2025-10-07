
export const withInstall = (component) => {
  component.install = function (Vue) {
    Vue.component(component.name, component);
  };

  return component
};