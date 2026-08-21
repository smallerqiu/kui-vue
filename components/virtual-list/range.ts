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

export const getVirtualRange = ({
  count,
  scrollTop,
  viewportHeight,
  itemHeight,
  overscan,
}: VirtualRangeOptions): VirtualRange => {
  const safeCount = Math.max(0, Math.floor(count));
  const safeHeight = Math.max(1, itemHeight);
  const safeOverscan = Math.max(0, Math.floor(overscan));
  const visibleCount = Math.ceil(Math.max(0, viewportHeight) / safeHeight);
  const start = Math.max(0, Math.floor(Math.max(0, scrollTop) / safeHeight) - safeOverscan);
  const end = Math.min(safeCount, start + visibleCount + safeOverscan * 2);
  return {
    start,
    end,
    offset: start * safeHeight,
    total: safeCount * safeHeight,
  };
};
