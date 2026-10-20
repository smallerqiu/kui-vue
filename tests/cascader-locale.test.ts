import { mount } from "@vue/test-utils";
import { h } from "vue";
import { describe, expect, it } from "vitest";
import Cascader from "../components/cascader";
import ConfigProvider from "../components/config";
import { Select } from "../components/select";
import en from "../components/locale/en";
import zhCN from "../components/locale/zh-CN";
import type { CascaderOption } from "../components/cascader/types";

const options: CascaderOption[] = [{ label: "Zhejiang", value: "zhejiang" }];

/** 只改 `k.select.placeholder`，用来证明级联读的是选择框家族那一条文案，而不是自己写死的 */
const withPlaceholderText = (locale: typeof en, text: string) => ({
  ...locale,
  k: { ...locale.k, select: { ...locale.k.select, placeholder: text } },
});

const mountCascader = (locale: typeof en, props: Record<string, unknown> = {}) =>
  mount(ConfigProvider, {
    props: { locale },
    attachTo: document.body,
    slots: {
      default: () => h(Cascader, { options, ...props } as never),
    },
  });

describe("Cascader locale", () => {
  it("follows the language instead of a hardcoded hint", async () => {
    const wrapper = mountCascader(en);

    expect(wrapper.get(".k-cascader-placeholder").text()).toBe("Select");

    await wrapper.setProps({ locale: zhCN });
    expect(wrapper.get(".k-cascader-placeholder").text()).toBe("请选择");
    wrapper.unmount();
  });

  it("shares k.select.placeholder with the other selector controls", () => {
    const wrapper = mount(ConfigProvider, {
      props: { locale: withPlaceholderText(en, "PICK ONE") },
      attachTo: document.body,
      slots: {
        default: () => [h(Cascader, { options }), h(Select, { options: [] })],
      },
    });

    expect(wrapper.get(".k-cascader-placeholder").text()).toBe("PICK ONE");
    expect(wrapper.get(".k-select-placeholder").text()).toBe("PICK ONE");
    wrapper.unmount();
  });

  it("keeps an explicit placeholder above the locale", () => {
    const wrapper = mountCascader(zhCN, { placeholder: "Choose a region" });

    expect(wrapper.get(".k-cascader-placeholder").text()).toBe("Choose a region");
    wrapper.unmount();
  });
});
