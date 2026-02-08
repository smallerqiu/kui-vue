import { ref, onMounted, onUnmounted, readonly } from "vue";

// const screens = {
//   xs: "(max-width: 575px)",
//   sm: "(min-width: 576px)",
//   md: "(min-width: 768px)",
//   lg: "(min-width: 992px)",
//   xl: "(min-width: 1200px)",
//   xxl: "(min-width: 1600px)",
// };
const breakpointMap = {
  0: "xs",
  576: "sm",
  768: "md",
  992: "lg",
  1200: "xl",
  1600: "xxl",
};
export const GRID_KEY = Symbol("GRID_KEY");

export function useBreakpoint(elRef) {
  if (typeof window === 'undefined') return;
  const active = ref("md");
  let rafId = null;

  const observer = new ResizeObserver((entries) => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const width = entries[0].contentRect.width;
      const sortedPoints = Object.keys(breakpointMap)
        .map(Number)
        .sort((a, b) => b - a);
      for (const point of sortedPoints) {
        if (width >= point) {
          active.value = breakpointMap[point];
          break;
        }
      }
    });
  });

  onMounted(() => elRef.value && observer.observe(elRef.value));
  onUnmounted(() => observer.disconnect());

  return readonly(active);
}
