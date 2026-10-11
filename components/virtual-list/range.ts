export interface VirtualRangeOptions {
  count: number;
  scrollTop: number;
  viewportHeight: number;
  itemHeight: number;
  overscan: number;
}

export interface VirtualRange {
  start: number;
  end: number;
  offset: number;
  total: number;
}

export const normalizeItemHeight = (value: number): number =>
  Number.isFinite(value) && value > 0 ? value : 1;

export const getVirtualRange = ({
  count,
  scrollTop,
  viewportHeight,
  itemHeight,
  overscan,
}: VirtualRangeOptions): VirtualRange => {
  const safeCount = Number.isFinite(count) ? Math.max(0, Math.floor(count)) : 0;
  const safeHeight = normalizeItemHeight(itemHeight);
  const safeOverscan = Number.isFinite(overscan) ? Math.max(0, Math.floor(overscan)) : 0;
  const safeViewportHeight = Number.isFinite(viewportHeight) ? Math.max(0, viewportHeight) : 0;
  const safeScrollTop = Number.isFinite(scrollTop) ? Math.max(0, scrollTop) : 0;
  const visibleCount = Math.ceil(safeViewportHeight / safeHeight);
  // start 必须同时钳上界：scrollTop 越过内容高度（数据变少、滚动越界）时只钳下界会得到
  // start > end，slice 出来是空数组，整屏白屏。钳到最后一个完整窗口，越界时贴底显示。
  const maxStart = Math.max(0, safeCount - visibleCount);
  const start = Math.min(
    maxStart,
    Math.max(0, Math.floor(safeScrollTop / safeHeight) - safeOverscan),
  );
  const end = Math.min(safeCount, start + visibleCount + safeOverscan * 2);
  return {
    start,
    end,
    offset: start * safeHeight,
    total: safeCount * safeHeight,
  };
};
