# ColorPicker 颜色选择器

可以自由的输出颜色。

## 何时使用

- 需要自定义颜色时

## 代码演示

[自定义触发器](./demo/custom-trigger.vue)

- 自定义颜色面板的触发器。

[弹出位置](./demo/placement.vue)

- 支持 6 个弹出位置 , 如果上面的空间不够，色盘会自动在下面展示

[尺寸大小 / 不可用](./demo/size.vue)

- `small` 为小尺寸， `large` 为大尺寸

## API

| 属性          | 说明                                               | 类型     | 默认值 |
| ------------- | -------------------------------------------------- | -------- | ------ |
| modelValue    | 颜色值,可以使用 `v-model` 双向绑定                 | String   | -      |
| mode          | 颜色展示类型,提供 3 种模式(`hex` 、 `rgb` 、`hsl`) | String   | 'hex'  |
| presets       | 自定义颜色盘                                       | Array    | [...]  |
| disabledAlpha | 是否禁用透明                                       | Boolean  | false  |
| change        | 颜色值改变的时候触发,返回颜色的值                  | Function | -      |
