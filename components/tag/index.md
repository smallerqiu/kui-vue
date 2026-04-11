# Tag 标签

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## 代码演示

<code src="./demo/color.vue">多彩标签</code>
<code src="./demo/dynamic.vue">动态添加和删除</code>
<code src="./demo/icon.vue">图标</code>
<code src="./demo/size.vue">尺寸和形状</code>

## Tag API

| 属性      | 说明                                       | 类型     | 默认值 |
| --------- | ------------------------------------------ | -------- | ------ |
| closeable | 是否显示关闭按钮                           | Boolean  | false  |
| color     | 标签的颜色                                 | String   | -      |
| icon      | 标签的图标                                 | String   | -      |
| close     | 关闭标签的回调事件                         | Function | -      |
| size      | 按钮尺寸,可选值 `small`、`large`，默认不选 | String   | -      |
| theme     | 组件呈现主题,默认'light'                   | String   | light  |
