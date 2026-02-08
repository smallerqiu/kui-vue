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
