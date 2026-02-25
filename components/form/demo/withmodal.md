<cn>
#### 多表单联动
在Form之外，通过`submit`从外部提交表单，反之 则推荐使用 `<Button htmlType="submit" />`调用原生提交逻辑
</cn>
<en>
#### Multi-form Linkage
Outside the Form, submit the form via `submit` from the outside. Conversely, it's recommended to use `<Button htmlType="submit" />` to call the native submission logic.
</en>

```vue
<template>
  <div style="max-width:512px">
    <Form
      name="with-modal"
      :model="group"
      @submit="onSubmit2"
      :rules="rules"
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
    >
      <FormItem label="Group" prop="name">
        <Input />
      </FormItem>
      <FormItem label="UserList">
        <Space>
          <Tag theme="light" :key="i" v-for="(item, i) in group.list">
            {{ item.username }} - {{ item.age }}
          </Tag>
        </Space>
      </FormItem>
      <FormItem :wrapperCol="{ offset: 6 }">
        <Button type="primary" htmlType="submit">Submit</Button>
        <Button @click="() => (visible = true)" style="margin-left:10px">Add User</Button>
      </FormItem>
    </Form>

    <Modal v-model="visible" title="New User" :width="450" @ok="onOk" @cancel="onCancel">
      <Form
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        name="modal"
        :model="form"
        :rules="userRules"
        @submit="onSubmit"
        ref="formRef"
      >
        <FormItem label="Usename" prop="username">
          <Input placeholder="Please input username" />
        </FormItem>
        <FormItem label="Age" prop="age">
          <Input placeholder="Please input age" />
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { message } from "kui-vue";
const labelCol = { span: 6 };
const wrapperCol = { span: 16 };
const formRef = ref();
const rules = {
  name: [{ required: true, message: "Please input the organization name" }],
};
const form = ref({
  username: "",
  age: "",
});
const userRules = {
  username: [{ required: true, message: "Please input the organization name" }],
  age: [
    { required: true, message: "Please input the age." },
    { type: "number", message: "Please input the valid age." },
  ],
};
const visible = ref(false);
const group = ref({
  name: "",
  list: [],
});
const onSubmit = ({ valid, model }) => {
  if (valid) {
    group.value.list.push(model);
    formRef.value.reset();
    visible.value = false;
  }
};
const onOk = () => {
  formRef.value.submit();
};
const onCancel = () => {
  formRef.value.reset();
};
const onSubmit2 = ({ valid }) => {
  message[valid ? "success" : "error"](valid ? "success" : "failed");
};
</script>
```
