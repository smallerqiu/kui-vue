# Switch 开关

开关选择器。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时；
- 和 checkbox的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 代码演示

<code src="./demo/disabled.vue">禁用 / 可控</code>
<code src="./demo/loading.vue">加载中</code>
<code src="./demo/size.vue">两种大小</code>
<code src="./demo/withText.vue">文字 / 图标</code>

### API

| 属性               | 说明                                                      | 类型    | 默认值            |
| ------------------ | --------------------------------------------------------- | ------- | ----------------- |
| checked            | 指定当前是否选中，可以使用 `v-model` 双向绑定数据         | Boolean | false             |
| disabled           | 禁用开关                                                  | Boolean | false             |
| type               | 主题颜色 可传入 `success`，`warning`，`danger`，`primary` | String  | -                 |
| size               | 组件尺寸，值为`small`展示小尺寸                           | String  | -                 |
| checked(unchecked) | 选中(非选中)时的内容                                      | slot    | -                 |
| true-text          | 当 `checked` 为 `true` 时 ，显示的文字                    | String  | -                 |
| false-text         | 当 `checked` 为 `false` 时 ，显示的文字                   | String  | -                 |
| change             | 当 `checked` 改变时触发，回调                             | -       | Function(e:Event) |
