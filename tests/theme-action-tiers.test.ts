// 3c-甲 mirror of kui-react's tests/theme-action-tiers.test.tsx: Button is the family whose own default
// look is not a tier class. The source emitted `k-btn-${theme}` for whatever value it was handed, so
// `theme="default"` reached the DOM as `k-btn-default` — a class that already means `type="default"`
// and, at (0,2,0), outranks `.k-btn-link` — which is how a `type="link"` button ended up painted with
// the fill background. `theme="underlined"` shipped `k-btn-underlined`, a class no LESS rule answers,
// because an underline only means something on a control you type into (theme 口径 §五.1). An
// unsupported tier now emits no class at all, which is the same DOM as never writing `theme`.
// `DropdownButton` / `TriggerButton` forward their tier to `Button` and hold no tier class of their own.
// The style half — the five tiers Button does paint — is in tests/theme-variants.test.ts.
import { mount } from "@vue/test-utils";
import { h } from "vue";
import { afterEach, describe, expect, it } from "vitest";
import Button from "../components/button/button";
import ConfigProvider from "../components/config";
import { DropdownButton } from "../components/dropdown";

afterEach(() => {
  document.body.innerHTML = "";
});

// The seven values `theme` is typed as, and the five of them `button/styles/index.less` paints.
const TIERS = ["default", "fill", "outline", "plain", "solid", "dashed", "underlined"] as const;
const PAINTED = TIERS.filter((tier) => tier !== "default" && tier !== "underlined");
const UNSUPPORTED = ["default", "underlined"] as const;

const TYPES = ["default", "primary", "link", "text"] as const;

const buttonClasses = (props: Record<string, unknown>) =>
  Array.from(mount(Button, { attachTo: document.body, props }).classes());

// Only the seven tier spellings count here: `k-btn-sm` and `k-btn-circle` are size and shape, and
// `k-btn-primary` is a type class that happens to share the prefix. `k-btn-default` is a type class
// too, so tier accounting only runs on a type whose class cannot be mistaken for a tier.
const tierClasses = (classes: string[]) =>
  classes.filter((cls) => TIERS.some((tier) => cls === `k-btn-${tier}`));

const ordered = (classes: string[]) => [...classes].sort();

describe("Button ships only the tiers its own LESS paints", () => {
  for (const tier of PAINTED) {
    it(`theme="${tier}" reaches k-btn-${tier}`, () => {
      expect(tierClasses(buttonClasses({ type: "primary", theme: tier }))).toEqual([
        `k-btn-${tier}`,
      ]);
    });
  }

  for (const tier of UNSUPPORTED) {
    it(`theme="${tier}" reaches the classes of a button with no theme at all`, () => {
      expect(buttonClasses({ type: "primary", theme: tier })).toEqual(
        buttonClasses({ type: "primary" }),
      );
      expect(tierClasses(buttonClasses({ type: "primary", theme: tier }))).toEqual([]);
    });
  }

  // The reason this was a bug and not a cosmetic slip: `k-btn-default` is the *type* class, so a stray
  // tier-`default` emission did not render "the default look" on another type, it repainted it.
  for (const type of TYPES) {
    it(`type="${type}" with an unsupported tier keeps the type look`, () => {
      for (const tier of UNSUPPORTED)
        expect(buttonClasses({ type, theme: tier })).toEqual(buttonClasses({ type }));
    });
  }

  // A painted tier still lands next to any type — the support set is about tiers, not types. Order in
  // the attribute decides nothing about the paint, so the comparison is over the class set.
  it("a painted tier reaches the root whatever the type is", () => {
    for (const type of TYPES)
      expect(ordered(buttonClasses({ type, theme: "solid" }))).toEqual(
        ordered([...buttonClasses({ type }), "k-btn-solid"]),
      );
  });
});

describe("the split button forwards the tier to its two Button triggers", () => {
  // Both triggers are `type="default"`, so `k-btn-default` is on them either way; the contract is what
  // the forwarded tier adds on top — and, for an unsupported tier, that it adds nothing.
  const triggers = (props: Record<string, unknown> = {}) =>
    mount(DropdownButton, {
      attachTo: document.body,
      props,
      slots: { default: () => h("span", "主操作"), overlay: () => h("div", "菜单内容") },
    })
      .findAll(".k-btn")
      .map((node) => Array.from(node.classes()));

  it("renders the main action and the trigger as buttons", () => {
    expect(triggers()).toHaveLength(2);
  });

  for (const tier of PAINTED) {
    it(`theme="${tier}" reaches both triggers as k-btn-${tier}`, () => {
      expect(triggers({ theme: tier }).map(ordered)).toEqual(
        triggers().map((classes) => ordered([...classes, `k-btn-${tier}`])),
      );
    });
  }

  for (const tier of UNSUPPORTED) {
    it(`theme="${tier}" leaves both triggers on their own look`, () => {
      expect(triggers({ theme: tier })).toEqual(triggers());
    });
  }
});

describe("an inherited tier goes through the same guard", () => {
  // The guard sits after inheritance, not on the written prop alone: a ConfigProvider that asks for a
  // tier Button does not paint has to reach the same DOM as a provider that asks for nothing. A test
  // set that only writes the prop would let `resolvePaintedTheme(props.theme, …)` pass while
  // `k-btn-underlined` came straight back through the provider.
  const withProvider = (tier?: (typeof TIERS)[number]) =>
    mount(ConfigProvider, {
      attachTo: document.body,
      props: { theme: tier },
      slots: { default: () => h(Button, { class: "target", type: "primary" }) },
    })
      .find(".target")
      .classes();

  for (const tier of UNSUPPORTED) {
    it(`ConfigProvider theme="${tier}" leaves the button on its own look`, () => {
      expect(withProvider(tier)).toEqual(withProvider());
      expect(tierClasses(withProvider(tier))).toEqual([]);
    });
  }

  it("a painted tier still comes down from the provider", () => {
    expect(tierClasses(withProvider("solid"))).toEqual(["k-btn-solid"]);
  });
});
