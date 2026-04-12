# StatCard 统计卡片

统计指标,可设置标题 , 数值 , 描述

## 何时使用

可在 BI / Dashboard 场景 使用 , 偏业务后台，直观

## 代码演示

[卡片展示](./demo/card.vue)
- 用于 Dashboard 场景 , 结合 `Grid` 可以很好的适配多种设备.

[奇奇怪怪的卡片](./demo/withCard.vue)
- 


## StatCard API

| 属性           | 说明                      | 类型              | 默认值    |
| -------------- | ------------------------- | ----------------- | --------- |
| title          | 卡片标题                  | String            | -         |
| items          | 展示的数据                | Array             | []        |
| precision      | 数值精度                  | Number            | 0         |
| statNumberType | 数值变化类型              | `rollup, countup` | 'countup' |
| separator      | 分隔符                    | String            | -         |
| reverse        | 数值/数值描述是否反相排列 | Boolean           | false     |

### items Options

| 属性      | 说明                 | 类型   | 默认值 |
| --------- | -------------------- | ------ | ------ |
| value     | 数值                 | Number | -      |
| desc      | 数值描述             | String | []     |
| prefix    | 数值的前置内容       | String | -      |
| suffix    | 数值的后置内容       | String | -      |
| precision | 数值精度             | Number | 0      |
| separator | 分隔符               | String | -      |
| duration  | 数值动态展示时间(秒) | Number | 1.2    |

## StatNumber API

| 属性      | 说明                 | 类型              | 默认值    |
| --------- | -------------------- | ----------------- | --------- |
| value     | 数值                 | Number            | -         |
| duration  | 数值动态展示时间(秒) | Number            | 1.2       |
| prefix    | 数值的前置内容       | String            | -         |
| suffix    | 数值的后置内容       | String            | -         |
| precision | 数值精度             | Number            | 0         |
| type      | 数值变化类型         | `rollup, countup` | 'countup' |
| separator | 分隔符               | String            | -         |
