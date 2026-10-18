# ConfigProvider 全局配置

为后代组件提供统一的语言、弹层容器以及组件外观配置。

[基础用法](./demo/basic.vue?show=vertical)

- 使用 `locale` 统一设置组件语言。
- 使用 `getPopupContainer` 指定 Select、DatePicker 等弹层的挂载位置。
- 使用 `size`、`theme` 和 `shape` 设置兼容组件的默认外观。
- 可以嵌套 ConfigProvider，对局部区域覆盖全局配置。
- 优先级为：组件属性 > Form 属性 > 最近的 ConfigProvider > 组件默认值。
- 组件只继承自身支持的外观属性；Table、Descriptions、Collapse 等数据或表面容器会将全局 `circle` 规范化为 `round`。
- `size`、`theme`、`shape` 各自独立解析：某个键没有可继承的值时，只有那一个键落回组件自身的默认值。
- `theme` 通道接受全部六档，组件只呈现自身支持的档位（例如 Checkbox、Radio 只有 `fill` 与 `outline`）；传入画不出的档位不会报错。

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| locale | 组件语言包 | `Record<string, any>` | 当前全局语言 |
| getPopupContainer | 指定弹层挂载容器 | `PopupContainerGetter` | document.body |
| size | 兼容组件的默认尺寸 | `"small" \| "medium" \| "large"` | - |
| theme | 兼容组件的默认主题 | `"fill" \| "outline" \| "plain" \| "solid" \| "dashed" \| "underlined"` | - |
| shape | 兼容组件的默认形状 | `"default" \| "circle" \| "square" \| "round"` | - |
