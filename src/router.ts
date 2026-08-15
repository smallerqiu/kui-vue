import { loading } from "kui-vue";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import { routes } from "vue-router/auto-routes";
import Layout from "./components/app-layout.vue";
const lang = localStorage.getItem("lang") || "en";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...routes,
    {
      path: "/test",
      component: () => import("./views/test/index.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/guide/quick-started",
    },
  ],
  scrollBehavior(to, _, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }
    return { top: 0 };
  },
});

router.beforeEach(function (to) {
  loading.start();

  if (to.path != "/") {
    const isEnPath = to.path.endsWith("-en");
    if (lang == "en" && !isEnPath) {
      return `${to.path}-en`;
    }
    if (lang != "en" && isEnPath) {
      return `${to.path.replace("-en", "")}`;
    }
  }
  return true;
});

// demo routes
const demoGlobs = import.meta.glob("../components/**/index*.md");
const demoRoutes: RouteRecordRaw[] = [];
for (const key in demoGlobs) {
  // console.log(key);
  const name = key.split("/")[2];
  const route: RouteRecordRaw = {
    path: key.includes("US") ? name + "-en" : name,
    component: () => demoGlobs[key](),
  };
  demoRoutes.push(route);
}

// docs routes
const docsGlobs = import.meta.glob("./views/**/*.md");
const docsRoutes: RouteRecordRaw[] = [];
for (const key in docsGlobs) {
  // console.log(key);
  const name = key.split("/")[2].replace(/.md|.en_US.md/g, "");
  const route: RouteRecordRaw = {
    path: key.includes("US") ? name + "-en" : name,
    component: () => docsGlobs[key](),
  };
  docsRoutes.push(route);
}

router.addRoute({
  path: "/",
  component: Layout,
  children: [
    { path: "components", children: demoRoutes },
    { path: "guide", children: docsRoutes },
  ],
});

router.afterEach((to) => {
  const analyticsWindow = window as Window & {
    _hmt?: { push: (args: unknown[]) => void };
    gtag?: (...args: unknown[]) => void;
  };
  const _hmt = analyticsWindow._hmt;
  const gtag = analyticsWindow.gtag;
  if (typeof _hmt != "undefined") _hmt.push(["_trackPageview", to.fullPath]);

  if (typeof gtag !== "undefined") {
    gtag("config", "G-1KNV6YTVBM", {
      page_path: to.fullPath,
      page_title: to.meta.title || document.title,
      page_location: window.location.origin + to.fullPath,
    });
  }
  loading.finish();
});

// console.log(router.getRoutes());

export default router;
