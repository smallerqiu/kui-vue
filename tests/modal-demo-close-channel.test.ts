import { mount } from "@vue/test-utils";
import { afterEach, expect, it } from "vitest";
import { Button, Input, Modal, Space } from "../components";
import CustomDemo from "../components/modal/demo/custom.vue";

/**
 * 文档示例里的关闭收尾契约。
 *
 * 「Asynchronous shutdown」那条示例在 `@ok` 里点了保存就转 loading，靠超时才关窗。
 * 用户中途点「取消」窗口也会关（`v-model` 负责开合），但 loading 和定时器还挂着——
 * 下一次打开就是一个转不停的按钮，而且请求还在后台跑。收尾必须挂在 `openChange` 上，
 * 那里四种关法（取消 / X / 遮罩 / Esc）都会到一次；只挂 `close` 会漏掉「取消」。
 * React 侧的镜像用例见 kui-react/tests/overlay-demo-controlled.test.tsx。
 */

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const settle = async () => {
  await sleep(120);
};
// destroyOnClose 默认 true：300ms 退场倒计时结束后面板节点才摘掉。
const gone = async () => {
  await sleep(500);
  expect(document.querySelector(".k-modal")).toBeNull();
};

const byText = (text: RegExp, root: ParentNode = document) =>
  [...root.querySelectorAll("button")].find((button) => text.test(button.textContent ?? ""));

let view: ReturnType<typeof mount> | null = null;

afterEach(() => {
  view?.unmount();
  view = null;
  document.body.innerHTML = "";
  document.body.className = "";
  document.body.removeAttribute("style");
});

it("异步关闭示例：取消关掉时 loading 收得掉，窗口也还能再开", async () => {
  view = mount(CustomDemo, {
    attachTo: document.body,
    global: { components: { Button, Input, Modal, Space } },
  });

  const trigger = byText(/Asynchronous shutdown/i);
  expect(trigger, "示例里找不到那条异步关闭的触发按钮").toBeTruthy();
  trigger!.click();
  await settle();

  const panel = document.querySelector(".k-modal");
  expect(panel, "点触发按钮没打开窗口").toBeTruthy();
  const footer = [...panel!.querySelectorAll(".k-modal-footer button")];
  footer.at(-1)!.click(); // 确定：进入 loading
  await settle();
  expect(
    panel!.querySelector(".k-modal-footer .k-btn-loading"),
    "点了确定却没有进入 loading，用例前提不成立",
  ).toBeTruthy();

  footer[0].click(); // 取消：只走 cancel 通道，窗口靠 v-model 关掉
  await gone();

  trigger!.click();
  await settle();
  const reopened = document.querySelector(".k-modal");
  expect(reopened, "取消关掉后再点触发按钮打不开").toBeTruthy();
  expect(
    reopened!.querySelector(".k-btn-loading"),
    "取消关掉后 loading 还挂在按钮上，下次打开是个转不停的按钮",
  ).toBeNull();
});
