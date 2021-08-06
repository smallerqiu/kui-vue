## API

| 属性          | 说明                                          | 类型           | 默认值 |
|---------------|-----------------------------------------------|----------------|--------|
| value         | 对话框是否显示，可使用 v-model 双向绑定数据。 | Boolean        | false  |
| title         | 对话框标题                                    | String         | -      |
| width         | 对话框宽度                                    | Number, String | 520    |
| ok-text       | 确定按钮文字                                  | String         | 确定   |
| cancel-text   | 取消按钮文字                                  | String         | 取消   |
| draggable      | 弹框是否可拖动, confirm模式不可用             | Boolean        | false  |
| centered     | 窗口是否可以居中 , confirm模式不可用          | Boolean        | false  |
| maximized        | 弹框是否可以最大化显示 , confirm模式不可用    | Boolean        | false  |
| mask-closable | 是否点击遮罩关闭弹窗, 为否时Esc键将失效       | Boolean        | true   |
| ok            | 点击确定的回调，`注意：不会关闭 Modal `                              | Function       | -      |
| cancel        | 点击取消的回调                                | Function       | -      |
| close         | 窗口关闭的回调                                | Function       | -      |
  

## Modal.method()

组件提供了一些静态方法，使用方式如下

* this.$Modal.info(options)
* this.$Modal.success(options)
* this.$Modal.warning(options)
* this.$Modal.error(options)
* this.$Modal.show(options)
* this.$Modal.confirm(options)

另外提供了全局配置和全局销毁的方法：

* this.$Modal.show(options)
* this.$Modal.destroyAll()

参数 options 为对象，具体说明如下：

| 属性        | 说明                                                                                                                   | 类型     | 默认值 |
|-------------|------------------------------------------------------------------------------------------------------------------------|----------|--------|
| title       | 对话框标题                                                                                                             | String   | -      |
| content     | 对话框内容                                                                                                             | String   | -      |
| ok-text     | 确定按钮文字                                                                                                           | String   | 确定   |
| cancel-text | 取消按钮文字                                                                                                           | String   | 取消   |
| icon        | 弹框的图标，type为toast可用 ，默认可选值为success，warning, error, info, 也可以自定义，参照 [Icon](/components/icon)值 | String   | -      |
| color       | 弹框的图标的颜色，type为toast可用                                                                                      | String   | -      |
| onOk        | 点击确定的回调                                                                                                         | Function | -      |
| onCancel    | 点击取消的回调                                                                                                         | Function | -      |
