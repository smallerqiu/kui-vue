<template>
  <Form
    :model="form"
    :rules="rules"
    @submit="submit"
    :wrapperCol="wrapperCol"
    :labelCol="labelCol"
    ref="formRef"
  >
    <FormItem label="Avatar" prop="avatar">
      <Upload
        action="https://www.chuchur.com/api/upload/image"
        name="file"
        type="picture"
        :headers="headers"
        @change="uploadAvatar"
        @remove="() => (form.avatar = '')"
        :limit="1"
        accept="image/*"
        :uploadIcon="Camera"
        uploadText="Upload Avatar"
      >
      </Upload>
      <Input type="hidden" />
    </FormItem>
    <FormItem label="Single file" prop="file">
      <Input placeholder="Please upload file" clearable readonly>
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
            <Button :icon="UploadIcon" :loading="loading" />
          </Upload>
        </template>
      </Input>
    </FormItem>
    <FormItem label="Multiple files" prop="files">
      <Upload
        action="https://www.chuchur.com/api/upload/image"
        name="file"
        :headers="headers"
        @change="uploadFiles"
        @remove="remove"
        accept="image/*"
        ><Button>Upload File</Button>
      </Upload>
      <Input type="hidden" />
    </FormItem>
    <FormItem :wrapperCol="{ offset: 8 }">
      <Button type="primary" htmlType="submit">Submit Forms</Button>
    </FormItem>
  </Form>
</template>
<script setup lang="ts">
import { Camera, Upload as UploadIcon } from "kui-icons";
import type { FormContext, FormSubmitEvent, UploadChangeEvent, UploadFile } from "kui-vue";
import { message } from "kui-vue";
import { reactive, ref } from "vue";
const formRef = ref<FormContext>();
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
  avatar: [{ required: true, message: "Please select an avatar" }],
  file: [{ required: true, message: "Please select a file" }],
  files: [{ required: true, message: "Please select a file" }],
});
const labelCol = { span: 8 };
const wrapperCol = { span: 16 };
const files = ref<UploadFile[]>([]);
const uploadFile = ({ file }: UploadChangeEvent) => {
  console.log(file);
  loading.value = true;
  if (file.status == "success") {
    loading.value = false;
    form.file = file.response.url;
    formRef.value?.test("file");
  }
};
const uploadFiles = ({ file }: UploadChangeEvent) => {
  if (file.status == "success") {
    files.value.push(file.response.url);
    form.files = files.value.join(",");
    // form.files.push(file.response.url);
    formRef.value?.test("files");
  }
};
const remove = ({ file }: UploadChangeEvent) => {
  // 删除文件的时候 要对应的从表单中删除相对应的url
  if (file.status == "success") {
    let url = file.response.url;
    let index = form.files.indexOf(url);
    files.value.splice(index, 1);
    form.files = files.value.join(",");
    formRef.value?.test("files");
  }
};
const uploadAvatar = ({ file }: UploadChangeEvent) => {
  if (file.status == "success") {
    form.avatar = file.response.url;
    formRef.value?.test("avatar");
  }
};
const submit = (e: FormSubmitEvent) => {
  message[e.valid ? "success" : "error"](e.valid ? "success" : "failed");
};
</script>
