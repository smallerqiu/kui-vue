<cn>
#### 上传多个文件
通过设置 multiple 属性可以支持同时选中多个文件上传。
>不设置为默认, 只能上传一个文件
</cn>

```vue
<template>
  <Upload 
    action="https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2" 
    name="file"
    :headers="headers"
    @change="handleChange"
    multiple
    >
    <Button :icon="CloudUploadOutline">Click to upload</Button>
  </Upload>
</template>
<script>
import { CloudUploadOutline } from "kui-icons";
export default{
  data() {
    return {
      CloudUploadOutline,
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