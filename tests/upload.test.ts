import { flushPromises, mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import Upload from "../components/upload/index";
import type { UploadChangeEvent } from "../components/upload/types";

class MockXHR {
  static instances: MockXHR[] = [];
  readyState = 0;
  status = 200;
  responseText = "";
  upload: { onloadstart: (() => void) | null; onprogress: (() => void) | null } = {
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

const selectFile = async (wrapper: ReturnType<typeof mount>) => {
  const input = wrapper.find(".k-upload-file");
  const file = new File(["content"], "a.txt", { type: "text/plain" });
  Object.defineProperty(input.element, "files", { value: [file], configurable: true });
  await input.trigger("change");
};

const lastChangeEvent = (wrapper: ReturnType<typeof mount>) => {
  const emitted = wrapper.emitted("change");
  const last = emitted?.[emitted.length - 1]?.[0] as UploadChangeEvent | undefined;
  return last?.file;
};

describe("Upload", () => {
  it("surfaces the http status when the request fails", async () => {
    MockXHR.instances = [];
    vi.stubGlobal("XMLHttpRequest", MockXHR as unknown as typeof XMLHttpRequest);
    const wrapper = mount(Upload, { props: { action: "/upload" } });
    await selectFile(wrapper);

    const xhr = MockXHR.instances[0];
    expect(xhr).toBeDefined();
    xhr.status = 500;
    xhr.readyState = 4;
    xhr.onreadystatechange?.();
    await flushPromises();

    expect(wrapper.find(".k-upload-file-status-text").text()).toContain("上传失败: 500");
    vi.unstubAllGlobals();
  });

  it("sets errorText when a network error occurs", async () => {
    MockXHR.instances = [];
    vi.stubGlobal("XMLHttpRequest", MockXHR as unknown as typeof XMLHttpRequest);
    const wrapper = mount(Upload, { props: { action: "/upload" } });
    await selectFile(wrapper);

    const xhr = MockXHR.instances[0];
    xhr.onerror?.();
    await flushPromises();

    const file = lastChangeEvent(wrapper);
    expect(file?.status).toBe("error");
    expect(file?.errorText).toBeTruthy();
    expect(wrapper.find(".k-upload-file-status-text").text()).toContain("上传失败");
    vi.unstubAllGlobals();
  });
});
