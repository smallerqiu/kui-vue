### API
组件提供了一些静态方法，使用方式如下
 
  
- `this.$Notice.info(options)`
- `this.$Notice.success(options)`
- `this.$Notice.warning(options)`
- `this.$Notice.error(options)`

  

另外提供了全局配置和全局销毁的方法：
 
  
- `this.$Notice.open(options)`
- `this.$Notice.destroy()`

  
参数 `options` 为对象，具体说明如下：

| 属性     | 说明                                   | 类型          | 默认值 |
| -------- | -------------------------------------- | ------------- | ------ |
| title    | 通知提醒的标题                         | String        | -      |
| content  | 提示内容                               | String ,vndoe | -      |
| duration | 自动关闭的延时，单位秒，不关闭可以写 0 | Number        | 3      |
| close    | 关闭时的回调                           | Function      | -      |
| icon     | 自定义图标                             | String        | -      |
| color    | 自定义图标颜色                         | String        | -      |