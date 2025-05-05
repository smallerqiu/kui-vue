export function getScrollbarWidth() {
  // 创建一个隐藏的容器
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll"; // 强制滚动条出现
  outer.style.position = "absolute";
  outer.style.top = "-9999px";
  outer.style.width = "100px";
  document.body.appendChild(outer);

  // 创建一个内容子元素
  const inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);

  // 计算差值 = 滚动条宽度
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // 清理 DOM
  outer.remove();

  return scrollbarWidth;
}
