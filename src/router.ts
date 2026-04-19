import { loading } from "kui-vue";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import { routes } from "vue-router/auto-routes";
import Layout from "./components/app-layout.vue";
const lang = localStorage.getItem("lang") || "en";

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
  // scrollBehavior(to, _, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   }
  //   if (to.hash) {
  //     return { el: to.hash, behavior: "smooth" };
  //   }
  //   return { top: 0 };
  // },
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
for (let key in demoGlobs) {
  // console.log(key);
  const name = key.split("/")[2];
  let route: RouteRecordRaw = {
    path: key.includes("US") ? name + "-en" : name,
    component: () => demoGlobs[key](),
  };
  demoRoutes.push(route);
}
router.addRoute({
  path: "/components",
  component: Layout,
  children: demoRoutes,
});

// docs routes
const docsGlobs = import.meta.glob("./views/**/*.md");
const docsRoutes: RouteRecordRaw[] = [];
for (let key in docsGlobs) {
  // console.log(key);
  const name = key.split("/")[2].replace(/.md|.en_US.md/g, "");
  let route: RouteRecordRaw = {
    path: key.includes("US") ? name + "-en" : name,
    component: () => docsGlobs[key](),
  };
  docsRoutes.push(route);
}
router.addRoute({
  path: "/guide",
  component: Layout,
  children: docsRoutes,
});

router.addRoute({
  path: "/test",
  component: () => import("./views/test.vue"),
});

router.afterEach((to) => {
  const _hmt = (window as any)._hmt;
  const gtag = (window as any).gtag;
  typeof _hmt != "undefined" && _hmt.push(["_trackPageview", to.fullPath]);

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
