import Icon from "./icon";

Icon.install = (app, options = {}) => {
  app.component(Icon.name, Icon);
};

export default Icon;
