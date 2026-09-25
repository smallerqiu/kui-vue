import { ArrowLeft } from "kui-icons";
import { useRouter } from "vue-router";
import { Button, Layout } from "kui-vue";
import { defineComponent, inject, onBeforeUnmount } from "vue";
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
    const router = useRouter();
    const t = inject<(key: string) => string>("$t", (key) => key);
    const goBack = () => {
      const from: unknown = window.history.state?.playgroundFrom;
      const target = typeof from === "string" && /^\/(components|guide)\//.test(from)
        ? from : `/guide/components${localStorage.getItem("lang") === "en" ? "-en" : ""}`;
      void router.replace(target);
    };
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
        <AppHeader v-slots={{ leading: () => (
          <Button class="playground-back" type="text" icon={ArrowLeft} onClick={goBack}>
            {t("text.back_to_docs")}
          </Button>
        ) }} />
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
