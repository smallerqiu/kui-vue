export function setPlacement({
  refCtx,
  refPopper,
  currentPlacement,
  transOrigin,
  top,
  left,
  offset = 3,
}) {
  if (!refCtx.value || !refPopper.value) return;
  const ctx = refCtx.value.$el || refCtx.value;
  let selectionRect = ctx.getBoundingClientRect();
  // const offset = 3;
  let scrollTop = document.documentElement.scrollTop;
  let scrollLeft = document.documentElement.scrollLeft;
  const pickerHeight = refPopper.value.offsetHeight;
  const pickerWidth = refPopper.value.offsetWidth;

  // 获取窗口尺寸
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // 计算上下左右的可用空间
  const topSpace = selectionRect.top;
  const bottomSpace = windowHeight - (selectionRect.top + selectionRect.height);
  const leftSpace = selectionRect.left;
  const rightSpace = windowWidth - (selectionRect.left + selectionRect.width);

  // 动态调整 placement
  let apt = currentPlacement.value;
  if (apt.startsWith("top")) {
    if (topSpace < pickerHeight + offset) {
      apt = apt.replace("top", "bottom"); // 如果上方空间不足，调整为下方
    }
  } else if (apt.startsWith("bottom")) {
    if (bottomSpace < pickerHeight + offset) {
      apt = apt.replace("bottom", "top"); // 如果下方空间不足，调整为上方
    }
  } else if (apt.startsWith("left")) {
    if (leftSpace < pickerWidth + offset) {
      apt = apt.replace("left", "right"); // 如果左侧空间不足，调整为右侧
    }
  } else if (apt.startsWith("right")) {
    if (rightSpace < pickerWidth + offset) {
      apt = apt.replace("right", "left"); // 如果右侧空间不足，调整为左侧
    }
  }
  currentPlacement.value = apt;
  // top.value = selectionRect.top - pickerHeight - offset + scrollTop;
  // left.value = selectionRect.left + (selectionRect.width - pickerWidth) / 2 + scrollLeft;
  switch (apt) {
    case "top":
      top.value = selectionRect.top - pickerHeight - offset + scrollTop;
      left.value =
        selectionRect.left +
        (selectionRect.width - pickerWidth) / 2 +
        scrollLeft;
      transOrigin.value = "bottom";
      break;
    case "top-left":
      top.value = selectionRect.top - pickerHeight - offset + scrollTop;
      left.value = selectionRect.left + scrollLeft;
      transOrigin.value = "left bottom";
      break;
    case "top-right":
      top.value = selectionRect.top - pickerHeight - offset + scrollTop;
      left.value =
        selectionRect.left + selectionRect.width - pickerWidth + scrollLeft;
      transOrigin.value = "right bottom";
      break;
    case "bottom":
      top.value = selectionRect.top + selectionRect.height + offset + scrollTop;
      left.value =
        selectionRect.left +
        (selectionRect.width - pickerWidth) / 2 +
        scrollLeft;
      transOrigin.value = "center top";
      break;
    case "bottom-left":
      top.value = selectionRect.top + selectionRect.height + offset + scrollTop;
      left.value = selectionRect.left + scrollLeft;
      transOrigin.value = "left top";
      break;
    case "bottom-right":
      top.value = selectionRect.top + selectionRect.height + offset + scrollTop;
      left.value =
        selectionRect.left + selectionRect.width - pickerWidth + scrollLeft;
      transOrigin.value = "right top";
      break;
    case "left":
      top.value =
        selectionRect.top +
        (selectionRect.height - pickerHeight) / 2 +
        scrollTop;
      left.value = selectionRect.left - pickerWidth - offset + scrollLeft;
      transOrigin.value = "right center";
      break;
    case "left-top":
      top.value = selectionRect.top + scrollTop;
      left.value = selectionRect.left - pickerWidth - offset + scrollLeft;
      transOrigin.value = "right top";
      break;
    case "left-bottom":
      top.value =
        selectionRect.top + selectionRect.height - pickerHeight + scrollTop;
      left.value = selectionRect.left - pickerWidth - offset + scrollLeft;
      transOrigin.value = "right bottom";
      break;
    case "right":
      top.value =
        selectionRect.top +
        (selectionRect.height - pickerHeight) / 2 +
        scrollTop;
      left.value =
        selectionRect.left + selectionRect.width + offset + scrollLeft;
      transOrigin.value = "left center";
      break;
    case "right-top":
      top.value = selectionRect.top + scrollTop;
      left.value =
        selectionRect.left + selectionRect.width + offset + scrollLeft;
      transOrigin.value = "left top";
      break;
    case "right-bottom":
      top.value =
        selectionRect.top + selectionRect.height - pickerHeight + scrollTop;
      left.value =
        selectionRect.left + selectionRect.width + offset + scrollLeft;
      transOrigin.value = "left bottom";
      break;
    default:
      // 默认处理
      top.value = selectionRect.top - pickerHeight - offset + scrollTop;
      left.value =
        selectionRect.left +
        (selectionRect.width - pickerWidth) / 2 +
        scrollLeft;
  }
}
