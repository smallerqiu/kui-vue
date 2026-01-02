## StatCard API

| 属性  | 说明         | 类型              | 默认值    |
| ----- | ------------ | ----------------- | --------- |
| title | 卡片标题     | String            | -         |
| items | 展示的数据   | Array             | []        |
| statNumberType  | 数值变化类型 | `rollup, countup` | 'countup' |

### items Options

| 属性     | 说明                 | 类型   | 默认值 |
| -------- | -------------------- | ------ | ------ |
| value    | 数值                 | Number | -      |
| desc     | 数值描述             | String | []     |
| prefix   | 数值的前置内容       | String | -      |
| suffix   | 数值的后置内容       | String | -      |
| duration | 数值动态展示时间(秒) | Number | 1.2    |

## StatNumber API

| 属性      | 说明                 | 类型              | 默认值    |
| --------- | -------------------- | ----------------- | --------- |
| value     | 数值                 | Number            | -         |
| duration  | 数值动态展示时间(秒) | Number            | 1.2       |
| prefix    | 数值的前置内容       | String            | -         |
| suffix    | 数值的后置内容       | String            | -         |
| precision | 数值精度             | Number            | 0         |
| type      | 数值变化类型         | `rollup, countup` | 'countup' |
