import { version } from "../package.json";
import * as components from "./components";
import { globalComponents, installGlobal } from "./utils/vue";
export * from "./components";
import "./styles/index.less";

const UI = {
  version: version,
  lang: {},
  install: (app) => {
    Object.keys(components).forEach((key) => {
      const component = components[key];
      if (globalComponents.includes(key)) {
        installGlobal(app, component);
      } else if (!key.startsWith("K")) {
        const name = key
          .replace(/([A-Z])/g, "-$1")
          .replace(/^-/, "")
          .toLowerCase();
        const kebabName = `k-${name}`;
        app.component(kebabName, component);
        app.component(key, component);
      } else {
        app.component(key, component);
      }
    });
  },
};

export default UI;
