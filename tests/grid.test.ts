import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { h, nextTick } from "vue";
import { Grid, GridItem } from "../components/grid";

describe("Grid", () => {
  it("resolves responsive values from the container width", async () => {
    const wrapper = mount(Grid, {
      props: {
        cols: { xs: 1, md: 4 },
        xGap: { xs: 8, md: 16 },
        itemMinWidth: undefined,
      },
    });
    await nextTick();

    const style = wrapper.attributes("style");
    expect(style).toContain("grid-template-columns: repeat(1, minmax(0, 1fr))");
    expect(style).toContain("column-gap: 8px");
  });

  it("generates valid placement for spans, suffix, and explicit lines", () => {
    const wrapper = mount(Grid, {
      props: { cols: 6 },
      slots: {
        default: () => [
          h(GridItem, { span: 2 }),
          h(GridItem, { span: 2, suffix: true }),
          h(GridItem, { span: 2, rowSpan: 2, columnStart: 3, rowStart: 2 }),
        ],
      },
    });
    const items = wrapper.findAll(".k-grid-item");

    expect(items[0].attributes("style")).toContain("grid-column: span 2");
    expect(items[1].attributes("style")).toContain("grid-column: -3 / -1");
    expect(items[2].attributes("style")).toContain("grid-column: 3 / span 2");
    expect(items[2].attributes("style")).toContain("grid-row: 2 / span 2");
  });

  it("keeps auto-fill items inside narrow containers", () => {
    const wrapper = mount(Grid, { props: { itemMinWidth: "18rem" } });

    expect(wrapper.attributes("style")).toContain(
      "grid-template-columns: repeat(auto-fill, minmax(min(100%, 18rem), 1fr))",
    );
  });
});
