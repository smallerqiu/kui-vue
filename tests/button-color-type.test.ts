import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * `color` 的「词汇」与「类型」是同一句话的两半：样式表只认那 17 个名字，而调用方要能写出
 * 名字之外的字符串 —— 「色板之外当没写、`type` 照常生效」这条契约只有在类型收 `string` 时才存在。
 * 两仓把这一条钉成同一个形状（react 的 `color?: string` 与 vue 的 `PropType<string>` 是同一条式子），
 * 谁收紧成那 17 名联合、谁把文档表的类型列改回枚举，这里就红。
 * 同一份断言在 kui-react/tests/button-color-type.test.ts 与 kui-vue/tests/button-color-type.test.ts 各跑一遍。
 */
const repo = path.basename(process.cwd());
const read = (file: string) => readFileSync(path.join(process.cwd(), file), "utf8");

const sourceOf = (file: string) => {
  const source = read(file);
  return {
    // react 写 `color?: string;`，vue 写 `color: { type: String as PropType<string> }` —— 同一条式子的两副形状。
    // 第一条臂必须限行内匹配：`[^;]+` 会一路吞到下一行的分号，把 vue 的 props 定义表整块当成类型捞出来。
    interfaceArm: (source.match(/^\s*color\??:\s*([^;\n]+);$/m) ?? [])[1]?.trim(),
    propsArm: (source.match(/color:\s*\{\s*type:\s*String as PropType<([^>]+)>/) ?? [])[1]?.trim(),
  };
};

describe("Button color prop type", () => {
  it("accepts any colour string in both repos", () => {
    const arms = sourceOf("components/button/button.tsx");

    // 一条臂命中就够：react 写 interface，vue 写 props 定义表
    expect([arms.interfaceArm, arms.propsArm].filter(Boolean), repo).toEqual(["string"]);
  });

  it("documents the palette as a vocabulary but the prop as a string", () => {
    for (const file of ["components/button/index.md", "components/button/index.en_US.md"]) {
      const row = read(file)
        .split("\n")
        .find((line) => line.startsWith("| color |"));
      const cells = row?.split("|").map((cell) => cell.trim()) ?? [];
      // 表是 `| 属性 | 说明 | 类型 | 默认值 |`，两端各留一个空串 ⇒ 类型列固定在 cells[3]；
      // 默认值那一列两仓都是 `-`，所以只能认下标，不能拿它反查说明（说明里带 `|` 的行会把下标挤走）。
      expect(cells[3], file).toBe("`string`");
      expect(cells[2], file).toContain("blue");
    }
  });
});
