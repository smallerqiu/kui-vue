<template>
  <div style="width:512px;">
   <Form :labelCol="{span:5}" :wrapperCol="{span:16}" :size="size" :theme="theme?'light':''" :shape="checked?'circle':''"> 
    <FormItem label="主题">
      <Checkbox v-model="theme" label="Light" style="margin-right:8px;"/>
      <Checkbox v-model="checked" label="Shape"/>
    </FormItem>
    <FormItem label="尺寸">
      <RadioGroup v-model="size" type="button">
        <RadioButton value="large" label="Large" />
        <RadioButton value="default" label="Default" />
        <RadioButton value="small" label="Small" />
      </RadioGroup>
    </FormItem>
    <FormItem label="Input">
      <Input placeholder="input..."/>
    </FormItem>
    <FormItem label="InputNumber">
      <InputNumber placeholder="inputnumber..."/>
    </FormItem>
    <FormItem label="Select">
      <Select >
        <Option value="0" label="Apple" />
        <Option value="1" label="Banana" />
        <Option value="2" label="Orange" />
      </Select>
    </FormItem>
    <FormItem label="Slider">
      <Slider />
    </FormItem>
    <FormItem label="DatePicker">
      <DatePicker  />
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
     <k-switch true-text="Yes" false-text="No" />
    </FormItem>
    <FormItem label="Text">
      <TextArea placeholder="Please input..."/>
    </FormItem>
    <FormItem :wrapperCol="{offset:5}">
      <Button type="primary" circle >Submit</Button>
      <Button style="margin-left: 10px" circle >Cancel</Button>
    </FormItem>
   </Form>
  </div>
</template>
<script>
export default{
  data() {
    return {
      size:'default',
      theme:false,
      checked:false,
      shape:''
    }
  }
}
</script>
