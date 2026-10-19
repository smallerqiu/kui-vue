import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { mount } from "@vue/test-utils";
import { h } from "vue";
import { describe, expect, it } from "vitest";
import ConfigProvider from "../components/config";
import DatePicker from "../components/date-picker";
import { Select } from "../components/select";
import zhCN from "../components/locale/zh-CN";

/**
 * 库级默认语言是英语，和 react 侧同一条口径，兜底只有 config/context 里 `DEFAULT_LOCALE` 一个出处。
 * 组件里各自写 `inject("locale", zhCN)` 会让文档说的"默认英语"和实际渲染对不上（dayjs 的中文语言包
 * 没注册，月份和星期本来就是英文），所以这条用例管两件事：
 * 没给 Provider 时组件吐英文，以及没有任何组件源码把 inject 的兜底偷偷写回中文。
 */

const componentSources = (() => {
  const files: string[] = [];
  readdirSync(join(process.cwd(), "components"), { recursive: true, withFileTypes: true }).forEach(
    (entry) => {
      if (!entry.isFile() || !/\.(tsx|ts)$/.test(entry.name)) return;
      const relative = entry.parentPath;
      // demo 里给 Provider 传中文语言包是演示用法本身，locale/ 目录就是语言包，都不算兜底。
      if (/\/demo$/.test(relative) || relative.endsWith("components/locale")) return;
      files.push(join(relative, entry.name));
    },
  );
  return files;
})();

describe("Default locale", () => {
  it("renders English text when no ConfigProvider is mounted", () => {
    const picker = mount(DatePicker);
    expect(picker.find(".k-datepicker-input").element.placeholder).toBe("Select date");
    picker.unmount();

    const select = mount(Select, { props: { options: [] } });
    expect(select.get(".k-select-placeholder").text()).toBe("Select");
    select.unmount();
  });

  it("still follows the locale a ConfigProvider registers", () => {
    const wrapper = mount(ConfigProvider, {
      props: { locale: zhCN },
      slots: {
        default: () => [
          h(DatePicker),
          h(Select, { options: [] }),
        ],
      },
    });
    expect(wrapper.find(".k-datepicker-input").element.placeholder).toBe("请选择日期");
    expect(wrapper.get(".k-select-placeholder").text()).toBe("请选择");
    wrapper.unmount();
  });

  it("keeps every locale fallback on the shared default", () => {
    const offenders = componentSources
      .map((file) => [file, readFileSync(file, "utf8")] as const)
      .filter(([, source]) => /"locale",\s*zhCN\)/.test(source))
      .map(([file]) => file);

    expect(offenders).toEqual([]);
  });
});
