<template>
  <Layout class="root">
    <MHeader />
    <Layout class="main">
      <Sider class="docs-k-layout-sider">
        <Menu v-model:selectedKeys="activeName" @click="menuClick" class="left-menu" mode="inline"
          :open-keys="openkeys">
          <SubMenu :title="item.title" v-for="item in navs" :name="item.title" :key="item.key">
            <MenuItem v-for="sub in item.child" :key="sub.name">
            <template #icon>
              <WebIcon :name="sub.icon" />
            </template>
            <router-link :to="`/${item.key}/${sub.name}`">
              <Badge dot v-if="sub.update">
                <span>{{ sub.sub }}</span>
                <span class="sub">{{ sub.title }}</span>
              </Badge>
              <template v-else>
                <span>{{ sub.sub }}</span>
                <span class="sub">{{ sub.title }}</span>
              </template>
            </router-link>
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sider>
      <Content>
        <router-view v-slot="{ Component }" class="content-inner">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
        <div class="foot-nav">
          <a :href="`/${prev.key}/${prev.name}`" @click="e => link(e, 0)" class="nav-prev" v-if="prev.sub">
            <Icon :type="ChevronBack" />
            <span class="nav-text">{{ prev.sub }} {{ prev.title }}</span>
            <WebIcon :name="prev.icon" slot="icon" />
          </a>
          <a :href="`/${next.key}/${next.name}`" v-if="next.sub" @click="e => link(e, 1)" class="nav-next">
            <WebIcon :name="next.icon" slot="icon" />
            <span class="nav-text">{{ next.sub }} {{ next.title }}</span>
            <Icon :type="ChevronForward" />
          </a>
        </div>
        <Footer />
      </Content>
    </Layout>
  </Layout>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, watch, nextTick } from 'vue';
import MHeader from "./Header";
import MFooter from "./Footer";
import WebIcon from './WebIcon'
import { menus, navs } from "../menu";
import { ChevronBack, ChevronForward } from 'kui-icons'
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();


const prev = ref({});
const next = ref({});
const activeName = ref([]);
const theme = ref('');
const openkeys = ref(['start', 'basic', 'layouts', 'navigation', 'forms', 'datas', 'notices', 'other']);

onBeforeMount(() => {
  setActiveKey(route);
});

const link = (e, t) => {
  e.stopPropagation();
  e.preventDefault();
  let c = t ? next.value : prev.value;
  router.push(`/${c.key}/${c.name}`);
};

const menuClick = ({ key, keyPath = [] }) => {
  // console.log(key, keyPath);
  // let [m, n] = keyPath;
  // let path = `/${m}/${n}`;
  // router.push(path);
};

const getPath = (name) => {
  let [m, n] = name.split('/').filter(x => x);
  let index = menus.findIndex(x => x.key == m && x.name == n);
  return { current: menus[index], prev: menus[index - 1], next: menus[index + 1] };
};

const setActiveKey = ({ path }) => {
  let { current = {}, prev = {}, next = {} } = getPath(path);
  prev.value = prev;
  next.value = next;
  let { title, sub, name } = current;
  document.title = `${title} ${sub || ""} - KUI`;
  activeName.value = [name];
};
</script>