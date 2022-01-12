<cn>
#### 上传文件夹
通过传入 directory 为 true，可以支持上传文件夹下的所有文件
</cn>

```vue
<template>
  <Upload 
    action="https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2" 
    name="file"
    directory
    :headers="headers"
    @change="handleChange"
    >
    <Button icon="cloud-upload-outline">Click to upload</Button>
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
    }
  }
}
</script>
```