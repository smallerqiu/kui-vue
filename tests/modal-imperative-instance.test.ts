import { afterEach, describe, expect, it } from "vitest";
import { h, nextTick } from "vue";
import { modal, type ModalInstance } from "../components/modal";

/**
 * 命令式实例的形状与拆树时机（React 侧镜像见 kui-react/tests/modal-imperative-instance.test.tsx）。
 * 契约：show/hide/destroy 三个方法都在；destroy 只关窗，DOM 要等退场动画跑完才拆，
 * 拆的时候容器 div 和传送到 body 的那份一起走。
 */

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function until(assert: () => void, timeout = 1500) {
  const start = Date.now();
  for (;;) {
    try {
      assert();
      return;
    } catch (error) {
      if (Date.now() - start > timeout) throw error;
      await sleep(10);
    }
  }
}

const titleText = () => document.querySelector(".k-toast-title")?.textContent;

let instances: ModalInstance[] = [];

function open(title: string) {
  const instance = modal.info({ title, content: "content" });
  if (instance) instances.push(instance);
  return instance;
}

afterEach(async () => {
  instances.forEach((instance) => instance.destroy());
  await sleep(500);
  instances = [];
  document.body.innerHTML = "";
  document.body.className = "";
  document.body.removeAttribute("style");
});

describe("Imperative modal instance", () => {
  it("exposes the show / hide / destroy surface", () => {
    const instance = open("Surface");
    expect(typeof instance?.show).toBe("function");
    expect(typeof instance?.hide).toBe("function");
    expect(typeof instance?.destroy).toBe("function");
  });

  it("plays the exit animation before removing the dialog", async () => {
    const baseline = document.body.childElementCount;
    const instance = open("Animated");
    await until(() => expect(titleText()).toBe("Animated"));
    // 打开后 body 里多了两坨：命令式容器 + 传送到 body 的窗口
    expect(document.body.childElementCount).toBeGreaterThan(baseline);

    instance?.destroy();
    await nextTick();
    // destroy 只关窗，不掀桌子：动画期间标题还在
    expect(titleText()).toBe("Animated");
    // 但窗口已经进入关闭态，滚动锁先放开
    await until(() => expect(document.body.classList.contains("k-scroll-locked")).toBe(false));
    // 动画还没播完就把 DOM 掀掉，等于没有退场
    await sleep(120);
    expect(titleText()).toBe("Animated");

    await until(() => expect(document.querySelector(".k-toast")).toBeNull());
    // 容器和传送节点要一起拆干净，否则 body 里全是空 div
    await until(() => expect(document.body.childElementCount).toBe(baseline));
  });

  it("hide() closes the dialog and the container goes away with it", async () => {
    const baseline = document.body.childElementCount;
    const instance = open("Hide me");
    await until(() => expect(titleText()).toBe("Hide me"));

    instance?.hide();
    await until(() => expect(document.querySelector(".k-toast")).toBeNull());
    await until(() => expect(document.body.childElementCount).toBe(baseline));
  });

  it("is idempotent when destroy is called repeatedly", async () => {
    const instance = open("Destroy twice");
    await until(() => expect(titleText()).toBe("Destroy twice"));

    instance?.destroy();
    instance?.destroy();
    instance?.destroy();
    await sleep(20);
    await until(() => expect(document.querySelector(".k-toast")).toBeNull());
  });

  it("命令式 API 的 title / content 收 VNode，不只是字符串", async () => {
    const instance = modal.info({ title: h("strong", "富标题"), content: h("p", "富正文") });
    if (instance) instances.push(instance);

    // 和 react 的 ReactNode 对齐：节点原样渲染，不是被当成文本
    await until(() =>
      expect(document.querySelector(".k-toast-title strong")?.textContent).toBe("富标题"),
    );
    expect(document.querySelector(".k-toast-content p")?.textContent).toBe("富正文");
  });
});
