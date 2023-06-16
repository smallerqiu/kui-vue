
<cn>
#### 上传前处理图片
利用 transformFile 可以在文件上传前处理文件,
</cn>

```vue
<template>
  <Upload 
    action="https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2" 
    name="file"
    type="picture"
    :headers="headers"
    @change="handleChange"
    :transformFile="transformFile"
    :limit="1"
    accept="image/*"
    :uploadIcon="CameraOutline"
    uploadText="上传头像"
    >
  </Upload>
</template>
<script>
import { CameraOutline } from 'kui-icons'
export default{
  data() {
    return {
      CameraOutline,
      headers:{
        authorization: 'here is token'
      },
    }
  },
  methods:{
    transformFile(file){
      return new Promise((res, rej) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const img = new Image();
        img.onload = function () {
          canvas.width = Math.ceil(img.width / 8) * 8;
          canvas.height = Math.ceil(img.height / 8) * 8;
          ctx.drawImage(img, (img.width - canvas.width) / 2, (img.height - canvas.height) / 2, canvas.width, canvas.height);
          canvas.toBlob((blob) => {
            const file = new File([blob], file.name, { type: file.type });
            return res(file)
          });
        };
        img.src = URL.createObjectURL(file);
      })
    },
    handleChange(info){
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
    }
  }
}
</script>
```