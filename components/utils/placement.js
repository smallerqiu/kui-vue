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

  // 模式检测 & 基准矩形
  let rect = null;
  // 是否是鼠标右键/坐标模式
  const isMouseMode =
    position &&
    typeof position.x === "number" &&
    typeof position.y === "number";

  if (isMouseMode) {
    // 鼠标模式：0x0 虚拟矩形
    rect = {
      width: 0,
      height: 0,
      top: position.y,
      bottom: position.y,
      left: position.x,
      right: position.x,
    };
  } else if (refSelection && refSelection.value) {
    // 元素模式：真实 DOM 矩形
    const selection = refSelection.value.$el || refSelection.value;
    rect = selection.getBoundingClientRect();
  } else {
    return;
  }

  const pickerH = refPopper.value.offsetHeight;
  const pickerW = refPopper.value.offsetWidth;
  const { clientHeight, clientWidth, scrollTop, scrollLeft } =
    document.documentElement;

  // 计算居中坐标 (仅用于检测)
  const centerLeft = rect.left + rect.width / 2 - pickerW / 2;
  const centerTop = rect.top + rect.height / 2 - pickerH / 2;

  const check = {
    // 主轴
    top: rect.top > pickerH + offset,
    bottom: clientHeight - rect.bottom > pickerH + offset,
    left: rect.left > pickerW + offset,
    right: clientWidth - rect.right > pickerW + offset,

    // 交叉轴 - 对齐检测
    alignLeft: clientWidth - rect.left > pickerW,
    alignRight: rect.right > pickerW,
    alignTop: clientHeight - rect.top > pickerH,
    alignBottom: rect.bottom > pickerH,

    // 交叉轴 - 居中检测 (只有非鼠标模式才需要关心这个)
    centerH: centerLeft > 0 && centerLeft + pickerW < clientWidth,
    centerV: centerTop > 0 && centerTop + pickerH < clientHeight,
  };

  // 智能决策
  let [side, align] = currentPlacement.value.split("-");

  // [关键修复] 仅在鼠标模式下，强制补全对齐方向
  if (isMouseMode && !align) {
    // 鼠标点在哪里，菜单就从哪里开始，不能居中悬浮在鼠标上
    if (side === "top" || side === "bottom")
      align = "left"; // 默认 bottom-left
    else if (side === "left" || side === "right") align = "top"; // 默认 right-top
  }

  // 主轴翻转 (Main Axis Flip)
  if (side === "top" && !check.top && check.bottom) side = "bottom";
  else if (side === "bottom" && !check.bottom && check.top) side = "top";
  else if (side === "left" && !check.left && check.right) side = "right";
  else if (side === "right" && !check.right && check.left) side = "left";

  // 交叉轴翻转 (Cross Axis Logic)
  if (side === "top" || side === "bottom") {
    // 如果有明确对齐要求 (比如鼠标模式强制了 left，或者 Select 指定了 bottom-left)
    if (align === "left" && !check.alignLeft && check.alignRight)
      align = "right";
    else if (align === "right" && !check.alignRight && check.alignLeft)
      align = "left";
    // 如果没有对齐要求 (说明是 Select 的 bottom 居中模式)
    // 且居中放不下，尝试贴边降级
    else if (!align && !check.centerH) {
      if (check.alignLeft)
        align = "left"; // 居中不行，试左贴边
      else if (check.alignRight) align = "right"; // 左也不行，试右贴边
    }
  } else if (side === "left" || side === "right") {
    if (align === "top" && !check.alignTop && check.alignBottom)
      align = "bottom";
    else if (align === "bottom" && !check.alignBottom && check.alignTop)
      align = "top";
    else if (!align && !check.centerV) {
      if (check.alignTop) align = "top";
      else if (check.alignBottom) align = "bottom";
    }
  }

  // 生成最终 placement (如果是居中，align 为 undefined，字符串就是 'top' 等)
  const finalPlacement = align ? `${side}-${align}` : side;

  //  坐标计算
  let calcTop = 0;
  let calcLeft = 0;
  let originX = "center";
  let originY = "center";

  // Y 轴
  if (side === "top") {
    calcTop = rect.top - pickerH - offset;
    originY = "bottom";
  } else if (side === "bottom") {
    calcTop = rect.bottom + offset;
    originY = "top";
  } else {
    // left/right
    if (align === "top") {
      calcTop = rect.top;
      originY = "top";
    } else if (align === "bottom") {
      calcTop = rect.bottom - pickerH;
      originY = "bottom";
    } else {
      // 垂直居中 (只有 Select 会进这里，鼠标模式已被强制 align)
      calcTop = rect.top + (rect.height - pickerH) / 2;
      originY = "center";
    }
  }

  // X 轴
  if (side === "left") {
    calcLeft = rect.left - pickerW - offset;
    originX = "right";
  } else if (side === "right") {
    calcLeft = rect.right + offset;
    originX = "left";
  } else {
    // top/bottom
    if (align === "left") {
      calcLeft = rect.left;
      originX = "left";
    } else if (align === "right") {
      calcLeft = rect.right - pickerW;
      originX = "right";
    } else {
      // 水平居中 (只有 Select 会进这里)
      calcLeft = rect.left + (rect.width - pickerW) / 2;
      originX = "center";
    }
  }

  // 边界修正 (Safe Clamp) ---
  // 无论哪种模式，最后都要保证不飞出屏幕
  if (calcLeft < 0) calcLeft = 0;
  else if (calcLeft + pickerW > clientWidth) calcLeft = clientWidth - pickerW;

  if (calcTop < 0) calcTop = 0;
  else if (calcTop + pickerH > clientHeight) calcTop = clientHeight - pickerH;

  // 赋值
  top.value = calcTop + scrollTop;
  left.value = calcLeft + scrollLeft;
  transOrigin.value = `${originX} ${originY}`;

  if (currentPlacement.value !== finalPlacement) {
    currentPlacement.value = finalPlacement;
  }
}
