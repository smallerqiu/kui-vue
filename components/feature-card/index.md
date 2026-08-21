# FeatureCard 功能卡片

用于简洁地展示产品特性、功能入口或能力说明。

## 代码演示

[基本用法](./demo/basic.vue?show=vertical)

- 通过 `icon`、`title` 和 `desc` 展示功能信息。

[边框](./demo/bordered.vue?show=vertical)

- 通过 `bordered` 控制是否显示边框。

## API

| 属性     | 说明         | 类型      | 默认值  |
| -------- | ------------ | --------- | ------- |
| icon     | 图标         | IconType  | -       |
| title    | 标题         | string    | -       |
| desc     | 描述内容     | string    | -       |
| bordered | 是否显示边框 | boolean   | false   |
| theme    | 外观主题     | ThemeType | default |
| shape    | 卡片形状     | ShapeType | round   |
