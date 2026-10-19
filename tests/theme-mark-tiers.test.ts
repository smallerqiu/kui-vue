// mirror of kui-react's tests/theme-mark-tiers.test.tsx: `Tag` is the opposite case to `Button`
// (tests/theme-action-tiers) — its own default look *is* a tier class, `fill`, so a tag carries exactly
// one tier whatever it is handed. That is only true because the class list is filtered: emitting
// `k-tag-${theme}` for any value the prop receives ships `theme="outline" / "solid" / "dashed"` as
// classes no LESS rule answers, which leaves a chip inside a `multiple theme="solid"` select unthemed
// twice over. The five tiers `tag/styles/index.less` paints all reach the root, and anything it cannot
// paint — `underlined`, which only means something on a box you type into — lands on `fill`.
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

// mirror: the other two marks. A check box and a radio have two looks, not five — a shallow
// filled box and a bordered one — and their default is `fill`, so they take the same guard as `Tag`
// with a shorter painted list (`components/checkbox/checkbox.tsx`, `components/radio/radio.tsx`). The
// the case this locks is the easy one to get wrong: if `theme="outline"` shipped no class at all the
// box would fall back to the base border, with no way for `--kui-theme-outline-border` to reach it.
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

// Handing a tier down and writing the child's own `theme` are the *same act* in this build: a group has
// no injection channel of its own, so the hand-off is `cloneVNode(child, { theme }, true)` — and
// `useFormAppearance` decides "explicit" by `hasOwnProperty` on the vnode it was handed. Patching a key
// unconditionally therefore makes the group's value look like the child wrote it, and
// `<CheckboxGroup><Checkbox theme="outline" /></CheckboxGroup>` would paint `fill` while the react
// build, where the item reads `props ?? group ?? provider`, paints `outline`. `size` and `shape` ride
// the same patch and break the same way (a group that says nothing about size still writes
// `size: undefined`), so the three keys are pinned together here.
describe("an item that wrote its own appearance keeps it against the group", () => {
  const written = (
    group: Component,
    item: Component,
    groupProps: Record<string, unknown>,
    itemProps: Record<string, unknown>,
  ) =>
    mount(group, {
      attachTo: document.body,
      props: groupProps,
      slots: {
        default: () => [h(item, { class: "target", label: "A", value: "a", ...itemProps })],
      },
    })
      .find(".target")
      .classes();

  for (const [name, group, item] of [
    ["k-checkbox", CheckboxGroup, Checkbox],
    ["k-radio", RadioGroup, Radio],
  ] as const) {
    for (const groupProps of [{}, { theme: "fill" }] as Record<string, unknown>[])
      it(`${name} written outline keeps outline against a ${
        groupProps.theme ?? "default"
      } group`, () => {
        const classes = written(group, item, groupProps, { theme: "outline" });
        expect(classes).toContain(`${name}-outline`);
        expect(classes).not.toContain(`${name}-fill`);
      });

    it(`${name} written fill keeps fill against an outlined group`, () => {
      const classes = written(group, item, { theme: "outline" }, { theme: "fill" });
      expect(classes).toContain(`${name}-fill`);
      expect(classes).not.toContain(`${name}-outline`);
    });

    it(`${name} keeps the size it wrote when the group says nothing about size`, () => {
      expect(written(group, item, {}, { size: "small" })).toContain(`${name}-sm`);
    });
  }

  it("a tier inherited from the provider is still beaten by the item's own", () => {
    // The group forwards what it inherited, so this is the same patch as the cases above — only the place
    // the value came from differs, and that is what `ConfigProvider` coverage is for.
    const classes = mount(ConfigProvider, {
      attachTo: document.body,
      props: { theme: "outline" },
      slots: {
        default: () => [
          h(CheckboxGroup, null, () => h(Checkbox, { class: "target", value: "a", theme: "fill" })),
          h(RadioGroup, null, () => h(Radio, { class: "target", value: "a", theme: "fill" })),
        ],
      },
    })
      .findAll(".target")
      .map((node) => node.classes());
    expect(classes.length).toBe(2);
    for (const [index, list] of classes.entries()) {
      expect(list, index === 0 ? "the check box" : "the radio").toContain(
        index === 0 ? "k-checkbox-fill" : "k-radio-fill",
      );
      expect(list).not.toContain(index === 0 ? "k-checkbox-outline" : "k-radio-outline");
    }
  });

  it("a radio button keeps the tier and shape it wrote inside a button group", () => {
    // `RadioButton` is a `Button`, so its look lands on the button root: five tiers and four shapes,
    // patched by the same group path as the boxes above.
    const classes = written(
      RadioGroup,
      RadioButton,
      { type: "button", theme: "outline" },
      {
        theme: "solid",
        shape: "square",
      },
    );
    expect(classes).toContain("k-btn-solid");
    expect(classes).not.toContain("k-btn-outline");
    expect(classes).toContain("k-btn-square");
  });
});

// The same hand-off, one step further down: a group built from `options` makes its own items, so the
// tier reaches them as a prop the group writes. That prop is typed by what the item paints — the two
// tiers a box has, the five a button has — while what the group inherits is the six-tier vocabulary a
// `ConfigProvider` or a `Form` may name, so the mode decides whose list resolves the tier. Running it
// through the box's list in button mode would rewrite `solid` into `fill`: the last case is what stops
// that from coming back as a "tidy" refactor.
describe("a group built from options hands its tier to every item", () => {
  const OPTIONS = [
    { label: "A", value: "a" },
    { label: "B", value: "b" },
  ];

  const boxes = (group: Component, name: string, props: Record<string, unknown>) =>
    mount(group, { attachTo: document.body, props: { options: OPTIONS, ...props } })
      .findAll("." + name)
      .map((node) => Array.from(node.element.classList));

  for (const tier of MARK_PAINTED) {
    it(`a radio group theme="${tier}" reaches every option box`, () => {
      const list = boxes(RadioGroup, "k-radio", { theme: tier });
      expect(list.length, "options must render a box each").toBe(OPTIONS.length);
      for (const classes of list)
        expect(markTiers(classes, "k-radio")).toEqual([`k-radio-${tier}`]);
    });

    it(`a check box group theme="${tier}" reaches every option box`, () => {
      const list = boxes(CheckboxGroup, "k-checkbox", { theme: tier });
      expect(list.length, "options must render a box each").toBe(OPTIONS.length);
      for (const classes of list)
        expect(markTiers(classes, "k-checkbox")).toEqual([`k-checkbox-${tier}`]);
    });
  }

  for (const tier of ["plain", "solid", "dashed"] as const) {
    it(`a radio group theme="${tier}" lands every option box on fill`, () => {
      // The tier is legal on the group because the button mode paints it, and a box still has to refuse
      // it — with no class for it reaching the DOM.
      const bare = boxes(RadioGroup, "k-radio", {});
      const list = boxes(RadioGroup, "k-radio", { theme: tier });
      expect(list.length).toBe(bare.length);
      for (const [index, classes] of list.entries()) {
        expect(ordered(classes), `box ${index} of a ${tier} group`).toEqual(ordered(bare[index]));
        expect(markTiers(classes, "k-radio"), `a ${tier} box ships a class no LESS paints`).toEqual(
          ["k-radio-fill"],
        );
      }
    });
  }

  it("a button-mode option group keeps the surface tiers its buttons paint", () => {
    const buttons = mount(RadioGroup, {
      attachTo: document.body,
      props: { options: OPTIONS, type: "button", theme: "solid" },
    })
      .findAll(".k-btn")
      .map((node) => Array.from(node.element.classList));
    expect(buttons.length, "options must render a button each").toBe(OPTIONS.length);
    for (const classes of buttons) expect(classes).toContain("k-btn-solid");
  });
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
// `fill` comparison while still reading the inherited value. Reading `props.theme` instead leaves a
// provider that asked for `fill` painting filled buttons inside un-joined spacing.
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
