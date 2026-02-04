import {
  defineComponent,
  ref,
  createVNode,
  render,
  onBeforeUnmount,
  Transition,
  getCurrentInstance,
} from "vue";
import { getAppContext } from "../config/context";
import { withInstall } from "../utils/vue";

const loading = defineComponent({
  setup(ps, { expose }) {
    const visible = ref(true);
    const percent = ref(0);
    const animate = ref(false);
    const isError = ref(false);
    const updateTimer = ref();
    const hideTimer = ref();
    const start = () => {
      percent.value = 0;
      isError.value = false;
      visible.value = true;
      clearInterval(updateTimer.value);
      updateTimer.value = setInterval(() => {
        animate.value = true;
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
      animate.value = pt > percent.value;
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
        style: {
          width: `${percent.value}%`,
          transitionDuration: !animate.value ? "0s" : null,
        },
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
const createInstance = (props = {}, context) => {
  const containerId = `k-loading-box`;
  let container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement("div");
    container.id = containerId;
    document.body.appendChild(container);
  }
  const vm = createVNode(loading, props, context);
  render(vm, container);
  vm.appContext = context?.appContext || getAppContext()?.appContext;

  const instance = vm.component?.exposed; // for 3
  instance.destroy = () => {
    render(null, container);
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
  };
  return instance;
};

let loadInstance = null;

const getInstance = (props = {}, context) => {
  loadInstance = loadInstance || createInstance(props, context);
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
    }
  },
};
export default withInstall(Loading);
