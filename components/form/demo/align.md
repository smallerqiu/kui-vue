<cn>
#### 对齐方式
根据具体目标和制约因素，选择最佳的标签对齐方式。
</cn>

```vue
<template>
  <div style="width:512px;">
    <RadioGroup v-model="form.align">
      <RadioButton value="left" label="Left" />
      <RadioButton value="top" label="Top" />
      <RadioButton value="right" label="Right" />
    </RadioGroup>
    <br/>
    <br/>
    <Form :label-width="100" :label-align="form.align">
      <FormItem label="Input">
        <Input v-model="form.input"></Input>
      </FormItem>
      <FormItem label="Select">
        <Select v-model="form.select">
          <Option value="0" label="Apple" />
          <Option value="1" label="Banana" />
          <Option value="2" label="Orange" />
        </Select>
      </FormItem>
      <FormItem label="DatePicker">
        <DatePicker v-model="form.datepicker"></DatePicker>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default{
  data(){
    return {
      form: {
        align:'left',
        input:'',
        select:'',
        datepicker:'',
      }
    }
  }
}
</script>
```