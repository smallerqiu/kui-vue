<cn>
#### 对齐方式
根据具体目标和制约因素，选择最佳的标签对齐方式。
</cn>

```vue
<template>
  <div>
    <Form :layout="layout" :labelCol="{span:5}" :wrapperCol="{span:6}">
      <FormItem label="Layout">
        <RadioGroup v-model="layout">
          <RadioButton value="horizontal" label="horizontal" />
          <RadioButton value="vertical" label="vertical" />
          <RadioButton value="inline" label="inline" />
        </RadioGroup>
      </FormItem>
      <FormItem label="Input">
        <Input />
      </FormItem>
      <FormItem label="Select">
        <Select  style="width:100%">
          <Option value="0" label="Apple" />
          <Option value="1" label="Banana" />
          <Option value="2" label="Orange" />
        </Select>
      </FormItem>
      <FormItem label="DatePicker">
        <DatePicker />
      </FormItem>
      <FormItem :wrapperCol="{offset:5}">
        <Button type="primary">Submit</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default{
  data() {
    return {
     layout:'horizontal'
    }
  }
}
</script>
```