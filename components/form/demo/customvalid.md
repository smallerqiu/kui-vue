<cn>
#### 自定义校验规则
自定义验证规则来完成表单验证。
</cn>
<en>
#### Custom Validation Rules
Use custom validation rules to complete form validation.
</en>

```vue
<template>
  <div style="max-width:600px;">
    <Form :model="form" :rules="rules" ref="formRef" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <FormItem label="Name" prop="fullname">
        <Input clearable />
      </FormItem>
      <FormItem label="ID Card Number" prop="IDnumber">
        <Input placeholder="Optional" />
      </FormItem>
      <FormItem label="Password" prop="pwd">
        <Input type="password" placeholder="Please input your password" />
      </FormItem>
      <FormItem label="Confirm Password" prop="repwd">
        <Input type="password" placeholder="Please confirm your password" />
      </FormItem>
      <FormItem :wrapperCol="{ offset: 5 }">
        <Button type="primary" @click="submit">Submit</Button>
        <Button style="margin-left: 10px" @click="reset">Reset</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { message } from "kui-vue";
const formRef = ref(null);
const validateIDNumber = (rule, value, callback) => {
  if (value && !/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
    return callback(new Error("Please enter the correct ID number"));
  }
  callback();
};
const validatePassword = (rule, value, callback) => {
  if (!value) {
    callback(new Error("Please input your password"));
  } else {
    formRef.value.test("repwd");
    callback();
  }
};
const validateRePassword = (rule, value, callback) => {
  if (!value) {
    callback(new Error("Please input your password again"));
  } else if (value != form.value.pwd) {
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
  pwd: "",
  repwd: "",
});
const rules = {
  fullname: [
    { required: true, message: "Please input your name" },
    { message: "Name must be in Chinese", pattern: /^[\u4e00-\u9fa5]+$/ },
  ],
  IDnumber: [{ validator: validateIDNumber }],
  pwd: [{ validator: validatePassword }],
  repwd: [{ validator: validateRePassword }],
};
const submit = () => {
  formRef.value.validate(({ valid }) => {
    message[valid ? "success" : "error"](valid ? "success" : "failed");
  });
};
const reset = () => {
  formRef.value.reset();
};
</script>
```
