import pkg from "../package.json";
import locale from "./utils/i18n";

import * as components from "./components";
import "./styles/index.less";

export * from "./components";

const UI = {
  version: pkg.version,
  locale: locale.use,
  i18n: locale.i18n,
  lang: {},
  install: function (app, opts = {}) {
    if (opts.locale) {
      locale.use(opts.locale);
    }
    if (opts.i18n) {
      locale.setI18n(opts.i18n);
    }

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
    app.prototype.$message = components.message;
    app.prototype.$notice = components.notice;
    app.prototype.$modal = components.modal;
    app.prototype.$loading = components.loading;
    app.prototype.$image = components.KImage;
    app.prototype.$theme = components.theme;
  },
};

// auto install
// if (typeof window !== 'undefined' && window.Vue) {
// UI.install(window.Vue);
// }

export default UI;
