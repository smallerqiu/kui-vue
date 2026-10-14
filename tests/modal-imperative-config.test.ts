import { mount } from "@vue/test-utils";
import { afterEach, describe, expect, it } from "vitest";
import { h, nextTick, ref } from "vue";
import ConfigProvider from "../components/config";
import en from "../components/locale/en";
import zhCN from "../components/locale/zh-CN";
import { modal } from "../components/modal";

/**
 * 命令式弹窗的配置继承（React 侧镜像见 kui-react/tests/modal-imperative-config.test.tsx）。
 * modal.info() 是 render(vnode, 新容器) 挂出去的独立树，靠 vm.appContext = getAppContext()
 * 把最外层 ConfigProvider 的 provides 接管过来，语言/弹层容器/尺寸才跟着走。
 * 两边断言的是同一件事：装了 ConfigProvider 就该继承，卸载了就不该再继承。
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

/** Toast 底部按钮文案，从左到右。confirm 类型才有第二个。 */
const footerLabels = () =>
  [...document.querySelectorAll(".k-toast-footer .k-btn")].map((button) => button?.textContent);

const okLabel = () => footerLabels().at(-1);

const providerWrappers: ReturnType<typeof mount>[] = [];

async function openInfo(title: string) {
  modal.info({ title, content: "content" });
  await nextTick();
  await until(() => expect(document.querySelector(".k-toast-title")?.textContent).toBe(title));
}

afterEach(async () => {
  modal.destroyAll();
  await sleep(400);
  providerWrappers.forEach((wrapper) => wrapper.unmount());
  providerWrappers.length = 0;
  document.body.innerHTML = "";
  document.body.className = "";
  document.body.removeAttribute("style");
});

describe("Imperative modal config inheritance", () => {
  it("gives the dialog the locale registered by ConfigProvider", async () => {
    providerWrappers.push(
      mount(ConfigProvider, { props: { locale: zhCN }, slots: { default: () => h("span") } }),
    );
    await openInfo("Localized");
    expect(okLabel()).toBe("确定");
  });

  it("falls back to the English defaults when no ConfigProvider is mounted", async () => {
    // 库级默认是 en：文档一直写"默认英语"，而以前每个组件自己写死 zhCN 兜底，两头对不上。
    await openInfo("No provider");
    expect(okLabel()).toBe("Ok");
  });

  it("re-renders an open dialog when the provider config changes", async () => {
    const wrapper = mount(ConfigProvider, {
      props: { locale: zhCN },
      slots: { default: () => h("span") },
    });
    providerWrappers.push(wrapper);
    await openInfo("Live");
    expect(okLabel()).toBe("确定");

    await wrapper.setProps({ locale: en });
    await until(() => expect(okLabel()).toBe("Ok"));
    // 语言换了，窗口内容不能跟着换成新的（那等于重开了一遍）。
    expect(document.querySelector(".k-toast-title")?.textContent).toBe("Live");
  });

  it("inherits appearance as well as text", async () => {
    providerWrappers.push(
      mount(ConfigProvider, {
        props: { size: "small", theme: "plain" },
        slots: { default: () => h("span") },
      }),
    );
    await openInfo("Appearance");
    const okButton = document.querySelector(".k-toast-footer .k-btn")!;
    expect(okButton.classList.contains("k-btn-sm")).toBe(true);
    expect(okButton.classList.contains("k-btn-plain")).toBe(true);
  });

  it("routes the dialog through the configured popup container", async () => {
    const host = document.createElement("div");
    host.className = "imperative-host";
    document.body.appendChild(host);
    providerWrappers.push(
      mount(ConfigProvider, {
        props: { getPopupContainer: () => host },
        slots: { default: () => h("span") },
      }),
    );
    await openInfo("Container");
    expect(host.querySelector(".k-modal-wrap")).not.toBeNull();
  });

  it("stops inheriting once the provider unmounts", async () => {
    const wrapper = mount(ConfigProvider, {
      props: { locale: zhCN },
      slots: { default: () => h("span") },
    });
    wrapper.unmount();
    await openInfo("After unmount");
    // 登记的中文配置随 Provider 一起失效，回到库级默认（英文），而不是停在"确定"。
    expect(okLabel()).toBe("Ok");
  });

  it("only registers the outermost provider", async () => {
    // 嵌套 Provider 改的是自己子树的口径，命令式 API 服务的是根上那份配置。
    const innerTheme = ref("plain" as "plain" | "outline");
    providerWrappers.push(
      mount(ConfigProvider, {
        props: { locale: en },
        slots: {
          default: () =>
            h(ConfigProvider, { locale: zhCN, theme: innerTheme.value }, () => h("span")),
        },
      }),
    );
    await openInfo("Nested");
    expect(okLabel()).toBe("Ok");

    innerTheme.value = "outline";
    await nextTick();
    await nextTick();
    expect(okLabel()).toBe("Ok");
  });
});
