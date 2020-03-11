## API
| 属性               | 说明                            | 类型       | 默认值              |
|------------------|-------------------------------|----------|------------------|
| current          | 当前页码                          | Number   | 1                |
| total            | 数据总数                          | Number   | 0                |
| pagesize         | 每页条数                          | Number   | 10               |
| show-sizer       | 是否显示页码组                       | Boolean  | false            |
| show-total       | 是否显示总数                        | Boolean  | false            |
| show-elevator    | 是否显示页码阶梯                      | Boolean  | false            |
| size-data        | 自定义页码组数据                      | Array    | [10,15,20,30,40] |
| mini             | 是否呈现迷你模式                      | Boolean  | false            |
| change           | 页码改变的回调，返回改变后的页码              | Function | -                |
| page-size-change | 切换页码组改变的回调，返回改变后的 `page-size` | Function | -                |