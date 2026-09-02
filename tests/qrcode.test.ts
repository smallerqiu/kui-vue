import { mount } from "@vue/test-utils";
import type { QRCodeRenderersOptions } from "qrcode";
import { beforeEach, describe, expect, it, vi } from "vitest";
import QRCode from "../components/qrcode";

const { toCanvas } = vi.hoisted(() => ({
  toCanvas: vi.fn(
    async (canvas: HTMLCanvasElement, value: string, options?: QRCodeRenderersOptions) => {
      void canvas;
      void value;
      void options;
    },
  ),
}));
vi.mock("qrcode", () => ({ toCanvas }));

const context = {
  beginPath: vi.fn(),
  clip: vi.fn(),
  drawImage: vi.fn(),
  fill: vi.fn(),
  fillStyle: "",
  restore: vi.fn(),
  roundRect: vi.fn(),
  save: vi.fn(),
};

class DeferredImage {
  crossOrigin = "";
  onerror: (() => void) | null = null;
  onload: (() => void) | null = null;
  set src(_value: string) {
    images.push(this);
  }
}

const images: DeferredImage[] = [];

describe("QRCode", () => {
  beforeEach(() => {
    images.length = 0;
    vi.clearAllMocks();
    vi.stubGlobal("Image", DeferredImage);
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(
      context as unknown as CanvasRenderingContext2D,
    );
  });

  it("redraws for logo configuration changes", async () => {
    const wrapper = mount(QRCode, {
      props: {
        value: "https://k-ui.cn",
        logo: "/logo.png",
        colorDark: "#000",
        colorLight: "#fff",
      },
    });
    await vi.waitFor(() => expect(images).toHaveLength(1));
    images[0].onload?.();
    await vi.waitFor(() => expect(context.drawImage).toHaveBeenCalled());

    await wrapper.setProps({ logoSize: 48 });
    await vi.waitFor(() => expect(images).toHaveLength(2));
    expect(toCanvas).toHaveBeenCalledTimes(2);
  });

  it("supports keyboard refresh", async () => {
    const wrapper = mount(QRCode, { props: { value: "value", status: "expired" } });
    const expired = wrapper.get(".k-qrcode-expired-wrapper");

    await expired.trigger("keydown", { key: " " });
    expect(wrapper.emitted("refresh")).toHaveLength(1);
    expect(expired.attributes("role")).toBe("button");
  });
});
