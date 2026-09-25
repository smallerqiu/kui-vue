type Layout = "full" | "compact" | "simple";

function showLayout(root: HTMLElement, layout: Layout) {
  root.dataset.pageLayout = layout;
  root.querySelectorAll<HTMLElement>("[data-page-pager]").forEach((pager) => {
    pager.hidden = pager.dataset.pagePager !== layout;
  });
}

// Measure the actual controls, including locale, font size and optional fields.
// DOM copies do not mount duplicate components or register event handlers.
export function bindResponsivePage(root: HTMLElement) {
  const view = root.ownerDocument.defaultView!;
  let layout: Layout = "full";
  let frame = 0;
  let disposed = false;
  const measure = () => {
    if (disposed) return;
    const available = root.clientWidth;
    if (!available) return; // Re-measure when a hidden container becomes visible.
    const host = root.ownerDocument.createElement("div");
    host.style.cssText =
      "position:fixed;width:0;height:0;overflow:hidden;visibility:hidden;pointer-events:none";
    host.setAttribute("aria-hidden", "true");
    host.inert = true;
    const copy = root.cloneNode(true) as HTMLElement;
    copy.removeAttribute("id");
    copy.querySelectorAll("[id]").forEach((node) => node.removeAttribute("id"));
    copy.style.setProperty("width", "max-content", "important");
    copy.style.setProperty("max-width", "none", "important");
    copy.style.setProperty("min-width", "0", "important");
    copy.style.setProperty("flex", "none", "important");
    host.append(copy);
    root.parentElement?.append(host);
    const widths = { full: 0, compact: 0 };
    try {
      for (const candidate of ["full", "compact"] as const) {
        showLayout(copy, candidate);
        // clientWidth excludes borders, matching the available width above.
        widths[candidate] = copy.clientWidth;
      }
    } finally {
      host.remove();
    }
    if (!widths.full || !widths.compact) return;
    // Extra space is required only when restoring a larger layout.
    const fullMargin = layout === "full" ? 0 : 16;
    const compactMargin = layout === "simple" ? 16 : 0;
    const next: Layout =
      widths.full + fullMargin <= available
        ? "full"
        : widths.compact + compactMargin <= available
          ? "compact"
          : "simple";
    if (next !== layout) {
      const focused = root.ownerDocument.activeElement as HTMLElement | null;
      const label = focused?.closest("[data-page-pager]")
        ? focused.getAttribute("aria-label")
        : null;
      showLayout(root, next);
      // Keep keyboard focus usable if the focused page button becomes hidden.
      if (focused && root.contains(focused) && focused.closest("[hidden]")) {
        const pager = root.querySelector<HTMLElement>(`[data-page-pager="${next}"]`);
        const buttons = [...(pager?.querySelectorAll<HTMLElement>('[role="button"]') || [])];
        const replacement =
          buttons.find((button) => button.getAttribute("aria-label") === label) ||
          buttons.find((button) => button.tabIndex >= 0);
        replacement?.focus();
      }
      layout = next;
    } else {
      showLayout(root, layout);
    }
  };
  const schedule = () => {
    if (!frame)
      frame = view.requestAnimationFrame(() => {
        frame = 0;
        measure();
      });
  };
  const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(schedule);
  observer?.observe(root);
  // React/Vue can update labels, controls or appearance without resizing the root.
  const mutations = new MutationObserver(schedule);
  mutations.observe(root, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: ["class", "style"],
  });
  view.addEventListener("resize", schedule);
  root.ownerDocument.fonts?.addEventListener("loadingdone", schedule);
  measure();
  return () => {
    disposed = true;
    observer?.disconnect();
    mutations.disconnect();
    view.removeEventListener("resize", schedule);
    root.ownerDocument.fonts?.removeEventListener("loadingdone", schedule);
    if (frame) view.cancelAnimationFrame(frame);
    showLayout(root, "full");
    delete root.dataset.pageLayout;
  };
}
