# Empty 空状态

空状态时的展示占位图。

## 何时使用

- 当目前没有数据时，用于显式的用户提示。
- 初始化场景时的引导创建流程。

## 代码演示

<code src="./demo/custom.vue">自定义</code>
<code src="./demo/nodesc.vue">无描述</code>
<code src="./demo/used.vue">默认展示</code>

## API

| 属性        | 说明                                         | 类型            | 默认值 |
| ----------- | -------------------------------------------- | --------------- | ------ |
| description | 自定义描述内容                               | [String、slot ] | -      |
| imageStyle  | 图片样式                                     | Object          | -      |
| image       | 设置显示图片，为 string 时表示自定义图片地址 | [String、slot ] | -      |
