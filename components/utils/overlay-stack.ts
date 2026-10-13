import { latestPopupLayerOrder } from "../popup/layers";
import { nextOverlayOrder } from "./overlay-order";

/**
 * 遮罩层（Modal / Drawer）的打开顺序栈：Escape 只该关掉最上面那一层，
 * 叠着开三个窗口时一次按键不能把它们全收掉。弹层（Popup）有自己的注册表，
 * 但两边共用同一个顺序时钟，所以"我上面还有个下拉没关"也能判出来。
 * 两个仓库这两个文件逐字符相同。
 */

export interface OverlayHandle {
  /** 我是不是最上面那层：没有更晚打开的遮罩层，也没有更晚打开的弹层压着我 */
  isTop: () => boolean;
  /** 出栈；组件关闭或卸载时必须调，否则会一直挡住下面那层的 Escape */
  release: () => void;
}

const overlays: number[] = [];

export function pushOverlay(): OverlayHandle {
  const order = nextOverlayOrder();
  overlays.push(order);
  let released = false;

  return {
    isTop: () => {
      if (released) return false;
      let top = order;
      for (const other of overlays) top = Math.max(top, other);
      return top === order && latestPopupLayerOrder() < order;
    },
    release: () => {
      if (released) return;
      released = true;
      const index = overlays.indexOf(order);
      if (index >= 0) overlays.splice(index, 1);
    },
  };
}
