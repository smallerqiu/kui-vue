// 3c-丙a mirror of kui-react's tests/theme-surface-tiers.test.tsx: the surface family — `Card`,
// `FeatureCard` and `StatCard` — resolves its tier through `resolvePaintedTheme` and puts it straight on
// the root class, so unlike Button its own look *is* a tier class (`fill`). That makes the contract
// "an unsupported tier lands on `fill`, the same DOM as a card with no `theme` written", not Button's
// "an unsupported tier emits nothing": `k-card-fill` is the component's own appearance, so falling back
// to it is what keeps the promise. `underlined` is the tier none of them paint — "keep only the bottom
// border" on a box deletes three of its four sides, which is not an appearance preset (theme 口径
// §五.1) — and `StatCard` used to type three tiers while `Card` and `FeatureCard` typed all six and
// shipped `k-card-solid` as a class no rule answered.
// 3c-丙b adds the two panels of the same family, `Collapse` and `FeedbackPanel`. They resolve the same
// way but their own look is `outline`, not `fill`, and `FeedbackPanel` used to spell its tier class
// `k-feedback-panel-theme-<tier>` while also shipping `k-feedback-panel-solid` / `-dashed` as classes no
// rule answered.
// The style half — what each tier actually draws — is in tests/theme-variants.test.ts and the pixels in
// scripts/check-theme.ts.
import { mount } from "@vue/test-utils";
import { h } from "vue";
import { describe, expect, it } from "vitest";
import Card from "../components/card";
import Collapse, { CollapsePanel } from "../components/collapse";
import ConfigProvider from "../components/config";
import FeatureCard from "../components/feature-card";
import FeedbackPanel from "../components/feedback-panel";
import StatCard from "../components/stat-card/stat-card";

const TIERS = ["fill", "outline", "plain", "solid", "dashed", "underlined"] as const;
const PAINTED = TIERS.filter((tier) => tier !== "underlined");
const UNSUPPORTED = ["underlined"] as const;

const SURFACES = [
  { name: "Card", prefix: "k-card", fallback: "fill", component: Card, props: {} },
  {
    name: "FeatureCard",
    prefix: "k-feature-card",
    fallback: "fill",
    component: FeatureCard,
    props: { title: "标题" },
  },
  {
    name: "StatCard",
    prefix: "k-stat-card",
    fallback: "fill",
    component: StatCard,
    props: { title: "统计" },
  },
  {
    name: "Collapse",
    prefix: "k-collapse",
    fallback: "outline",
    component: Collapse,
    props: {},
  },
  {
    name: "FeedbackPanel",
    prefix: "k-feedback-panel",
    fallback: "outline",
    component: FeedbackPanel,
    props: {},
  },
] as const;

const rootClasses = (surface: (typeof SURFACES)[number], props: Record<string, unknown> = {}) =>
  Array.from(
    mount(surface.component, {
      attachTo: document.body,
      props: { ...surface.props, ...props },
    }).classes(),
  );

// Only the six tier spellings count here: `-bordered`, `-round` and `-small` are the flags, shape and
// size, and `-default` is the round shape spelling, not a tier.
const tierClasses = (surface: (typeof SURFACES)[number], classes: string[]) =>
  classes.filter((cls) => TIERS.some((tier) => cls === `${surface.prefix}-${tier}`));

for (const surface of SURFACES) {
  describe(`${surface.name} ships only the tiers its own LESS paints`, () => {
    for (const tier of PAINTED) {
      it(`theme="${tier}" reaches ${surface.prefix}-${tier}`, () => {
        expect(tierClasses(surface, rootClasses(surface, { theme: tier }))).toEqual([
          `${surface.prefix}-${tier}`,
        ]);
      });
    }

    // The fallback is the component's own default tier, so the DOM has to be identical to never writing
    // `theme` at all — that is the only spelling left for "listen to the component" now that `default`
    // is gone from `ThemeType`.
    for (const tier of UNSUPPORTED) {
      it(`theme="${tier}" lands on the tier a ${surface.name} with no theme gets`, () => {
        expect(rootClasses(surface, { theme: tier })).toEqual(rootClasses(surface));
        expect(tierClasses(surface, rootClasses(surface, { theme: tier }))).toEqual([
          `${surface.prefix}-${surface.fallback}`,
        ]);
      });
    }

    // Guarded after inheritance, not only on the written attribute. In Vue that ordering is visible in
    // the DOM as well as in the source: `useConfigAppearance` reads the provider whenever the caller did
    // not write the attribute, so a provider that asks for a tier this component does not paint has to
    // land on the component's own default too — and the prop's own `default` must not shadow it.
    const withProvider = (tier?: (typeof TIERS)[number]) =>
      tierClasses(
        surface,
        Array.from(
          mount(ConfigProvider, {
            attachTo: document.body,
            props: { theme: tier },
            slots: { default: () => h(surface.component, { ...surface.props }) },
          }).find(`.${surface.prefix}`).element.classList,
        ),
      );

    for (const tier of UNSUPPORTED)
      it(`ConfigProvider theme="${tier}" lands on ${surface.prefix}-${surface.fallback}`, () => {
        expect(withProvider(tier)).toEqual(withProvider());
        expect(withProvider(tier)).toEqual([`${surface.prefix}-${surface.fallback}`]);
      });

    it("a painted tier still comes down from the provider", () => {
      expect(withProvider("solid")).toEqual([`${surface.prefix}-solid`]);
    });

    // A written attribute beats the provider, and it goes through the same guard.
    it(`theme="outline" on the component beats ConfigProvider theme="solid"`, () => {
      expect(
        tierClasses(
          surface,
          Array.from(
            mount(ConfigProvider, {
              attachTo: document.body,
              props: { theme: "solid" },
              slots: {
                default: () => h(surface.component, { ...surface.props, theme: "outline" }),
              },
            }).find(`.${surface.prefix}`).element.classList,
          ),
        ),
      ).toEqual([`${surface.prefix}-outline`]);
    });
  });
}

// `solid` is the one tier that repaints the whole box, so a tier class alone is not the contract: the
// DOM of a solid surface keeps every part of the card the caller put in it.
describe("a solid surface keeps its content and its other classes", () => {
  it("keeps the head, the extra and the body of a Card", () => {
    const wrapper = mount(Card, {
      attachTo: document.body,
      props: { theme: "solid", title: "标题" },
      slots: { extra: () => h("span", "更多"), default: () => h("span", "内容") },
    });
    expect(wrapper.find(".k-card-head").exists()).toBe(true);
    expect(wrapper.find(".k-card-title").text()).toBe("标题");
    expect(wrapper.find(".k-card-extra").text()).toBe("更多");
    expect(wrapper.find(".k-card-body").text()).toBe("内容");
  });

  it("keeps the icon chip and the description of a FeatureCard", () => {
    const wrapper = mount(FeatureCard, {
      attachTo: document.body,
      props: { theme: "solid", icon: ["search"], title: "标题", desc: "描述" },
    });
    expect(wrapper.find(".k-feature-card-icon").exists()).toBe(true);
    expect(wrapper.find(".k-feature-card-desc").text()).toBe("描述");
  });

  it("keeps the muted lines of a StatCard, and a trend that carries a semantic colour", () => {
    const wrapper = mount(StatCard, {
      attachTo: document.body,
      props: {
        theme: "solid",
        items: [
          { value: 12, desc: "今日", trend: "+18.2% 较上月", trendStatus: "success" },
          { value: 8, desc: "昨日", trend: "持平", trendStatus: "default" },
        ],
      },
    });
    expect(wrapper.findAll(".k-stat-card-item-desc").map((node) => node.text())).toEqual([
      "今日",
      "昨日",
    ]);
    expect(wrapper.find(".k-stat-card-item-trend-success").exists()).toBe(true);
    // `trendStatus="default"` is the muted trend the solid tier has to invert; a semantic trend keeps
    // its own colour, which is what the `:not()` chain in `.k-stat-card-solid` is for.
    expect(wrapper.find(".k-stat-card-item-trend-default").exists()).toBe(true);
  });

  it("keeps every panel of a Collapse", () => {
    const wrapper = mount(Collapse, {
      attachTo: document.body,
      props: { theme: "solid", openKeys: ["two"] },
      slots: {
        default: () => [
          h(CollapsePanel, { key: "one", title: "面板一" }, () => "内容一"),
          h(
            CollapsePanel,
            { key: "two", title: "面板二" },
            { default: () => "内容二", extra: () => h("span", "更多") },
          ),
        ],
      },
    });
    expect(wrapper.findAll(".k-collapse-item")).toHaveLength(2);
    expect(wrapper.findAll(".k-collapse-title").map((node) => node.text())).toEqual([
      "面板一",
      "面板二",
    ]);
    expect(wrapper.find(".k-collapse-item-active").exists()).toBe(true);
    expect(wrapper.find(".k-collapse-extra").text()).toBe("更多");
    expect(wrapper.find(".k-collapse-content-box").text()).toBe("内容二");
  });

  it("keeps the mark, the heading, the details and the actions of a FeedbackPanel", () => {
    const wrapper = mount(FeedbackPanel, {
      attachTo: document.body,
      props: { kind: "caution", theme: "solid", heading: "标题", description: "描述" },
      slots: {
        default: () => h("span", "详情"),
        actions: () => h("button", { type: "button" }, "重试"),
      },
    });
    expect(wrapper.find(".k-feedback-panel-mark-inner").exists()).toBe(true);
    expect(wrapper.find(".k-feedback-panel-heading").text()).toBe("标题");
    expect(wrapper.find(".k-feedback-panel-description").text()).toBe("描述");
    expect(wrapper.find(".k-feedback-panel-details").text()).toBe("详情");
    expect(wrapper.find(".k-feedback-panel-actions").text()).toBe("重试");
    // The kind is the panel's message, not its surface, so it survives the tier — it is what the 4px
    // stripe and the mark chip are coloured from.
    expect(wrapper.find(".k-feedback-panel-caution").exists()).toBe(true);
  });
});

// 3c-丙b: `FeedbackPanel` used to spell its tier class `k-feedback-panel-theme-<tier>`. The infix is
// gone so every surface in the library answers `<prefix>-<tier>`, which is the spelling the shared
// style contract and the pixel checks read — a second spelling would let a tier go unpainted again.
describe("a feedback panel names its tier like every other surface", () => {
  const panel = SURFACES.find((surface) => surface.name === "FeedbackPanel")!;
  for (const tier of TIERS)
    it(`theme="${tier}" never emits the -theme- infix`, () => {
      const classes = Array.from(
        mount(FeedbackPanel, { attachTo: document.body, props: { theme: tier } }).classes(),
      );
      expect(classes.some((cls) => cls.includes("-theme-"))).toBe(false);
      expect(tierClasses(panel, classes)).toEqual([
        `k-feedback-panel-${tier === "underlined" ? panel.fallback : tier}`,
      ]);
    });
});

// A tier class shares the root with the component's own flags, and `Collapse` has one that changes the
// whole shape of the box: `sample` is the documented frame-less spelling, so the tier has to land
// beside it without deciding the frame for it.
describe("a tier lands beside the flags of a Collapse", () => {
  it("keeps sample and shape alongside theme", () => {
    const classes = Array.from(
      mount(Collapse, {
        attachTo: document.body,
        props: { theme: "solid", sample: true, shape: "square" },
      }).classes(),
    );
    expect(classes).toContain("k-collapse-solid");
    expect(classes).toContain("k-collapse-sample");
    expect(classes).toContain("k-collapse-square");
  });
});
