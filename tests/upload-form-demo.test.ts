import { mount, flushPromises } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Button, Form, FormItem, Space, Upload, message } from "../components";
import Demo from "../components/upload/demo/forms.vue";
vi.mock("kui-vue", () => import("../components"));
class MockXHR {
  static instances: MockXHR[] = [];
  readyState = 0;
  status = 200;
  responseText = "{}";
  upload = { onloadstart: null as (() => void) | null, onprogress: null };
  onreadystatechange: (() => void) | null = null;
  abort = vi.fn();
  open = vi.fn();
  setRequestHeader = vi.fn();
  send() {
    this.upload.onloadstart?.();
  }
  constructor() {
    MockXHR.instances.push(this);
  }
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  MockXHR.instances = [];
});
describe("upload form demo", () => {
  it.each(["uploading", "error", "success"])(
    "validates %s files without submitting",
    async (status) => {
      vi.stubGlobal("XMLHttpRequest", MockXHR);
      vi.spyOn(URL, "createObjectURL").mockReturnValue("blob:demo");
      vi.spyOn(URL, "revokeObjectURL").mockImplementation(() => {});
      const success = vi.spyOn(message, "success").mockImplementation(() => "");
      const error = vi.spyOn(message, "error").mockImplementation(() => "");
      const wrapper = mount(Demo, {
        global: { components: { Button, Form, FormItem, Space, Upload } },
      });
      for (const input of wrapper.findAll("input[type=file]")) {
        Object.defineProperty(input.element, "files", {
          value: [new File(["a"], "a.png", { type: "image/png" })],
        });
        await input.trigger("change");
        await flushPromises();
      }
      expect(MockXHR.instances).toHaveLength(3);
      expect(wrapper.text()).not.toContain("Please wait for all files to finish uploading");
      if (status !== "uploading") {
        for (const xhr of MockXHR.instances) {
          xhr.readyState = 4;
          xhr.status = status === "success" ? 200 : 500;
          xhr.onreadystatechange?.();
        }
        await flushPromises();
      }
      await wrapper.find("form").trigger("submit");
      await flushPromises();
      if (status === "success")
        expect(success).toHaveBeenCalledWith("Validation passed (demo only)");
      else {
        expect(error).toHaveBeenCalledWith("Please check the upload fields");
        expect(success).not.toHaveBeenCalled();
      }
      expect(MockXHR.instances).toHaveLength(3);
      wrapper.unmount();
    },
  );
});
