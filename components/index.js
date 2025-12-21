import pkg from "../package.json";

import * as components from "./components";
import "./styles/index.less";

export * from "./components";

const UI = {
  version: pkg.version,
  lang: {},
  install: function (app, opts = {}) {
    Object.keys(components).forEach((key) => {
      const component = components[key];
      if (!key.startsWith("K")) {
        const kebabName =
          "k-" +
          key
            .replace(/([A-Z])/g, "-$1")
            .replace(/^-/, "")
            .toLowerCase();
        app.component(kebabName, component);
      }
      app.component(key, component);
    });
    app.config.globalProperties.$message = components.message;
    app.config.globalProperties.$notice = components.notice;
    app.config.globalProperties.$modal = components.modal;
    app.config.globalProperties.$loading = components.loading;
    app.config.globalProperties.$image = components.KImage;
    app.config.globalProperties.$theme = components.theme;
  },
};

// auto install
// if (typeof window !== 'undefined' && window.Vue) {
// UI.install(window.Vue);
// }

export default UI;
