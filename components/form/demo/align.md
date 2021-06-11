<cn>
#### 对齐方式
根据具体目标和制约因素，选择最佳的标签对齐方式。
</cn>

```vue
<template>
  <div style="width:512px;">
    <Form :label-align="align" :labelCol="{span:5}" :wrapperCol="{span:16}">
      <FormItem label="Align">
        <RadioGroup v-model="align">
          <RadioButton value="left" label="Left" />
          <RadioButton value="top" label="Top" />
          <RadioButton value="right" label="Right" />
        </RadioGroup>
      </FormItem>
      <FormItem label="Input">
        <Input />
      </FormItem>
      <FormItem label="Select">
        <Select >
          <Option value="0" label="Apple" />
          <Option value="1" label="Banana" />
          <Option value="2" label="Orange" />
        </Select>
      </FormItem>
      <FormItem label="DatePicker">
        <DatePicker />
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default{
  data(){
    return {
     align:'left'
    }
  }
}
</script>
```