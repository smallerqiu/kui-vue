<cn>
### 表单校验
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
      <Input placeholder="请上传文件" clearable readonly>
        <template #suffix>
          <Upload
            action="https://www.chuchur.com/api/upload/image"
            name="file"
            :headers="headers"
            @change="uploadFile"
            :showUploadList="false"
            :limit="1"
            accept="image/*"
          >
            <Button :icon="CloudUploadOutline" :loading="loading" />
          </Upload>
        </template>
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
const loading = ref(false);
const headers = ref({
  authorization: "here is token",
});
const form = reactive({
  avatar: "",
  file: "",
  files: "",
});
const rules = ref({
  avatar: [{ required: true, message: "请上传图像" }],
  file: [{ required: true, message: "请上传文件" }],
  files: [{ required: true, message: "请上传文件" }],
});
const labelCol = { span: 6 };
const wrapperCol = { span: 16 };
const files = ref([]);
const uploadFile = ({ file }) => {
  console.log(file);
  loading.value = true;
  if (file.status == "success") {
    loading.value = false;
    form.file = file.response.url;
    formRef.value.test("file");
  }
};
const uploadFiles = ({ file }) => {
  if (file.status == "success") {
    files.value.push(file.response.url);
    form.files = files.value.join(",");
    // form.files.push(file.response.url);
    formRef.value.test("files");
  }
};
const remove = ({ file }) => {
  // 删除文件的时候 要对应的从表单中删除相对应的url
  if (file.status == "success") {
    let url = file.response.url;
    let index = form.files.indexOf(url);
    files.value.splice(index, 1);
    form.files = files.value.join(",");
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
