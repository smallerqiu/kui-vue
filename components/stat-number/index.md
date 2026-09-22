# StatNumber 数字动画

独立展示带动画的数值，也可与卡片、仪表盘组合使用。

## 何时使用

用于计数、金额和动态变化的统计指标。需要标题、描述和趋势等完整卡片布局时，请使用 [StatCard](/components/stat-card)。

## 代码演示

[动画与格式化](./demo/basic.vue)

- 对比默认数值过渡与 `type="rollup"` 逐位滚动。可切换 `12,345 → 54,321`、加减或随机数值，并查看小数精度及前后缀效果。
- 滚动模式下，各位数字独立决定方向：变大向上、变小向下，未变化的数字保持静止。数字经过中间序列，错峰停止。

[动画时长](./demo/duration.vue)

- 对比不同动画时长，单位为秒；`duration` 设为 `0` 时直接更新。逐位滚动也会遵循系统的减少动态效果偏好。

## API

| 属性            | 说明                         | 类型                  | 默认值    |
| --------------- | ---------------------------- | --------------------- | --------- |
| modelValue      | 数值                         | number                | 0         |
| duration        | 数值动态展示时间(秒)         | number                | 1.2       |
| prefix          | 数值的前置内容               | string                | -         |
| suffix          | 数值的后置内容               | string                | -         |
| precision       | 数值精度                     | number                | 0         |
| type            | 数值变化类型                 | 'rollup' \| 'countup' | 'countup' |
| separator       | 分隔符                       | string                | -         |
| autoAnimate     | 当目标可见时触发动画         | boolean               | true      |
| autoAnimateOnce | 自动动画触发器仅运行一次动画 | boolean               | true      |

## Slots

| 名称   | 说明                       |
| ------ | -------------------------- |
| prefix | 自定义前置内容，例如图标。 |
| suffix | 自定义后置内容，例如单位。 |
