// 3c-乙a mirror of kui-react's tests/theme-mark-tiers.test.tsx: `Tag` is the opposite case to `Button`
// (tests/theme-action-tiers) — its own default look *is* a tier class, `fill`, so a tag carries exactly
// one tier whatever it is handed. The source used to emit `k-tag-${theme}` for any value it received, so
// `theme="outline" / "solid" / "dashed"` shipped classes no LESS rule answered: a chip inside a
// `multiple theme="solid"` select was unthemed twice over. Now the five tiers `tag/styles/index.less`
// paints all reach the root, and anything it cannot paint — `underlined`, which only means something on
// a box you type into (theme 口径 §五.1) — lands on `fill`.
// The style half is in tests/theme-variants.test.ts and scripts/check-theme.ts.
import { enableAutoUnmount, mount } from "@vue/test-utils";
import { h, type Component } from "vue";
import { afterEach, describe, expect, it } from "vitest";
import ConfigProvider from "../components/config";
import { Checkbox, CheckboxGroup } from "../components/checkbox";
import { Radio, RadioButton, RadioGroup } from "../components/radio";
import Select from "../components/select/select";
import Tag from "../components/tag";

enableAutoUnmount(afterEach);
afterEach(() => {
  document.body.innerHTML = "";
});

// The six values `theme` is typed as, and the five `tag/styles/index.less` paints.
const TIERS = ["fill", "outline", "plain", "solid", "dashed", "underlined"] as const;
const PAINTED = ["fill", "outline", "plain", "solid", "dashed"] as const;
const UNSUPPORTED = ["underlined"] as const;

const PRESETS = ["red", "blue"] as const;

// `Tag` renders inside a `Transition`, so the chip is read by class rather than taken as the root.
const tagClasses = (props: Record<string, unknown>) => {
  const wrapper = mount(Tag, {
    attachTo: document.body,
    props,
    slots: { default: () => h("span", "Tag") },
  });
  const element = (
    wrapper.element.classList.contains("k-tag") ? wrapper.element : wrapper.find(".k-tag").element
  ) as HTMLElement;
  return Array.from(element.classList);
};

// Only the six tier spellings count: `k-tag-sm`, `k-tag-circle` and `k-tag-compact` are size, shape
// and density, `k-tag-red` is a colour that shares the prefix, and `k-tag-default` is a colour too —
// which is the same collision `Button` had with `type="default"`.
const tierClasses = (classes: string[]) =>
  classes.filter((cls) => TIERS.some((tier) => cls === `k-tag-${tier}`));

const ordered = (classes: string[]) => [...classes].sort();

describe("a tag always carries exactly one painted tier", () => {
  for (const tier of PAINTED) {
    it(`theme="${tier}" reaches k-tag-${tier}`, () => {
      expect(tierClasses(tagClasses({ theme: tier }))).toEqual([`k-tag-${tier}`]);
    });
  }

  for (const tier of UNSUPPORTED) {
    it(`theme="${tier}" lands on the tier a tag reaches with no theme at all`, () => {
      // Unlike Button, a tag has a default tier to answer with, and that answer is `fill`.
      // `k-tag-underlined` has no rule because a chip has no caret, so the guard resolves it to the
      // tier the stylesheet does paint.
      expect(tagClasses({ theme: tier })).toEqual(tagClasses({}));
      expect(tierClasses(tagClasses({ theme: tier }))).toEqual(["k-tag-fill"]);
    });
  }

  it("keeps one tier next to a size, a shape and a density", () => {
    for (const tier of PAINTED)
      expect(
        tierClasses(tagClasses({ size: "large", shape: "square", compact: true, theme: tier })),
      ).toEqual([`k-tag-${tier}`]);
  });
});

describe("a colour and a tier reach the root together", () => {
  // The cascade, not the class list, decides the winner: `.k-tag.k-tag-<colour>` and
  // `.k-tag.k-tag-has-color` are declared after the tiers, so `color` keeps its hue and its own edge
  // while `theme` still describes the surface for anything that has no colour. Dropping the tier here
  // would have been the cheap fix and would have broken `theme` on the documented preset palette.
  for (const color of PRESETS)
    for (const tier of PAINTED) {
      it(`color="${color}" with theme="${tier}" keeps both classes`, () => {
        const classes = tagClasses({ color, theme: tier });
        expect(classes).toContain(`k-tag-${color}`);
        expect(tierClasses(classes)).toEqual([`k-tag-${tier}`]);
      });
    }

  it('a custom colour with theme="outline" keeps its own flat edge', () => {
    const classes = tagClasses({ color: "#123456", theme: "outline" });
    expect(classes).toContain("k-tag-has-color");
    expect(tierClasses(classes)).toEqual(["k-tag-outline"]);
  });
});

describe("an inherited tier goes through the same guard", () => {
  // The guard sits after inheritance, not only on the written prop: a `ConfigProvider` that asks for a
  // tier Tag does not paint has to reach the same DOM as a provider that asks for nothing.
  // Read the chip by its own class: `Tag` wraps it in a `Transition`, whose stub would otherwise be the
  // element that carries a `class` fallthrough.
  const withProvider = (tier?: (typeof TIERS)[number]) =>
    mount(ConfigProvider, {
      attachTo: document.body,
      props: { theme: tier },
      slots: { default: () => h(Tag, {}, () => "Tag") },
    })
      .find(".k-tag")
      .classes();

  for (const tier of UNSUPPORTED) {
    it(`ConfigProvider theme="${tier}" lands the tag on fill`, () => {
      expect(withProvider(tier)).toEqual(withProvider());
      expect(tierClasses(withProvider(tier))).toEqual(["k-tag-fill"]);
    });
  }

  it("a painted tier still comes down from the provider", () => {
    expect(tierClasses(withProvider("dashed"))).toEqual(["k-tag-dashed"]);
  });

  it("an explicit prop still beats the provider", () => {
    expect(
      tierClasses(
        mount(ConfigProvider, {
          attachTo: document.body,
          props: { theme: "outline" },
          slots: { default: () => h(Tag, { theme: "plain" }, () => "Tag") },
        })
          .find(".k-tag")
          .classes(),
      ),
    ).toEqual(["k-tag-plain"]);
  });
});

// The control side of the hand-off: `Select` / `TreeSelect` pass their tier to the chips they render
// (`components/utils/selection-tags.ts`), which is what makes a `theme="solid"` control paint its chips
// with the primary it fills with. The pins in `select/styles/index.less` and
// `tree-select/styles/index.less` are what keep that from becoming an invisible chip, and the pixels are
// in scripts/check-theme.ts — this is the half that proves the tier actually reaches the chip at all.
describe("a multiple control hands its tier to the chips it renders", () => {
  const chipClasses = (props: Record<string, unknown>) =>
    mount(Select, {
      attachTo: document.body,
      props: {
        options: [{ label: "Apple", value: "apple" }],
        multiple: true,
        modelValue: ["apple"],
        ...props,
      },
    })
      .findAll(".k-select .k-tag")
      .map((node) => Array.from(node.classes()));

  for (const tier of PAINTED) {
    it(`theme="${tier}" reaches every chip as k-tag-${tier}`, () => {
      const chips = chipClasses({ theme: tier });
      expect(chips.length, "a multiple select must render chips").toBeGreaterThan(0);
      for (const classes of chips)
        expect(classes, `a chip inside a ${tier} select must carry its tier`).toContain(
          `k-tag-${tier}`,
        );
    });
  }

  it("an unsupported tier reaches the chips as fill, the same as a bare select", () => {
    const bare = chipClasses({});
    for (const tier of UNSUPPORTED) {
      const chips = chipClasses({ theme: tier });
      expect(chips.length, `a ${tier} select must render the same chips`).toBe(bare.length);
      for (const [index, classes] of chips.entries())
        expect(ordered(classes), `chip ${index} of a ${tier} select`).toEqual(ordered(bare[index]));
    }
  });
});

// 3c-乙b mirror: the other two marks. A check box and a radio have two looks, not five — a shallow
// filled box and a bordered one — and their default is `fill`, so they take the same guard as `Tag`
// with a shorter painted list (`components/checkbox/checkbox.tsx`, `components/radio/radio.tsx`). The
// bug this locks is the one the source used to have: `theme="outline"` shipped no class at all, so the
// box fell back to the base border with no way for `--kui-theme-outline-border` to reach it.
// The style half is `tests/theme-variants.test.ts` and `scripts/check-theme.ts`.
const MARK_PAINTED = ["fill", "outline"] as const;
const MARK_UNPAINTED = ["plain", "solid", "dashed", "underlined"] as const;

// The element the LESS tier block paints is not the root: the root is the `<label>`. Read it by class,
// because a mark's own root carries that class and `find` is not relied on to match the root itself.
const MARKS: {
  name: string;
  symbol: string;
  component: Component;
  props: Record<string, unknown>;
}[] = [
  { name: "k-checkbox", symbol: "k-checkbox-symbol", component: Checkbox, props: {} },
  {
    name: "k-radio",
    symbol: "k-radio-symbol",
    component: Radio,
    props: { value: "apple", label: "Apple" },
  },
];

// A mark's own root carries the component class, so the element is read either from the root or from
// the first match — the shape of a `VueWrapper`, written as a named alias because prettier cannot parse
// an object type in that position of a parameter list.
type MarkWrapper = { element: Element; find: (selector: string) => { element: Element } };

const markRoot = (wrapper: MarkWrapper, name: string) =>
  wrapper.element.classList.contains(name)
    ? wrapper.element
    : (wrapper.find("." + name).element as Element);

const markClasses = (component: Component, props: Record<string, unknown>, name: string) =>
  Array.from(markRoot(mount(component, { attachTo: document.body, props }), name).classList);

// Only the tier spellings count: `k-checkbox-sm`, `k-checkbox-checked` and `k-checkbox-disabled` are
// size and state, and `k-checkbox-group` is the wrapper's own class.
const markTiers = (classes: string[], name: string) =>
  classes.filter((cls) => [...MARK_PAINTED, ...MARK_UNPAINTED].some((t) => cls === `${name}-${t}`));

describe("a check box and a radio carry one of the two tiers they paint", () => {
  for (const { name, symbol, component, props } of MARKS) {
    for (const tier of MARK_PAINTED) {
      it(`${name} emits ${name}-${tier} for theme="${tier}"`, () => {
        expect(markTiers(markClasses(component, { ...props, theme: tier }, name), name)).toEqual([
          `${name}-${tier}`,
        ]);
      });
    }

    for (const tier of MARK_UNPAINTED) {
      it(`${name} lands on fill for theme="${tier}"`, () => {
        // A tier the box cannot paint has to land on the look a bare box already has, so both halves
        // are named: two renders that both land on a class no LESS paints would still agree with each
        // other, and only the explicit `-fill` says the guard resolved it.
        const classes = markClasses(component, { ...props, theme: tier }, name);
        expect(ordered(classes), `theme="${tier}" is not the look of a bare ${name}`).toEqual(
          ordered(markClasses(component, props, name)),
        );
        expect(markTiers(classes, name), `${name} ships a tier class nothing paints`).toEqual([
          `${name}-fill`,
        ]);
      });
    }

    it(`${name} puts its tier on the label the symbol block expects`, () => {
      const root = markRoot(
        mount(component, {
          attachTo: document.body,
          props: { ...props, theme: "outline" },
        }),
        name,
      ) as HTMLElement;
      expect(root.tagName).toBe("LABEL");
      expect(
        root.querySelector("." + symbol),
        `${symbol} is the element the ${name}-outline rule paints`,
      ).toBeTruthy();
    });

    it(`${name} keeps one tier next to a checked and a disabled state`, () => {
      for (const tier of MARK_PAINTED)
        expect(
          markTiers(
            markClasses(component, { ...props, theme: tier, checked: true, disabled: true }, name),
            name,
          ),
        ).toEqual([`${name}-${tier}`]);
    });
  }
});

// The tier can also arrive from a group, and the guard sits after that inheritance: a group forwards
// its resolved value to every box it renders, so a `CheckboxGroup theme="solid"` has to reach the same
// boxes as one that asks for nothing.
describe("a group hands its tier to the boxes it renders", () => {
  const groups = [
    {
      name: "k-checkbox",
      group: CheckboxGroup,
      children: () => [
        h(Checkbox, { value: "a", label: "A" }),
        h(Checkbox, { value: "b", label: "B" }),
      ],
    },
    {
      name: "k-radio",
      group: RadioGroup,
      children: () => [h(Radio, { value: "a", label: "A" }), h(Radio, { value: "b", label: "B" })],
    },
  ] as const;

  for (const { name, group, children } of groups) {
    const boxes = (props: Record<string, unknown>) =>
      mount(group, { attachTo: document.body, props, slots: { default: children } })
        .findAll("." + name)
        .map((node) => Array.from(node.element.classList));

    for (const tier of MARK_PAINTED) {
      it(`${name} group theme="${tier}" reaches every box`, () => {
        const list = boxes({ theme: tier });
        expect(list.length, "a group must render its boxes").toBeGreaterThan(0);
        for (const classes of list) expect(classes).toContain(`${name}-${tier}`);
      });
    }

    it(`${name} group lands an unpainted tier on fill, the same as a bare group`, () => {
      const bare = boxes({});
      for (const tier of MARK_UNPAINTED) {
        const list = boxes({ theme: tier });
        expect(list.length, `a ${tier} ${name} group must render the same boxes`).toBe(bare.length);
        for (const [index, classes] of list.entries())
          expect(ordered(classes), `box ${index} of a ${tier} ${name} group`).toEqual(
            ordered(bare[index]),
          );
      }
    });
  }
});

describe("an inherited tier goes through the mark guard too", () => {
  const inherited = (tier?: (typeof TIERS)[number]) =>
    mount(ConfigProvider, {
      attachTo: document.body,
      props: { theme: tier },
      slots: {
        default: () => [
          h(Checkbox, { class: "target" }),
          h(Radio, { class: "target", value: "apple" }),
        ],
      },
    })
      .findAll(".target")
      .map((node) => Array.from(node.element.classList));

  for (const tier of MARK_UNPAINTED) {
    it(`ConfigProvider theme="${tier}" leaves both boxes on fill`, () => {
      expect(inherited(tier)).toEqual(inherited());
      for (const classes of inherited(tier))
        expect(classes.some((cls) => /-(checkbox|radio)-fill$/.test(cls))).toBe(true);
    });
  }

  it('ConfigProvider theme="outline" reaches both boxes', () => {
    for (const classes of inherited("outline"))
      expect(classes.some((cls) => /-(checkbox|radio)-outline$/.test(cls))).toBe(true);
  });

  it("an explicit prop still beats the provider", () => {
    const classes = mount(ConfigProvider, {
      attachTo: document.body,
      props: { theme: "outline" },
      slots: { default: () => h(Checkbox, { class: "target", theme: "fill" }) },
    })
      .find(".target")
      .classes();
    expect(classes).toContain("k-checkbox-fill");
    expect(classes).not.toContain("k-checkbox-outline");
  });
});

// The button-style radio group's own layout class is the one place a tier reaches something other than a
// box: the joined-button spacing only exists for the filled look, and it has to follow the value the
// buttons are actually painted with. A button written with no `theme` is not that value — its own look
// is the bordered one, which is what the base spacing already draws — so this condition stays a literal
// `fill` comparison while still reading the inherited value. `components/radio/radio-group.tsx` used to
// read `props.theme`, so a provider that asked for `fill` painted filled buttons inside un-joined
// spacing.
describe("the button-style radio group joins its buttons for the filled tier only", () => {
  const buttons = () => [
    h(RadioButton, { value: "a" }, () => "A"),
    h(RadioButton, { value: "b" }, () => "B"),
  ];

  const buttonGroup = (props: Record<string, unknown>) =>
    mount(RadioGroup, {
      attachTo: document.body,
      props: { type: "button", ...props },
      slots: { default: buttons },
    }).element.classList;

  it('theme="fill" draws the joined layout', () => {
    expect(Array.from(buttonGroup({ theme: "fill" }))).toContain("k-radio-group-fill");
  });

  it("a group written with no theme keeps the base spacing", () => {
    expect(Array.from(buttonGroup({}))).not.toContain("k-radio-group-fill");
  });

  it('theme="outline" keeps the base spacing', () => {
    expect(Array.from(buttonGroup({ theme: "outline" }))).not.toContain("k-radio-group-fill");
  });

  it('a provider that asks for "fill" still joins them', () => {
    expect(
      mount(ConfigProvider, {
        attachTo: document.body,
        props: { theme: "fill" },
        slots: {
          default: () => h(RadioGroup, { type: "button" }, buttons),
        },
      })
        .find(".k-radio-group")
        .classes(),
    ).toContain("k-radio-group-fill");
  });
});
