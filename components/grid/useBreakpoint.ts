import type { InjectionKey, Ref } from "vue";
import { onMounted, onUnmounted, readonly, ref } from "vue";
export type GridBreakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type GridResponsive<T> = T | Partial<Record<GridBreakpoint, T>>;

export interface GridContext {
  breakpoint: Readonly<Ref<GridBreakpoint>>;
  resolveResponsive: <T extends string | number>(
    value: GridResponsive<T> | undefined,
    fallback: T,
  ) => T;
}

const breakpointMap: Record<number, GridBreakpoint> = {
  0: "xs",
  576: "sm",
  768: "md",
  992: "lg",
  1200: "xl",
  1600: "xxl",
};
export const GRID_KEY: InjectionKey<GridContext> = Symbol("GRID_KEY");

export function useBreakpoint(elRef: Ref<HTMLElement | null>): Readonly<Ref<GridBreakpoint>> {
  const active = ref<GridBreakpoint>("xs");
  let observer: ResizeObserver | undefined;
  let rafId: number | null = null;

  const update = (width: number) => {
    const sortedPoints = Object.keys(breakpointMap)
      .map(Number)
      .sort((a, b) => b - a);
    for (const point of sortedPoints) {
      if (width >= point) {
        active.value = breakpointMap[point];
        break;
      }
    }
  };

  onMounted(() => {
    if (!elRef.value) return;
    update(elRef.value.getBoundingClientRect().width);
    if (typeof ResizeObserver === "undefined") return;
    observer = new ResizeObserver((entries) => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => update(entries[0].contentRect.width));
    });
    observer.observe(elRef.value);
  });
  onUnmounted(() => {
    if (rafId !== null) cancelAnimationFrame(rafId);
    observer?.disconnect();
  });

  return readonly(active);
}
