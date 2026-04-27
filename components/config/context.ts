import type { ComponentInternalInstance } from "vue";
let __appContext: ComponentInternalInstance | null = null;
let __mouse__point: Point | null = null;
interface Point {
  x: number;
  y: number;
}
export function setAppContext(app: ComponentInternalInstance|null) {
  __appContext = app;
}

export const getAppContext = () => {
  return __appContext;
};

export const recordMousePoint = () => {
  if (typeof window !== "undefined") {
    document.addEventListener("mousedown", (e) => {
      __mouse__point = { x: e.clientX, y: e.clientY };
    });
  }
};

export const getMousePoint = () => {
  return __mouse__point || { x: 0, y: 0 };
};
