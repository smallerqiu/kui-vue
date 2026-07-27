import { nextTick } from "vue";

const THEME_KEY = "theme-mode";

const toggleTheme = (): boolean => {
  const isDark = localStorage.getItem(THEME_KEY) === "dark";
  const nextTheme = isDark ? "light" : "dark";
  document.documentElement.setAttribute(THEME_KEY, nextTheme);
  localStorage.setItem(THEME_KEY, nextTheme);
  return !isDark;
};

const Theme = {
  name: "Theme",
  setThemeMode(event: MouseEvent, callback?: (isDark: boolean) => void): void {
    const isAppearanceTransition =
      document.startViewTransition !== undefined &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isAppearanceTransition || !event) {
      const isDark = toggleTheme();
      callback?.(isDark);
      return;
    }
    const ratio = window.devicePixelRatio || 1;

    const x = event.clientX * ratio;
    const y = event.clientY * ratio;

    const endRadius =
      Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y)) * ratio;

    const willBeDark = localStorage.getItem(THEME_KEY) !== "dark";

    const transition = document.startViewTransition(async () => {
      toggleTheme();
      callback?.(willBeDark);
      await nextTick();
    });

    transition.ready.then(() => {
      const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];

      const animate = document.documentElement.animate(
        {
          clipPath: willBeDark ? clipPath : [...clipPath].reverse(),
        },
        {
          duration: 500 * ratio,
          easing: "ease-in-out",
          pseudoElement: willBeDark ? "::view-transition-new(root)" : "::view-transition-old(root)",
        }
      );
      animate.onfinish = () => {
        transition.skipTransition();
      };
    });
  },
};

export default Theme;
