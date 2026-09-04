import { mount } from "@vue/test-utils";
import { h } from "vue";
import { describe, expect, it, vi } from "vitest";
import { Avatar, AvatarGroup } from "../components/avatar";

describe("Avatar", () => {
  it("falls back to the default icon after an image error", async () => {
    const wrapper = mount(Avatar, { props: { src: "/missing.png", alt: "User" } });

    expect(wrapper.find("img").attributes("alt")).toBe("User");
    await wrapper.find("img").trigger("error");

    expect(wrapper.find("img").exists()).toBe(false);
    expect(wrapper.classes()).toContain("k-avatar-icon");
    expect(wrapper.find(".k-icon").exists()).toBe(true);
  });

  it("keeps the failed image when onError returns false", async () => {
    const onError = vi.fn(() => false);
    const wrapper = mount(Avatar, { props: { src: "/missing.png", onError } });

    await wrapper.find("img").trigger("error");

    expect(onError).toHaveBeenCalledOnce();
    expect(wrapper.find("img").exists()).toBe(true);
  });

  it("applies group shape, size, spacing, and overflow count", () => {
    const wrapper = mount(AvatarGroup, {
      props: { shape: "round", size: "small", spacing: 0, maxCount: 1 },
      slots: { default: () => [h(Avatar, null, () => "A"), h(Avatar, null, () => "B")] },
    });

    const avatars = wrapper.findAll(".k-avatar");
    expect(avatars).toHaveLength(2);
    expect(avatars[0].classes()).toEqual(expect.arrayContaining(["k-avatar-round", "k-avatar-sm"]));
    expect(avatars[1].text()).toBe("+1");
    expect(wrapper.attributes("style")).toContain("--kui-avatar-group-overlap: -0px");
  });
});
