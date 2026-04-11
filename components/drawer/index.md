# Drawer 抽屉

屏幕边缘滑出的浮层面板。

## 何时使用

- 抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。
- 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。
- 当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。

## 代码演示

<code src="./demo/custom.vue">自定义</code>
<code src="./demo/target.vue">植入目标元素</code>
<code src="./demo/withForm.vue">表单模式</code>

## API

| 属性          | 说明                                                               | 类型          | 默认值 |
| ------------- | ------------------------------------------------------------------ | ------------- | ------ |
| title         | 抽屉标题,为null或false时不显示标题                                 | String        | -      |
| width         | 抽屉宽度 `placement`为 `left` 或 `right` 时使用,支持百分比         | Number,String | 520    |
| height        | 抽屉高度 `placement`为 `top` 或 `bottom` 时使用,支持百分比         | Number,String | 256    |
| placement     | 抽屉显示方向，提供 `left` , `top` , `right` , `bottom` 4种展示方式 | String        | right  |
| footer        | 页脚内容，不显示页脚设置`footer=null`即可                          | slot          | true   |
| closable      | 是否显示关闭按钮                                                   | Boolean       | true   |
| target        | 展示的父元素                                                       | Function      | -      |
| mask-closable | 点击蒙层是否允许关闭                                               | Boolean       | false  |
| okText        | 确定按钮文字                                                       | String        | 确定   |
| cancelText    | 取消按钮文字                                                       | String        | 取消   |
| ok            | 点击确定的回调                                                     | Function      | -      |
| cancel        | 点击取消的回调                                                     | Function      | -      |
| close         | 抽屉关闭的回调                                                     | Function      | -      |
| mask          | 是否展示蒙层                                                       | Boolean       | true   |
