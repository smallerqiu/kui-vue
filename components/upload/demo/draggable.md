<cn>
#### 拖拽上传
draggable='true'，可以使用拖拽功能
</cn>

```vue
<template>
  <div style="width:556px">
    <Upload 
      action="https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2" 
      name="file"
      :headers="headers"
      draggable
      uploadIcon="cloud-upload-outline"
      uploadText="点击上传文件或拖拽文件到这里"
      uploadSubText="支持任意类型文件"
      @change="handleChange"
      >
    </Upload>
  </div>
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