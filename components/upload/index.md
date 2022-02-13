## Upload API

| 属性           | 说明                                                                                                                           | 类型           | 默认值 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------- | ------ |
| accept         | 接受上传的文件类型, 详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | String         | -      |
| action         | 上传的地址                                                                                                                     | String         | -      |
| method         | 上传请求的 http method                                                                                                         | String         | post   |
| data           | 上传所需参数                                                                                                                   | Object         | -      |
| disabled       | 是否禁用                                                                                                                       | Boolean        | false  |
| headers        | 设置上传的请求头部                                                                                                             | Object         | -      |
| multiple       | 是否支持多选文件                                                                                                               | Boolean        | false  |
| directory      | 是否支持上传目录                                                                                                               | Boolean        | false  |
| showUploadList | 是否显示上传列表                                                                                                               | Boolean        | true   |
| autoTrigger    | 是否自动上传                                                                                                                   | Boolean        | true   |
| draggable      | 是否支持拖拽上传                                                                                                               | Boolean        | false  |
| fileList       | 上传的文件列表                                                                                                                 | Array          | false  |
| name           | 发到后台的文件参数名                                                                                                           | String         | 'file' |
| uploadIcon     | 上传域的辅助图标                                                                                                               | String         | 'file' |
| uploadText     | 上传域的辅助文字                                                                                                               | String         | 'file' |
| uploadSubText  | 上传域的二级辅助文字                                                                                                           | String         | 'file' |
| limit          | 最多允许上传文件个数                                                                                                           | Number         | -      |
| minSize        | 上传文件最小单位(KB)                                                                                                           | String         | -      |
| maxSize        | 上传文件最大单位(KB)                                                                                                           | String         | -      |
| transformFile  | 在上传之前转换文件。支持返回一个 Promise 对象                                                                                  | Function(file) | -      |
| change         | 上传中、完成、失败都会调用这个函数                                                                                             | Function       | -      |
| remove         | 移除文件回调                                                                                                                   | Function       | -      |