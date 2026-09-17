<template>
  <Form
    :model="form"
    :rules="rules"
    :wrapper-col="wrapperCol"
    :label-col="labelCol"
    @submit="submit"
  >
    <FormItem label="Avatar" prop="avatar">
      <Upload
        action="https://www.chuchur.com/api/upload/image"
        name="file"
        type="picture"
        :headers="headers"
        :limit="1"
        accept="image/*"
        :upload-icon="Camera"
        upload-text="Upload Avatar"
      />
    </FormItem>

    <FormItem label="Single file" prop="file">
      <Upload
        action="https://www.chuchur.com/api/upload/image"
        name="file"
        :headers="headers"
        :limit="1"
        accept="image/*"
      >
        <Button :icon="UploadIcon">Upload File</Button>
      </Upload>
    </FormItem>

    <FormItem label="Multiple files" prop="files">
      <Upload
        action="https://www.chuchur.com/api/upload/image"
        name="file"
        :headers="headers"
        multiple
        accept="image/*"
      >
        <Button :icon="UploadIcon">Upload Files</Button>
      </Upload>
    </FormItem>

    <FormItem :wrapper-col="{ offset: 8 }">
      <Space>
        <Button type="primary" html-type="submit">Submit Form</Button>
        <Button html-type="reset">Reset</Button>
      </Space>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { Camera, Upload as UploadIcon } from "kui-icons";
import { message, type FormRule, type FormSubmitEvent, type UploadFile } from "kui-vue";
import { reactive } from "vue";

interface UploadForm extends Record<string, unknown> {
  avatar: UploadFile[] | null;
  file: UploadFile[] | null;
  files: UploadFile[] | null;
}

const headers = {
  authorization: "here is token",
};
const form = reactive<UploadForm>({
  avatar: [],
  file: [],
  files: [],
});
const uploaded: FormRule = {
  // Check completion on submit, not during normal upload progress.
  trigger: [],
  validator: (_rule, value, done) => {
    const files = value as UploadFile[] | null;
    if (!files?.length) return done();
    if (files.some((file) => file.status === "error")) {
      return done(new Error("Remove or retry failed files"));
    }
    if (files.some((file) => file.status !== "success")) {
      return done(new Error("Please wait for all files to finish uploading"));
    }
    done();
  },
};

const uploadFailed: FormRule = {
  validator: (_rule, value, done) => {
    const files = value as UploadFile[] | null;
    done(
      files?.some((file) => file.status === "error")
        ? new Error("Remove or retry failed files")
        : undefined,
    );
  },
};

const rules: Record<string, FormRule[]> = {
  avatar: [{ required: true, message: "Please select an avatar" }, uploadFailed, uploaded],
  file: [{ required: true, message: "Please select a file" }, uploadFailed, uploaded],
  files: [{ required: true, message: "Please select at least one file" }, uploadFailed, uploaded],
};
const labelCol = { span: 8 };
const wrapperCol = { span: 16 };

const submit = ({ valid }: FormSubmitEvent) => {
  message[valid ? "success" : "error"](
    valid ? "Validation passed (demo only)" : "Please check the upload fields",
  );
};
</script>
