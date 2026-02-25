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
