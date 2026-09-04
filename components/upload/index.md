# Upload 上传

上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

## 何时使用

- 当需要上传一个或一些文件时。
- 当需要展现上传的进度时。
- 当需要使用拖拽交互时。

## 代码演示

[点击上传](./demo/basic.vue)

- 经典款式，用户点击按钮弹出文件选择框。

[上传多个文件](./demo/file-list.vue)

- 通过设置 multiple 属性可以支持同时选中多个文件上传。 不设置为默认, 只能上传一个文件

[上传文件夹](./demo/directory.vue)

- 通过传入 directory 为 true，可以支持上传文件夹下的所有文件

[上传文件类型](./demo/accept.vue)

- 通过 accept 属性（input的原生html` 属性）可以限制上传的文件类型。 accept 支持传入以下两种类型字符串： 文件后缀名集合（推荐），如 .jpg、.png 等； 文件类型的 MIME types 集合，可参考[MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types) 文档 例如只允许用户上传 PNG 和 PDF 文件，accept 可以这样写： accept = '.pdf,.png' 或 accept = 'application/pdf,image/png'（将 PNG 与 PDF 的 MIME type 通过,连接起来即可）。

[上传前处理图片](./demo/transform.vue)

- 利用 transformFile 可以在文件上传前处理文件, 上传之前压缩等

[上传限制](./demo/exceed.vue)

- limit 限制上传数量, minSize 和 maxSize 属性可以自定义上传文件大小的限制。

[手动上传/自定义属性](./demo/custom.vue)

- 通过设置 data、headers 可添加自定义上传属性 autoTrigger='false'，选中文件后将不会自动触发上传。需要手动调用 ref 上的 upload 方法触发 name 为上传文件名

[自定义请求与上传队列](./demo/custom-request.vue)

- 使用 `customRequest` 接入上传服务，并演示上传前校验、并发限制、进度、取消和重试。

[文件校验](./demo/validation.vue)

- 对选择或拖入的文件执行真实的类型与大小校验。

[照片墙](./demo/pictures.vue)

- 设置 `type="picture"` 展示缩略图；开启 `sortable` 后可拖动调整顺序，点击图片可预览。

[上传头像](./demo/avatar.vue)

- limit等于上传文件数量时, 则不显示选择文件组件,

[拖拽上传](./demo/draggable.vue)

- draggable='true'，可以使用拖拽功能

[表单校验](./demo/forms.vue)

- 上传表单校验

## Upload API

| 属性            | 说明                                                                                                                           | 类型                                                  | 默认值   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- | -------- |
| accept          | 接受上传的文件类型, 详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string                                                | -        |
| action          | 上传的地址                                                                                                                     | string                                                | -        |
| method          | 上传请求的 http method                                                                                                         | string                                                | post     |
| data            | 上传可能所需的其它参数                                                                                                         | Record<string, string \| number \| boolean \| Blob>   | {}       |
| disabled        | 是否禁用                                                                                                                       | boolean                                               | false    |
| readonly        | 是否只读，仅展示文件，不可选择、上传或删除                                                                                     | boolean                                               | false    |
| headers         | 设置上传的请求头部                                                                                                             | Object                                                | -        |
| withCredentials | 跨域请求是否携带凭证                                                                                                           | boolean                                               | false    |
| timeout         | 请求超时时间（毫秒），`0` 表示不限制                                                                                           | number                                                | 0        |
| customRequest   | 自定义上传请求                                                                                                                 | UploadCustomRequest                                   | -        |
| parseResponse   | 自定义 XHR 响应解析                                                                                                            | (xhr: XMLHttpRequest) => unknown                      | -        |
| multiple        | 是否支持多选文件                                                                                                               | boolean                                               | false    |
| directory       | 是否支持上传目录                                                                                                               | boolean                                               | false    |
| showUploadList  | 是否显示上传列表                                                                                                               | boolean                                               | true     |
| autoTrigger     | 是否自动上传                                                                                                                   | boolean                                               | true     |
| draggable       | 是否支持拖拽上传                                                                                                               | boolean                                               | false    |
| sortable        | 照片墙是否支持拖动排序                                                                                                         | boolean                                               | false    |
| preview         | 点击照片是否打开图片预览                                                                                                       | boolean                                               | true     |
| validateAccept  | 是否校验文件类型                                                                                                               | boolean                                               | true     |
| maxConcurrent   | 最大并发上传数                                                                                                                 | number                                                | Infinity |
| fileList        | 上传的文件列表                                                                                                                 | UploadFile[]                                          | []       |
| defaultFileList | 非受控模式的初始文件列表                                                                                                       | UploadFile[]                                          | []       |
| name            | 发到后台的文件参数名,默认`file`                                                                                                | string                                                | 'file'   |
| uploadIcon      | 上传域的辅助图标                                                                                                               | IconType                                              | Add      |
| uploadText      | 上传域的辅助文字                                                                                                               | string                                                | -        |
| uploadSubText   | 上传域的二级辅助文字                                                                                                           | string                                                | -        |
| limit           | 最多允许上传文件个数                                                                                                           | number                                                | -        |
| minSize         | 上传文件最小单位(KB)                                                                                                           | number                                                | -        |
| maxSize         | 上传文件最大单位(KB)                                                                                                           | number                                                | -        |
| transformFile   | 在上传之前转换文件                                                                                                             | (file: File) => File \| Blob \| Promise<File \| Blob> | -        |
| type            | 选择上传文件之后所呈现的形式                                                                                                   | `picture \| list`                                     | list     |

## Event API

| 属性           | 说明                                      | 属性                                                                 |
| -------------- | ----------------------------------------- | -------------------------------------------------------------------- |
| onChange       | 上传中、完成、失败都会触发                | (event: UploadChangeEvent) => void                                   |
| onSelectFiles  | 选中文件时触发,返回选中的文件             | (files: UploadFile[]) => void                                        |
| onRemove       | 移除文件回调                              | (event: UploadChangeEvent) => void                                   |
| onExceed       | limit异常时回调                           | () => void                                                           |
| onSizeError    | minSize, maxSize异常时回调                | (event: UploadChangeEvent) => void                                   |
| onTypeError    | 文件类型不符合 accept 时触发              | (event: UploadChangeEvent) => void                                   |
| onSort         | 照片顺序改变时触发                        | (event: UploadSortEvent) => void                                     |
| onBeforeUpload | 上传前校验或转换；返回 `false` 可阻止上传 | (item: UploadFile, file: File) => boolean \| File \| Blob \| Promise |

## Methods

| 名称   | 说明                         | 参数              |
| ------ | ---------------------------- | ----------------- |
| upload | 上传等待中的文件             | -                 |
| abort  | 取消指定文件；不传则取消全部 | file?: UploadFile |
| retry  | 重试文件                     | file: UploadFile  |
