import type { App, Component } from "vue";
import * as components from "./components";
import { globalComponents, installGlobal } from "./utils/vue";
export * from "./components";
const UI = {
  version: import.meta.env.version as string,
  lang: {},
  install: (app: App) => {
    const componentEntries = Object.entries(components) as [string, Component][];
    componentEntries.forEach(([key, component]) => {
      if (globalComponents.includes(key)) {
        installGlobal(app, component);
      } else if (!key.startsWith("K")) {
        // const name = key
        //   .replace(/([A-Z])/g, "-$1")
        //   .replace(/^-/, "")
        //   .toLowerCase();
        // const kebabName = `k-${name}`;
        const kebabName = `K${key}`;
        app.component(kebabName, component);
        app.component(key, component);
      } else {
        app.component(key, component);
      }
    });
  },
};

export const install = UI.install;
export const version = UI.version;

export default UI;
