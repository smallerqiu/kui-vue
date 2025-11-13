import { inject } from "vue";
const THEME_KEY = "theme-mode";
const toggle = () => {
  const isDark = localStorage.getItem(THEME_KEY) == "dark";
  const root = document.documentElement;
  if (isDark) {
    root.setAttribute(THEME_KEY, "light");
    localStorage.setItem(THEME_KEY, "light");
  } else {
    root.setAttribute(THEME_KEY, "dark");
    localStorage.setItem(THEME_KEY, "dark");
  }
  return !isDark;
};

const Theme = {
  name: "Theme",
  install(app) {
    app.provide("theme", Theme);
    app.config.globalProperties.$theme = Theme;
  },
  useTheme() {
    return inject("theme", null);
  },
  setThemeMode(event, callback) {
    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );
    const root = document.documentElement;
    let isDark = localStorage.getItem("theme") == "dark";

    if (typeof document.startViewTransition === "function") {
      document
        .startViewTransition(() => {
          isDark = toggle();
          callback?.(isDark);
        })
        .ready.then(() => {
          const clippath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ];
          root.animate(
            {
              clipPath: !isDark ? clippath.reverse() : clippath,
            },
            {
              duration: 500,
              easing: "ease-in-out",
              pseudoElement: !isDark
                ? "::view-transition-old(root)"
                : "::view-transition-new(root)",
            }
          );
        });
    } else {
      isDark = toggle();
      callback?.(isDark);
    }
  },
};

export default Theme;
