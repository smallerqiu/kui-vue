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
          shape="circle"
          :icon="Search"
          theme="light"
          :show-arrow="false"
          filterable
          size="large"
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
      <Menu v-model="topMenu" mode="horizontal" class="top-menu" @click="go">
        <MenuItem key="home">首页</MenuItem>
        <MenuItem key="start"> 组件 </MenuItem>
        <SubMenu key="docs" title="文档">
          <MenuItem key="/start/getting-started"> 快速开始 </MenuItem>
          <MenuItem key="/start/ssr"> SSR 支持 </MenuItem>
          <MenuItem key="/start/language"> 多语言 </MenuItem>
          <MenuItem key="/start/logs"> 更新日志 </MenuItem>
          <MenuItem key="/start/theme"> 主题 </MenuItem>
          <MenuItem key="/start/dark-mode"> 暗黑模式 </MenuItem>
          <MenuItem key="https://v2.k-ui.cn/"> v2.x 文档 </MenuItem>
          <MenuItem key="https://react.k-ui.cn/"> For React 文档 </MenuItem>
          <MenuItem key="https://chuchur.com/"> Blog </MenuItem>
        </SubMenu>
      </Menu>
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
          type="text"
          :icon="themeMode == 'dark' ? Sunny : Moon"
          size="large"
          style="margin: 0 8px"
          @click="changeMode"
        />
      </Tooltip>
      <Tooltip title="Jump to Gitee" placement="bottom">
        <Button
          class="btn-gitee"
          :icon="LogoGitee"
          type="link"
          size="large"
          href="https//gitee.com/chuchur/kui-vue"
          target="_blank"
        />
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
          --kui-color-main:rgba(${r},${g},${b});
          --kui-color-main-hover:rgba(${r},${g},${b},.9);
          --kui-color-main-active:rgba(${r},${g},${b},.75);
          --kui-color-main-10:rgba(${r},${g},${b},.9);
          --kui-color-main-30:rgba(${r},${g},${b},.7);
          --kui-color-main-60:rgba(${r},${g},${b},.4);
          --kui-color-main-80:rgba(${r},${g},${b},.2);
          --kui-color-main-90:rgba(${r},${g},${b},.1);
          --kui-color-hover:rgba(${r},${g},${b},.2);
          --kui-color-active:rgba(${r},${g},${b},.3);
          --kui-color-selected:rgba(${r},${g},${b},.1);
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
const change = ({ value }) => {
  let item = routeData.filter((x) => x.name == value)[0] || {};
  proxy.$router.push(`/${item.key}/${value}`);
  setTimeout(() => (queryKey.value = ""), 500);
};
</script>
