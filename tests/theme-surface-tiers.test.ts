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
// 3c-丙c adds the last surface of this family, `CheckCard`, which typed its tier as a private
// `"outline" | "fill"` union while a `ConfigProvider` could still hand it any of the six. In Vue the
// same narrowing sat in two more places: the prop carried `default: "outline"`, and the group answered
// any tier outside its own two with that default instead of forwarding it — so a `theme="solid"` above
// a group never reached the cards inside it.
// 3c-丁a adds `Alert`, the one surface of this family whose plate is not a neutral token: the tint comes
// from `type`, so `fill` paints that tint and `solid` paints the same colour at full strength rather than
// the library primary — an error block and a success block have to stay two different blocks. Its
// stylesheet answered only `outline` and `plain`, spelled `k-alert-theme-<tier>` behind an infix no other
// surface has, so the documented default `theme="fill"` shipped a class nothing painted.
// The style half — what each tier actually draws — is in tests/theme-variants.test.ts and the pixels in
// scripts/check-theme.ts.
import { mount } from "@vue/test-utils";
import { h } from "vue";
import { describe, expect, it, vi } from "vitest";
import Alert from "../components/alert";
import Card from "../components/card";
import { CheckCard, CheckCardGroup } from "../components/check-card";
import Collapse, { CollapsePanel } from "../components/collapse";
import ConfigProvider from "../components/config";
import FeatureCard from "../components/feature-card";
import FeedbackPanel from "../components/feedback-panel";
import { Image } from "../components/image";
import QRCode from "../components/qrcode";
import StatCard from "../components/stat-card/stat-card";

// `QRCode` paints into a canvas the moment it mounts, and jsdom hands back no 2d context; these cases
// only read the class list, so the encoder is stubbed instead of left to throw inside the component's
// own `try`.
vi.mock("qrcode", () => ({ toCanvas: vi.fn(async () => {}) }));

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
  // 3c-丙c: a check card resolves the same way, and its own look is the outlined frame too.
  {
    name: "CheckCard",
    prefix: "k-check-card",
    fallback: "outline",
    component: CheckCard,
    props: { title: "选项", description: "描述" },
  },
  // 3c-丁a: an alert resolves the same way again, and its own look is the tinted plate `fill`.
  {
    name: "Alert",
    prefix: "k-alert",
    fallback: "fill",
    component: Alert,
    props: { type: "info", message: "提示" },
  },
  // 3c-丁b: an image is a frame around a picture and a code is a frame around a canvas, so both paint
  // the whole ring — and both used to type six tiers while their stylesheets drew three. `outline` on an
  // image set a colour on an edge that `base.less` gives no width, so it painted nothing, and `plain` on
  // a code deleted the 12px ring the caller never asked to lose. In Vue a code also read `props.theme`
  // straight, so nothing from the provider could reach it. An image's own look is `plain`, a code's is
  // the outlined frame.
  { name: "Image", prefix: "k-image", fallback: "plain", component: Image, props: {} },
  {
    name: "QRCode",
    prefix: "k-qrcode",
    fallback: "outline",
    component: QRCode,
    props: { value: "https://example.com" },
  },
] as const;

// `Alert` renders inside a `Transition`, and vue-test-utils reads the classes of an abstract node, not of
// the element the transition paints — so every surface here is read off the element that actually carries
// the component's own class. For the others that element is the root, so the contract is unchanged.
const rootClasses = (surface: (typeof SURFACES)[number], props: Record<string, unknown> = {}) =>
  Array.from(
    mount(surface.component, {
      attachTo: document.body,
      props: { ...surface.props, ...props },
    }).find(`.${surface.prefix}`).element.classList,
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

// 3c-丙c: a check card is the one surface of this family that a group can render for the caller, so its
// tier has to survive three asks — the card's own attribute, the group it sits in, and the provider
// above the group. The group owns no tier class, so it forwards and never answers.
describe("a check card takes its tier from whoever asks for it", () => {
  const card = SURFACES.find((surface) => surface.name === "CheckCard")!;
  const options = [
    { value: "a", title: "选项一" },
    { value: "b", title: "选项二" },
  ];

  const tiersInsideGroup = (props: Record<string, unknown>) =>
    mount(CheckCardGroup, {
      attachTo: document.body,
      props: { modelValue: "a", options, ...props },
    })
      .findAll(".k-check-card")
      .map((node) => tierClasses(card, Array.from(node.element.classList)));

  it("a group forwards its tier to every card it renders", () => {
    expect(tiersInsideGroup({ theme: "solid" })).toEqual([
      [`${card.prefix}-solid`],
      [`${card.prefix}-solid`],
    ]);
  });

  // An unsupported tier is answered by the card's own fallback, and the group root must not grow a tier
  // class of its own on the way — before this, the group answered it with `props.theme` instead.
  it("a group hands an unpainted tier down to the card's fallback", () => {
    const wrapper = mount(CheckCardGroup, {
      attachTo: document.body,
      props: { modelValue: "a", theme: "underlined", options },
    });
    expect(
      wrapper
        .findAll(".k-check-card")
        .map((node) => tierClasses(card, Array.from(node.element.classList))),
    ).toEqual([[`${card.prefix}-outline`], [`${card.prefix}-outline`]]);
    expect(
      tierClasses(card, Array.from(wrapper.find(".k-check-card-group").element.classList)),
    ).toEqual([]);
  });

  // Written on the card is the stronger spelling: the group's value only fills in what the card left
  // out, which is the order Vue could not read while the prop carried its own default.
  it("a theme written on the card beats the group", () => {
    const wrapper = mount(CheckCardGroup, {
      attachTo: document.body,
      props: { modelValue: "a", theme: "fill" },
      slots: { default: () => h(CheckCard, { value: "a", theme: "solid", title: "选项一" }) },
    });
    expect(tierClasses(card, Array.from(wrapper.find(".k-check-card").element.classList))).toEqual([
      `${card.prefix}-solid`,
    ]);
  });

  // The checked marks are the state this component exists to show, so `solid` has to keep them legible
  // instead of painting them the plate's own colour; both classes share the root to do it.
  it("keeps the checked state beside a solid tier", () => {
    const wrapper = mount(CheckCard, {
      attachTo: document.body,
      props: { theme: "solid", checked: true, title: "选项", description: "描述" },
    });
    const classes = Array.from(wrapper.classes());
    expect(classes).toContain(`${card.prefix}-solid`);
    expect(classes).toContain("is-checked");
    expect(wrapper.find(".k-check-card-indicator").exists()).toBe(true);
    expect(wrapper.find(".k-check-card-title").text()).toBe("选项");
    expect(wrapper.find(".k-check-card-description").text()).toBe("描述");
  });

  it("lands beside the size and shape flags of a card", () => {
    const classes = rootClasses(card, { theme: "dashed", size: "small", shape: "square" });
    expect(classes).toContain(`${card.prefix}-dashed`);
    expect(classes).toContain(`${card.prefix}-small`);
    expect(classes).toContain(`${card.prefix}-square`);
  });
});

// 3c-丁a: `Alert` spelled its tier class `k-alert-theme-<tier>` while every other surface answered
// `<prefix>-<tier>`, which is how `fill` — the documented default — and `solid` / `dashed` went unpainted.
// The infix is gone, so an alert resolves like the rest of the family: five painted tiers, and
// `underlined` landing on `fill`, the tinted plate it ships with.
const alert = SURFACES.find((surface) => surface.name === "Alert")!;
const alertClasses = (props: Record<string, unknown> = {}) =>
  Array.from(
    mount(Alert, {
      attachTo: document.body,
      props: { type: "info", message: "提示", ...props },
    }).find(".k-alert").element.classList,
  );

describe("an alert names its tier like every other surface", () => {
  for (const tier of TIERS)
    it(`theme="${tier}" never emits the -theme- infix`, () => {
      const classes = alertClasses({ theme: tier });
      expect(classes.some((cls) => cls.includes("-theme-"))).toBe(false);
      expect(tierClasses(alert, classes)).toEqual([
        `k-alert-${tier === "underlined" ? alert.fallback : tier}`,
      ]);
    });

  // `bordered` is the frame flag and `shape` is the corner, so both keep their own class beside the tier.
  it("lands beside the bordered flag and the shape", () => {
    const classes = alertClasses({ theme: "outline", bordered: true, shape: "square" });
    expect(classes).toContain("k-alert-outline");
    expect(classes).toContain("k-alert-bordered");
    expect(classes).toContain("k-alert-shape-square");
  });
});

// `type` is the alert's message and the plate is drawn from it, so no tier may drop the type class — and
// `solid` in particular has to keep four parts of its own legible on a saturated plate.
describe("a solid alert keeps its type and everything it paints", () => {
  for (const type of ["info", "success", "warning", "error"] as const)
    it(`theme="solid" keeps type="${type}"`, () => {
      const classes = alertClasses({ type, theme: "solid" });
      expect(classes).toContain(`k-alert-${type}`);
      expect(tierClasses(alert, classes)).toEqual(["k-alert-solid"]);
    });

  it("keeps the mark, the message, the description and the close button", () => {
    const wrapper = mount(Alert, {
      attachTo: document.body,
      props: {
        type: "warning",
        theme: "solid",
        message: "标题",
        description: "描述",
        closable: true,
        showIcon: true,
        icon: ["warning"],
      },
    });
    expect(wrapper.find(".k-alert-message").text()).toBe("标题");
    expect(wrapper.find(".k-alert-description").text()).toBe("描述");
    expect(wrapper.find(".k-alert-icon").exists()).toBe(true);
    expect(wrapper.find(".k-alert-close").exists()).toBe(true);
    expect(Array.from(wrapper.find(".k-alert").element.classList)).toContain(
      "k-alert-has-description",
    );
  });
});
