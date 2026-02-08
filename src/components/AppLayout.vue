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
          <MenuGroup v-for="item in navData" :key="item.key" :title="item.title" :name="item.title">
            <MenuItem v-for="sub in item.children" :key="sub.name">
              <template #icon>
                <WebIcon :name="sub.icon" />
              </template>
              <router-link :to="`/${item.key}/${sub.name}`">
                <Badge v-if="sub.update" dot>
                  <span>{{ sub.sub }}</span>
                  <span class="sub">{{ sub.title }}</span>
                </Badge>
                <template v-else>
                  <span>{{ sub.sub }}</span>
                  <span class="sub">{{ sub.title }}</span>
                </template>
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
            @click="(e) => link(e, 0)"
          >
            <Icon :type="ChevronBack" />
            <span class="nav-text"> {{ prevNavData.sub }} {{ prevNavData.title }} </span>
            <WebIcon :name="prevNavData.icon" />
          </a>
          <a
            v-if="nextNavData.sub"
            :href="`/${nextNavData.key}/${nextNavData.name}`"
            class="nav-next"
            @click="(e) => link(e, 1)"
          >
            <WebIcon :name="nextNavData.icon" />
            <span class="nav-text"> {{ nextNavData.sub }} {{ nextNavData.title }} </span>
            <Icon :type="ChevronForward" />
          </a>
        </div>
        <!-- <AppFooter /> -->
      </Content>
    </Layout>
  </Layout>
</template>

<script setup>
import AppHeader from "./AppHeader";
// import AppFooter from "./AppFooter";
import WebIcon from "./WebIcon";
import { routeData, navData } from "../menu";
import { ChevronBack, ChevronForward, Menu as MenuIcon, Close } from "kui-icons";
import { ref, onMounted, getCurrentInstance, reactive, Transition } from "vue";
const { proxy } = getCurrentInstance();
const showMiniNav = ref(false);
const nextNavData = reactive({});
const prevNavData = reactive({});
const activeName = ref([]);
const openKeys = ["start", "basic", "layouts", "navigation", "forms", "data", "notices", "other"];
const link = (e, t) => {
  e.stopPropagation();
  e.preventDefault();
  let c = t ? nextNavData : prevNavData;
  let path = `/${c.key}/${c.name}`;
  proxy.$router.push(path);
  setActiveKey({ path });
};
const go = ({ key, keyPath }) => {
  // console.log(key, keyPath);
  // return;
  // console.log(key, keyPath);
  // let [n] = keyPath;
  // let path = `/${n}/${key}`;
  // proxy.$router.push(path);
  // setActiveKey({ path });
  showMiniNav.value = false;
};
const getPath = (name) => {
  let [m, n] = name.split("/").filter((x) => x);
  let index = routeData.findIndex((x) => x.key == m && x.name == n);
  return {
    current: routeData[index],
    prev: routeData[index - 1],
    next: routeData[index + 1],
  };
};
const setActiveKey = ({ path }) => {
  let { current, prev = {}, next = {} } = getPath(path);
  // console.log(current, prev, next);
  Object.assign(prevNavData, prev);
  Object.assign(nextNavData, next);
  let { title, sub, name } = current;
  document.title = `${title} ${sub || ""} - KUI`;
  activeName.value = [name];
};
onMounted(() => {
  setActiveKey(proxy.$route);
});
</script>
