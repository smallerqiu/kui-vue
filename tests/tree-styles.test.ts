import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { render } from "less";
import { describe, expect, it } from "vitest";

// 死 CSS 检查：组件 LESS 里写下的类名，必须出现在“组件真的会输出的类名集合”里。
// 类名不只有字面量三种来源，都得算上：
//   1. 源码里的 `k-tree-*` 字面量（含 demo、tree-select 这些用法）；
//   2. 模板字符串拼出来的后缀，比如 `k-tree-item-drop-${dropPosition}` 只留下前缀
//      `k-tree-item-drop-`，`before/after/inside` 是运行时值；
//   3. 过渡基名生成的状态类，比如 `getTransitionProps("k-tree-slide")` 会产出
//      `k-tree-slide-enter-active`、`k-tree-slide-leave-active`。
// 只承认“前缀来自插值”和“基名来自 getTransitionProps”，不能笼统地按 `k-tree-item`
// 这种短前缀放行，否则 `.k-tree-item-children` 这类真死规则会被漏掉。
// 类名一律取小写比对，`tree-nodata` 这种少了 `k-` 前缀的旧命名照样抓得到。
const walk = (directory: string, files: string[] = []): string[] => {
  readdirSync(join(process.cwd(), directory), { withFileTypes: true }).forEach((entry) => {
    const relative = join(directory, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "styles") walk(relative, files);
      return;
    }
    if (/\.(tsx|ts|vue)$/.test(entry.name)) files.push(relative);
  });
  return files;
};

// `components/tree` 与 `components/tree-select` 下的全部源码（样式文件本身排除）。
const SOURCE_FILES = [...walk("components/tree"), ...walk("components/tree-select")];

const TRANSITION_SUFFIXES = [
  "-enter",
  "-enter-active",
  "-enter-to",
  "-appear",
  "-appear-active",
  "-appear-to",
  "-leave",
  "-leave-active",
  "-leave-to",
];

const readSource = () =>
  SOURCE_FILES.map((file) => readFileSync(join(process.cwd(), file), "utf8")).join("\n");

describe("Tree styles", () => {
  it("only ships selectors the component can actually emit", async () => {
    const source = readSource();
    const tokens = new Set<string>();
    source.match(/\b[a-z][a-z0-9]*(?:-[a-z0-9]+)+\b/gi)?.forEach((token) => {
      tokens.add(token.toLowerCase());
    });

    // 插值类名：登记它在 `${` 之前的那段前缀。
    const dynamicPrefixes = (source.match(/\b[a-z][a-z0-9]*(?:-[a-z0-9]+)*-(?=\$\{)/gi) ?? []).map(
      (prefix) => prefix.toLowerCase(),
    );

    // 过渡基名：`getTransitionProps("k-tree-slide")` / `getTransitionProp("k-tree-slide")`。
    const transitionBases = [
      ...source.matchAll(/getTransition(?:Group)?Prop(?:s)?\(\s*"([^"]+)"/g),
    ].map((match) => match[1]!.toLowerCase());

    const compiled = await render(sourceLess(), { filename: "components/tree/styles/index.less" });
    const emitted = new Set<string>();
    compiled.css
      .replace(/\/\*[^]*?\*\//g, "")
      .match(/\.[a-zA-Z][a-zA-Z0-9_-]*/g)
      ?.forEach((name) => emitted.add(name.slice(1).toLowerCase()));

    const isUsed = (name: string) =>
      tokens.has(name) ||
      dynamicPrefixes.some((prefix) => name.startsWith(prefix)) ||
      transitionBases.some((base) =>
        TRANSITION_SUFFIXES.some((suffix) => name === `${base}${suffix}`),
      );

    // 只审计 tree 自己的类：`@import` 进来的公共样式不归这里管。
    const unused = [...emitted]
      .filter((name) => name.startsWith("k-tree") || name.startsWith("tree-"))
      .filter((name) => !isUsed(name));

    expect(unused).toEqual([]);
  });
});

const sourceLess = () =>
  readFileSync(join(process.cwd(), "components/tree/styles/index.less"), "utf8");
