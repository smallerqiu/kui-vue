import { mount } from "@vue/test-utils";
import { afterEach, expect, it, vi } from "vitest";
import Badge from "../components/badge";
import StatNumber from "../components/stat-card/stat-number";

afterEach(() => vi.useRealTimers());

it("uses continuous tracks for large StatNumber updates but short tracks for Badge", async () => {
  vi.useFakeTimers();
  const number = mount(StatNumber, {
    props: { modelValue: 12345, type: "rollup", duration: 0.3, autoAnimate: false },
  });
  const badge = mount(Badge, { props: { count: 12345, maxCount: 99999 } });
  await vi.advanceTimersByTimeAsync(400);
  await number.setProps({ modelValue: 54321 });
  await badge.setProps({ count: 54321 });
  const tracks = number.findAll(".odometer-track");
  expect(tracks).toHaveLength(4);
  expect(tracks[0].text()).toBe("12345");
  for (const track of badge.findAll(".odometer-track"))
    expect(track.element.children).toHaveLength(2);
  await vi.advanceTimersByTimeAsync(400);
  expect(number.text()).toBe("54,321");
  expect(badge.text()).toBe("54321");
  number.unmount();
  badge.unmount();
});

it("Badge rolls numeric changes and preserves capped/text/dot counts", async () => {
  vi.useFakeTimers();
  const wrapper = mount(Badge, { props: { count: 9 } });
  expect(wrapper.text()).toBe("9");
  await wrapper.setProps({ count: 10 });
  expect(wrapper.find('[data-direction="up"]').exists()).toBe(true);
  await wrapper.setProps({ count: 8 });
  expect(wrapper.find('[data-direction="down"]').exists()).toBe(true);
  await vi.advanceTimersByTimeAsync(400);
  expect(wrapper.text()).toBe("8");
  await wrapper.setProps({ count: 100 });
  expect(wrapper.text()).toBe("99+");
  expect(wrapper.find(".odometer-numbers").exists()).toBe(false);
  await wrapper.setProps({ count: "New" });
  expect(wrapper.text()).toBe("New");
  await wrapper.setProps({ count: 8, dot: true });
  expect(wrapper.find(".k-badge-count").exists()).toBe(false);
  await wrapper.setProps({ count: 0, dot: false });
  expect(wrapper.find("sup").exists()).toBe(false);
  wrapper.unmount();
  expect(vi.getTimerCount()).toBe(0);
});

it("StatNumber rollup uses the same increasing/decreasing direction", async () => {
  vi.useFakeTimers();
  const wrapper = mount(StatNumber, {
    props: { modelValue: 9, type: "rollup", duration: 0.3, autoAnimate: false },
  });
  await vi.advanceTimersByTimeAsync(400);
  await wrapper.setProps({ modelValue: 10 });
  expect(wrapper.find('[data-direction="up"]').exists()).toBe(true);
  await vi.advanceTimersByTimeAsync(400);
  await wrapper.setProps({ modelValue: 9 });
  expect(wrapper.find('[data-direction="down"]').exists()).toBe(true);
  await vi.advanceTimersByTimeAsync(400);
  expect(wrapper.text()).toBe("9");
  wrapper.unmount();
  expect(vi.getTimerCount()).toBe(0);
});
