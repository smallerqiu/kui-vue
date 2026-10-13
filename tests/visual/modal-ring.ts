import { createApp, h, ref } from "vue";
import { Input } from "../../components/input";
// vue 侧 Modal 是默认导出（react 侧才是具名），按具名取会整个模块报错、页面空白。
import Modal from "../../components/modal";
import "../../components/styles/index.less";

/**
 * Modal 里焦点环的几何夹具（配套用例见 modal-ring.spec.ts）。
 *
 * 三根 Input 都撑满 body 宽度：第一根贴着 body 上沿，最后一根贴着下沿，
 * 于是焦点环会不会被 `.k-modal-body` 这个滚动容器切掉，四条边一次全测到。
 * 最后再放一个 `data-ring="worst"` 的空盒，按库里最宽的一圈焦点环画（Steps 的
 * 2px outline + 3px offset = 5px，其余控件最多 3~4px）：它贴边时最容易露馅，
 * 也用来钉住 `.k-modal-body` 那 6px 内边距"够画下最宽一圈"这个前提。
 */
createApp({
  setup() {
    const visible = ref(true);
    return () =>
      h(
        Modal,
        { modelValue: visible.value, title: "Focus ring", destroyOnClose: false },
        {
          default: () => [
            ...[
              { placeholder: "ring-first", style: "width: 100%" },
              { placeholder: "ring-middle", style: "width: 100%; margin: 120px 0" },
              { placeholder: "ring-last", style: "width: 100%" },
            ].map((props) => h(Input, props)),
            h("div", {
              "data-ring": "worst",
              style: "width: 100%; height: 24px; outline: 2px solid #f0f; outline-offset: 3px",
            }),
          ],
        },
      );
  },
}).mount("#app");
