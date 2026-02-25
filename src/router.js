import { createRouter, createWebHistory } from "vue-router";
import { loading } from "kui-vue";
const lang = localStorage.getItem("lang") || "en";
let children = [
  {
    path: "/guide/quick-started",
    component: () => import("./views/quickStarted.md"),
  },
  {
    path: "/guide/quick-started-en",
    component: () => import("./views/quickStarted.en_US.md"),
  },
  { path: "/guide/language", component: () => import("./views/language") },
  { path: "/guide/change-log", component: () => import("./views/changeLog.md") },
  { path: "/guide/change-log-en", component: () => import("./views/changeLog.en_US.md") },
  { path: "/guide/usage-with-nuxt", component: () => import("./views/usageWithNuxt.md") },
  { path: "/guide/usage-with-nuxt-en", component: () => import("./views/usageWithNuxt.en_US.md") },
  // { path: '/guide/theme', component: () => import('./views/theme.md') },
  {
    path: "/guide/dark-mode",
    component: () => import("./views/dark-mode/index"),
  },
  { path: "/guide/components", component: () => import("./views/components.jsx") },

  {
    path: "/notices/alert",
    component: () => import("../components/alert/demo"),
  },
  {
    path: "/navigation/affix",
    component: () => import("../components/affix/demo"),
  },
  {
    path: "/data/avatar",
    component: () => import("../components/avatar/demo"),
  },
  { path: "/data/card", component: () => import("../components/card/demo") },
  {
    path: "/data/carousel",
    component: () => import("../components/carousel/demo"),
  },
  {
    path: "/data/collapse",
    component: () => import("../components/collapse/demo"),
  },
  {
    path: "/other/colorpicker",
    component: () => import("../components/colorPicker/demo"),
  },
  {
    path: "/forms/checkbox",
    component: () => import("../components/checkbox/demo"),
  },
  {
    path: "/basic/button",
    component: () => import("../components/button/demo"),
  },
  {
    path: "/navigation/breadcrumb",
    component: () => import("../components/breadcrumb/demo"),
  },
  {
    path: "/navigation/backtop",
    component: () => import("../components/backtop/demo"),
  },
  {
    path: "/notices/badge",
    component: () => import("../components/badge/demo"),
  },
  {
    path: "/forms/datepicker",
    component: () => import("../components/datePicker/demo"),
  },
  {
    path: "/data/descriptions",
    component: () => import("../components/descriptions/demo"),
  },
  {
    path: "/notices/drawer",
    component: () => import("../components/drawer/demo"),
  },
  {
    path: "/navigation/dropdown",
    component: () => import("../components/dropdown/demo"),
  },
  {
    path: "/layouts/divider",
    component: () => import("../components/divider/demo"),
  },
  {
    path: "/notices/empty",
    component: () => import("../components/empty/demo"),
  },
  { path: "/forms/form", component: () => import("../components/form/demo") },
  { path: "/layouts/flex", component: () => import("../components/flex/demo") },
  { path: "/layouts/row-col", component: () => import("../components/rowCol/demo") },
  { path: "/layouts/grid", component: () => import("../components/grid/demo") },
  { path: "/data/image", component: () => import("../components/image/demo") },
  { path: "/forms/input", component: () => import("../components/input/demo") },
  {
    path: "/forms/inputnumber",
    component: () => import("../components/inputNumber/demo"),
  },
  { path: "/basic/icons", component: () => import("../components/icon/demo") },
  {
    path: "/layouts/layout",
    component: () => import("../components/layout/demo"),
  },
  {
    path: "/notices/loading",
    component: () => import("../components/loading/demo"),
  },
  {
    path: "/notices/message",
    component: () => import("../components/message/demo"),
  },
  {
    path: "/notices/modal",
    component: () => import("../components/modal/demo"),
  },
  {
    path: "/navigation/menu",
    component: () => import("../components/menu/demo"),
  },
  {
    path: "/notices/notice",
    component: () => import("../components/notice/demo"),
  },
  { path: "/forms/radio", component: () => import("../components/radio/demo") },
  { path: "/notices/rate", component: () => import("../components/rate/demo") },
  {
    path: "/forms/select",
    component: () => import("../components/select/demo"),
  },
  {
    path: "/forms/slider",
    component: () => import("../components/slider/demo"),
  },
  {
    path: "/notices/skeleton",
    component: () => import("../components/skeleton/demo"),
  },
  {
    path: "/layouts/space",
    component: () => import("../components/space/demo"),
  },
  { path: "/notices/spin", component: () => import("../components/spin/demo") },
  {
    path: "/forms/switch",
    component: () => import("../components/switch/demo"),
  },
  {
    path: "/data/statcard",
    component: () => import("@/components/statCard/demo"),
  },
  { path: "/data/table", component: () => import("../components/table/demo") },
  { path: "/notices/tag", component: () => import("../components/tag/demo") },
  {
    path: "/navigation/tabs",
    component: () => import("../components/tabs/demo"),
  },
  {
    path: "/data/timeline",
    component: () => import("../components/timeline/demo"),
  },
  {
    path: "/notices/tooltip",
    component: () => import("../components/tooltip/demo"),
  },
  { path: "/data/tree", component: () => import("../components/tree/demo") },
  {
    path: "/forms/treeselect",
    component: () => import("../components/treeSelect/demo"),
  },
  {
    path: "/notices/poptip",
    component: () => import("../components/poptip/demo"),
  },
  {
    path: "/notices/popconfirm",
    component: () => import("../components/popconfirm/demo"),
  },
  {
    path: "/notices/progress",
    component: () => import("../components/progress/demo"),
  },
  {
    path: "/navigation/page",
    component: () => import("../components/page/demo"),
  },
  {
    path: "/forms/upload",
    component: () => import("../components/upload/demo"),
  },
];

import Layout from "./components/AppLayout";

let routes = [
  { path: "/", component: () => import("./views/index") },
  { path: "/test", component: () => import("./views/test") },
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

router.beforeEach(function (to, from, next) {
  loading.start();

  const quickPath = /quick-started|usage-with-nuxt|change-log/;
  if (quickPath.test(to.path)) {
    if (lang == "en") {
      if (!to.path.includes("-en")) {
        next(`${to.path}-en`);
        return;
      }
    } else {
      if (to.path.includes("-en")) {
        next(to.path.replace("-en", ""));
        return;
      }
    }
  }
  next();
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
