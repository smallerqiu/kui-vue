import { nextOverlayOrder } from "../utils/overlay-order";

export interface PopupLayer {
  trigger: () => HTMLElement | null;
  popup: HTMLElement;
  close: () => void;
}
const layers: PopupLayer[] = [];
// 弹层的排序按"子孙关系"算（见 descendants），但遮罩层只想知道"现在最晚打开的弹层是谁"，
// 所以给每次打开盖一个跟遮罩层共用的全局顺序号。
const openedAt = new WeakMap<PopupLayer, number>();

export function registerPopupLayer(layer: PopupLayer) {
  openedAt.set(layer, nextOverlayOrder());
  layers.push(layer);
  return () => {
    const index = layers.indexOf(layer);
    if (index >= 0) layers.splice(index, 1);
  };
}

/** 还开着的弹层里最晚打开那位的顺序号；一个都没有则 0。遮罩层用它判断自己有没有被弹层压住。 */
export function latestPopupLayerOrder() {
  let latest = 0;
  for (const layer of layers) latest = Math.max(latest, openedAt.get(layer) ?? 0);
  return latest;
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
