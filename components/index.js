import pkg from "../package.json";

import * as components from "./components";
import "./styles/index.less";

export * from "./components";

const UI = {
  version: pkg.version,
  lang: {},
  install: function (app, opts = {}) {
    if (opts.locale) {
      locale.use(opts.locale);
    }
    if (opts.i18n) {
      locale.setI18n(opts.i18n);
    }

    for (let key in components) {
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
    }
    app.provide("message", message);
    app.provide("notice", notice);
    app.provide("loading", loading);
    app.provide("modal", modal);
    app.provide("theme", theme);

    app.config.globalProperties.$message = components.message;
    app.config.globalProperties.$notice = components.notice;
    app.config.globalProperties.$modal = components.modal;
    app.config.globalProperties.$loading = components.loading;
    app.config.globalProperties.$image = components.KImage;
    app.config.globalProperties.$theme = components.theme;
  },
};

UI.install = install;

// auto install for CDN
// if (typeof window !== "undefined" && window.Vue) {
  // window.Vue.createApp && window.Vue.createApp({}).use(UI);
// }
export default UI;
