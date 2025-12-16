<cn>
#### 多表单联动
在Form之外，通过`submit`从外部提交表单，反之 则推荐使用 `<Button htmlType="submit" />`调用原生提交逻辑
</cn>

```vue
<template>
  <div style="max-width:512px">
    <Form
      name="withmodal"
      :model="group"
      :rules="rules"
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
    >
      <FormItem label="Gruop" prop="name">
        <Input />
      </FormItem>
      <FormItem label="UserList">
        <div style="fontSize: 13px; color: '#aaa'; line-height: 1.5">
          <template v-if="group.list.length">
            <p :key="i" v-for="(item, i) in group.list">
              {{ item.username }} - {{ item.age }}
            </p>
          </template>
          <span v-else>No user</span>
        </div>
      </FormItem>
      <FormItem :wrapperCol="{ offset: 6 }">
        <Button type="primary" htmlType="submit">Submit</Button>
        <Button @click="() => (visible = true)" style="margin-left:10px"
          >Add User</Button
        >
      </FormItem>
    </Form>

    <Modal
      v-model="visible"
      title="新增用户"
      :width="450"
      @ok="onOk"
      @cancel="onCancel"
    >
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
          <Input placeholder="请输入姓名" />
        </FormItem>
        <FormItem label="Age" prop="age">
          <Input placeholder="请输入年龄" />
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script setup>
import { ref } from "vue";
const labelCol = { span: 6 };
const wrapperCol = { span: 16 };
const formRef = ref();
const rules = {
  name: [{ required: true, message: "请输入组织名称" }],
};
const form = ref({
  username: "",
  age: "",
});
const userRules = {
  username: [{ required: true, message: "请输入组织名称" }],
  age: [
    { required: true, message: "请输入年龄" },
    { type: "number", message: "请输入正确的年龄" },
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
</script>
```
