import { afterEach, expect, it, vi } from "vitest";
import { setPlacement } from "../components/utils/placement";

afterEach(() => vi.restoreAllMocks());

function fixture(placement: string, x = 400, y = 400) {
  Object.defineProperty(document.documentElement, "clientWidth", {
    configurable: true,
    value: 1000,
  });
  Object.defineProperty(document.documentElement, "clientHeight", {
    configurable: true,
    value: 1000,
  });
  const trigger = document.createElement("button");
  trigger.getBoundingClientRect = () => new DOMRect(x, y, 12, 12);
  const popup = document.createElement("div");
  const arrow = document.createElement("div");
  arrow.dataset.popupArrow = "";
  popup.append(arrow);
  Object.defineProperty(popup, "offsetWidth", { value: 200 });
  Object.defineProperty(popup, "offsetHeight", { value: 120 });
  popup.getBoundingClientRect = () => new DOMRect(0, 0, 200, 120);
  arrow.getBoundingClientRect = () => {
    const [side, align] = (popup.getAttribute("k-placement") || placement).split("-");
    const horizontal = side === "top" || side === "bottom";
    const cross =
      align === "left" || align === "top"
        ? 18
        : align === "right"
          ? 182
          : align === "bottom"
            ? 102
            : horizontal
              ? 100
              : 60;
    return new DOMRect(
      (horizontal ? cross - 12 : 0) + (parseFloat(arrow.style.marginLeft) || 0),
      (horizontal ? 0 : cross - 12) + (parseFloat(arrow.style.marginTop) || 0),
      horizontal ? 24 : 9,
      horizontal ? 9 : 24,
    );
  };
  const refs = {
    refSelection: { value: trigger },
    refPopper: { value: popup },
    currentPlacement: { value: placement },
    transOrigin: { value: "" },
    left: { value: 0 },
    top: { value: 0 },
  };
  return { refs, popup, arrow };
}

it.each([
  "top",
  "top-left",
  "top-right",
  "bottom",
  "bottom-left",
  "bottom-right",
  "left",
  "left-top",
  "left-bottom",
  "right",
  "right-top",
  "right-bottom",
])("points the arrow at a small trigger in %s without accumulating offsets", (placement) => {
  const { refs, arrow } = fixture(placement);
  for (let repeat = 0; repeat < 3; repeat++) {
    refs.currentPlacement.value = placement;
    setPlacement({ ...refs, arrowPointAtCenter: true });
    const rect = arrow.getBoundingClientRect();
    if (placement.startsWith("top") || placement.startsWith("bottom"))
      expect(refs.left.value + rect.left + rect.width / 2).toBe(406);
    else expect(refs.top.value + rect.top + rect.height / 2).toBe(406);
  }
});

it("adjusts the arrow after viewport clamping and restores panel alignment when disabled", () => {
  const { refs, arrow } = fixture("bottom-left", 10);
  setPlacement({ ...refs, arrowPointAtCenter: true });
  expect(refs.left.value).toBe(0);
  const rect = arrow.getBoundingClientRect();
  expect(rect.left + rect.width / 2).toBe(16);
  setPlacement({ ...refs, arrowPointAtCenter: false });
  expect(refs.left.value).toBe(10);
  expect(arrow.style.marginLeft).toBe("");
});

it("uses the flipped side and keeps context-menu coordinates unchanged", () => {
  const { refs, popup } = fixture("top-left", 400, 1);
  setPlacement({ ...refs, arrowPointAtCenter: true });
  expect(refs.currentPlacement.value).toBe("bottom-left");
  expect(popup.getAttribute("k-placement")).toBe("bottom-left");
  setPlacement({ ...refs, arrowPointAtCenter: true, position: { x: 300, y: 300 } });
  expect(refs.left.value).toBe(300);
});
