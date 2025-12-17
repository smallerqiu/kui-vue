## API

| 属性        | 说明                                            | 类型             | 默认值 |
| ----------- | ----------------------------------------------- | ---------------- | ------ |
| width       | 组件的宽度                                      | [String、Number] | -      |
| height      | 组件的高度                                      | [String、Number] | -      |
| src         | 图片默认展示的地址                              | String           | -      |
| type        | 使 Preview 展示 video 标签，取值['img','media'] | String           | img    |
| origin      | 点击图片展示的大图                              | String           | -      |
| placeholder | 图片加载失败时展示的占位符                      | String           | -      |
| imgStyle    | 图片的 style                                    | Object           | -      |
| showPanel   | 默认是否展示扩展面板                            | Boolean          | false  |
| close       | 关闭触发事件                                    | Function         | -      |
| switch      | 多图切换触发事件                                | Function(index)  | -      |
| tool        | 自定义工具栏按钮                                | slot             | -      |
| panel       | 自定义扩展面板                                  | slot             | -      |
