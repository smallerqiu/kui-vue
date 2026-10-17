# Image 图片

可预览的图片。

## 何时使用

- 需要展示图片时使用。
- 加载大图时显示 loading 或加载失败时容错处理。

## 代码演示

[基本用法](./demo/basic.vue)

- 简单的展示。

[容错处理](./demo/errors.vue)

- 加载失败显示图像占位符。

[照片墙](./demo/group.vue)

- 点击左右切换按钮可以预览多张图片。

[扩展](./demo/extra.vue)

- 可以扩展自定工具和面板。

## Image API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 组件的宽度 | `string \| number` | - |
| height | 组件的高度 | `string \| number` | - |
| src | 图片默认展示的地址 | `string` | - |
| alt | 图片无法显示时的替代文本 | `string` | - |
| type | Preview 内容类型 | `"img" \| "media"` | `img` |
| origin | 点击图片展示的大图 | `string` | - |
| placeholder | 图片加载失败时展示的占位符 | `string` | - |
| imgStyle | 图片的 style | `CSSProperties` | - |
| showPanel | 默认是否展示扩展面板 | `boolean` | false |
| onClose | 关闭触发事件 | `() => void` | - |
| switch | 多图切换触发事件 | `(index: number) => void` | - |
| tool | 自定义工具栏按钮 | slot | - |
| panel | 自定义扩展面板 | slot | - |

## ImageGroup API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 图片数据 | `string[]` | - |

### 通用外观

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 外观主题 | `"fill" \| "outline" \| "plain" \| "solid" \| "dashed"` | plain |
| shape | 图片形状 | `"default" \| "circle" \| "square" \| "round"` | round |

## 主题

`theme` 支持 `fill`、`outline`、`plain`、`solid`、`dashed` 五种外观，不写 `theme` 时就是 `plain`：不带边框也不铺底色，画面顶到边缘。`outline` 在画面外圈一条库的边框色，`dashed` 把这一圈换成虚线；`fill` 在画面下面铺一层浅底，`solid` 用主色铺满，并把加载中、加载失败的占位和默认插槽里的文字一起反白。`underlined` 是给可输入的控件用的，图片会按 `plain` 呈现。
