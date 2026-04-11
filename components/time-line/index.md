# TimeLine 时间轴

垂直展示的时间流信息。

## 何时使用

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

- 当有一系列信息需按时间排列时，可正序和倒序。
- 需要有一条时间轴进行视觉上的串联时。。

## 代码演示

<code src="./demo/icon.vue">图标</code>
<code src="./demo/mode.vue">呈现方向</code>

## API

| 属性  | 说明                                                                                   | 类型        | 默认值 |
| ----- | -------------------------------------------------------------------------------------- | ----------- | ------ |
| icon  | 时间轴 `item` 图标                                                                     | String      | -      |
| color | 时间轴 `item` 图标颜色                                                                 | String      | -      |
| time  | 时间文本                                                                               | String      | -      |
| extra | 自定义辅助内容                                                                         | String,slot | -      |
| mode  | 通过设置 `mode` 可以改变时间轴和内容的相对位置 `left` ,`center`, `alternate` , `right` | String      | left   |
