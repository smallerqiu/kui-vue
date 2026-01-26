import { version } from "../package.json";
import * as components from "./components";
import { installGlobal } from "./utils/vue";
export * from "./components";
import "./styles/index.less";

const UI = {
  version: version,
  lang: {},
  install: (app) => {
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
        installGlobal(app, component);
      }
      app.component(key, component);
    });
  },
};

export default UI;
