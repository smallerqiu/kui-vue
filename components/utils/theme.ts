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
    const clientX = event.clientX;
    const clientY = event.clientY;

    const willBeDark = localStorage.getItem(THEME_KEY) !== "dark";

    const transition = document.startViewTransition(async () => {
      toggleTheme();
      callback?.(willBeDark);
      await nextTick();
    });

    transition.ready.then(() => {
      const pseudoElement = willBeDark
        ? "::view-transition-new(root)"
        : "::view-transition-old(root)";
      // View Transition clip paths use CSS pixels. Account for a visual viewport
      // offset (for example, when the page is pinch-zoomed) without applying DPR.
      const viewport = window.visualViewport;
      const x = clientX + (viewport?.offsetLeft || 0);
      const y = clientY + (viewport?.offsetTop || 0);
      const snapshotWidth = document.documentElement.clientWidth;
      const snapshotHeight = document.documentElement.clientHeight;
      const endRadius = Math.hypot(Math.max(x, snapshotWidth - x), Math.max(y, snapshotHeight - y));
      const xPercent = (x / snapshotWidth) * 100;
      const yPercent = (y / snapshotHeight) * 100;
      // A circle percentage resolves against the normalized diagonal. Using only
      // percentages keeps the animation correct whether the snapshot uses CSS or
      // device pixels (notably Chrome on macOS Retina displays).
      const normalizedDiagonal = Math.hypot(snapshotWidth, snapshotHeight) / Math.SQRT2;
      const radiusPercent = (endRadius / normalizedDiagonal) * 100;
      const clipPath = [
        `circle(0% at ${xPercent}% ${yPercent}%)`,
        `circle(${radiusPercent}% at ${xPercent}% ${yPercent}%)`,
      ];

      const animate = document.documentElement.animate(
        {
          clipPath: willBeDark ? clipPath : [...clipPath].reverse(),
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement,
        }
      );
      animate.onfinish = () => {
        transition.skipTransition();
      };
    });
  },
};

export default Theme;
