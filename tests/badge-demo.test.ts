import { mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import { Badge, Button, ButtonGroup, Divider, Icon, Space, Switch } from "../components";
import DynamicDemo from "../components/badge/demo/dynamic.vue";

it("keeps the dynamic demo switch in sync with all three dot badges", async () => {
  const wrapper = mount(DynamicDemo, {
    global: { components: { Badge, Button, ButtonGroup, Divider, Icon, Space, Switch } },
  });
  try {
    const toggle = wrapper.findComponent(Switch);
    expect(toggle.props("modelValue")).toBe(true);
    expect(
      wrapper
        .findAllComponents(Badge)
        .slice(0, 3)
        .every((badge) => badge.props("dot")),
    ).toBe(true);
    await toggle.trigger("click");
    expect(toggle.props("modelValue")).toBe(false);
    expect(
      wrapper
        .findAllComponents(Badge)
        .slice(0, 3)
        .every((badge) => !badge.props("dot")),
    ).toBe(true);
    await toggle.trigger("click");
    expect(toggle.props("modelValue")).toBe(true);
    expect(
      wrapper
        .findAllComponents(Badge)
        .slice(0, 3)
        .every((badge) => badge.props("dot")),
    ).toBe(true);
  } finally {
    wrapper.unmount();
  }
});
