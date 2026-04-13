# Upload

Uploading is the process of publishing information (web pages, text, images, videos, etc.) to a remote server through a web page or upload tool.

## When to Use

- When one or some files need to be uploaded.
- When upload progress needs to be displayed.
- When drag-and-drop interaction needs to be used.

## Examples

[Click to Upload](./demo/basic.vue)

- Classic style. When the user clicks the button, a file selection dialog pops up.

[Upload Multiple Files](./demo/file-list.vue)

- By setting the `multiple` attribute, you can support selecting and uploading multiple files simultaneously. If not set, only one file can be uploaded by default.

[Upload Folder](./demo/directory.vue)

- By setting `directory` to `true`, you can support uploading all files from a folder.

[Upload File Types](./demo/accept.vue)

- Use the `accept` attribute (a native HTML input attribute) to restrict the types of files that can be uploaded. `accept` supports two types of string values: - A set of file extensions (recommended), such as `.jpg`, `.png`, etc. - A set of MIME types for files. Refer to the [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types) documentation. For example, to only allow users to upload PNG and PDF files, `accept` can be written as: `accept = '.pdf,.png'` or `accept = 'application/pdf,image/png'` (simply connect the MIME types for PNG and PDF with a comma).

[Pre-upload Image Processing](./demo/transform.vue)

- Use `transformFile` to process the file before it is uploaded, for example, to compress it.

[Upload Restrictions](./demo/exceed.vue)

- `limit` restricts the number of uploads. The `minSize` and `maxSize` attributes allow you to customize file size limits for uploads.

[Manual Upload / Custom Properties](./demo/custom.vue)

- By setting `data` and `headers`, you can add custom upload properties. When `autoTrigger='false'`, selecting a file will not automatically trigger the upload. You need to manually call the `upload` method on the ref to trigger it. `name` is the uploaded filename.

[Photo Wall](./demo/pictures.vue)

- Set `type = 'picture'` to allow users to upload images and display thumbnails in a list.

[Upload Avatar](./demo/avatar.vue)

- When `limit` equals the number of uploaded files, the file selection component will not be displayed.

[Drag and Drop Upload](./demo/draggable.vue)

- Set `draggable='true'` to enable drag-and-drop functionality.

[Form Validation](./demo/forms.vue)

- Upload form validation.

## Upload API

| Property       | Description                                                                                                 | Type           | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------- | -------------- | ------- |
| accept         | Accepted upload file types, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept | String         | -       |
| action         | Upload address                                                                                              | String         | -       |
| method         | HTTP method for upload request                                                                              | String         | post    |
| data           | Other parameters that may be required for upload                                                            | Object         | -       |
| disabled       | Whether disabled                                                                                            | Boolean        | false   |
| headers        | Set upload request headers                                                                                  | Object         | -       |
| multiple       | Whether to support multiple file selection                                                                  | Boolean        | false   |
| directory      | Whether to support directory upload                                                                         | Boolean        | false   |
| showUploadList | Whether to show upload list                                                                                 | Boolean        | true    |
| autoTrigger    | Whether to auto upload                                                                                      | Boolean        | true    |
| draggable      | Whether to support drag and drop upload                                                                     | Boolean        | false   |
| fileList       | Uploaded file list                                                                                          | Array          | false   |
| name           | File parameter name sent to backend, default `file`                                                         | String         | 'file'  |
| uploadIcon     | Auxiliary icon for upload area                                                                              | String         | Add     |
| uploadText     | Auxiliary text for upload area                                                                              | String         | -       |
| uploadSubText  | Secondary auxiliary text for upload area                                                                    | String         | -       |
| limit          | Maximum number of files allowed to upload                                                                   | Number         | -       |
| minSize        | Minimum file size unit for upload (KB)                                                                      | String         | -       |
| maxSize        | Maximum file size unit for upload (KB)                                                                      | String         | -       |
| transformFile  | Transform file before uploading. Supports returning a Promise object                                        | Function(file) | -       |

## Event API

| Property       | Description                                               | Parameters                 |
| -------------- | --------------------------------------------------------- | -------------------------- |
| onChange       | Triggered during upload, completion, failure              | Function({item, fileList}) |
| onSelectFiles  | Triggered when files are selected, returns selected files | Function(fileList)         |
| onRemove       | Callback when file is removed                             | Function({item, fileList}) |
| onExceed       | Callback when limit is exceeded                           | Function({item, fileList}) |
| onSizeError    | Callback when minSize, maxSize error occurs               | Function({item, fileList}) |
| onBeforeUpdate | Callback before upload                                    | Function({item, fileList}) |
