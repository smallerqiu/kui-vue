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
      :theme="state.theme"
      :shape="state.shape"
    >
      <FormItem label="Shape">
        <RadioGroup v-model="state.shape">
          <Radio value="default" label="Default" />
          <Radio value="circle" label="Circle" />
          <Radio value="square" label="Square" />
        </RadioGroup>
      </FormItem>
      <FormItem label="Theme">
        <RadioGroup v-model="state.theme">
          <Radio value="default" label="Default" />
          <Radio value="light" label="Light" />
          <Radio value="outline" label="Outline" />
        </RadioGroup>
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
        <Select style="width: 100%">
          <Option value="0" label="Apple" />
          <Option value="1" label="Banana" />
          <Option value="2" label="Orange" />
        </Select>
      </FormItem>
      <FormItem label="TreeSelect">
        <TreeSelect style="width: 100%" :tree-data="treeData"> </TreeSelect>
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
        <Button type="primary">Submit</Button>
        <Button style="margin-left: 10px">Cancel</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script setup lang="ts">
import type { ShapeType, SizeType, ThemeType } from "kui-vue";
import { reactive } from "vue";
const state = reactive({
  disabled: false,
  size: "default" as SizeType,
  shape: "default" as ShapeType,
  theme: "default" as ThemeType,
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
