import { mount } from "@vue/test-utils";
import { h, isRef, type Ref } from "vue";
import { describe, expect, it } from "vitest";
import Alert from "../components/alert";
import { Button } from "../components/button";
import Card from "../components/card";
import ConfigProvider from "../components/config";
import { getAppContext } from "../components/config/context";
import en from "../components/locale/en";
import zhCN from "../components/locale/zh-CN";
import { Select } from "../components/select";
import Table from "../components/table";
import Tag from "../components/tag";

describe("ConfigProvider appearance", () => {
  it("reactively updates descendant locale text", async () => {
    const wrapper = mount(ConfigProvider, {
      props: { locale: zhCN },
      slots: { default: () => h(Select, { options: [] }) },
    });

    expect(wrapper.get(".k-select-placeholder").text()).toBe("请选择");
    await wrapper.setProps({ locale: en });
    expect(wrapper.get(".k-select-placeholder").text()).toBe("Select");
    wrapper.unmount();
  });

  it("keeps nested locale configuration out of the global programmatic context", () => {
    const wrapper = mount(ConfigProvider, {
      props: { locale: zhCN },
      slots: {
        default: () => h(ConfigProvider, { locale: en }, () => h(Button, () => "Nested")),
      },
    });
    const locale = getAppContext()?.provides.locale as Ref<typeof zhCN> | undefined;

    expect(isRef(locale)).toBe(true);
    expect(locale?.value.name).toBe("zh-cn");
    expect(wrapper.vm.$.appContext.provides.locale).toBeUndefined();
    wrapper.unmount();
    expect(getAppContext()).toBeNull();
  });

  it("provides appearance defaults to independent components without overriding local props", () => {
    const wrapper = mount(ConfigProvider, {
      props: { size: "small", theme: "outline", shape: "square" },
      slots: {
        default: () => [
          h(Button, { class: "global-button" }, () => "Global"),
          h(
            Button,
            { class: "local-button", size: "large", shape: "circle", theme: "fill" },
            () => "Local",
          ),
          h(Tag, { class: "global-tag" }, () => "Tag"),
          h(Card, { class: "global-card" }),
          h(ConfigProvider, { shape: "circle" }, () => h(Card, { class: "circle-card" })),
          h(Alert, { class: "global-alert" }),
        ],
      },
    });

    expect(wrapper.get(".global-button").classes()).toEqual(
      expect.arrayContaining(["k-btn-sm", "k-btn-square", "k-btn-outline"]),
    );
    expect(wrapper.get(".local-button").classes()).toEqual(
      expect.arrayContaining(["k-btn-lg", "k-btn-circle", "k-btn-fill"]),
    );
    expect(wrapper.get(".k-tag").classes()).toEqual(
      expect.arrayContaining(["k-tag-sm", "k-tag-square", "k-tag-outline"]),
    );
    expect(wrapper.get(".global-card").classes()).toEqual(
      expect.arrayContaining(["k-card-small", "k-card-square", "k-card-outline"]),
    );
    expect(wrapper.get(".circle-card").classes()).toContain("k-card-round");
    expect(wrapper.get(".circle-card").classes()).not.toContain("k-card-circle");
    expect(wrapper.get(".k-alert").classes()).toEqual(
      expect.arrayContaining(["k-alert-shape-square", "k-alert-theme-outline"]),
    );
    wrapper.unmount();
  });

  it("reactively updates appearance and normalizes circle for data surfaces", async () => {
    const wrapper = mount(ConfigProvider, {
      props: { size: "small", theme: "outline", shape: "square" },
      slots: {
        default: () => [
          h(Button, { class: "reactive-button" }, () => "Button"),
          h(Table, { class: "reactive-table", columns: [], data: [] }),
        ],
      },
    });

    await wrapper.setProps({ size: "large", theme: "plain", shape: "circle" });
    expect(wrapper.get(".reactive-button").classes()).toEqual(
      expect.arrayContaining(["k-btn-lg", "k-btn-plain", "k-btn-circle"]),
    );
    expect(wrapper.get(".reactive-table").classes()).toContain("k-table-round");
    expect(wrapper.get(".reactive-table").classes()).not.toContain("k-table-circle");
    wrapper.unmount();
  });
});
