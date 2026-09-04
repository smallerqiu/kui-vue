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

- Use the `accept` attribute (a native HTML input attribute) to restrict the types of files that can be uploaded. `accept` supports two types of string values: - A set of file extensions (recommended), such as `.jpg`, `.png`, etc.
- A set of MIME types for files. Refer to the [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types) documentation. For example, to only allow users to upload PNG and PDF files, `accept` can be written as: `accept = '.pdf,.png'` or `accept = 'application/pdf,image/png'` (simply connect the MIME types for PNG and PDF with a comma).

[Pre-upload Image Processing](./demo/transform.vue)

- Use `transformFile` to process the file before it is uploaded, for example, to compress it.

[Upload Restrictions](./demo/exceed.vue)

- `limit` restricts the number of uploads. The `minSize` and `maxSize` attributes allow you to customize file size limits for uploads.

[Manual Upload / Custom Properties](./demo/custom.vue)

- By setting `data` and `headers`, you can add custom upload properties. When `autoTrigger='false'`, selecting a file will not automatically trigger the upload. You need to manually call the `upload` method on the ref to trigger it. `name` is the uploaded filename.

[Custom Request and Upload Queue](./demo/custom-request.vue)

- Integrates a custom upload service with pre-upload validation, concurrency limits, progress, cancellation, and retry.

[File Validation](./demo/validation.vue)

- Validates the actual type and size of selected or dropped files.

[Photo Wall](./demo/pictures.vue)

- Set `type="picture"` to display thumbnails. Enable `sortable` to reorder them, and click an image to preview it.

[Upload Avatar](./demo/avatar.vue)

- When `limit` equals the number of uploaded files, the file selection component will not be displayed.

[Drag and Drop Upload](./demo/draggable.vue)

- Set `draggable='true'` to enable drag-and-drop functionality.

[Form Validation](./demo/forms.vue)

- Upload form validation.

## Upload API

| Property        | Description                                                                                                 | Type                                                  | Default  |
| --------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | -------- |
| accept          | Accepted upload file types, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept | string                                                | -        |
| action          | Upload address                                                                                              | string                                                | -        |
| method          | HTTP method for upload request                                                                              | string                                                | post     |
| data            | Other parameters that may be required for upload                                                            | Record<string, string \| number \| boolean \| Blob>   | {}       |
| disabled        | Whether disabled                                                                                            | boolean                                               | false    |
| readonly        | Read-only; displays files without selecting, uploading or removing                                          | boolean                                               | false    |
| headers         | Set upload request headers                                                                                  | Object                                                | -        |
| withCredentials | Include credentials in cross-origin requests                                                                | boolean                                               | false    |
| timeout         | Request timeout in milliseconds                                                                             | number                                                | 0        |
| customRequest   | Custom upload implementation                                                                                | UploadCustomRequest                                   | -        |
| parseResponse   | Custom XHR response parser                                                                                  | (xhr: XMLHttpRequest) => unknown                      | -        |
| multiple        | Whether to support multiple file selection                                                                  | boolean                                               | false    |
| directory       | Whether to support directory upload                                                                         | boolean                                               | false    |
| showUploadList  | Whether to show upload list                                                                                 | boolean                                               | true     |
| autoTrigger     | Whether to auto upload                                                                                      | boolean                                               | true     |
| draggable       | Whether to support drag and drop upload                                                                     | boolean                                               | false    |
| sortable        | Whether pictures can be reordered                                                                           | boolean                                               | false    |
| preview         | Whether clicking a picture opens image preview                                                              | boolean                                               | true     |
| validateAccept  | Whether to validate file types                                                                              | boolean                                               | true     |
| maxConcurrent   | Maximum concurrent uploads                                                                                  | number                                                | Infinity |
| fileList        | Uploaded file list                                                                                          | UploadFile[]                                          | -        |
| defaultFileList | Initial file list in uncontrolled mode                                                                      | UploadFile[]                                          | []       |
| name            | File parameter name sent to backend, default `file`                                                         | string                                                | 'file'   |
| uploadIcon      | Auxiliary icon for upload area                                                                              | IconType                                              | Add      |
| uploadText      | Auxiliary text for upload area                                                                              | string                                                | -        |
| uploadSubText   | Secondary auxiliary text for upload area                                                                    | string                                                | -        |
| limit           | Maximum number of files allowed to upload                                                                   | number                                                | -        |
| minSize         | Minimum file size unit for upload (KB)                                                                      | number                                                | -        |
| maxSize         | Maximum file size unit for upload (KB)                                                                      | number                                                | -        |
| transformFile   | Transform file before uploading                                                                             | (file: File) => File \| Blob \| Promise<File \| Blob> | -        |
| type            | Display style after selecting files                                                                         | `picture \| list`                                     | list     |

## Event API

| Property       | Description                                                 | Parameters                                                           |
| -------------- | ----------------------------------------------------------- | -------------------------------------------------------------------- |
| onChange       | Triggered during upload, completion, failure                | (event: UploadChangeEvent) => void                                   |
| onSelectFiles  | Triggered when files are selected, returns selected files   | (files: UploadFile[]) => void                                        |
| onRemove       | Callback when file is removed                               | (event: UploadChangeEvent) => void                                   |
| onExceed       | Callback when limit is exceeded                             | () => void                                                           |
| onSizeError    | Callback when minSize, maxSize error occurs                 | (event: UploadChangeEvent) => void                                   |
| onTypeError    | Called when a file does not match accept                    | (event: UploadChangeEvent) => void                                   |
| onSort         | Called after picture order changes                          | (event: UploadSortEvent) => void                                     |
| onBeforeUpload | Validate or transform before upload; return `false` to stop | (item: UploadFile, file: File) => boolean \| File \| Blob \| Promise |

## Methods

| Name   | Description                         | Parameters        |
| ------ | ----------------------------------- | ----------------- |
| upload | Upload waiting files                | -                 |
| abort  | Abort one file, or all when omitted | file?: UploadFile |
| retry  | Retry a file                        | file: UploadFile  |
