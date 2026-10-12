import { afterEach, describe, expect, it, vi } from "vitest";

import { createRipple, htmlInCanvasMarkup, type RippleElements } from "../components/ripple/engine";

/**
 * HTML-in-Canvas changed shape three times across Chromium versions. Drawing the
 * subtree is no longer enough on Chrome 155: unless the element geometry is
 * registered, the canvas itself stays the hit-test target for every descendant.
 * Because the engine listens for pointers on the content element, that means both
 * a dead click target for the wrapped UI and no ripple at all. Edge and earlier
 * Chromium expose no geometry method and hit-test implicitly, so they must keep the
 * returned-matrix path. Chrome 156 hides the matrix again, synchronizes the 2D case
 * internally, and renames the canvas attribute, so nothing may assume a version.
 *
 * jsdom has neither WebGL2 nor HTML-in-Canvas, so both contexts the engine asks for
 * are stubbed; the paint handler under test is the engine's own.
 */

const matrixString = "matrix(1, 0, 0, 1, 0, 0)";

// jsdom ships no DOMMatrix, and the engine only reads the paint matrix through
// `toString()` or hands it back untouched as `canvasTransform`.
const makeMatrix = () => {
  const toString = vi.fn(() => matrixString);
  return { matrix: { toString } as unknown as DOMMatrix, toString };
};

class ObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}

globalThis.IntersectionObserver ??= ObserverStub as unknown as typeof IntersectionObserver;
globalThis.ResizeObserver ??= ObserverStub as unknown as typeof ResizeObserver;

const glStub = () =>
  new Proxy(
    {},
    {
      get(target: Record<string, unknown>, key: string) {
        if (key in target) return target[key];
        if (/^[A-Z][A-Z0-9_]*$/.test(key)) return 1; // GL enums
        if (key === "getProgramParameter") return () => 0;
        if (key === "getShaderParameter") return () => true;
        if (key === "isContextLost") return () => false;
        return () => ({ [key]: true });
      },
    },
  ) as unknown as WebGL2RenderingContext;

/** Which of the three browser shapes a harness should pretend to be. */
interface BrowserShape {
  /** Chrome 155 and 156 have it; Edge and older Chromium do not. */
  geometry: boolean;
  /** Only builds before 156 hand the alignment matrix back from the draw call. */
  returnsMatrix: boolean;
  /** The paint signal is moving from this property to a dispatchable event. */
  paintProperty: boolean;
}

const CHROME_155: BrowserShape = { geometry: true, returnsMatrix: true, paintProperty: true };
const EDGE_LEGACY: BrowserShape = { geometry: false, returnsMatrix: true, paintProperty: true };
const CHROME_156: BrowserShape = { geometry: true, returnsMatrix: false, paintProperty: false };

interface Harness extends RippleElements {
  source: HTMLCanvasElement;
  content: HTMLDivElement;
  output: HTMLCanvasElement;
  draws: ReturnType<typeof vi.fn>;
  geometry: ReturnType<typeof vi.fn>;
  toString: ReturnType<typeof vi.fn>;
  matrix: DOMMatrix;
}

const mount = (shape: BrowserShape): Harness => {
  vi.stubGlobal("matchMedia", (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: () => false,
  }));
  const { matrix, toString } = makeMatrix();
  const draws = vi.fn(() => (shape.returnsMatrix ? matrix : undefined));
  const geometry = vi.fn();
  const context2d = { reset: vi.fn(), fillRect: vi.fn(), fillStyle: "", drawElementImage: draws };

  const source = document.createElement("canvas");
  const content = document.createElement("div");
  const output = document.createElement("canvas");
  content.innerHTML = "<button>Primary</button>";
  source.append(content);
  source.setAttribute("layoutsubtree", "");
  Object.defineProperty(source, "updateElementGeometry", {
    configurable: true,
    value: shape.geometry ? geometry : undefined,
  });
  Object.defineProperty(source, "requestPaint", { configurable: true, value: vi.fn() });
  if (shape.paintProperty) {
    Object.defineProperty(source, "onpaint", { configurable: true, writable: true, value: null });
  }

  vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation(function (
    this: HTMLCanvasElement,
    type: string,
  ) {
    if (this === source) return context2d as unknown as CanvasRenderingContext2D;
    return type === "webgl2" ? glStub() : null;
  });

  document.body.append(source, output);
  return { source, content, output, draws, geometry, toString, matrix };
};

/** Drive one paint through the handler the engine installed, keeping it alive. */
const paint = (harness: Harness) => {
  const instance = createRipple(
    { source: harness.source, content: harness.content, output: harness.output },
    {},
  );
  expect(instance).not.toBeNull();
  firePaint(harness.source);
  return instance!;
};

const firePaint = (source: HTMLCanvasElement) => {
  const paintable = source as unknown as { onpaint?: (() => void) | null };
  if (typeof paintable.onpaint === "function") paintable.onpaint();
  else source.dispatchEvent(new Event("paint"));
};

afterEach(() => {
  document.body.replaceChildren();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("Ripple subtree input", () => {
  it("registers element geometry where the browser requires it", () => {
    const harness = mount(CHROME_155);
    const instance = paint(harness);

    expect(harness.draws).toHaveBeenCalled();
    expect(harness.geometry).toHaveBeenCalledWith(harness.content, {
      canvasTransform: harness.matrix,
    });
    // Writing the matrix as an inline transform would shift the live DOM copy here.
    expect(harness.toString).not.toHaveBeenCalled();
    expect(harness.content.style.transform).toBe("");

    instance.destroy();
  });

  it("applies the returned matrix where no geometry API exists", () => {
    const harness = mount(EDGE_LEGACY);
    const instance = paint(harness);

    expect(harness.draws).toHaveBeenCalled();
    expect(harness.geometry).not.toHaveBeenCalled();
    expect(harness.content.style.transform).toBe(matrixString);

    // Teardown drops the subtree out of the canvas, so it must clear the matrix too.
    instance.destroy();
    expect(harness.content.style.transform).toBe("");
  });

  it("leaves synchronization to the browser once the draw call returns nothing", () => {
    const harness = mount(CHROME_156);
    // A frame drawn by an older engine could have left one behind.
    harness.content.style.transform = matrixString;
    const instance = paint(harness);

    expect(harness.draws).toHaveBeenCalled();
    expect(harness.geometry).not.toHaveBeenCalled();
    // A stale inline transform would push the live DOM off the picture the
    // browser has just aligned by itself.
    expect(harness.content.style.transform).toBe("");

    instance.destroy();
  });

  it("listens for the paint event when the browser drops the onpaint property", () => {
    const harness = mount(CHROME_156);
    const instance = createRipple(
      { source: harness.source, content: harness.content, output: harness.output },
      {},
    );
    expect(instance).not.toBeNull();
    expect((harness.source as unknown as { onpaint?: unknown }).onpaint).toBeUndefined();

    harness.source.dispatchEvent(new Event("paint"));
    expect(harness.draws).toHaveBeenCalledTimes(1);

    // Teardown has to unbind the listener as well, or a rebuild paints twice.
    instance!.destroy();
    harness.source.dispatchEvent(new Event("paint"));
    expect(harness.draws).toHaveBeenCalledTimes(1);
  });

  it("keeps painting when the geometry registration throws", () => {
    const harness = mount(CHROME_155);
    harness.geometry.mockImplementation(() => {
      throw new TypeError("canvasTransform is required");
    });
    const error = vi.spyOn(console, "error").mockImplementation(() => {});
    const instance = paint(harness);

    // Losing the snapshot frame would leave the wrapped content unreachable, so
    // only the alignment step is allowed to fail.
    expect(harness.draws).toHaveBeenCalled();
    expect(error).toHaveBeenCalledWith(
      "Ripple failed to align its HTML content:",
      expect.any(TypeError),
    );

    instance.destroy();
  });
});

describe("htmlInCanvasMarkup", () => {
  it("keeps the boolean attribute while the browser has no content attribute", () => {
    expect(htmlInCanvasMarkup()).toEqual({ canvas: { layoutsubtree: "true" }, element: {} });
  });

  it('switches to content="drawable" once the browser reflects it', () => {
    Object.defineProperty(HTMLCanvasElement.prototype, "content", {
      configurable: true,
      value: "",
    });
    try {
      expect(htmlInCanvasMarkup()).toEqual({
        canvas: { content: "drawable" },
        element: { drawable: "" },
      });
    } finally {
      Reflect.deleteProperty(HTMLCanvasElement.prototype, "content");
    }
  });
});
