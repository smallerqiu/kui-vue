# Message 全局提示

全局展示操作反馈信息。

## 何时使用

- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## 代码演示

[自定义时长](./demo/close.vue)
- 可以自定义配置，其中 `duration` 来控制自动关闭时长,默认 `3s` , `closable` 显示关闭按钮

[自定图标](./demo/icon.vue)
- 自定图标。

[提示类型](./demo/types.vue)
- 通过 `type` 来设置提示类型


## API

组件提供了一些静态方法，使用方式如下

- `message.info(content, [duration], onClose)`
- `message.success(content, [duration], onClose)`
- `message.warning(content, [duration], onClose)`
- `message.error(content, [duration], onClose)`

另外提供了全局配置和全局销毁的方法：

- `message.show(options)`
- `message.destroy()`

参数 `options` 为对象，具体说明如下：

| 属性     | 说明                                                              | 类型         | 默认值 |
| -------- | ----------------------------------------------------------------- | ------------ | ------ |
| type     | 提示类型，提供 `info`、`success`、`error`、`warning` 四种可选类型 | String       | info   |
| content  | 提示内容                                                          | String,Vnode | -      |
| duration | 自动关闭的延时，单位秒，0 为 不自动关闭                           | Number       | 3      |
| closable | 是否可手动关闭                                                    | Boolean      | false  |
| close    | 关闭时的回调                                                      | Function     | -      |
| icon     | 自定义图标                                                        | String       | -      |
| color    | 自定义图标颜色                                                    | String       | -      |
