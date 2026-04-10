<template>
  <Layout class="root">
    <AppHeader />
    <Layout class="main">
      <Sider :class="['docs-k-layout-sider', { 'docs-k-layout-sider-show': showMiniNav }]">
        <Button
          size="large"
          :icon="showMiniNav ? Close : MenuIcon"
          class="min-menu-nav-btn"
          @click="showMiniNav = !showMiniNav"
        />
        <Menu
          v-model="activeName"
          class="left-menu"
          mode="inline"
          :open-keys="openKeys"
          @select="go"
        >
          <MenuGroup
            v-for="item in navData"
            :key="item.key"
            :title="$t(item.title)"
            :name="item.title"
          >
            <MenuItem v-for="sub in item.children" :key="sub.name">
              <template #icon>
                <WebIcon :name="sub.icon" />
              </template>
              <router-link :to="`/${item.key}/${sub.name}`">
                <span>{{ sub.sub }}</span>
                <span class="sub" v-if="lang != 'en'">{{ sub.title }}</span>
              </router-link>
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
            :href="`/${prevNavData.key}/${prevNavData.name}`"
            class="nav-prev"
            @click="(e) => navTo(e, 0)"
          >
            <Icon :type="ChevronBack" />
            <span class="nav-text">
              {{ prevNavData.sub }} {{ locale.name != "en" ? prevNavData.title : "" }}
            </span>
            <WebIcon :name="prevNavData.icon" />
          </a>
          <a
            v-if="nextNavData.sub"
            :href="`/${nextNavData.key}/${nextNavData.name}`"
            class="nav-next"
            @click="(e) => navTo(e, 1)"
          >
            <WebIcon :name="nextNavData.icon" />
            <span class="nav-text">
              {{ nextNavData.sub }} {{ locale.name != "en" ? nextNavData.title : "" }}
            </span>
            <Icon :type="ChevronForward" />
          </a>
        </div>
      </Content>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import AppHeader from "./app-header.vue";
// import AppFooter from "./app-footer";
import { ChevronBack, ChevronForward, Close, Menu as MenuIcon } from "kui-icons";
import { computed, inject, onMounted, reactive, ref, Transition } from "vue";
import { useRoute, useRouter } from "vue-router";
import { navData, routeData } from "../menu";
import WebIcon from "./web-icon.vue";
const router = useRouter();
const route = useRoute();
const showMiniNav = ref(false);
const nextNavData = reactive({});
const prevNavData = reactive({});
const activeName = ref([]);
const openKeys = ["start", "basic", "layouts", "navigation", "forms", "data", "notices", "other"];

const locale = inject("locale");
const $t = inject<(key: string) => string>("$t", (key: string) => key);

const lang = computed(() => {
  // console.log(locale.value.name)
  return locale.value?.name || "en";
});
const navTo = (e, t) => {
  e.stopPropagation();
  e.preventDefault();
  let c = t ? nextNavData : prevNavData;
  let path = `/${c.key}/${c.name}`;
  router.push(path);
  setActiveKey({ path });
};
const go = ({ key, keyPath }) => {
  showMiniNav.value = false;
};
const getPath = (path) => {
  let [m, n] = path.split("/").filter((x) => x);
  let index = routeData.findIndex((x) => x.key == m && x.name == n.replace("-en", ""));

  return {
    current: routeData[index],
    prev: routeData[index - 1],
    next: routeData[index + 1],
  };
};
const setActiveKey = ({ path }) => {
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
