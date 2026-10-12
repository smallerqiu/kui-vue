import fs from "node:fs/promises";
import path from "node:path";
import less from "less";
import { describe, expect, it } from "vitest";

// 固定列边缘的滚动阴影是一块 30px 宽、绝对定位的盒子，而绝对定位的后代要算进滚动容器的
// 可滚区间。中性态（没挂 `k-table-ping-*`）只要也生成它，它就会按静态位置从最后一格往外
// 探出约 7px —— 于是"要不要出横向滚动条"（`scrollWidth > clientWidth`）和"要不要画阴影"
// （ping 类）互相触发：没有阴影 → 多出 7px → 出滚动条、判成还能滚、挂上 ping → 阴影把盒子
// 挪回表内 → 7px 没了 → 滚动条和阴影一起撤 → 再来一轮。窗口宽度正好卡在临界点上时，
// 看到的就是阴影和滚动条不停闪；再窄一点真实溢出盖过 7px，两个状态一致，闪就停了。
// 唯一站得住的修法：没有阴影的时候不要生成这块盒子。
const tableCss = async () => {
  const filename = path.resolve(import.meta.dirname, "../components/table/styles/index.less");
  const { css } = await less.render(await fs.readFile(filename, "utf8"), { filename });
  // 注释里也写着这些类名，先剥掉再查规则。
  return css.replace(/\/\*[\s\S]*?\*\//g, "");
};

const shadowRules = (css: string) =>
  [...css.matchAll(/([^{}]+)\{([^{}]*)\}/g)]
    .map(([, selector, body]) => ({
      selector: selector.trim().replace(/\s+/g, " "),
      // 编译前后的空格差异不该影响断言。
      body: body.replace(/\s+/g, ""),
    }))
    .filter((rule) => /k-table-cell-fix-(left-last|right-first)::?after$/.test(rule.selector));

describe("Fixed column scroll shadow", () => {
  it("generates no shadow box while the matching ping class is absent", async () => {
    const neutral = shadowRules(await tableCss()).filter(
      (rule) => !/k-table-ping-(left|right)/.test(rule.selector),
    );
    expect(neutral.length).toBeGreaterThan(0);
    for (const rule of neutral) {
      expect(rule.body, rule.selector).toContain("content:none");
    }
  });

  it("still draws the shadow on the ping classes that mean it", async () => {
    const rules = shadowRules(await tableCss());
    const left = rules.find((rule) => /k-table-ping-left/.test(rule.selector));
    const right = rules.find((rule) => /k-table-ping-right/.test(rule.selector));
    // 中性态不生成盒子之后，`content` 必须由 ping 规则自己给出，否则阴影永远画不出来。
    expect(left?.body).toContain('content:""');
    expect(right?.body).toContain('content:""');
    expect(left?.body).toContain("box-shadow:inset6px06px-4pxvar(--kui-color-shadow)");
    expect(right?.body).toContain("box-shadow:inset-6px06px-4pxvar(--kui-color-shadow)");
    expect(left?.selector).toContain("k-table-cell-fix-left-last");
    expect(right?.selector).toContain("k-table-cell-fix-right-first");
  });
});
