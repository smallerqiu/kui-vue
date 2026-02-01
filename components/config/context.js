let __appContext = null;
let __mouse__point = null;
export function setAppContext(app) {
  __appContext = app;
}

export function getAppContext() {
  return __appContext;
}

export function recordMousePoint() {
  if (typeof window !== "undefined") {
    document.addEventListener("mousedown", (e) => {
      __mouse__point = { x: e.clientX, y: e.clientY };
    });
  }
}

export function getMousePoint() {
  return __mouse__point || { x: 0, y: 0 };
}
