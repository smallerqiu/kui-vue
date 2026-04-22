<template>
  <Layout class="root">
    <AppHeader />
    <Layout class="main">
      <Sider :class="['docs-k-layout-sider', { 'docs-k-layout-sider-show': showMiniNav }]">
        <Button
          size="large"
          :icon="showMiniNav ? X : MenuIcon"
          class="min-menu-nav-btn"
          @click="showMiniNav = !showMiniNav"
        />
        <Menu
          v-model="activeName"
          class="left-menu"
          mode="inline"
          :open-keys="openKeys"
          @select="menuSelect"
        >
          <MenuGroup v-for="item in navData" :key="item.key" :title="$t(item.title)">
            <MenuItem v-for="sub in item.children" :key="sub.name">
              <template #icon>
                <WebIcon :name="sub.icon" />
              </template>
              <a
                @click="sideNavTo"
                :href="`/${item.key == 'guide' ? 'guide' : 'components'}/${sub.name}${lang == 'en' ? '-en' : ''}`"
              >
                <span>{{ sub.sub }}</span>
                <span class="sub" v-if="lang != 'en'">{{ sub.title }}</span>
              </a>
            </MenuItem>
          </MenuGroup>
        </Menu>
      </Sider>
      <Content>
        <RouterView v-slot="{ Component, route }" class="content-inner">
          <Transition name="fade" mode="out-in">
            <component :is="Component" :key="route.fullPath" />
          </Transition>
        </RouterView>

        <div class="foot-nav">
          <a
            v-if="prevNavData.sub"
            :href="`/${prevNavData.key == 'guide' ? 'guide' : 'components'}/${prevNavData.name}${lang == 'en' ? '-en' : ''}`"
            class="nav-prev"
            @click="(e) => navTo(e, false)"
          >
            <Icon :type="ChevronLeft" />
            <span class="nav-text">
              {{ prevNavData.sub }} {{ locale?.name != "en" ? prevNavData.title : "" }}
            </span>
            <WebIcon :name="prevNavData.icon" />
          </a>
          <a
            v-if="nextNavData.sub"
            :href="`/${nextNavData.key == 'guide' ? 'guide' : 'components'}/${nextNavData.name}${lang == 'en' ? '-en' : ''}`"
            class="nav-next"
            @click="(e) => navTo(e, true)"
          >
            <WebIcon :name="nextNavData.icon" />
            <span class="nav-text">
              {{ nextNavData.sub }} {{ locale?.name != "en" ? nextNavData.title : "" }}
            </span>
            <Icon :type="ChevronRight" />
          </a>
        </div>
      </Content>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import AppHeader from "./app-header.vue";
// import AppFooter from "./app-footer";
import { ChevronLeft, ChevronRight, Menu as MenuIcon, X } from "kui-icons";
import { computed, inject, onMounted, reactive, ref, Transition } from "vue";
import { useRoute, useRouter } from "vue-router";
import { navData, routeData } from "../menu";
import WebIcon from "./web-icon.vue";
const router = useRouter();
const route = useRoute();
const showMiniNav = ref(false);
const nextNavData = reactive<Record<string, any>>({});
const prevNavData = reactive<Record<string, any>>({});
const activeName = ref<string[]>([]);
const openKeys = ["start", "basic", "layouts", "navigation", "forms", "data", "notices", "other"];

const locale = inject<Record<string, any>>("locale");
const $t = inject<(key: string) => string>("$t", (key: string) => key);

const lang = computed(() => {
  return locale?.value.name || "en";
});
const sideNavTo = (e: MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();
  const path = (e.target as HTMLElement).getAttribute("href") as string;
  router.push(path);
};
const navTo = (e: MouseEvent, t: boolean) => {
  e.stopPropagation();
  e.preventDefault();
  let c = t ? nextNavData : prevNavData;
  let path = `/${c.key == "guide" ? "guide" : "components"}/${c.name}${lang.value == "en" ? "-en" : ""}`;
  router.push(path);
  setActiveKey({ path });
};
const menuSelect = () => {
  showMiniNav.value = false;
};
const getPath = (path: string) => {
  let [_, n] = path.split("/").filter((x) => x);
  let index = routeData.findIndex((x) => x.name == n.replace("-en", ""));

  return {
    current: routeData[index],
    prev: routeData[index - 1],
    next: routeData[index + 1],
  };
};
const setActiveKey = ({ path }: { path: string }) => {
  let { current = {}, prev = {}, next = {} } = getPath(path);
  // console.log(current, prev, next);
  Object.assign(prevNavData, prev);
  Object.assign(nextNavData, next);
  let { title, sub, name } = current;
  document.title = `${lang.value != "en" ? title : ""} ${sub || ""} - KUI`;
  activeName.value = [name];
};
onMounted(() => {
  setActiveKey(route);
});
</script>
