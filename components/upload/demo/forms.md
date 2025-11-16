<cn>
#### 表单校验
上传表单校验
</cn>

```vue
<template>
  <Form
    :model="form"
    :rules="rules"
    @submit="submit"
    :wrapperCol="wrapperCol"
    :labelCol="labelCol"
    ref="formRef"
  >
    <FormItem label="图像" prop="avatar">
      <Upload
        action="https://www.chuchur.com/api/upload/image"
        name="file"
        type="picture"
        :headers="headers"
        @change="uploadAvatar"
        @remove="() => (form.avatar = '')"
        :limit="1"
        accept="image/*"
        :uploadIcon="CameraOutline"
        uploadText="上传头像"
      >
      </Upload>
      <Input type="hidden" />
    </FormItem>
    <FormItem label="单个文件" prop="file">
      <Input readonly placeholder="请上传文件" clearable>
        <Upload
          action="https://www.chuchur.com/api/upload/image"
          name="file"
          :headers="headers"
          @change="uploadFile"
          @remove="() => (form.file = '')"
          :showUploadList="false"
          :limit="1"
          accept="image/*"
          slot="suffix"
        >
          <Button :icon="CloudUploadOutline" type="link" />
        </Upload>
      </Input>
    </FormItem>
    <FormItem label="多个文件" prop="files">
      <Upload
        action="https://www.chuchur.com/api/upload/image"
        name="file"
        :headers="headers"
        @change="uploadFiles"
        @remove="remove"
        accept="image/*"
        ><Button theme="light">上传文件</Button>
      </Upload>
      <Input type="hidden" />
    </FormItem>
    <FormItem :wrapperCol="{ offset: 6 }">
      <Button type="primary" htmlType="submit">提交表单</Button>
    </FormItem>
  </Form>
</template>
<script setup>
import { CloudUploadOutline, CameraOutline } from "kui-icons";
import { ref, reactive } from "vue";
import { message } from "kui-vue";
const uploadRef = ref(null);
const formRef = ref(null);
const headers = ref({
  authorization: "here is token",
});
const form = reactive({
  avatar: "",
  file: "",
  files: [],
});
const rules = ref({
  avatar: [{ required: true, message: "请上传图像" }],
  file: [{ required: true, message: "请上传文件" }],
  files: [{ required: true, message: "请上传文件" }],
});
const labelCol = { span: 6 };
const wrapperCol = { span: 16 };

const uploadFile = ({ file }) => {
  if (file.status == "success") {
    form.file = file.response.url;
    formRef.value.test("file");
  }
};
const uploadFiles = ({ file }) => {
  if (file.status == "success") {
    form.files.push(file.response.url);
    formRef.value.test("files");
  }
};
const remove = ({ file }) => {
  // 删除文件的时候 要对应的从表单中删除相对应的url
  if (file.status == "success") {
    let url = file.response.url;
    let index = form.files.indexOf(url);
    form.files.splice(index, 1);
    formRef.value.test("files");
  }
};
const uploadAvatar = ({ file }) => {
  if (file.status == "success") {
    form.avatar = file.response.url;
    formRef.value.test("avatar");
  }
};
const submit = ({ valid, model }) => {
  message[valid ? "success" : "error"](valid ? "success" : "failed");
  console.log(model);
};
</script>
```
