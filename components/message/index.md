## API

组件提供了一些静态方法，使用方式如下

- `message.info(content, [duration], onClose)`
- `message.success(content, [duration], onClose)`
- `message.warning(content, [duration], onClose)`
- `message.error(content, [duration], onClose)`

另外提供了全局配置和全局销毁的方法：

- `message.show(options)`
- `message.destroy()`
- `message.useMessage()`

参数 `options` 为对象，具体说明如下：

| 属性     | 说明                                                              | 类型         | 默认值 |
| -------- | ----------------------------------------------------------------- | ------------ | ------ |
| type     | 提示类型，提供 `info`、`success`、`error`、`warning` 四种可选类型 | String       | info   |
| content  | 提示内容                                                          | String,Vnode | -      |
| duration | 自动关闭的延时，单位秒，0 为 不自动关闭                           | Number       | 3      |
| closable | 是否可手动关闭                                                    | Boolean      | false  |
| onClose  | 关闭时的回调                                                      | Function     | -      |
| icon     | 自定义图标                                                        | String       | -      |
| color    | 自定义图标颜色                                                    | String       | -      |
