## API

| 属性          | 说明                                               | 类型     | 默认值 |
| ------------- | -------------------------------------------------- | -------- | ------ |
| value         | 颜色值,可以使用 `v-model` 双向绑定                 | String   | -      |
| mode          | 颜色展示类型,提供 3 种模式(`hex` 、 `rgb` 、`hsl`) | String   | 'hex'  |
| presets       | 自定义颜色盘                                       | Array    | [...]  |
| disabledAlpha | 是否禁用透明                                       | Boolean  | false  |
| change        | 颜色值改变的时候触发,返回颜色的值                  | Function | -      |
