import { defineComponent, ref, createVNode, render, onBeforeUnmount, Transition } from "vue";
import { withInstall } from '../utils/vue';

const loading = defineComponent({
  setup(ps, { expose }) {
    const visible = ref(true);
    const percent = ref(0);
    const isError = ref(false);
    const updateTimer = ref(null);
    const hideTimer = ref(null);
    const start = () => {
      percent.value = 0;
      isError.value = false;
      visible.value = true;
      clearInterval(updateTimer.value);
      updateTimer.value = setInterval(() => {
        percent.value += Math.floor(Math.random() * 3 + 5);
        if (percent.value >= 95) {
          percent.value = 95;
          clearInterval(updateTimer.value);
        }
      }, 200);
    };
    const finish = () => {
      clearInterval(updateTimer.value);
      percent.value = 100;
      hideTimer.value = setTimeout(() => {
        visible.value = false;
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
    const update = (pt) => {
      isError.value = false;
      visible.value = true;
      percent.value = pt;
    };

    onBeforeUnmount(() => {
      clearInterval(updateTimer.value);
      clearTimeout(hideTimer.value);
    });

    const destroy = () => {
      clearInterval(updateTimer.value);
    };

    expose({
      start,
      finish,
      error,
      update,
      destroy,
    });

    return () => {
      const props = {
        class: [
          "k-loading-line",
          {
            ["k-loading-line-error"]: isError.value,
          },
        ],
        style: { width: `${percent.value}%` },
      };
      return (
        <Transition name="fade">
          <div class="k-loading-wrap" v-show={visible.value}>
            <div {...props}></div>
          </div>
        </Transition>
      );
    };
  },
});
const createInstance = (props = {}) => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  const vm = createVNode(loading, props);
  render(vm, container);

  return vm.component?.exposed;
};

let loadInstance = null;

const getInstance = (props = {}) => {
  loadInstance = loadInstance || createInstance(props);
  return loadInstance;
};

let Loading = {
  name: "Loading",
  start() {
    getInstance().start();
  },
  finish() {
    getInstance().finish();
  },
  error() {
    getInstance().error();
  },
  update(pt) {
    getInstance().update(pt);
  },
  destroy() {
    if (loadInstance) {
      loadInstance.destroy();
      loadInstance = null;
      document.body.removeChild(document.querySelector(".k-loading-wrap")?.parentNode);
    }
  },
  install(app) {
    app.provide("loading", Loading);
    // 可选：同时挂到 globalProperties 兼容 this.$loading
    app.config.globalProperties.$loading = Loading;
  },
  useLoading() {
    return inject("loading");
  },
};
export default withInstall(Loading);
