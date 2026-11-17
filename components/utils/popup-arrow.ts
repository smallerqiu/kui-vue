const margins = new WeakMap<HTMLElement, { left: string; top: string }>();

/** Measure the painted arrow after placement CSS has been applied, including rotation. */
export function measurePopupArrow(popup: HTMLElement, placement: string, enabled: boolean) {
  const arrow = popup.querySelector<HTMLElement>("[data-popup-arrow]");
  if (!arrow) return;
  const saved = margins.get(arrow);
  if (saved) {
    arrow.style.marginLeft = saved.left;
    arrow.style.marginTop = saved.top;
  }
  if (!enabled) return;
  popup.setAttribute("k-placement", placement);
  const rect = popup.getBoundingClientRect();
  const arrowRect = arrow.getBoundingClientRect();
  const horizontal = placement.startsWith("top") || placement.startsWith("bottom");
  const scale = horizontal ? rect.width / popup.offsetWidth : rect.height / popup.offsetHeight;
  if (!Number.isFinite(scale) || scale <= 0) return;
  const center = horizontal
    ? (arrowRect.left + arrowRect.width / 2 - rect.left) / scale
    : (arrowRect.top + arrowRect.height / 2 - rect.top) / scale;
  const half = (horizontal ? arrowRect.width : arrowRect.height) / scale / 2;
  const style = getComputedStyle(arrow);
  const margin = parseFloat(horizontal ? style.marginLeft : style.marginTop) || 0;
  if (!saved) margins.set(arrow, { left: arrow.style.marginLeft, top: arrow.style.marginTop });
  return {
    center,
    // After viewport clamping, move the arrow within the panel as far as its size permits.
    shift(target: number) {
      const size = horizontal ? popup.offsetWidth : popup.offsetHeight;
      const safe = Math.max(half, Math.min(size - half, target));
      if (horizontal) arrow.style.marginLeft = `${margin + safe - center}px`;
      else arrow.style.marginTop = `${margin + safe - center}px`;
    },
  };
}
