<template>
  <ConfigProvider :locale="locale">
    <RouterView v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </Transition>
    </RouterView>
  </ConfigProvider>
</template>
<script setup lang="ts">
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { computed, provide, ref } from "vue";
import ui_en from "../components/locale/en";
import ui_zh from "../components/locale/zh-CN";
import local_en from "./lang/en";
import local_zh from "./lang/zh";

const lang = ref(localStorage.getItem("lang") || "en");
const messages = computed(() => (lang.value === "en" ? en : zh));
const locale = computed(() => messages.value);

if (lang.value === "zh") {
  dayjs.locale("zh-cn");
}

const en = {
  ...ui_en,
  ...local_en,
};

const zh = {
  ...ui_zh,
  ...local_zh,
};

const t = (obj: any, path: string, defaultValue = null) => {
  if (obj == null || !path) return defaultValue;

  const keys = String(path).split(".").filter(Boolean);
  let cur = obj;

  for (const k of keys) {
    if (cur != null && Object.prototype.hasOwnProperty.call(cur, k)) {
      cur = cur[k];
    } else {
      return defaultValue;
    }
  }
  return cur;
};

const $t = (key: string, defaultValue?: any) => t(messages.value, key, defaultValue);

const changeLang = () => {
  const value = lang.value === "en" ? "zh" : "en";
  localStorage.setItem("lang", value);
  lang.value = value;
  // const quickPath = /quick-started|usage-with-nuxt|change-log/;
  // if (quickPath.test(route.path)) {
  window.location.reload();
  // }
};

provide("$t", $t);
provide("changeLang", changeLang);
</script>
