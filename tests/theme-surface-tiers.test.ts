// mirror of kui-react's tests/theme-surface-tiers.test.tsx: the surface family — `Card`,
// `FeatureCard`, `StatCard`, `Collapse`, `FeedbackPanel`, `CheckCard`, `Alert`, `Image`, `QRCode`,
// `Page`, `Kanban`, `Transfer`, `ListPanel` — resolves its tier through `resolvePaintedTheme` and
// puts the answer on the root class, so unlike `Button` its own look *is* a tier class. That makes the
// contract here "an unsupported tier lands on the appearance the component was built to look like" —
// the same DOM as one with no `theme` written — and not Button's "an unsupported tier emits nothing".
// Three shapes make that worth testing rather than obvious:
//   * No surface paints `underlined`. "Keep only the bottom border" on a box deletes three of its four
//     sides, which is not an appearance preset, so a tier list that includes it has to resolve it away
//     instead of shipping a class no rule answers. The same reasoning keeps every surface's tier class
//     spelled `<prefix>-<tier>`: an infix like `-theme-` is a second spelling the shared style contract
//     and the pixel checks would have to keep up with, and a tier that goes by it can go unpainted.
//   * Several components type `theme` with tiers their own stylesheet does not paint, and
//     `ConfigProvider` / `Form` can hand any of the six to any of them, so the guard has to run even
//     where the type says the value is safe. Where it does, each component resolves to the frame or
//     plate it is built with: `Card`, `FeatureCard`, `StatCard`, `Alert`, `Page` and `Kanban` fill,
//     `Collapse`, `FeedbackPanel`, `CheckCard`, `QRCode`, `Transfer` and `ListPanel` outline, and an
//     image is `plain`. An image or a code that typed all six would set a colour on an edge
//     `base.less` gives no width, or delete a 12px ring the caller never asked to lose.
//   * `ListPanel` paints through the `Card` it renders. Because the panel is that card's caller it
//     resolves the tier itself, so an unsupported one lands on the outlined card the panel was built
//     to look like, not on the card's own `fill`.
//   * Here inheritance can also be stopped at the component: a `default` written in the prop
//     definition and a hand-written gate that re-reads `props.theme` both answer for a tier the caller
//     never wrote. `useConfigAppearance` resolves before a prop `default` is consulted, so that
//     default shadows nothing above it — but a component that reads `props.theme` itself never sees
//     the provider.
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
import Kanban from "../components/kanban";
import ListPanel from "../components/list-panel";
import Page from "../components/page";
import QRCode from "../components/qrcode";
import StatCard from "../components/stat-card/stat-card";
import Transfer from "../components/transfer";

// `QRCode` paints into a canvas the moment it mounts, and jsdom hands back no 2d context; these cases
// only read the class list, so the encoder is stubbed instead of left to throw inside the component's
// own `try`.
vi.mock("qrcode", () => ({ toCanvas: vi.fn(async () => {}) }));

const TIERS = ["fill", "outline", "plain", "solid", "dashed", "underlined"] as const;
const PAINTED = TIERS.filter((tier) => tier !== "underlined");
const UNSUPPORTED = ["underlined"] as const;

// A board renders one column per entry, so the cases hand it the smallest one that has a header, a card
// and an empty column at the same time.
const BOARD_COLUMNS = [
  { key: "todo", title: "Todo", color: "#87909c" },
  { key: "doing", title: "Doing", color: "#3a95ff" },
];
const BOARD_TASKS = [{ id: 1, status: "todo", title: "Define requirements" }];

// A transfer renders one panel per side of the split, so the cases hand it the smallest data set that puts
// a row on both sides at once — the tier plates the two panels, so an empty one would hide half of it.
const TRANSFER_DATA = [
  { key: "a", title: "选项一", description: "描述一" },
  { key: "b", title: "选项二", description: "描述二" },
];
const TRANSFER_SPLIT = ["b"];

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
  // a check card resolves the same way, and its own look is the outlined frame too.
  {
    name: "CheckCard",
    prefix: "k-check-card",
    fallback: "outline",
    component: CheckCard,
    props: { title: "选项", description: "描述" },
  },
  // an alert resolves the same way again, and its own look is the tinted plate `fill`.
  {
    name: "Alert",
    prefix: "k-alert",
    fallback: "fill",
    component: Alert,
    props: { type: "info", message: "提示" },
  },
  // an image is a frame around a picture and a code is a frame around a canvas, so both paint the whole
  // ring: `outline` on an image sets a colour on an edge `base.less` gives no width, and `plain` on a
  // code deletes the 12px ring the caller never asked to lose. A code also has to read the resolved
  // tier — `props.theme` on its own leaves nothing from a provider to reach it. An image's own look is
  // `plain`, a code's is the outlined frame.
  { name: "Image", prefix: "k-image", fallback: "plain", component: Image, props: {} },
  {
    name: "QRCode",
    prefix: "k-qrcode",
    fallback: "outline",
    component: QRCode,
    props: { value: "https://example.com" },
  },
  // a pagination bar names its tier on the root — where `shape` and `size` also live — and paints it
  // on the cells the numbers sit on, so a tier only shows up once the cell has a rule of its own. Its
  // own look is `fill`, and the prop's `default: "fill"` sits behind `useConfigAppearance`, so a
  // provider can still reach it.
  { name: "Page", prefix: "k-page", fallback: "fill", component: Page, props: { total: 100 } },
  // a board has no plate of its own — its columns are the surfaces — so the tier names the root and
  // draws on every `.k-kanban-column`, which declares the 1px edge that makes it visible. The drop
  // hint is a column state on that same element, so it has to out-specify the tier plate. Its own look
  // is `fill`, and the prop's `default: "fill"` sits behind `useConfigAppearance`, so a provider can
  // still reach it.
  {
    name: "Kanban",
    prefix: "k-kanban",
    fallback: "fill",
    component: Kanban,
    props: { columns: BOARD_COLUMNS },
  },
  // a transfer is the two panels you move rows between, and the tier plates both of them. Its prop
  // carries `default: "outline"`, which sits behind `useConfigAppearance` and so never shadows a
  // provider; the support set lives at the emit point, and a tier outside it lands on this component's
  // own look, the outlined frame.
  {
    name: "Transfer",
    prefix: "k-transfer",
    fallback: "outline",
    component: Transfer,
    props: { dataSource: TRANSFER_DATA, modelValue: TRANSFER_SPLIT },
  },
  // a list panel is a card with a toolbar over a list, so the plate it hands out is the card's and its
  // tier class is spelled `k-card-<tier>` — the panel adds no tier class of its own to that element.
  // Because the panel is that card's caller it resolves the tier itself, and its own look is the
  // outlined card, so the guard falls back there rather than to the card's `fill`.
  {
    name: "ListPanel",
    prefix: "k-card",
    fallback: "outline",
    component: ListPanel,
    props: { summary: "12 条" },
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

// Every surface in the library answers `<prefix>-<tier>` — that is the spelling the shared style
// contract and the pixel checks read. A second spelling (`<prefix>-theme-<tier>`) lets a tier look
// themed while nothing paints it, so the infix is not allowed back.
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

// a check card is the one surface of this family that a group can render for the caller, so its
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

// `Alert` spelled its tier class `k-alert-theme-<tier>` while every other surface answered
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

// a pagination bar names its tier on the root — `shape` and `size` live there too — and paints it
// on the cells, so the DOM contract is one tier class and no dead one. The bar also hands the tier it
// *resolved* to the controls inside it, guard included: forwarding the inherited value untouched would
// put an underlined sizer in a bar whose own cells have already fallen back to `fill`.
const page = SURFACES.find((surface) => surface.name === "Page")!;
const pageClasses = (props: Record<string, unknown> = {}) =>
  Array.from(mount(Page, { attachTo: document.body, props: { total: 100, ...props } }).find(".k-page")
    .element.classList);

describe("a pager names its tier once and hands the same tier down", () => {
  for (const tier of TIERS)
    it(`theme="${tier}" puts exactly one tier class on the bar`, () => {
      expect(tierClasses(page, pageClasses({ theme: tier }))).toEqual([
        `k-page-${tier === "underlined" ? page.fallback : tier}`,
      ]);
    });

  it("lands beside the shape and size flags", () => {
    const classes = pageClasses({ theme: "solid", shape: "square", size: "small" });
    expect(classes).toContain("k-page-solid");
    expect(classes).toContain("k-page-square");
    expect(classes).toContain("k-page-sm");
  });

  it("forwards the resolved tier to its own sizer and elevator", () => {
    const wrapper = mount(Page, {
      attachTo: document.body,
      props: { total: 100, showSizer: true, showElevator: true, theme: "solid" },
    });
    expect(wrapper.find(".k-select-solid").exists()).toBe(true);
    // The elevator is an `InputNumber`, and the responsive bar renders one per layout that shows an
    // elevator — so every one of them has to carry the tier the bar resolved to, not just the first.
    const boxes = wrapper.findAll(".k-input-number");
    expect(boxes.length).toBeGreaterThan(0);
    for (const box of boxes) expect(box.classes()).toContain("k-input-number-solid");
  });

  // What the bar hands down is what it *resolved to*, not what it was asked for. `underlined` is a tier a
  // pager never paints, so an underlined request has to leave an underlined sizer behind exactly the way
  // it leaves an underlined page cell — the controls inside a bar are the bar's own parts.
  it("never hands a tier it will not paint to the controls inside it", () => {
    const wrapper = mount(Page, {
      attachTo: document.body,
      props: { total: 100, showSizer: true, showElevator: true, theme: "underlined" },
    });
    expect(wrapper.find(".k-select-fill").exists()).toBe(true);
    expect(wrapper.find(".k-select-underlined").exists()).toBe(false);
    const boxes = wrapper.findAll(".k-input-number");
    expect(boxes.length).toBeGreaterThan(0);
    for (const box of boxes) {
      expect(box.classes()).toContain("k-input-number-fill");
      expect(box.classes()).not.toContain("k-input-number-underlined");
    }
  });
});

// a board names its tier on the root and paints it on every column — it owns no plate of its own —
// so the DOM contract is one tier class plus one column per entry, and the drop hint (the state the
// stylesheet now has to out-order those plates for) has to land on the column itself.
const kanban = SURFACES.find((surface) => surface.name === "Kanban")!;
const board = (props: Record<string, unknown> = {}) =>
  mount(Kanban, {
    attachTo: document.body,
    props: { columns: BOARD_COLUMNS, data: BOARD_TASKS, ...props },
  });

describe("a board names its tier once and drops on its columns", () => {
  for (const tier of TIERS)
    it(`theme="${tier}" puts exactly one tier class on the board`, () => {
      expect(
        tierClasses(kanban, Array.from(board({ theme: tier }).find(".k-kanban").element.classList)),
      ).toEqual([`k-kanban-${tier === "underlined" ? kanban.fallback : tier}`]);
    });

  // A tier that reached nothing but the root would be invisible, so the parts it colours are the ones a
  // caller can see: the column, its title, its count, and the card inside it.
  it("renders one column per entry with the parts a solid plate inverts", () => {
    const wrapper = board({ theme: "solid" });
    const columns = wrapper.findAll(".k-kanban-column");
    expect(columns).toHaveLength(BOARD_COLUMNS.length);
    expect(columns[0].find(".k-kanban-column-header strong").text()).toBe("Todo");
    expect(columns[0].find(".k-kanban-column-header em").text()).toBe("1");
    expect(columns[0].find(".k-kanban-item").text()).toBe("Define requirements");
    expect(columns[1].find(".k-kanban-column-content").exists()).toBe(true);
  });

  // `.k-kanban-column.k-kanban-column-drag-over` paints the hint, so the state class belongs on the column
  // the tier just plated — anywhere else the rule matches nothing and the board stops answering a drag.
  it("marks the column a card is dragged over", async () => {
    const column = board().findAll(".k-kanban-column")[1];
    await column.trigger("dragover");
    expect(column.classes()).toContain("k-kanban-column-drag-over");
    await column.trigger("dragleave");
    expect(column.classes()).not.toContain("k-kanban-column-drag-over");
  });
});

// a transfer names its tier on the root and paints it on both panels, so the DOM contract is one
// tier class beside two lists — and the search box inside a panel is the one control the component hands
// its tier to, which `solid` has to refuse: a primary box on a primary plate is nothing to look at, the
// same reason a solid board hints in its plate's own ink.
const transfer = SURFACES.find((surface) => surface.name === "Transfer")!;
const panels = (props: Record<string, unknown> = {}) =>
  mount(Transfer, {
    attachTo: document.body,
    props: { dataSource: TRANSFER_DATA, modelValue: TRANSFER_SPLIT, ...props },
  });

describe("a transfer names its tier once and plates both panels", () => {
  for (const tier of TIERS)
    it(`theme="${tier}" puts exactly one tier class on the transfer`, () => {
      expect(
        tierClasses(transfer, Array.from(panels({ theme: tier }).find(".k-transfer").element.classList)),
      ).toEqual([`k-transfer-${tier === "underlined" ? transfer.fallback : tier}`]);
    });

  // A tier that reached nothing but the root would be invisible, so the parts it colours are the ones a
  // caller can see: both panels, each with its title, its count, its rows and the row's muted line.
  it("renders two panels with the parts a solid plate inverts", () => {
    const wrapper = panels({ theme: "solid" });
    const lists = wrapper.findAll(".k-transfer-list");
    expect(lists).toHaveLength(2);
    expect(lists.map((list) => list.find(".k-transfer-header .k-checkbox").text())).toEqual([
      "Source",
      "Target",
    ]);
    expect(lists.map((list) => list.find(".k-transfer-header > span").text())).toEqual(["0/1", "0/1"]);
    expect(lists[0].find(".k-transfer-item-content small").text()).toBe("描述一");
    // The two buttons between the panels are the operation, not the surface, so they keep their own look.
    expect(wrapper.findAll(".k-transfer-operations .k-btn")).toHaveLength(2);
  });

  // The class belongs on the root, not on the panels: a tier class that landed on a panel instead would
  // plate it twice and out-specify the arm that draws it.
  it("keeps the tier class on the root, not on the panels", () => {
    const wrapper = panels({ theme: "solid", searchable: true });
    expect(wrapper.find(".k-transfer-list").classes()).toEqual(["k-transfer-list"]);
  });

  // `searchable` is the flag that puts an input inside a panel, and the tier is handed straight to it —
  // except under `solid`, where the box keeps a light plate so it stays a box the eye can find.
  for (const tier of PAINTED)
    it(`theme="${tier}" hands its search box the ${
      tier === "solid" ? "fill" : tier
    } plate`, () => {
      const input = panels({ theme: tier, searchable: true }).find(".k-transfer-search .k-input");
      expect(input.classes()).toContain(`k-input-${tier === "solid" ? "fill" : tier}`);
    });

  // Disabled is a state of the whole transfer, so it shares the root with the tier class rather than
  // replacing it — the stylesheet needs both to step the plate's ink down.
  it("lands beside the disabled and readonly flags", () => {
    expect(panels({ theme: "solid", disabled: true }).find(".k-transfer").classes()).toEqual(
      expect.arrayContaining(["k-transfer-solid", "is-disabled"]),
    );
    expect(panels({ theme: "dashed", readonly: true }).find(".k-transfer").classes()).toEqual(
      expect.arrayContaining(["k-transfer-dashed", "is-readonly"]),
    );
  });

  // `footer` is the one slot that puts content on the plate below the rows, and the tier inverts its line
  // and its text, so the slot has to stay inside the panel it belongs to.
  it("keeps a footer inside the panel it plates", () => {
    const wrapper = mount(Transfer, {
      attachTo: document.body,
      props: { dataSource: TRANSFER_DATA, modelValue: TRANSFER_SPLIT, theme: "solid" },
      slots: { footer: () => h("button", { type: "button" }, "清空") },
    });
    const footers = wrapper.findAll(".k-transfer-footer");
    expect(footers).toHaveLength(2);
    expect(footers[0].text()).toBe("清空");
  });
});

// a list panel paints through the card it renders, so its tier class is the card's spelling and
// the panel's own two lines — the summary count and the selection strip — are the only parts its
// stylesheet can reach. Both name a dark token of their own, so neither inherits the plate's ink and
// `solid` has to hand them one; every other line inside the panel is the caller's own node and follows
// the card.
const listPanel = SURFACES.find((surface) => surface.name === "ListPanel")!;
const panelClasses = (props: Record<string, unknown> = {}) =>
  Array.from(
    mount(ListPanel, { attachTo: document.body, props: { summary: "12 条", ...props } })
      .find(".k-list-panel")
      .element.classList,
  );

describe("a list panel takes its tier from the card it renders", () => {
  for (const tier of TIERS)
    it(`theme="${tier}" arrives as the card's class on the panel's own element`, () => {
      const classes = panelClasses({ theme: tier });
      expect(classes).toContain("k-list-panel");
      expect(tierClasses(listPanel, classes)).toEqual([
        `k-card-${tier === "underlined" ? listPanel.fallback : tier}`,
      ]);
      // A `.k-list-panel-<tier>` would be a class no rule answers: the panel has no plate of its own, and
      // one would plate the card twice on the way.
      expect(classes.filter((cls) => cls.startsWith("k-list-panel-"))).toEqual([]);
    });

  // The tier only means something if the parts the panel draws are there for it to invert.
  it("renders the two lines a solid plate inverts", () => {
    const wrapper = mount(ListPanel, {
      attachTo: document.body,
      props: { theme: "solid", summary: "12 条", selectedCount: 3 },
      slots: { selection: (scope: { count: number }) => h("span", `已选 ${scope.count}`), default: "内容" },
    });
    expect(wrapper.find(".k-list-panel-toolbar-selection").exists()).toBe(true);
    expect(wrapper.find(".k-list-panel-selection").text()).toBe("已选 3");
    // The strip replaces the filters / summary row rather than sitting under it, so a solid panel has one
    // toolbar to plate, and the summary line is the other thing the sheet reaches.
    expect(wrapper.find(".k-list-panel-summary").exists()).toBe(false);
    expect(wrapper.find(".k-list-panel-content").text()).toBe("内容");
    expect(
      mount(ListPanel, {
        attachTo: document.body,
        props: { theme: "solid", summary: "12 条" },
      })
        .find(".k-list-panel-summary")
        .text(),
    ).toBe("12 条");
  });

  // The frame flag and the tier share one element: the sheet reads `.k-list-panel.k-card-solid`, an
  // element-level conjunction, and `bordered={false}` only takes the card's own border class away — a panel
  // with no frame still has a tier, and its toolbar lines still invert under `solid`.
  it("lands beside the card's frame, shape and size classes", () => {
    expect(panelClasses({ theme: "solid" })).toEqual(
      expect.arrayContaining(["k-list-panel", "k-card-solid", "k-card-bordered"]),
    );
    const borderless = panelClasses({ theme: "solid", bordered: false });
    expect(borderless).toContain("k-list-panel-borderless");
    expect(borderless).not.toContain("k-card-bordered");
    expect(tierClasses(listPanel, borderless)).toEqual(["k-card-solid"]);
  });
});
