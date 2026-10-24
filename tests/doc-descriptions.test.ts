import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { getDocDescriptions } from "../plugins/resolver/vetur";

const root = path.resolve(__dirname, "..");
const docs = (component: string) => path.join(root, "components", component, "index.md");

describe("documentation descriptions", () => {
  it("keeps prop descriptions out of the Slots table", () => {
    const descriptions = getDocDescriptions(docs("auto-complete"), "AutoComplete");

    expect(descriptions.addonbefore).toBe("输入框外部前置附件，复杂内容可使用同名插槽");
    expect(descriptions.prefix).toBe("输入框内部前缀，复杂内容可使用同名插槽");
  });

  it("still reads props documented after the Slots table", () => {
    const descriptions = getDocDescriptions(docs("stat-card"), "StatCard");

    expect(descriptions.theme).toBe("外观主题");
    expect(descriptions.shape).toBe("卡片形状");
  });

  it("stops the slot list at the next heading", () => {
    const assets = JSON.parse(fs.readFileSync(path.join(root, "ai/kui-components.json"), "utf8"));
    const statCard = assets.components.find((item: { name: string }) => item.name === "StatCard");

    expect(statCard.slots.map((slot: { name: string }) => slot.name)).toEqual([
      "title",
      "prefix",
      "suffix",
    ]);
  });
});
