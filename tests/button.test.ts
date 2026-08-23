import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { Button } from "../components/button";

describe("Button themes", () => {
  it("combines a preset color with the plain theme", () => {
    const wrapper = mount(Button, { props: { color: "red", theme: "plain" }, slots: { default: "Close" } });
    expect(wrapper.classes()).toEqual(expect.arrayContaining(["k-btn", "k-btn-red", "k-btn-plain"]));
  });

  it("combines semantic types with the plain theme", () => {
    const wrapper = mount(Button, { props: { type: "danger", theme: "plain" }, slots: { default: "Delete" } });
    expect(wrapper.classes()).toEqual(expect.arrayContaining(["k-btn-danger", "k-btn-plain"]));
  });
});
