// A shade of a colour the caller chose cannot be mixed in the stylesheet: `color-mix()` mixes while
// painting, and the Windows 7 Electron build — a Chromium older than the Chrome 111 that introduced it —
// gives such a declaration no value, so the shade simply never appears. The component works the share out
// from the string it was handed and publishes a plain `rgba()`; these are the two halves of that contract,
// the arithmetic and the hook the sheet reads.
import { mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import Calendar from "../components/calendar";
import FeatureCard from "../components/feature-card";
import { wash } from "../components/utils/color";

const card = (props: Record<string, string>) => mount(FeatureCard, { props }).element as HTMLElement;

it("scales the colour's own alpha instead of mixing while painting", () => {
  expect(wash("#54a9ff", 12)).toBe("rgba(84, 169, 255, 0.12)");
  expect(wash("rgb(84, 169, 255)", 11)).toBe("rgba(84, 169, 255, 0.11)");
  // Mixing with `transparent` keeps the channels and takes the alpha with them, so a translucent
  // colour washes to translucent — the share multiplies, it does not replace.
  expect(wash("rgba(84, 169, 255, 0.5)", 12)).toBe("rgba(84, 169, 255, 0.06)");
  // A colour written in another space reaches CSS as whole channels, the way the sheet's literal does.
  expect(wash("hsl(211, 100%, 66%)", 12)).toBe("rgba(82, 165, 255, 0.12)");

  // Colours that only resolve inside the page have no channels to read here, and a made-up value is
  // not a licence to ship a broken declaration: both leave the sheet's literal default standing.
  for (const unreadable of [
    undefined,
    "",
    "currentColor",
    "var(--kui-color-primary)",
    "not-a-colour",
  ])
    expect(wash(unreadable, 12), `${unreadable} is not a colour the code can read`).toBeUndefined();
});

it("hands the icon chip the wash the card's colour implies", () => {
  const painted = card({ color: "#3a95ff", title: "Storage" });
  expect(painted.style.getPropertyValue("--k-feature-card-color")).toBe("#3a95ff");
  expect(painted.style.getPropertyValue("--k-feature-card-icon-wash")).toBe(
    "rgba(58, 149, 255, 0.12)",
  );
});

it("leaves a painted icon background alone, and a colour it cannot read", () => {
  const withBackground = card({ color: "#3a95ff", iconBackground: "#111111", title: "Storage" });
  expect(withBackground.style.getPropertyValue("--k-feature-card-icon-bg")).toBe("#111111");
  expect(withBackground.style.getPropertyValue("--k-feature-card-icon-wash")).toBe("");

  const unreadable = card({ color: "currentColor", title: "Storage" });
  expect(unreadable.style.getPropertyValue("--k-feature-card-color")).toBe("currentColor");
  expect(unreadable.style.getPropertyValue("--k-feature-card-icon-wash")).toBe("");

  const plain = card({ title: "Storage" });
  expect(plain.style.getPropertyValue("--k-feature-card-icon-wash")).toBe("");
});

it("gives every event the plate its own colour washes", () => {
  const wrapper = mount(Calendar, {
    props: {
      modelValue: "2026-08-23",
      events: [
        { key: 1, date: "2026-08-23", title: "Review", color: "#3a95ff" },
        { key: 2, date: "2026-08-23", title: "Standup" },
        { key: 3, date: "2026-08-23", title: "Retro", color: "var(--kui-color-success)" },
      ],
    },
  });
  const [coloured, plain, unreadable] = wrapper
    .findAll(".k-calendar-event")
    .map((node) => node.element as HTMLElement);

  expect(coloured.style.getPropertyValue("--k-calendar-event-color")).toBe("#3a95ff");
  expect(coloured.style.getPropertyValue("--k-calendar-event-bg")).toBe("rgba(58, 149, 255, 0.11)");
  // An event with no colour of its own, and one the code cannot read, both keep the sheet's literal.
  expect(plain.style.getPropertyValue("--k-calendar-event-bg")).toBe("");
  expect(unreadable.style.getPropertyValue("--k-calendar-event-color")).toBe(
    "var(--kui-color-success)",
  );
  expect(unreadable.style.getPropertyValue("--k-calendar-event-bg")).toBe("");
});
