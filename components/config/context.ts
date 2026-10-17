import {
  computed,
  getCurrentInstance,
  inject,
  type AppContext,
  type ComponentInternalInstance,
  type ComputedRef,
  type InjectionKey,
} from "vue";
import type { MarkThemeType, ShapeType, SizeType, SurfaceThemeType, ThemeType } from "../const/types";
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
/**
 * Every component that paints tier classes resolves its value here instead of copying the comparison.
 * Writing no `theme` at all is how a caller says "listen to the component", and this returns the tier
 * that component was built to look like — the same class it reaches with no `theme`, so the two can
 * never drift. A component's own default differs (input-family is `fill`, `collapse` is `outline`,
 * `image` is `plain`), which is why the fallback is a parameter rather than a constant.
 */
export function resolveTheme(theme: ThemeType | undefined, fallback: ThemeType): ThemeType {
  return theme ?? fallback;
}

/**
 * The other shape of "listen to the component": some components own no tier class for their default
 * look at all. Button's `k-btn-default` is a *type* class, and a tier the stylesheet never paints —
 * `k-btn-underlined`, since an underline only means something on a control you type into — is a dead
 * class. An unguarded `` [`k-<component>-${theme}`]: theme `` ships both, so a component in this shape
 * resolves through here: a value outside the tiers it actually paints yields `undefined`, emits no tier
 * class, and leaves the component's own look in place.
 */
export function resolvePaintedTheme<T extends ThemeType>(
  theme: ThemeType | undefined,
  painted: readonly T[],
): T | undefined {
  return painted.find((tier) => tier === theme);
}

/**
 * The two painted sets as values, for the components that hand a tier *onward* instead of painting it:
 * a group forwarding to its items, a dropdown forwarding to its buttons, a chip list forwarding to
 * `Tag`. Those callers must vouch for what they pass — `theme` is typed by what the receiver paints —
 * so they run the inherited value through the receiver's guard. A component that paints its own surface
 * keeps a local `PAINTED_THEMES` instead, because the style contract reads that from its source.
 */
export const SURFACE_THEMES: readonly SurfaceThemeType[] = [
  "fill",
  "outline",
  "plain",
  "solid",
  "dashed",
];

export const MARK_THEMES: readonly MarkThemeType[] = ["fill", "outline"];

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
