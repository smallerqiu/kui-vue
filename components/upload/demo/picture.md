<cn>
#### 照片墙
设置 type = 'picture'，用户可以上传图片并在列表中显示缩略图
</cn>

```vue
<template>
  <Upload 
    action="https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2" 
    name="file"
    type="picture"
    :headers="headers"
    @change="handleChange"
    :fileList="fileList"
    accept="image/*"
    uploadText="上传图片"
    >
  </Upload>
</template>
<script>
export default{
  data() {
    return {
      headers:{
        authorization: 'here is token'
      },
      fileList:[
        {
          url:'https://cdn.chuchur.com/upload/demo/test_300.jpg',
          status:'uploading',
          filename:'test.jpg',
          size:'222kb',
          percent:50,
          status:'uploading'
        },
        {
          url:'https://cdn.chuchur.com/upload/demo/test_300.jpg',
          status:'error',
          filename:'test.jpg',
          size:'222kb'
        },
      ]
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