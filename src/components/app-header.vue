<template>
  <Header class="header">
    <div class="header-inner">
      <div class="logo" @click="$router.push('/')">
        <Icon :type="LogoKui" />
        <span class="wrap-name">
          <span class="name">K UIKIT</span>
          <span class="ver">v {{ version }}</span>
        </span>
      </div>
      <Divider type="vertical" />
      <div class="search-component">
        <Select
          v-model="queryKey"
          placeholder="Search"
          :icon="Search"
          theme="light"
          :show-arrow="false"
          filterable
          @change="change"
        >
          <Option v-for="(com, index) of routeData" :key="index" :value="com.name">
            {{ com.title }} {{ com.sub }}
          </Option>
        </Select>
      </div>
      <Menu v-model="topMenu" mode="horizontal" class="top-menu" :items="items" @select="go" />
      <Space>
        <ColorPicker
          v-model="themeColor"
          class="theme"
          mode="rgb"
          :arrow="false"
          style="margin-left: 8px"
          :disabledAlpha="true"
          @change="changeThemeColor"
        />
        <Tooltip :title="`${$t('menu.langTip')}`" placement="bottom">
          <Button theme="light" :icon="Language" @click="changeLang" />
        </Tooltip>
        <Tooltip
          :title="`Switch ${themeMode == 'dark' ? 'light' : 'dark'} theme`"
          placement="bottom"
        >
          <Button theme="light" :icon="themeMode == 'dark' ? Sunny : Moon" @click="changeMode" />
        </Tooltip>
        <a
          target="_blank"
          class="k-btn k-btn-light k-btn-icon-only"
          href="https://github.com/smallerqiu/kui-vue"
        >
          <Icon :type="LogoGithub" />
        </a>
      </Space>
    </div>
  </Header>
</template>
<script setup lang="ts">
import Color from "color";
import { Language, LogoGithub, LogoKui, Moon, Search, Sunny } from "kui-icons";
import {
  Button,
  ColorPicker,
  Divider,
  Header,
  Icon,
  Menu,
  type MenuSelectEvent,
  Option,
  Select,
  Space,
  theme,
  Tooltip,
} from "kui-vue";
import { computed, inject, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { version } from "../../package.json";
import { routeData } from "../menu";
const route = useRoute();
const router = useRouter();
const themeColor = ref("#3a95ff");
const topMenu = ref<string[]>([]);
const themeMode = ref("");
const queryKey = ref("");
const $t = inject<(key: string) => string>("$t", (key: string) => key);
const changeLang = inject<() => void>("changeLang");

const items = computed(() => {
  return [
    { key: "home", title: $t("menu.home") },
    { key: "guide", title: $t("menu.components") },
    {
      key: "docs",
      title: $t("menu.docs"),
      children: [
        { key: "/guide/quick-started", title: $t("menu.quick_start") },
        { key: "/guide/usage-with-nuxt", title: $t("menu.usage_with_nuxt") },
        { key: "/guide/language", title: $t("menu.language") },
        { key: "/guide/change-log", title: $t("menu.change_log") },
        { key: "/guide/dark-mode", title: $t("menu.dark_mode") },
        { key: "https://v3.k-ui.cn/", title: $t("menu.docs_v3") },
        { key: "https://v2.k-ui.cn/", title: $t("menu.docs_v2") },
        { key: "https://react.k-ui.cn/", title: $t("menu.docs_react") },
        { key: "https://chuchur.com/", title: "Blog" },
      ],
    },
  ];
});
onMounted(() => {
  let localThemeMode = localStorage.getItem("theme-mode") || "";
  let localThemeColor = localStorage.getItem("themeColor") || "";
  if (localThemeMode) {
    document.documentElement.setAttribute("theme-mode", localThemeMode);
    themeMode.value = localThemeMode;
  }
  if (localThemeColor) {
    themeColor.value = localThemeColor;
    changeThemeColor(localThemeColor);
  }
  let path = route.path;
  topMenu.value = path == "/" ? ["home"] : ["start"];
});

const changeThemeColor = (v: string) => {
  let stl = document.querySelector("style[name=kui]");
  if (!stl) {
    stl = document.createElement("style");
    stl.setAttribute("name", "kui");
    document.head.appendChild(stl);
  }

  // console.log(v)
  // return;
  const [r, g, b] = Color(v).rgb().array();
  // let str = v.slice(0, v.length-1)
  let cssText = `
      body[theme-type='custom']{
          --kui-color-primary:rgba(${r},${g},${b});
          --kui-color-primary-hover:rgba(${r},${g},${b},.9);
          --kui-color-primary-active:rgba(${r},${g},${b},.75);
          --kui-color-primary-1:rgba(${r},${g},${b},.9);
          --kui-color-primary-3:rgba(${r},${g},${b},.7);
          --kui-color-primary-6:rgba(${r},${g},${b},.4);
          --kui-color-primary-8:rgba(${r},${g},${b},.2);
          --kui-color-primary-9:rgba(${r},${g},${b},.1);
          --kui-color-item-selected:rgba(${r},${g},${b},.2);
          --kui-color-outline:rgba(${r},${g},${b},.2);
      }
      `;
  stl.innerHTML = cssText;
  document.body.setAttribute("theme-type", "custom");
  localStorage.setItem("themeColor", v);
};
const changeMode = (event: MouseEvent) => {
  theme.setThemeMode(event, (v: boolean) => (themeMode.value = v ? "dark" : "light"));
};
const go = ({ key }: MenuSelectEvent) => {
  if (key == "home") {
    topMenu.value = ["home"];
    router.push("/");
  } else if (key == "guide") {
    router.push("/guide/getting-started");
  } else {
    open(key);
  }
};
const change = (value: string) => {
  let item = routeData.filter((x) => x.name == value)[0] || {};
  router.push(`/${item.key == "guide" ? "guide" : "components"}/${value}`);
  setTimeout(() => (queryKey.value = ""), 500);
};
</script>
