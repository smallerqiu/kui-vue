import { readdirSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { flushPromises, mount } from "@vue/test-utils";
import { h } from "vue";
import { afterEach, describe, expect, it, vi } from "vitest";
import ConfigProvider from "../components/config";
import Upload from "../components/upload/index";
import type { UploadRequestOptions } from "../components/upload/types";
import en from "../components/locale/en";

/**
 * 上传失败那句文案只有一个出处：语言包里的 `k.upload.failed`。`Locale` 是 `typeof enUS & Record<string, unknown>`，
 * 类型上就要求这个键存在，所以组件不需要兜底 —— 这条用例把它钉在数据层：少写一句的语言包在这里红。
 */

// 语言包形状里这一条用例只关心的那一段
type WithFailureLabel = { k: { upload: { failed: string } } };

class MockXHR {
  static instances: MockXHR[] = [];
  readyState = 0;
  status = 200;
  responseText = "";
  upload: {
    onloadstart: (() => void) | null;
    onprogress: ((event: ProgressEvent) => void) | null;
  } = {
    onloadstart: null,
    onprogress: null,
  };
  onreadystatechange: (() => void) | null = null;
  onerror: (() => void) | null = null;
  abort = vi.fn();
  open = vi.fn();
  setRequestHeader = vi.fn();
  send = vi.fn();
  constructor() {
    MockXHR.instances.push(this);
  }
}

const withFailureLabel = (text: string) => ({
  ...en,
  k: { ...en.k, upload: { ...en.k.upload, failed: text } },
});

/** 挂一个把失败文案改成 `UPLOAD BROKE` 的语言包，选好文件并把请求打到 `error` 之前的那一步。 */
const failingUpload = async () => {
  vi.stubGlobal("XMLHttpRequest", MockXHR as unknown as typeof XMLHttpRequest);
  const wrapper = mount(ConfigProvider, {
    props: { locale: withFailureLabel("UPLOAD BROKE") },
    slots: { default: () => [h(Upload, { action: "/upload" })] },
  });
  const input = wrapper.find(".k-upload-file");
  const file = new File(["content"], "a.txt", { type: "text/plain" });
  Object.defineProperty(input.element, "files", { value: [file], configurable: true });
  await input.trigger("change");
  await flushPromises();
  return { wrapper, xhr: MockXHR.instances[0] };
};

afterEach(() => {
  vi.unstubAllGlobals();
  MockXHR.instances = [];
});

describe("Upload failure label", () => {
  it("is defined by every language pack", async () => {
    const packs = readdirSync(join(process.cwd(), "components/locale"))
      .filter((name) => name.endsWith(".ts"))
      .map((name) => name.replace(/\.ts$/, ""));

    // 空列表会让下面这个循环变成一条不咬人的断言
    expect(packs.length).toBeGreaterThan(0);

    // 组件读不到文案时没有第二处可去，所以每份语言包都得带着它
    for (const name of packs) {
      const { default: locale } = (await import(`../components/locale/${name}.ts`)) as {
        default: WithFailureLabel;
      };
      expect(typeof locale.k.upload.failed, `${name} 的 k.upload.failed`).toBe("string");
      expect(locale.k.upload.failed.length, `${name} 的 k.upload.failed 是空串`).toBeGreaterThan(0);
    }
  });

  it("comes from the locale bundle rather than a literal in the source", async () => {
    const { wrapper, xhr } = await failingUpload();

    xhr.onerror?.();
    await flushPromises();

    expect(wrapper.find(".k-upload-file-status-text").text()).toBe("UPLOAD BROKE");
    wrapper.unmount();
  });

  it("appends the transport's own reason after the locale label", async () => {
    const { wrapper, xhr } = await failingUpload();

    xhr.status = 500;
    xhr.readyState = 4;
    xhr.onreadystatechange?.();
    await flushPromises();

    expect(wrapper.find(".k-upload-file-status-text").text()).toBe("UPLOAD BROKE: 500");
    wrapper.unmount();
  });

  it("labels a custom request that reports no reason", async () => {
    const wrapper = mount(ConfigProvider, {
      props: { locale: withFailureLabel("UPLOAD BROKE") },
      slots: {
        default: () => [
          h(Upload, {
            customRequest: (options: UploadRequestOptions) => {
              // 自定义请求连原因都不给：没有语言包那一句，文件行上会写着 `String(undefined)` 的 "undefined"
              options.onError();
              return { abort: () => {} };
            },
          }),
        ],
      },
    });
    const input = wrapper.find(".k-upload-file");
    const file = new File(["content"], "a.txt", { type: "text/plain" });
    Object.defineProperty(input.element, "files", { value: [file], configurable: true });
    await input.trigger("change");
    await flushPromises();

    expect(wrapper.find(".k-upload-file-status-text").text()).toBe("UPLOAD BROKE");
    wrapper.unmount();
  });

  it("keeps the failure label out of the component source", async () => {
    const source = await readFile(join(process.cwd(), "components/upload/index.tsx"), "utf8");

    // 兜底文案一旦回到组件里，换语言就只换掉一半的提示
    expect(source).not.toContain("上传失败");
    expect(source).not.toContain("Upload failed");
  });
});
