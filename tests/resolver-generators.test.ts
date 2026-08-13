import path from "path";
import { describe, expect, it } from "vitest";
import {
  getComponentTagNames,
  getPropsData,
  getPropsNameCandidates,
  toKebabCase,
} from "../plugins/resolver/vetur";

const componentEntry = path.resolve(import.meta.dirname, "../components/index.ts");

describe("resolver generators", () => {
  it("converts component names to Vue template tag names", () => {
    expect(toKebabCase("KImage")).toBe("k-image");
    expect(toKebabCase("InputOTP")).toBe("input-otp");
    expect(toKebabCase("QRCode")).toBe("qr-code");
    expect(getComponentTagNames("Button")).toEqual(["button", "k-button"]);
    expect(getComponentTagNames("KSwitch")).toEqual(["k-switch"]);
  });

  it("resolves non-standard props type names", () => {
    expect(getPropsNameCandidates("KImage")).toEqual(["KImageProps", "ImageProps"]);
    expect(getPropsNameCandidates("KSwitch")).toEqual(["KSwitchProps", "SwitchProps"]);
    expect(getPropsNameCandidates("TimeLineItem")).toEqual([
      "TimeLineItemProps",
      "TimelineItemProps",
    ]);
  });

  it("filters inherited DOM attributes", () => {
    const props = getPropsData(componentEntry, ["ButtonProps"]);

    expect(props.map((prop) => prop.name)).toContain("type");
    expect(props.map((prop) => prop.name)).not.toContain("onDrag");
    expect(props.length).toBeLessThan(20);
  });

  it("distinguishes events and boolean props", () => {
    const props = getPropsData(componentEntry, ["AffixProps"]);
    const change = props.find((prop) => prop.name === "onChange");
    const target = props.find((prop) => prop.name === "target");

    expect(change?.eventName).toBe("change");
    expect(change?.boolean).toBe(false);
    expect(target?.boolean).toBe(false);
  });
});
