import { Layout } from "kui-vue";
import { defineComponent, onBeforeUnmount } from "vue";
import AppHeader from "../../components/app-header.vue";
import Demo from "../../components/demo/demo";
import "./style.less";

const tsSource = `<template>
  <Spin></Spin>
</template>`;

const jsSource = tsSource.replace(' lang="ts"', "");

export default defineComponent({
  name: "Playground",
  setup() {
    let saved: { ts?: string; js?: string; language?: "ts" | "js" } = {};
    try {
      saved = JSON.parse(sessionStorage.getItem("kui-playground-code") || "{}");
    } catch {
      saved = {};
    }
    const initialTs = saved.ts || tsSource;
    const initialJs = saved.js || jsSource;
    onBeforeUnmount(() => {
      sessionStorage.removeItem("kui-playground-code");
    });

    return () => (
      <Layout class="playground-layout">
        <AppHeader />
        <main class="playground-page">
          <Demo
            id="playground"
            direction="horizontal"
            filename="App.vue"
            toolbar="status"
            defaultLanguage={saved.language || "ts"}
            autoCompile
            v-slots={{
              title: () => "Playground",
              component: () => null,
              "code-ts": () => initialTs,
              "code-js": () => initialJs,
            }}
          />
        </main>
      </Layout>
    );
  },
});
