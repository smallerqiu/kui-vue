
<cn>
#### 上传头像
limit等于上传文件数量时, 则不显示选择文件组件,
</cn>

```vue
<template>
  <Upload 
    action="https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2" 
    name="file"
    type="picture"
    :headers="headers"
    @change="handleChange"
    :limit="1"
    accept="image/*"
    uploadIcon="camera-outline"
    uploadText="上传头像"
    >
  </Upload>
</template>
<script>
export default{
  data(){
    return {
      headers:{
        authorization: 'here is token'
      },
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