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
          placeholder="搜索..."
          :icon="Search"
          theme="light"
          :show-arrow="false"
          filterable
          :transfer="false"
          @change="change"
        >
          <Option
            v-for="(com, index) of routeData"
            :key="index"
            :value="com.name"
          >
            {{ com.title }} {{ com.sub }}
          </Option>
        </Select>
      </div>
      <Menu
        v-model="topMenu"
        mode="horizontal"
        class="top-menu"
        :items="items"
        @select="go"
      />
      <ColorPicker
        v-model="themeColor"
        class="theme"
        mode="rgb"
        :show-arrow="false"
        style="margin-left: 8px"
        :no-alpha="true"
        @change="changeThemeColor"
      />
      <Tooltip
        :title="`切换${themeMode == 'dark' ? '浅色' : '暗色'}主题`"
        placement="bottom"
      >
        <Button
          theme="light"
          :icon="themeMode == 'dark' ? Sunny : Moon"
          style="margin: 0 8px"
          @click="changeMode"
        />
      </Tooltip>
      <Tooltip title="Jump to Gitee">
        <a
          target="_blank"
          class="k-btn k-btn-light k-btn-icon-only"
          href="https://gitee.com/chuchur/kui-vue"
        >
          <Icon :type="LogoGitee" />
        </a>
      </Tooltip>
    </div>
  </Header>
</template>
<script setup>
import { routeData } from "../menu";
import { ref, onMounted, getCurrentInstance } from "vue";
import { LogoKui, LogoGitee, Sunny, Moon, Search } from "kui-icons";
import pkg from "/package.json";
import Color from "color";
import { theme } from "kui-vue";
const version = pkg.version;
const themeColor = ref("#3a95ff");
const topMenu = ref([]);
const themeMode = ref("");
const queryKey = ref("");

const { proxy } = getCurrentInstance();

const items = [
  { key: "home", title: "首页" },
  { key: "start", title: "组件" },
  {
    key: "docs",
    title: "文档",
    children: [
      { key: "/start/getting-started", title: "快速开始" },
      { key: "/start/ssr", title: "SSR 支持" },
      { key: "/start/language", title: "多语言" },
      { key: "/start/logs", title: "更新日志" },
      { key: "/start/theme", title: "主题" },
      { key: "/start/dark-mode", title: "暗黑模式" },
      { key: "https://v2.k-ui.cn/", title: "v2.x 文档" },
      { key: "https://k-ui.cn/", title: "v4.x 文档" },
      { key: "https://react.k-ui.cn/", title: "For React 文档" },
      { key: "https://chuchur.com/", title: "Blog" },
    ],
  },
];

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
  let path = proxy.$route.path;
  topMenu.value = path == "/" ? ["home"] : ["start"];
});

const changeThemeColor = (v) => {
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
const changeMode = (event) => {
  theme.setThemeMode(event, (v) => (themeMode.value = v ? "dark" : "light"));
};
const go = ({ key, keyPath, item }) => {
  if (key == "home") {
    topMenu.value = ["home"];
    proxy.$router.push("/");
  } else if (key == "start") {
    proxy.$router.push("/start/getting-started");
  } else {
    open(key);
  }
};
const change = (value) => {
  let item = routeData.filter((x) => x.name == value)[0] || {};
  proxy.$router.push(`/${item.key}/${value}`);
  setTimeout(() => (queryKey.value = ""), 500);
};
</script>
