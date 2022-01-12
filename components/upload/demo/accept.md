<cn>
#### 上传文件类型
通过 accept 属性（input的原生html` 属性）可以限制上传的文件类型。
accept 支持传入以下两种类型字符串：
- 文件后缀名集合（推荐），如 .jpg、.png 等；
- 文件类型的 MIME types 集合，可参考[MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types) 文档
>例如只允许用户上传 PNG 和 PDF 文件，accept 可以这样写： accept = '.pdf,.png' 或 accept = 'application/pdf,image/png'（将 PNG 与 PDF 的 MIME type 通过,连接起来即可）。
</cn>

```vue
<template>
  <Upload 
    action="https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2" 
    name="file"
    :headers="headers"
    @change="handleChange"
    multiple
    accept="image/*"
    >
    <Button icon="image-outline">Upload Image</Button>
  </Upload>
  <br/>
  <Upload 
    action="https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2" 
    name="file"
    :headers="headers"
    @change="handleChange"
    multiple
    accept="video/*"
    >
    <Button icon="videocam-outline">Upload Video</Button>
  </Upload>
  <br/>
  <Upload 
    action="https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2" 
    name="file"
    :headers="headers"
    @change="handleChange"
    multiple
    accept=".pdf,.png,.jpeg"
    >
    <Button icon="cloud-upload-outline">Upload PDF,PNG,JPEG</Button>
  </Upload>
</template>
<script>
export default{
  data(){
    return {
      headers:{
        authorization: 'here is token'
      }
    }
  },
  methods:{
    handleChange(info){
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'success') {
        this.$Message.success(`${info.file.filename} uploaded successfully`);
      } else if (info.file.status === 'error') {
        this.$Message.error(`${info.file.filename} upload failed.`);
      }
    }
  }
}
</script>
```