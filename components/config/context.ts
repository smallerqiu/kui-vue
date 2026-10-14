import {
  computed,
  getCurrentInstance,
  inject,
  type AppContext,
  type ComponentInternalInstance,
  type ComputedRef,
  type InjectionKey,
} from "vue";
import type { ShapeType, SizeType, ThemeType } from "../const/types";
import enUS from "../locale/en";

/**
 * 没有 ConfigProvider 兜底时用的语言。
 * 以前 17 处 inject 的兜底各写各的，全是 zhCN，文档却写着"默认英语"
 *（dayjs 的中文语言包也从没注册过，月份和星期本来就是英文），代码和文档正好相反。默认值收到这里，
 * 以后改默认只改这一处。
 */
export const DEFAULT_LOCALE = enUS;

export interface ConfigProviderContext {
  size: ComputedRef<SizeType | undefined>;
  theme: ComputedRef<ThemeType | undefined>;
  shape: ComputedRef<ShapeType | undefined>;
}

export const CONFIG_PROVIDER_INJECTION_KEY: InjectionKey<ConfigProviderContext> =
  Symbol("KConfigProvider");

export const useConfigAppearance = <
  T extends {
    size?: SizeType;
    theme?: ThemeType;
    shape?: ShapeType;
  },
>(
  props: T,
) => {
  const instance = getCurrentInstance();
  const config = inject(CONFIG_PROVIDER_INJECTION_KEY, null);
  const resolve = <K extends "size" | "theme" | "shape">(name: K): T[K] => {
    const explicit = Object.prototype.hasOwnProperty.call(instance?.vnode.props ?? {}, name);
    return explicit ? props[name] : ((config?.[name].value ?? props[name]) as T[K]);
  };
  return {
    size: computed(() => resolve("size")),
    theme: computed(() => resolve("theme")),
    shape: computed(() => resolve("shape")),
    surfaceShape: computed(() => {
      const shape = resolve("shape");
      return shape === "circle" ? "round" : shape;
    }),
  };
};
const appContexts: AppContext[] = [];
let __mouse__point: Point | null = null;
interface Point {
  x: number;
  y: number;
}
const createScopedAppContext = (instance: ComponentInternalInstance): AppContext => {
  const provides: AppContext["provides"] =
    Reflect.get(instance, "provides") ?? instance.appContext.provides;
  return { ...instance.appContext, provides };
};

export const registerAppContext = (instance: ComponentInternalInstance) => {
  const context = createScopedAppContext(instance);
  appContexts.push(context);
  return () => {
    const index = appContexts.lastIndexOf(context);
    if (index >= 0) appContexts.splice(index, 1);
  };
};

export const getAppContext = (instance?: ComponentInternalInstance | null) =>
  instance ? createScopedAppContext(instance) : (appContexts.at(-1) ?? null);

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
