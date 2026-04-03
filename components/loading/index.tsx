import {
  createVNode,
  defineComponent,
  onBeforeUnmount,
  ref,
  render,
  Transition,
  type CSSProperties,
  type ExtractPropTypes,
} from "vue";
import { getAppContext } from "../config/context";

export const loadingProps = {
  height: { type: [Number, String], default: 2 },
};

export type LoadingProps = ExtractPropTypes<typeof loadingProps>;

const LoadingComponent = defineComponent({
  name: "LoadingBar",
  props: loadingProps,
  setup(_, { expose }) {
    const visible = ref(false);
    const percent = ref(0);
    const animate = ref(false);
    const isError = ref(false);
    const updateTimer = ref<any>();
    const hideTimer = ref<any>();

    const start = () => {
      percent.value = 0;
      isError.value = false;
      visible.value = true;
      clearInterval(updateTimer.value);
      updateTimer.value = setInterval(() => {
        animate.value = true;
        // 优化：进度越接近 95% 越慢，模拟真实加载感
        const step = percent.value < 80 ? Math.random() * 5 + 2 : Math.random() * 1;
        percent.value = Math.min(percent.value + step, 95);
        if (percent.value >= 95) clearInterval(updateTimer.value);
      }, 200);
    };

    const finish = () => {
      clearInterval(updateTimer.value);
      percent.value = 100;
      hideTimer.value = setTimeout(() => {
        visible.value = false;
        // 彻底消失后重置，防止下次 start 闪烁
        setTimeout(() => {
          percent.value = 0;
        }, 300);
      }, 500);
    };

    const error = () => {
      isError.value = true;
      percent.value = 100;
      visible.value = true;
      clearInterval(updateTimer.value);
      hideTimer.value = setTimeout(() => {
        visible.value = false;
      }, 500);
    };

    const update = (pt: number) => {
      isError.value = false;
      visible.value = true;
      animate.value = pt > percent.value;
      percent.value = pt;
    };

    onBeforeUnmount(() => {
      clearInterval(updateTimer.value);
      clearTimeout(hideTimer.value);
    });

    // 显式暴露方法
    expose({ start, finish, error, update });

    return () => {
      const lineProps = {
        class: ["k-loading-line", { "k-loading-line-error": isError.value }],
        style: {
          width: `${percent.value}%`,
          // 当进度重置为 0 时，禁用动画防止“倒退”感
          transitionDuration: !animate.value || percent.value === 0 ? "0s" : "0.2s",
        } as CSSProperties,
      };

      return (
        <Transition name="fade">
          <div class="k-loading-container" v-show={visible.value}>
            <div {...lineProps}></div>
          </div>
        </Transition>
      );
    };
  },
});

let loadInstance: any = null;

const createInstance = (props?: LoadingProps, context?: any) => {
  const containerId = `k-loading-box`;
  let container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement("div");
    container.id = containerId;
    document.body.appendChild(container);
  }

  // 使用类型断言解决 "缺少索引签名" 的报错
  const vm = createVNode(LoadingComponent, props);

  // 关联应用上下文
  vm.appContext = context?.appContext || getAppContext()?.appContext;

  render(vm, container);

  const instance = vm.component?.exposed;
  if (instance) {
    (instance as any).destroy = () => {
      render(null, container!);
      if (container?.parentNode) container.parentNode.removeChild(container);
      loadInstance = null;
    };
  }
  return instance;
};

const loading = {
  start() {
    if (!loadInstance) loadInstance = createInstance();
    loadInstance.start();
  },
  finish() {
    loadInstance?.finish();
  },
  error() {
    if (!loadInstance) loadInstance = createInstance();
    loadInstance.error();
  },
  update(pt: number) {
    if (!loadInstance) loadInstance = createInstance();
    loadInstance.update(pt);
  },
  destroy() {
    loadInstance?.destroy?.();
  },
};

export default loading;
