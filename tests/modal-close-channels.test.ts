import { mount, type VueWrapper } from "@vue/test-utils";
import { defineComponent, h, nextTick, ref } from "vue";
import { afterEach, describe, expect, it } from "vitest";
import Drawer from "../components/drawer";
import Modal from "../components/modal";

/**
 * 关闭动作的通道契约：底部「取消」只发 cancel，遮罩 / Esc / 右上角只发 close，两条互不重叠；
 * 而 update:modelValue + openChange 四种关法都会发一次——这正是"同步开合状态只挂 openChange
 * （或直接用 v-model）就够，不必在 onCancel 和 onClose 里各收一次"的依据。
 * 宿主这里只按 openChange 翻 modelValue，用例最后等到 DOM 摘掉，
 * 证明除了这条通道没有别的路径能把窗口关掉。
 * 两个仓库断言同一件事，见 kui-react/tests/modal-close-channels.test.tsx。
 */

const settle = async () => {
  await nextTick();
  await new Promise((resolve) => setTimeout(resolve, 120));
  await nextTick();
};

// 退场倒计时 300ms；正向断言用轮询，别把边界掐死在 CI 抖动里。
const gone = async (selector: string) => {
  await new Promise((resolve) => setTimeout(resolve, 450));
  expect(document.querySelector(selector)).toBeNull();
};

type Channels = { cancel: number; close: number; openChanges: boolean[]; log: string[] };

const wrappers: VueWrapper[] = [];

const harness = (
  Component: typeof Modal | typeof Drawer,
  props: Record<string, unknown> = {},
): Channels => {
  const channels: Channels = { cancel: 0, close: 0, openChanges: [], log: [] };
  const visible = ref(true);
  wrappers.push(
    mount(
      defineComponent({
        render: () =>
          h(
            Component,
            {
              modelValue: visible.value,
              title: "标题",
              maskClosable: true,
              "onUpdate:modelValue": (next: boolean) => {
                channels.log.push(`model:${next}`);
                visible.value = next;
              },
              onCancel: () => {
                channels.cancel += 1;
                channels.log.push("cancel");
              },
              onClose: () => {
                channels.close += 1;
                channels.log.push("close");
              },
              onOpenChange: (next: boolean) => {
                channels.openChanges.push(next);
                channels.log.push(`open:${next}`);
              },
              ...props,
            },
            { default: () => h("span", "内容") },
          ),
      }),
      { attachTo: document.body },
    ),
  );
  return channels;
};

const targets = [
  ["Modal", Modal, ".k-modal", ".k-modal-wrap"],
  ["Drawer", Drawer, ".k-drawer", ".k-drawer-mask"],
] as const;

describe.each(targets)("%s close channels", (_name, Component, root, maskSelector) => {
  const paths = [
    ["footer cancel", () => document.querySelector(`${root}-footer button`)!.click(), "cancel"],
    ["mask", () => document.querySelector(maskSelector)!.click(), "close"],
    [
      "Escape",
      () => document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" })),
      "close",
    ],
    ["corner close", () => document.querySelector(`${root}-close`)!.click(), "close"],
  ] as const;

  describe.each(paths)("%s", (_label, action, channel) => {
    it(`fires ${channel} only, and reports the close once`, async () => {
      const channels = harness(Component);
      await settle();

      action();
      await settle();

      expect(channels.cancel, "footer cancel is the onCancel channel").toBe(
        channel === "cancel" ? 1 : 0,
      );
      expect(channels.close, "mask / Escape / corner are the onClose channel").toBe(
        channel === "close" ? 1 : 0,
      );
      expect(channels.openChanges.filter((next) => next === false)).toHaveLength(1);
      expect(channels.openChanges.at(-1)).toBe(false);
      // 四处（react/vue × Modal/Drawer）统一的顺序：先结开合状态（update:modelValue → openChange），
      // 再发语义回调。反过来的话 onCancel/onClose 里读到的 modelValue 还是 true。
      // 只看这段尾序：vue 挂载时会把已有的打开态回写一次（model:true / open:true），react 不会。
      expect(channels.log.slice(-3)).toEqual([
        "model:false",
        "open:false",
        channel === "cancel" ? "cancel" : "close",
      ]);

      await gone(root);
    });
  });
});

afterEach(() => {
  wrappers.forEach((wrapper) => wrapper.unmount());
  wrappers.length = 0;
  document.body.innerHTML = "";
  document.body.className = "";
  document.body.removeAttribute("style");
});
