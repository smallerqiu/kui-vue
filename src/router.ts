import { loading } from "kui-vue";
import { createRouter, createWebHistory } from "vue-router";
const lang = localStorage.getItem("lang") || "en";
let children = [
  {
    path: "/guide/quick-started",
    component: () => import("./views/quick-started.md"),
  },
  {
    path: "/guide/quick-started-en",
    component: () => import("./views/quick-started.en_US.md"),
  },
  { path: "/guide/language", component: () => import("./views/language/index.md") },
  { path: "/guide/change-log", component: () => import("./views/change-log.md") },
  { path: "/guide/change-log-en", component: () => import("./views/change-log.en_US.md") },
  { path: "/guide/usage-with-nuxt", component: () => import("./views/usage-with-nuxt.md") },
  {
    path: "/guide/usage-with-nuxt-en",
    component: () => import("./views/usage-with-nuxt.en_US.md"),
  },
  // { path: '/guide/theme', component: () => import('./views/theme.md') },
  {
    path: "/guide/dark-mode",
    component: () => import("./views/dark-mode/index.md"),
  },
  { path: "/guide/components", component: () => import("./views/components") },

  {
    path: "/notices/alert",
    component: () => import("../components/alert/index.md"),
  },
  {
    path: "/navigation/affix",
    component: () => import("../components/affix/index.md"),
  },
  {
    path: "/navigation/anchor",
    component: () => import("../components/anchor/index.md"),
  },
  {
    path: "/data/avatar",
    component: () => import("../components/avatar/index.md"),
  },
  { path: "/data/card", component: () => import("../components/card/index.md") },
  {
    path: "/data/carousel",
    component: () => import("../components/carousel/index.md"),
  },
  {
    path: "/data/collapse",
    component: () => import("../components/collapse/index.md"),
  },
  {
    path: "/other/colorpicker",
    component: () => import("../components/color-picker/index.md"),
  },
  {
    path: "/forms/checkbox",
    component: () => import("../components/checkbox/index.md"),
  },
  {
    path: "/basic/button",
    component: () => import("../components/button/index.md"),
  },
  {
    path: "/navigation/breadcrumb",
    component: () => import("../components/breadcrumb/index.md"),
  },
  {
    path: "/navigation/backtop",
    component: () => import("../components/back-top/index.md"),
  },
  {
    path: "/notices/badge",
    component: () => import("../components/badge/index.md"),
  },
  {
    path: "/forms/datepicker",
    component: () => import("../components/date-picker/index.md"),
  },
  {
    path: "/data/descriptions",
    component: () => import("../components/descriptions/index.md"),
  },
  {
    path: "/notices/drawer",
    component: () => import("../components/drawer/index.md"),
  },
  {
    path: "/navigation/dropdown",
    component: () => import("../components/dropdown/index.md"),
  },
  {
    path: "/layouts/divider",
    component: () => import("../components/divider/index.md"),
  },
  {
    path: "/notices/empty",
    component: () => import("../components/empty/index.md"),
  },
  { path: "/forms/form", component: () => import("../components/form/index.md") },
  { path: "/layouts/flex", component: () => import("../components/flex/index.md") },
  { path: "/layouts/row-col", component: () => import("../components/row-col/index.md") },
  { path: "/layouts/grid", component: () => import("../components/grid/index.md") },
  { path: "/data/image", component: () => import("../components/image/index.md") },
  { path: "/forms/input", component: () => import("../components/input/index.md") },
  {
    path: "/forms/inputnumber",
    component: () => import("../components/input-number/index.md"),
  },
  { path: "/basic/icons", component: () => import("../components/icon/index.md") },
  {
    path: "/layouts/layout",
    component: () => import("../components/layout/index.md"),
  },
  {
    path: "/notices/loading",
    component: () => import("../components/loading/index.md"),
  },
  {
    path: "/notices/message",
    component: () => import("../components/message/index.md"),
  },
  {
    path: "/notices/modal",
    component: () => import("../components/modal/index.md"),
  },
  {
    path: "/navigation/menu",
    component: () => import("../components/menu/index.md"),
  },
  {
    path: "/notices/notice",
    component: () => import("../components/notice/index.md"),
  },
  { path: "/forms/radio", component: () => import("../components/radio/index.md") },
  { path: "/notices/rate", component: () => import("../components/rate/index.md") },
  {
    path: "/forms/select",
    component: () => import("../components/select/index.md"),
  },
  {
    path: "/forms/slider",
    component: () => import("../components/slider/index.md"),
  },
  {
    path: "/notices/skeleton",
    component: () => import("../components/skeleton/index.md"),
  },
  {
    path: "/layouts/space",
    component: () => import("../components/space/index.md"),
  },
  { path: "/notices/spin", component: () => import("../components/spin/index.md") },
  {
    path: "/forms/switch",
    component: () => import("../components/switch/index.md"),
  },
  {
    path: "/data/statcard",
    component: () => import("../components/stat-card/index.md"),
  },
  { path: "/data/table", component: () => import("../components/table/index.md") },
  { path: "/notices/tag", component: () => import("../components/tag/index.md") },
  {
    path: "/navigation/tabs",
    component: () => import("../components/tabs/index.md"),
  },
  {
    path: "/data/timeline",
    component: () => import("../components/time-line/index.md"),
  },
  {
    path: "/notices/tooltip",
    component: () => import("../components/tooltip/index.md"),
  },
  { path: "/data/tree", component: () => import("../components/tree/index.md") },
  {
    path: "/forms/treeselect",
    component: () => import("../components/tree-select/index.md"),
  },
  {
    path: "/notices/poptip",
    component: () => import("../components/poptip/index.md"),
  },
  {
    path: "/notices/popconfirm",
    component: () => import("../components/popconfirm/index.md"),
  },
  {
    path: "/notices/progress",
    component: () => import("../components/progress/index.md"),
  },
  {
    path: "/navigation/page",
    component: () => import("../components/page/index.md"),
  },
  {
    path: "/forms/upload",
    component: () => import("../components/upload/index.md"),
  },
];

import Layout from "./components/app-layout.vue";

let routes = [
  { path: "/", component: () => import("./views/index.vue") },
  { path: "/test", component: () => import("./views/test.vue") },
  {
    path: "/",
    component: Layout,
    children,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

router.beforeEach(function (to) {
  loading.start();

  const quickPath = /quick-started|usage-with-nuxt|change-log/;
  if (quickPath.test(to.path)) {
    if (lang == "en") {
      if (!to.path.includes("-en")) {
        return `${to.path}-en`;
      }
    } else {
      if (to.path.includes("-en")) {
        return to.path.replace("-en", "");
      }
    }
  }
  return;
});

router.afterEach((to) => {
  typeof window._hmt != "undefined" && window._hmt.push(["_trackPageview", to.fullPath]);

  if (typeof gtag !== "undefined") {
    gtag("config", "G-1KNV6YTVBM", {
      page_path: to.fullPath,
      page_title: to.meta.title || document.title,
      page_location: window.location.origin + to.fullPath,
    });
  }
  loading.finish();
});

export default router;
