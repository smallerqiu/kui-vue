export interface PopupLayer {
  trigger: () => HTMLElement | null;
  popup: HTMLElement;
  close: () => void;
}
const layers: PopupLayer[] = [];

export function registerPopupLayer(layer: PopupLayer) {
  layers.push(layer);
  return () => {
    const index = layers.indexOf(layer);
    if (index >= 0) layers.splice(index, 1);
  };
}

function descendants(layer: PopupLayer, seen = new Set<PopupLayer>()): PopupLayer[] {
  seen.add(layer);
  const children = layers.filter(
    (child) => child !== layer && !seen.has(child) && layer.popup.contains(child.trigger()),
  );
  return children.flatMap((child) => [child, ...descendants(child, seen)]);
}

export function isTopPopupLayer(layer: PopupLayer) {
  return (
    [...layers]
      .reverse()
      .find(
        (item) =>
          item.popup.ownerDocument === layer.popup.ownerDocument && !descendants(item).length,
      ) === layer
  );
}

export function popupLayerElements(layer: PopupLayer): HTMLElement[] {
  return descendants(layer).flatMap((item) =>
    [item.popup, item.trigger()].filter((node): node is HTMLElement => !!node),
  );
}

export function closePopupChildren(popup: HTMLElement) {
  const layer = layers.find((item) => item.popup === popup);
  if (layer)
    descendants(layer)
      .reverse()
      .forEach((child) => child.close());
}
