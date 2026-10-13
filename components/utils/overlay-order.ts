/**
 * 遮罩层（Modal / Drawer）与弹层（Popup）共用一个"打开顺序"时钟：数值越大越晚打开，也就越靠上。
 * 两边各自有注册表（弹层要算子孙，语义不一样），但必须用同一个时钟才能互相比较谁压在上面。
 * 两个仓库这份实现逐字符相同。
 */

let order = 0;

export const nextOverlayOrder = () => ++order;
