# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 组件注册

```js
import { Button } from "kui-vue";
Vue.use(Button);
```

## 代码演示

[基本用法](./demo/basic.vue)

- 使用 `type` 属性来定义 `Button`。

[边框主题](./demo/outline.vue)

- 只呈现边框

[多彩](./demo/color.vue)

- 使用 `color` 可以衍生出更多的变体按钮。

[浅色主题](./demo/light.vue)

- 浅色主题

[带图标](./demo/with-icon.vue)

- 通过添加 `icon` 属性 设置按钮按钮图标。

[尺寸](./demo/size.vue)

- `small` 为小尺寸， `large` 为大尺寸

[禁用](./demo/disabled.vue)

- 通过添加 `disabled` 属性可将按钮设置为不可用状态。

[加载中状态](./demo/loading.vue)

- 添加 `loading` 属性即可让按钮处于加载状态

[Block 按钮](./demo/block.vue)

- block 属性将使按钮适合其父宽度。

[按钮组合](./demo/group.vue)

- 将多个 `Button` 放入 `ButtonGroup` 内，可实现按钮组合的效果。

## API

| 属性     | 说明                                                  | 类型                                       | 默认值 |
| -------- | ----------------------------------------------------- | ------------------------------------------ | ------ |
| type     | 设置按钮类型                                          | `primary` \| `link`\| `dashed` \| `danger` | -      |
| htmlType | 设置 button 原生的 type 值                            | String                                     | button |
| disabled | 按钮失效状态 ˚                                        | Boolean                                    | -      |
| size     | 按钮尺寸,                                             | `small`\|`large`                           | -      |
| shape    | shape=circle 呈现圆型按钮                             | Boolean                                    | false  |
| theme    | 按钮主题                                              | `solid` \| `light` \| `normal`             | -      |
| icon     | 按钮的图标                                            | String                                     | -      |
| loading  | 按钮是否进入加载模式                                  | Boolean                                    | false  |
| href     | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | String                                     | -      |
| target   | 相当于 a 链接的 target 属性，href 存在时生效          | String                                     | -      |
| block    | 使组件宽度适应其父级宽度                              | Boolean                                    | false  |
