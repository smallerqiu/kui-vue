#### API
| 属性        | 说明                                         | 类型             | 默认值 |
|-------------|----------------------------------------------|------------------|--------|
| width       | 组件的宽度                                   | [String、Number] | -      |
| height      | 组件的高度                                   | [String、Number] | -      |
| src         | 图片默认展示的地址                           | String           | -      |
| type        | 使Preview 展示video标签，取值['img','media'] | String           | img    |
| origin      | 点击图片展示的大图                           | String           | -      |
| placeholder | 图片加载失败时展示的占位符                   | String           | -      |
| imgStyle    | 图片的style                                  | Object           | -      |
| showPanel   | 默认是否展示扩展面板                         | Boolean          | false  |
| close       | 关闭触发事件                                 | Function         | -      |
| switch      | 多图切换触发事件                             | Function(index)  | -      |
| tool        | 自定义工具栏按钮                             | slot             | -      |
| panel       | 自定义扩展面板                               | slot             | -      |

#### Image.method()

组件提供了一些静态方法 `this.$Image.show(options)`

参数 options 为对象，具体说明如下：
| 属性  | 说明                             | 类型             | 默认值 |
|-------|----------------------------------|------------------|--------|
| src   | 显示单张图片预览地址             | String           | -      |
| data  | 多图模式地址集合                 | Array            | -      |
| index | 多图模式，指定默认显示第几张图片 | [String、Number] | -      |
| slots | 自定义扩展面板插槽               | Object           | -      |
| on    | 自定义事件集合                   | Object           | -      |

```js
options = {
  src:'https://xxx',
  data:[
    'https://xxx',
    'https://xxx',
  ],
  index:0,
  slots:{
    tool: VNode, //or[VNode,VNode]
    panel: VNode //or[VNode,VNode]
  },
  on:{
    switch:()=>{},
    close:()=>{},
  }
}
```