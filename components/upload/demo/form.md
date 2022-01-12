
<cn>
#### 表单校验
上传表单校验
</cn>

```vue
<template>
  <Form :model="form" :rules="rules" @submit="submit" :wrapperCol="wrapperCol" :labelCol="labelCol" ref="form">
    <FormItem label="图像" prop="avatar">
      <Upload 
        action="https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2" 
        name="file"
        type="picture"
        :headers="headers"
        @change="uploadAvatar"
        @remove="()=>form.avatar=''"
        :limit="1"
        accept="image/*"
        uploadIcon="camera-outline"
        uploadText="上传头像"
        >
      </Upload>
      <Input type="hidden"/>
    </FormItem>
    <FormItem label="单个文件" prop="file">
      <Input readonly placeholder="请上传文件">
        <Upload 
          action="https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2" 
          name="file"
          :headers="headers"
          @change="uploadFile"
          @remove="()=>form.file=''"
          :showUploadList="false"
          :limit="1"
          accept="image/*"
          slot="suffix"
          ><Icon type="cloud-upload-outline" size="20" /></Upload>
      </Input>
    </FormItem>
    <FormItem label="多个文件" prop="files">
        <Upload 
          action="https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2" 
          name="file"
          :headers="headers"
          @change="uploadFiles"
          @remove="remove"
          accept="image/*"
          ><Button theme="light">上传文件</Button>
        </Upload>
        <Input type="hidden"/>
    </FormItem>
    <FormItem :wrapperCol="{offset:6}">
      <Button type="primary" htmlType="submit">提交表单</Button>
    </FormItem>
  <Form>
</template>
<script>
export default{
  data(){
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
      headers:{
        authorization: 'here is token'
      },
      form:{
        avatar:'',
        file:'',
        files:[],
      },
      rules: {
        avatar: [
          { required: true, message: '请上传图像' },
        ],
        file: [
          { required: true, message: '请上传文件' },
        ],
        files: [
          { required: true, message: '请上传文件' },
        ],
      },
    }
  },
  methods:{
    uploadFile({file}){
      if (file.status == 'success') {
        this.form.file = file.response.url
        this.$refs.form.test('file')
      }
    },
    uploadFiles({file}){
      if (file.status == 'success') {
        this.form.files.push(file.response.url)
        this.$refs.form.test('files')
      }
    },
    remove({file}){
      // 删除文件的时候 要对应的从表单中删除相对应的url
      if(file.status == 'success'){
        let url = file.response.url
        let index = this.form.files.indexOf(url)
        this.form.files.slice(index,1)
        this.$refs.form.test('files')
      }
    },
    uploadAvatar({file}){
      if (file.status == 'success') {
        this.form.avatar = file.response.url
        this.$refs.form.test('avatar')
      }
    },
    submit({valid, model}) {
      this.$Message[valid ? 'success' : 'error'](valid ? 'success' : 'faild')
      console.log(model)
    }
  }
}
</script>
```