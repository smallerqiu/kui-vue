import LZString from "lz-string";

export const openStackBlitz = async (source: string, filename = "App.vue") => {
  const { default: sdk } = await import("@stackblitz/sdk");
  const dependencies = {
    vue: "^3.5.0",
    "kui-vue": "latest",
    "kui-icons": "^5.0.0",
  };

  const supportsLightweightVue =
    filename.endsWith(".vue") && !/<script\s+setup(?:\s|>)/i.test(source);

  if (supportsLightweightVue) {
    const appSource = /<script\b/i.test(source)
      ? source
      : `${source.trim()}\n\n<script>\nexport default {};\n</script>\n`;
    sdk.openProject(
      {
        title: "KUI Vue Demo",
        description: "KUI Vue component example",
        template: "vue",
        dependencies,
        files: {
          "public/index.html": '<div id="app"></div>',
          "src/main.ts": `
import { createApp } from "vue";
import KUI from "kui-vue";
import "kui-vue/style/index.css";
import App from "./${filename}";

createApp(App).use(KUI).mount("#app");
`,
          [`src/${filename}`]: appSource,
        },
      },
      {
        newWindow: true,
        openFile: `src/${filename}`,
        view: "default",
      }
    );
    return;
  }

  sdk.openProject(
    {
      title: "KUI Vue Demo",
      description: "KUI Vue component example",
      template: "node",
      files: {
        "package.json": JSON.stringify(
          {
            type: "module",
            packageManager: "pnpm@11.20.0",
            scripts: {
              dev: "vite",
            },
            dependencies: {
              ...dependencies,
            },
            devDependencies: {
              vite: "^7.3.1",
              "@vitejs/plugin-vue": "^6.0.8",
              "@vitejs/plugin-vue-jsx": "^5.1.6",
              typescript: "^6.0.3",
              less: "^4.9.0",
            },
            stackblitz: {
              installDependencies: false,
              startCommand: "pnpm install && pnpm run dev",
            },
          },
          null,
          2
        ),
        "index.html": `<div id="app"></div><script type="module" src="/src/main.ts"></script>`,
        "src/main.ts": `
import { createApp } from "vue";
import KUI from "kui-vue";
import "kui-vue/style/index.css";
import App from "./${filename}";

createApp(App).use(KUI).mount("#app");
`,
        [`src/${filename}`]: source,
        "vite.config.ts": `
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), vueJsx()],
});
`,
      },
    },
    {
      newWindow: true,
      openFile: `src/${filename}`,
      view: "default",
    }
  );
};

export const openCodeSandbox = async (source: string, filename = "App.vue") => {
  if (!filename.endsWith(".vue")) {
    throw new Error("CodeSandbox 暂只支持 Vue SFC 示例，请使用 StackBlitz 打开 TSX 示例");
  }

  const appSource = /<script\b/i.test(source)
    ? source
    : `${source.trim()}\n\n<script>\nexport default {};\n</script>\n`;
  const parameters = LZString.compressToBase64(
    JSON.stringify({
      template: "static",
      files: {
        "index.html": {
          content: `<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="stylesheet" href="https://unpkg.com/kui-vue@latest/style/index.css" />
  </head>
  <body>
    <div id="app"></div>
    <script type="importmap">
      { "imports": { "vue": "https://esm.sh/vue@3.5.0" } }
    </script>
    <script type="module">
      import * as Vue from "vue";
      import * as KUI from "https://esm.sh/kui-vue@latest?external=vue";
      import * as KUIIcons from "https://esm.sh/kui-icons@latest?external=vue";
      import { loadModule } from "https://cdn.jsdelivr.net/npm/vue3-sfc-loader@0.9.5/dist/vue3-sfc-loader.esm.js";

      const App = await loadModule("./src/App.vue", {
        moduleCache: {
          vue: Vue,
          "kui-vue": KUI,
          "kui-icons": KUIIcons,
        },
        async getFile(url) {
          const response = await fetch(url);
          if (!response.ok) throw new Error(response.statusText);
          return response.text();
        },
        addStyle(textContent) {
          const style = document.createElement("style");
          style.textContent = textContent;
          document.head.appendChild(style);
        },
      });

      Vue.createApp(App).use(KUI.default).mount("#app");
    </script>
  </body>
</html>`,
        },
        "src/App.vue": { content: appSource },
      },
    })
  )
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const form = document.createElement("form");
  form.method = "POST";
  form.action = "https://codesandbox.io/api/v1/sandboxes/define";
  form.target = "_blank";
  form.rel = "noopener noreferrer";
  const input = document.createElement("input");
  input.type = "hidden";
  input.name = "parameters";
  input.value = parameters;
  form.appendChild(input);
  document.body.appendChild(form);
  form.submit();
  form.remove();
};

export const openCodespaces = () => {
  window.open(
    "https://codespaces.new/smallerqiu/kui-vue?quickstart=1",
    "_blank",
    "noopener,noreferrer"
  );
};
