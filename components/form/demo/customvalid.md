<cn>
#### 自定义校验规则
自定义验证规则来完成表单验证。
</cn>

```vue
<template>
  <div style="max-width:600px;">
    <Form
      :model="form"
      :rules="rules"
      ref="formRef"
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
    >
      <FormItem label="姓名" prop="fullname">
        <Input clearable />
      </FormItem>
      <FormItem label="身份证号码" prop="IDnumber">
        <Input placeholder="非必填" />
      </FormItem>
      <FormItem label="密码" prop="pwd">
        <Input type="password" placeholder="请输入密码" />
      </FormItem>
      <FormItem label="重复密码" prop="repwd">
        <Input type="password" placeholder="请重复输入密码" />
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
    return callback(new Error("请输入正确的身份证号码"));
  }
  callback();
};
const validatePassword = (rule, value, callback) => {
  if (!value) {
    callback(new Error("请输入密码"));
  } else {
    formRef.value.test("repwd");
    callback();
  }
};
const validateRePassword = (rule, value, callback) => {
  if (!value) {
    callback(new Error("请再次输入密码"));
  } else if (value != form.value.pwd) {
    callback(new Error("两次密码输入不一致"));
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
    { required: true, message: "请输入姓名" },
    { message: "姓名只能是中文", pattern: /^[\u4e00-\u9fa5]+$/ },
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
