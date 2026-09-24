# Grid 网格

## 维度与控制力：Grid vs. Row-Col

这是最常被混淆的一组概念。

- Row/Col（一维栅格）：基于 Flex 将空间划分为 24 份。
  - 局限性：它本质上是一维的。虽然可以换行，但很难控制子项在垂直方向上的精确对齐（比如让某个 Col 跨越两行）。

- Grid (二维网格)： Grid 是二维的。可以同时精确控制行（Rows）和列（Cols）。
  - 优势：无需负 margin，通过 gap 直接控制间距。支持 rowSpan 和 dense 模式，能轻松实现“便当盒”（Bento）布局。

### 逻辑导向：Grid vs. Flex

- Flex (内容导向)：当你有一组宽度不固定、希望它们根据自身内容大小自动收缩或伸展并在一行内对齐时，使用 Flex。它强调的是灵活性。

- Grid (布局导向)： 当你先有一个固定的网格框架（比如仪表盘的 8 个格子），然后想把内容“填”进去时，使用 Grid。它强调的是结构感。

### 全局架构 vs. 局部排布：Layout 系列

Layout 及其子组件（Header, Sider, Content, Footer）属于页面骨架级组件。

- Layout：解决的是页面大背景的语义化结构。它负责管理侧边栏的展开收起、顶部导航的置顶、以及整体滚动条的管理。

- Grid：通常嵌套在 Layout 的 Content（内容区）内部。
  - 区别：Layout 定义了“房子有几间房”；Grid 定义了“每个房间里的家具怎么摆放”。

## 代码演示

响应式断点依据 Grid 容器宽度，而不是浏览器视口宽度。可以缩放演示区域观察变化。

[基本用法](./demo/basic.vue?show=vertical)

- 使用 `span` 控制跨越列数；需要精确定位时使用 `columnStart` 和 `rowStart`。

[仪表盘卡片布局 (Auto-fill + Min-Width)](./demo/auto-fill-min-width.vue?show=vertical)

- 无需手动设置断点，依靠 `itemMinWidth` 让容器根据宽度自动增减列数。

> 当设置了 `itemMinWidth` 时，`cols` 参数将失效。这是一种内容驱动的布局方式，非常适合图片画廊或卡片列表。

[响应式断点与回退](./demo/breakpoint-fallback.vue?show=vertical)

- 采用移动优先的向下回退逻辑。例如只定义 `md`、没有定义 `lg` 时，`lg` 会继续使用 `md` 的值。

[固定行布局](./demo/fixed-rows-areas.vue?show=vertical)

- `rows` 和 `rowSpan` 的垂直控制力。

[响应式隐藏与强制排序 (Suffix & Display None)](./demo/suffix-display-none.vue?show=vertical)

- `span: 0` 彻底移除 DOM 占位，`suffix` 跨越所有动态项。

[Bento 网格布局](./demo/bento.vue?show=vertical)

- 使用不同的 `span`、`rowSpan` 和 `row dense` 自动补位，构建非对称仪表盘。

[Hero Section 叠加布局（Layering）](./demo/hero-section.vue?show=vertical)

- 使用 `columnStart` 和 `rowStart` 将内容放到指定网格区域，实现叠加布局。

## Grid API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| cols | 设置网格的列数。支持数字（平分）或字符串（如 1fr 2fr） | `GridResponsive<string \| number>` | 24 |
| rows | 设置网格的行数或高度。默认为 auto | `GridResponsive<string \| number>` | auto |
| autoRows | 隐式网格行高。在 Bento 布局中用于设定基准高度。 | `string` | auto |
| flow | CSS Grid 自动放置方向 | `Property.GridAutoFlow` | row |
| xGap | 水格间距（水平方向）。数字类型会自动补充 px 单位。 | `GridResponsive<string \| number>` | 0 |
| yGap | 行间距（垂直方向）。数字类型会自动补充 px 单位。 | `GridResponsive<string \| number>` | 0 |
| itemMinWidth | 自动填充模式。设置子项最小宽度，Grid 将根据容器宽度自动计算列数。 | `string \| number` | - |
| align | 子项在网格单元格内的垂直对齐方式 | `Property.AlignItems` | - |
| justify | 子项在网格单元格内的水平对齐方式 | `Property.JustifyItems` | - |
| debug | 调试模式。开启后会显示红色透明背景列，方便开发者校对布局。 | `boolean` | false |

## GridItem API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| span | 占据的列数。设为 0 时会在该断点下隐藏 | `GridResponsive<number>` | 1 |
| rowSpan | 占据的行数。配合 `autoRows` 可实现非对称布局 | `GridResponsive<number>` | 1 |
| columnStart | 明确指定开始列线 | `GridResponsive<number>` | - |
| rowStart | 明确指定开始行线 | `GridResponsive<number>` | - |
| suffix | 将该项放到当前显式网格的末尾 | `boolean` | false |

## Breakpoints

| 标识符 | 全称              | 阈值 (宽度 w) | 典型场景                |
| ------ | ----------------- | ------------- | ----------------------- |
| xs     | Extra Small       | 0≤w<576px     | 手机竖屏 (Phones)       |
| sm     | Small             | 576≤w<768px   | 手机横屏 / 小型平板     |
| md     | Medium            | 768≤w<992px   | 中型平板 (如 iPad)      |
| lg     | Large             | 992≤w<1200px  | 笔记本电脑 / 小屏显示器 |
| xl     | Extra Large       | 1200≤w<1600px | 标准桌面显示器          |
| xxl    | Extra Extra Large | w≥1600px      | 高分辨率大屏 / 宽屏     |
