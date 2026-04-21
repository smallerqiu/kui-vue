<template>
  <div style="max-width: 600px">
    <Form :model="form" :rules="rules" ref="formRef" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <FormItem label="Name" prop="fullname">
        <Input clearable />
      </FormItem>
      <FormItem label="ID Card Number" prop="IDnumber">
        <Input placeholder="Optional" />
      </FormItem>
      <FormItem label="Password" prop="password">
        <Input type="password" placeholder="Please input your password" />
      </FormItem>
      <FormItem label="Confirm Password" prop="confirm_password">
        <Input type="password" placeholder="Please confirm your password" />
      </FormItem>
      <FormItem :wrapperCol="{ offset: 5 }">
        <Button type="primary" @click="submit">Submit</Button>
        <Button style="margin-left: 10px" @click="reset">Reset</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script setup lang="ts">
import { message, type FormContext, type FormRule } from "kui-vue";
import { ref } from "vue";
const formRef = ref<FormContext>();
const validateIDNumber = (_: FormRule, value: any, callback: (error?: Error) => void) => {
  if (value && !/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
    return callback(new Error("Please enter the correct ID number"));
  }
  callback();
};
const validatePassword = (_: FormRule, value: any, callback: (error?: Error) => void) => {
  if (!value) {
    callback(new Error("Please input your password"));
  } else {
    formRef.value?.test("confirm_password");
    callback();
  }
};
const validateRePassword = (_: FormRule, value: any, callback: (error?: Error) => void) => {
  if (!value) {
    callback(new Error("Please input your password again"));
  } else if (value != form.value.password) {
    callback(new Error("The two passwords do not match."));
  } else {
    callback();
  }
};
const labelCol = { span: 5 };
const wrapperCol = { span: 16 };
const form = ref({
  fullname: "",
  IDnumber: "",
  password: "",
  confirm_password: "",
});
const rules: Record<string, FormRule[]> = {
  fullname: [
    { required: true, message: "Please input your name" },
    { message: "Name must be in Chinese", pattern: /^[\u4e00-\u9fa5]+$/ },
  ],
  IDnumber: [{ validator: validateIDNumber }],
  password: [{ validator: validatePassword }],
  confirm_password: [{ validator: validateRePassword }],
};
const submit = () => {
  formRef.value?.validate(({ valid }) => {
    message[valid ? "success" : "error"](valid ? "success" : "failed");
  });
};
const reset = () => {
  formRef.value?.reset();
};
</script>
