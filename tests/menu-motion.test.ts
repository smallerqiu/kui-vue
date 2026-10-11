import fs from "node:fs/promises";
import path from "node:path";
import { mount, type VueWrapper } from "@vue/test-utils";
import less from "less";
import { h, nextTick } from "vue";
import { afterEach, describe, expect, it } from "vitest";
import { Menu, MenuItem, SubMenu } from "../components/menu";

// 与 react 侧 `tests/menu-motion.test.tsx` 同一条契约：纵向子菜单的高度动画只归 Menu 自己。
// 它曾经借用 Collapse 的 `k-collapse-slide`，于是同一个元素上叠了两套动画——Menu 的 height
// 过渡 + Collapse 那条规则里的 `animation: k-motion-scale-y-in`（scaleY 0→1）。盒子按布局高度
// 先撑开、内容还被压成 0，看上去就是"外层先展开、里面的再伸缩下来"。
const menuLess = async () => {
  const filename = path.resolve(import.meta.dirname, "../components/menu/styles/index.less");
  const { css } = await less.render(await fs.readFile(filename, "utf8"), { filename });
  return css.replace(/\/\*[\s\S]*?\*\//g, "");
};

let wrapper: VueWrapper | null = null;
afterEach(() => {
  wrapper?.unmount();
  wrapper = null;
});

describe("Inline submenu expansion motion", () => {
  it("animates on Menu's own transition classes", async () => {
    wrapper = mount(Menu, {
      attachTo: document.body,
      props: { mode: "inline" },
      slots: {
        default: () =>
          h(SubMenu, { itemKey: "root", title: "Root" }, () =>
            h(MenuItem, { itemKey: "leaf" }, () => "Leaf"),
          ),
      },
    });
    await wrapper.find(".k-menu-submenu-title").trigger("click");
    await nextTick();

    const seen: string[] = [];
    const collect = () => {
      const sub = document.querySelector<HTMLElement>(".k-menu-submenu-sub");
      if (sub) seen.push(sub.className);
    };
    collect();
    for (let frame = 0; frame < 6; frame += 1) {
      await new Promise((resolve) => requestAnimationFrame(resolve));
      collect();
    }

    expect(seen.length).toBeGreaterThan(0);
    expect(seen.join(" ")).not.toContain("k-collapse-slide");
  });

  it("single-sources the duration the expansion runs on", async () => {
    const css = await menuLess();
    const source = await fs.readFile(
      path.resolve(import.meta.dirname, "../components/menu/sub-menu.tsx"),
      "utf8",
    );

    expect(css).not.toContain("k-collapse-slide");
    // Vue 的 `<Transition>` 不传时长，动画跑多久完全由这条 CSS 规则决定，
    // 所以它必须和 react `menu/sub-menu.tsx` 的 `timeout`（200）是同一个数。
    const active = css.match(/\.k-menu-slide-enter-active[\s\S]*?\{([^}]*)\}/)?.[1] ?? "";
    expect(Number(active.match(/height\s+([\d.]+)s/)?.[1])).toBe(0.2);
    // 展开/收起分支是 Menu 里唯一的 `getTransitionProp` 调用点，它只能是 `k-menu-slide`。
    expect(source.match(/getTransitionProp\("[^"]+"\)/g)).toEqual([
      'getTransitionProp("k-menu-slide")',
    ]);

    // 展开元素自己不许常驻一条 transition：`.k-menu-inline .k-menu-submenu-sub` (0,2,0)
    // 压过单类的 `-active` 规则，会让动画跑在一个时长上、在另一个时长上被拆掉。
    const sub = css.match(/\.k-menu-inline \.k-menu-submenu-sub\s*\{([^}]*)\}/)?.[1] ?? "";
    expect(sub).not.toContain("transition");
    expect(sub).toContain("overflow: hidden");
  });
});
