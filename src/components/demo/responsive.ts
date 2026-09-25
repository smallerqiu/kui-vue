// Use the Demo container, not the viewport: docs can sit beside a sidebar.
export function observeDemoWidth(element: HTMLElement, onChange: (narrow: boolean) => void) {
  let narrow = false;
  const update = () => {
    const width = element.getBoundingClientRect().width;
    if (!width) return;
    const next = narrow ? width < 840 : width < 800;
    if (next !== narrow) {
      narrow = next;
      onChange(narrow);
    }
  };
  update();
  const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(update);
  observer?.observe(element);
  window.addEventListener("resize", update);
  return () => {
    observer?.disconnect();
    window.removeEventListener("resize", update);
  };
}
