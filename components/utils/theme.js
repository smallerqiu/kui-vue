import { nextTick } from "vue";
const THEME_KEY = "theme-mode";
const toggleTheme = () => {
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
  setThemeMode(event, callback) {
    const isAppearanceTransition =
      document.startViewTransition &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isAppearanceTransition || !event) {
      const isDark = toggleTheme();
      callback?.(isDark);
    }
    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );
    let isDark = localStorage.getItem(THEME_KEY) == "dark";

    const transition = document.startViewTransition(async () => {
      isDark = toggleTheme();
      callback?.(isDark);
      await nextTick();
    });

    transition.ready.then(() => {
      const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
      const animate = document.documentElement.animate(
        {
          clipPath: !isDark ? clipPath.reverse() : clipPath,
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: !isDark ? "::view-transition-old(root)" : "::view-transition-new(root)",
        }
      );
      animate.onfinish = () => {
        transition.skipTransition();
      };
    });
  },
};

export default Theme;
