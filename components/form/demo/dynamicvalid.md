<cn>
#### 动态校验规则
根据不同情况执行不同的校验规则。
</cn>
<en>
#### Dynamic Validation Rules
Execute different validation rules based on different conditions.
</en>

```vue
<template>
  <Row>
    <Col :span="16">
      <Form :model="form" ref="formRef" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <FormItem label="Name" prop="cname" :rules="[{ required: true, message: 'Please input your name' }]">
          <Input clearable />
        </FormItem>
        <FormItem
          label="Gender"
          prop="info.gender"
          :rules="[{ required: true, message: 'Please select your gender' }]"
        >
          <Select clearable style="width:100%;">
            <Option value="1" label="男" />
            <Option value="0" label="女" />
          </Select>
        </FormItem>
        <FormItem label="年龄" prop="info.age" :rules="[{ required: true, message: 'Please input your age' }]">
          <Input clearable />
        </FormItem>
        <FormItem
          :label="'Web Site' + item.key"
          :prop="'webs.' + i + '.value'"
          v-for="(item, i) in form.webs"
          :key="item.key"
          :rules="{ required: true, message: 'Web site is required' }"
        >
          <Input style="width:230px" />
          <Icon
            :type="RemoveCircleOutline"
            @click="(e) => remove(i)"
            v-if="i > 0"
            style="font-size:25px;margin:0 10px"
          />
        </FormItem>
        <FormItem :wrapperCol="{ offset: 5 }">
          <Button type="primary" @click="submit">Submit</Button>
          <Button @click="add" style="margin:0 10px;">Add</Button>
          <Button @click="reset">Reset</Button>
        </FormItem>
      </Form>
    </Col>
    <Col :span="8">
      <pre style="max-height:320px;overflow:'scroll'">{{ JSON.stringify(form, null, 2) }}</pre>
    </Col>
  </Row>
</template>
<script setup>
import { RemoveCircleOutline } from "kui-icons";
import { ref } from "vue";
import { message } from "kui-vue";
const labelCol = { span: 5 };
const wrapperCol = { span: 16 };
const formRef = ref();
const count = ref(2);
const form = ref({
  cname: "",
  info: {
    gender: "",
    age: "",
  },
  webs: [
    { value: "", key: "0" },
    { value: "", key: "1" },
  ],
});
const add = () => {
  count.value = count.value + 1;
  let item = { value: "", key: count.value };
  form.value.webs.push(item);
};
const remove = (index) => {
  form.value.webs.splice(index, 1);
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
