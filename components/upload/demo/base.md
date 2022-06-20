<cn>
#### 点击上传
经典款式，用户点击按钮弹出文件选择框。
</cn>

```vue
<template>
  <Upload 
    action="https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2" 
    name="file"
    :headers="headers"
    @change="handleChange"
    >
    <Button :icon="CloudUpload">Click to upload</Button>
  </Upload>
</template>
<script>
import { CloudUpload } from "kui-icons";
export default{
  data() {
    return {
      CloudUpload,
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