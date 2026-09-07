# Splitter 分隔面板

## 何时使用

- 可以水平或垂直地分隔区域。
- 当需要自由拖拽调整各区域大小。
- 当需要指定区域的最大最小宽高时。

## 代码演示

[基本用法](./demo/basic.vue?show=vertical)

- 初始化面板大小，面板大小限制。

[垂直方向](./demo/vertical.vue?show=vertical)

- 使用垂直布局。

# API

## Splitter

| 属性        | 说明               | 类型                       | 默认值     |
| ----------- | ------------------ | -------------------------- | ---------- |
| direction   | 布局方向           | 'horizontal' \| 'vertical' | horizontal |
| resize      | 面板大小变化时触发 | (sizes: number[]) => void  | -          |
| resizeStart | 开始调整大小时触发 | (sizes: number[]) => void  | -          |
| resizeEnd   | 调整大小结束时触发 | (sizes: number[]) => void  | -          |

## SplitterPanel

| 属性 | 说明                                        | 类型             | 默认值 |
| ---- | ------------------------------------------- | ---------------- | ------ |
| size | 初始尺寸；数字为 px，字符串支持 px 或百分比 | number \| string | -      |
| min  | 最小尺寸；数字为 px，字符串支持 px 或百分比 | number \| string | 0      |
| max  | 最大尺寸；数字为 px，字符串支持 px 或百分比 | number \| string | -      |
