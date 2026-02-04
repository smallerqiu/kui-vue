<cn>
### 表单模式
内容将呈现表单模式，有页头和页尾, 可自定义页尾
</cn>

```vue
<template>
  <div>
    <Space>
      <Button @click="show1 = true">普通表单</Button>
      <Button @click="show2 = true">自定义</Button>
    </Space>
    <Drawer v-model="show1" title="表单验证" @ok="submitForm" @cancel="resetForm" footer>
      <Form
        ref="refForm"
        :model="form"
        :rules="rules"
        label-align="left"
        :labelCol="{ span: 5 }"
        :wrapperCol="{ span: 19 }"
      >
        <FormItem label="Input" prop="input">
          <Input clearable :icon="Home"></Input>
        </FormItem>
        <FormItem label="Number" prop="number">
          <Input number clearable></Input>
        </FormItem>
        <FormItem label="DatePicker" prop="datepicker">
          <DatePicker clearable format="YYYY/MM/DD hh:mm:ss"></DatePicker>
        </FormItem>
        <FormItem label="Radio" prop="radio">
          <Radio>男</Radio>
        </FormItem>
        <FormItem label="RadioGroup" prop="radios">
          <RadioGroup>
            <Radio value="0" label="武汉" />
            <Radio value="1" label="深圳" />
            <Radio value="2" label="杭州" />
          </RadioGroup>
        </FormItem>
        <FormItem label="Checkbox" prop="checkbox">
          <Checkbox>男</Checkbox>
        </FormItem>
        <FormItem label="CheckboxGroup" prop="checkbox_group">
          <CheckboxGroup>
            <Checkbox value="0" label="武汉" />
            <Checkbox value="1" label="杭州" />
            <Checkbox value="2" label="上海" />
            <Checkbox value="3" label="北京" />
          </CheckboxGroup>
        </FormItem>
        <FormItem label="Text" prop="textarea">
          <TextArea placeholder="情输入..." />
        </FormItem>
      </Form>
    </Drawer>
    <Drawer v-model="show2" title="我是自定义标题">
      <p>我是自定义内容</p>
      <template #footer>
        <Button>取消</Button>
        <Button type="danger">驳回</Button>
        <Button>通过</Button>
      </template>
    </Drawer>
  </div>
</template>
<script setup>
import { message } from "kui-vue";
import { Home } from "kui-icons";
import { ref, reactive } from "vue";
const refForm = ref();
const show1 = ref(false);
const show2 = ref(false);
const form = reactive({
  switch: true,
  input: "",
  number: "",
  province: "",
  city: "",
  radio: true,
  checkbox: true,
  datepicker: "",
  radios: "",
  checkbox_group: [],
  textarea: "",
});
const rules = {
  input: [{ required: true }],
  number: [{ required: true }],
  province: [{ required: true }],
  city: [{ required: true }],
  datepicker: [{ required: true }],
  radios: [{ required: true }],
  radio: [{ required: true }],
  checkbox: [{ required: true }],
  checkbox_group: [{ required: true }],
  textarea: [
    { required: true, message: "必填", trigger: "blur" },
    { min: 2, max: 5, message: "长度为2-5个字符" },
  ],
};

const submitForm = () => {
  refForm.value.validate(({ valid }) => {
    if (valid) {
      message.success("验证通过");
      show1.value = false;
    } else {
      message.error("验证失败");
    }
  });
};

const resetForm = () => {
  refForm.value.reset();
};
</script>
```
