import { flushPromises, mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import Upload from "../components/upload/index";
import type { UploadChangeEvent } from "../components/upload/types";
import type { UploadRequestOptions } from "../components/upload/types";

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

  it("emits upload progress changes", async () => {
    MockXHR.instances = [];
    vi.stubGlobal("XMLHttpRequest", MockXHR as unknown as typeof XMLHttpRequest);
    const wrapper = mount(Upload, { props: { action: "/upload" } });
    await selectFile(wrapper);
    const previousChanges = wrapper.emitted("change")?.length ?? 0;

    MockXHR.instances[0].upload.onprogress?.({
      lengthComputable: true,
      loaded: 5,
      total: 10,
    } as ProgressEvent);
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted("change")).toHaveLength(previousChanges + 1);
    expect(lastChangeEvent(wrapper)?.percent).toBe(50);
    vi.unstubAllGlobals();
  });

  it("honors zero limits and ignores extra files when multiple is false", async () => {
    const limited = mount(Upload, { props: { action: "/upload", type: "picture", limit: 0 } });
    expect(limited.find("input[type=file]").exists()).toBe(false);

    const wrapper = mount(Upload, { props: { action: "/upload", autoTrigger: false } });
    const input = wrapper.find("input[type=file]");
    Object.defineProperty(input.element, "files", {
      value: [new File(["a"], "a.txt"), new File(["b"], "b.txt")],
      configurable: true,
    });
    await input.trigger("change");

    const selected = wrapper.emitted("selectFiles")?.[0]?.[0] as UploadChangeEvent["fileList"];
    expect(selected).toHaveLength(1);
  });

  it("limits custom request concurrency", async () => {
    const requests: UploadRequestOptions[] = [];
    const wrapper = mount(Upload, {
      props: {
        multiple: true,
        maxConcurrent: 1,
        customRequest: (options) => {
          requests.push(options);
        },
      },
    });
    const input = wrapper.find("input[type=file]");
    Object.defineProperty(input.element, "files", {
      value: [new File(["a"], "a.txt"), new File(["b"], "b.txt")],
      configurable: true,
    });
    await input.trigger("change");
    await flushPromises();

    expect(requests).toHaveLength(1);
    requests[0].onSuccess();
    await flushPromises();
    expect(requests).toHaveLength(2);
  });

  it("reorders picture files by drag and drop", async () => {
    const wrapper = mount(Upload, {
      props: {
        type: "picture",
        sortable: true,
        fileList: [
          { uid: "a", filename: "A", url: "/a.png", status: "success" },
          { uid: "b", filename: "B", url: "/b.png", status: "success" },
        ],
      },
    });
    const items = wrapper.findAll(".k-upload-file-picture-item");
    await items[0].trigger("dragstart");
    await items[1].trigger("drop");

    expect(wrapper.emitted("sort")?.[0]?.[0]).toEqual(
      expect.objectContaining({
        oldIndex: 0,
        newIndex: 1,
        file: expect.objectContaining({ uid: "a" }),
      }),
    );
  });
});
