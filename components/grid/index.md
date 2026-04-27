# Grid 网格

## 维度与控制力：Grid vs. Row-Col

这是最常被混淆的一组概念。

- Row/Col (传统一维栅格)：通常基于 flex 或 float 实现。它将空间划分为 12 或 24 份。
  - 局限性：它本质上是一维的。虽然可以换行，但很难控制子项在垂直方向上的精确对齐（比如让某个 Col 跨越两行）。它需要负 margin 和 padding 来处理 gutter（间距）。

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

可以自行缩放浏览器窗口，观察效果。

[基本用法](./demo/basic.vue?show=vertical)

- Grid 的 `offset` 逻辑是基于 `grid-column-start` 的偏移。在 `dense` 填充模式下，`offset` 可能会导致意想不到的“插空”行为。

[仪表盘卡片布局 (Auto-fill + Min-Width)](./demo/auto-fill-min-width.vue?show=vertical)

- 无需手动设置断点，依靠 `itemMinWidth` 让容器根据宽度自动增减列数。

> 当设置了 `itemMinWidth` 时，cols` 参数将失效。这是一种内容驱动的布局方式，非常适合图片画廊或卡片列表，它能保证在容器缩放时，卡片始终保持合适的宽度而不会过于拥挤。

[复杂表单响应式 (Breakpoint Fallback)](./demo/breakpoint-fallback.vue?show=vertical)

- 断点的向上/向下寻找逻辑。例如：定义了 md 没定义 lg，系统是否能正确应用 md 的值。

[圣杯布局/管理后台 (Fixed Rows & Areas)](./demo/fixed-rows-areas.vue?show=vertical)

- `rows` 和 `rowSpan` 的垂直控制力。

[响应式隐藏与强制排序 (Suffix & Display None)](./demo/suffix-display-none.vue?show=vertical)

- `span: 0` 彻底移除 DOM 占位，`suffix` 跨越所有动态项。

[图片画廊 / 瀑布流（Bento Grid 风格）](./demo/bento.vue?show=vertical)

- 非对称布局

[复杂数据详情页（对齐与留白）](./demo/align-white-space.vue?show=vertical)

- 描述列表（Descriptions）的效果，但在不同屏幕下自动调整展示密度。

[Hero Section 叠加布局（Layering）](./demo/hero-section.vue?show=vertical)

- `grid-column-start` 和 `grid-row-start` 的重叠能力,文字浮动在图片某处

[响应式底栏 / 菜单（Footer Strategy）](./demo/footer-strategy.vue?show=vertical)

- 从“多列垂直排列”到“单列折叠”的极致压缩。

[布局层级设计 (Architecture)](./demo/architecture.vue?show=vertical)

- 第一层：Layout 系列 —— 页面大骨架（Header + Sider + Content）。
- 第二层：Grid 系列 —— 内容区的主要 2D 布局（统计卡片、Bento 图表矩阵）。
- 第三层：Row/Col —— 简单的 1D 比例划分（如底部的两个并排表格）。
- 第四层：Flex —— 极细微的内容对齐（卡片标题 + 图标）。

## Grid API

| 属性         | 说明                                                              | 类型                      | 默认值 |
| ------------ | ----------------------------------------------------------------- | ------------------------- | ------ |
| cols         | 设置网格的列数。支持数字（平分）或字符串（如 1fr 2fr）            | Number,String,Object      | 24     |
| rows         | 设置网格的行数或高度。默认为 auto                                 | Number,String,Object      | auto   |
| autoRows     | 隐式网格行高。在 Bento 布局或瀑布流中用于设定基准高度。           | String                    | auto   |
| xGap         | 水格间距（水平方向）。数字类型会自动补充 px 单位。                | Number,String,Object      | 0      |
| yGap         | 行间距（垂直方向）。数字类型会自动补充 px 单位。                  | Number,String,Object      | 0      |
| itemMinWidth | 自动填充模式。设置子项最小宽度，Grid 将根据容器宽度自动计算列数。 | Number                    | -      |
| align        | 子项在网格单元格内的垂直对齐方式                                  | String ( center, start..) | -      |
| justify      | 子项在网格单元格内的水平对齐方式。                                | String ( center, start..) | -      |
| debug        | 调试模式。开启后会显示红色透明背景列，方便开发者校对布局。        | Boolean                   | false  |

## GridItem API

| 属性    | 说明                                                       | 类型                 | 默认值 |
| ------- | ---------------------------------------------------------- | -------------------- | ------ |
| span    | 占据的列数。设为 0 时会在该断点下彻底隐藏（display: none） | Number,String,Object | 1      |
| rowSpan | 占据的行数。配合容器的 autoRows 可实现非对称布局           | Number,String,Object | 1      |
| offset  | 左侧偏移的列数。用于在不使用空白占位符的情况下产生留白。   | Number, Object       | 0      |
| suffix  | 尾部固定。设为 true 时，该项将强制移动到当前行的末尾。     | Boolean              | false  |

## Breakpoints

| 标识符 | 全称              | 阈值 (宽度 w) | 典型场景                |
| ------ | ----------------- | ------------- | ----------------------- |
| xs     | Extra Small       | 0≤w<576px     | 手机竖屏 (Phones)       |
| sm     | Small             | 576≤w<768px   | 手机横屏 / 小型平板     |
| md     | Medium            | 768≤w<992px   | 中型平板 (如 iPad)      |
| lg     | Large             | 992≤w<1200px  | 笔记本电脑 / 小屏显示器 |
| xl     | Extra Large       | 1200≤w<1600px | 标准桌面显示器          |
| xxl    | Extra Extra Large | w≥1600px      | 高分辨率大屏 / 宽屏     |
