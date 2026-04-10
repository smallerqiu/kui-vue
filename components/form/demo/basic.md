<cn>
### 典型表单
包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。
</cn>
<en>
### Typical Form
Includes various form items, such as input fields, selectors, switches, radio buttons, checkboxes, etc.
</en>

```vue
<template>
  <div>
    <Space>
      <Checkbox v-model="state.disabled" label="Form disabled" />
    </Space>
    <Form
      :labelCol="{ span: 5 }"
      :disabled="state.disabled"
      :wrapperCol="{ span: 16 }"
      :size="state.size"
      :theme="state.isLight ? 'light' : ''"
      :shape="state.checked ? 'circle' : ''"
    >
      <FormItem label="Theme">
        <Checkbox v-model="state.isLight" label="Light" style="margin-right:8px;" />
        <Checkbox v-model="state.checked" label="Circle" />
      </FormItem>
      <FormItem label="Size">
        <RadioGroup v-model="state.size" type="button">
          <RadioButton value="large" label="Large" />
          <RadioButton value="default" label="Default" />
          <RadioButton value="small" label="Small" />
        </RadioGroup>
      </FormItem>
      <FormItem label="Input">
        <Input placeholder="input..." />
      </FormItem>
      <FormItem label="InputNumber">
        <InputNumber placeholder="inputnumber..." />
      </FormItem>
      <FormItem label="Select">
        <Select style="width:100%;">
          <Option value="0" label="Apple" />
          <Option value="1" label="Banana" />
          <Option value="2" label="Orange" />
        </Select>
      </FormItem>
      <FormItem label="TreeSelect">
        <TreeSelect style="width:100%;" :tree-data="treeData"> </TreeSelect>
      </FormItem>
      <FormItem label="Slider">
        <Slider />
      </FormItem>
      <FormItem label="DatePicker">
        <DatePicker />
      </FormItem>
      <FormItem label="Radio">
        <RadioGroup>
          <Radio value="0" label="Apple" />
          <Radio value="1" label="Banana" />
          <Radio value="2" label="Orange" />
        </RadioGroup>
      </FormItem>
      <FormItem label="Checkbox">
        <CheckboxGroup>
          <Checkbox value="0" label="Apple" />
          <Checkbox value="1" label="Banana" />
          <Checkbox value="2" label="Orange" />
        </CheckboxGroup>
      </FormItem>
      <FormItem label="Switch">
        <KSwitch true-text="Yes" false-text="No" />
      </FormItem>
      <FormItem label="Text">
        <TextArea placeholder="Please input..." />
      </FormItem>
      <FormItem :wrapperCol="{ offset: 5 }">
        <Button type="primary" circle>Submit</Button>
        <Button style="margin-left: 10px" circle>Cancel</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
const state = reactive({
  disabled: false,
  size: "default",
  isLight: false,
  checked: false,
  shape: "",
});
const treeData = [
  {
    title: "food",
    key: "0",
    children: [
      { title: "apple", key: "0-1" },
      { title: "orange", key: "0-2" },
    ],
  },
];
</script>
```
