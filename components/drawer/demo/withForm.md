<cn>
### 表单模式
内容将呈现表单模式，有页头和页尾, 可自定义页尾
</cn>
<en>
### Form Mode
Content will be presented in form mode, with a header and footer, and the footer can be customized.
</en>

```vue
<template>
  <div>
    <Space>
      <Button @click="show1 = true">Drawer with forms</Button>
      <Button @click="show2 = true">Custom</Button>
    </Space>
    <Drawer v-model="show1" title="Forms valid" @ok="submitForm" @cancel="resetForm" footer>
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
          <Radio>Man</Radio>
        </FormItem>
        <FormItem label="RadioGroup" prop="radios">
          <RadioGroup>
            <Radio value="0" label="Wuhan" />
            <Radio value="1" label="Shenzhen" />
            <Radio value="2" label="Hangzhou" />
          </RadioGroup>
        </FormItem>
        <FormItem label="Checkbox" prop="checkbox">
          <Checkbox>Man</Checkbox>
        </FormItem>
        <FormItem label="CheckboxGroup" prop="checkbox_group">
          <CheckboxGroup>
            <Checkbox value="0" label="Wuhan" />
            <Checkbox value="1" label="Hangzhou" />
            <Checkbox value="2" label="Shanghai" />
            <Checkbox value="3" label="Beijing" />
          </CheckboxGroup>
        </FormItem>
        <FormItem label="Text" prop="textarea">
          <TextArea placeholder="Please enter something..." />
        </FormItem>
      </Form>
    </Drawer>
    <Drawer v-model="show2" title="I am custom title">
      <p>Content...</p>
      <template #footer>
        <Button>Cancel</Button>
        <Button type="danger">Reject</Button>
        <Button>Inject</Button>
      </template>
    </Drawer>
  </div>
</template>
<script setup lang="ts">
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
      message.success("Successfully");
      show1.value = false;
    } else {
      message.error("Failed");
    }
  });
};

const resetForm = () => {
  refForm.value.reset();
};
</script>
```
