# Notice 通知提醒框

全局展示通知提醒信息。

## 何时使用

在系统四个角显示通知提醒信息。经常用于以下情况：

- 较为复杂的通知内容。
- 带有交互的通知，给出用户下一步的行动点。
- 系统主动推送。

## 代码演示

[自定义时长](./demo/close.vue)
- 可以自定义配置，其中 `duration` 来控制自动关闭时长,默认 `3s`

[自定义图标](./demo/icon.vue)
- 自定义图标

[带图标的提醒](./demo/types.vue)
- 通过调用不同的方法，可展示不同的类型


## API

组件提供了一些静态方法，使用方式如下

- `notice.info(options)`
- `notice.success(options)`
- `notice.warning(options)`
- `notice.error(options)`

另外提供了全局配置和全局销毁的方法：

- `notice.open(options)`
- `notice.destroy()`

参数 `options` 为对象，具体说明如下：

| 属性     | 说明                                   | 类型          | 默认值 |
| -------- | -------------------------------------- | ------------- | ------ |
| title    | 通知提醒的标题                         | String        | -      |
| content  | 提示内容                               | String ,vndoe | -      |
| duration | 自动关闭的延时，单位秒，不关闭可以写 0 | Number        | 3      |
| close    | 关闭时的回调                           | Function      | -      |
| icon     | 自定义图标                             | String        | -      |
| color    | 自定义图标颜色                         | String        | -      |
