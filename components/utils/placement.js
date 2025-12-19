export function setPlacement({
  refSelection,
  refPopper,
  currentPlacement,
  position = null,
  transOrigin,
  top,
  left,
  offset = 3,
}) {
  if (!refPopper.value) return;

  let rect = null;

  if (
    position &&
    typeof position.x === "number" &&
    typeof position.y === "number"
  ) {
    // 鼠标定位：构造 0x0 虚拟矩形
    rect = {
      width: 0,
      height: 0,
      top: position.y,
      bottom: position.y,
      left: position.x,
      right: position.x,
    };
  } else if (refSelection && refSelection.value) {
    // 元素定位
    const selection = refSelection.value.$el || refSelection.value;
    rect = selection.getBoundingClientRect();
  } else {
    return;
  }

  const pickerH = refPopper.value.offsetHeight;
  const pickerW = refPopper.value.offsetWidth;
  const { clientHeight, clientWidth, scrollTop, scrollLeft } =
    document.documentElement;

  const check = {
    // 主轴空间
    top: rect.top > pickerH + offset,
    bottom: clientHeight - rect.bottom > pickerH + offset,
    left: rect.left > pickerW + offset,
    right: clientWidth - rect.right > pickerW + offset,

    // 交叉轴空间 (仅检测是否能贴边放下)
    // alignLeft: 左对齐(向右延伸)空间是否足够
    alignLeft: clientWidth - rect.left > pickerW,
    // alignRight: 右对齐(向左延伸)空间是否足够
    alignRight: rect.right > pickerW,
    // alignTop: 顶对齐(向下延伸)空间是否足够
    alignTop: clientHeight - rect.top > pickerH,
    // alignBottom: 底对齐(向上延伸)空间是否足够
    alignBottom: rect.bottom > pickerH,
  };

  let [side, align] = currentPlacement.value.split("-");

  if (!align) {
    if (side === "top" || side === "bottom") align = "left";
    else if (side === "left" || side === "right") align = "top";
  }

  // 主轴翻转 (Main Axis Flip)
  if (side === "top" && !check.top && check.bottom) side = "bottom";
  else if (side === "bottom" && !check.bottom && check.top) side = "top";
  else if (side === "left" && !check.left && check.right) side = "right";
  else if (side === "right" && !check.right && check.left) side = "left";

  // 交叉轴对齐翻转 (Cross Axis Flip) - 严格互斥，不走居中
  if (side === "top" || side === "bottom") {
    // 如果左对齐放不下，且右对齐放得下 -> 切右
    if (align === "left" && !check.alignLeft && check.alignRight)
      align = "right";
    // 如果右对齐放不下，且左对齐放得下 -> 切左
    else if (align === "right" && !check.alignRight && check.alignLeft)
      align = "left";
  } else if (side === "left" || side === "right") {
    // 如果顶对齐放不下，且底对齐放得下 -> 切底
    if (align === "top" && !check.alignTop && check.alignBottom)
      align = "bottom";
    // 如果底对齐放不下，且顶对齐放得下 -> 切顶
    else if (align === "bottom" && !check.alignBottom && check.alignTop)
      align = "top";
  }

  const finalPlacement = `${side}-${align}`;

  let calcTop = 0;
  let calcLeft = 0;
  let originX = "center";
  let originY = "center";

  // Y 轴计算
  if (side === "top") {
    calcTop = rect.top - pickerH - offset;
    originY = "bottom";
  } else if (side === "bottom") {
    calcTop = rect.bottom + offset;
    originY = "top";
  } else {
    // side 是 left/right
    if (align === "top") {
      calcTop = rect.top;
      originY = "top";
    } else {
      // 只有 bottom 可选，居中已被移除
      calcTop = rect.bottom - pickerH;
      originY = "bottom";
    }
  }

  // X 轴计算
  if (side === "left") {
    calcLeft = rect.left - pickerW - offset;
    originX = "right";
  } else if (side === "right") {
    calcLeft = rect.right + offset;
    originX = "left";
  } else {
    // side 是 top/bottom
    if (align === "left") {
      calcLeft = rect.left;
      originX = "left";
    } else {
      // 只有 right 可选
      calcLeft = rect.right - pickerW;
      originX = "right";
    }
  }

  if (calcLeft < 0) calcLeft = 0;
  else if (calcLeft + pickerW > clientWidth) calcLeft = clientWidth - pickerW;

  if (calcTop < 0) calcTop = 0;
  else if (calcTop + pickerH > clientHeight) calcTop = clientHeight - pickerH;

  // 加上滚动距离
  top.value = calcTop + scrollTop;
  left.value = calcLeft + scrollLeft;

  transOrigin.value = `${originX} ${originY}`;

  if (currentPlacement.value !== finalPlacement) {
    currentPlacement.value = finalPlacement;
  }
}
