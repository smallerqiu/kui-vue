<cn>
#### 典型表单
包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。
</cn>

```vue
<template>
  <div style="width:512px;">
    <Space>
      <Checkbox v-model="disabled" label="Form disabled" />
    </Space>
   <Form :labelCol="{span:5}" :disabled="disabled" :wrapperCol="{span:16}" :size="size" :theme="theme?'light':''" :shape="checked?'circle':''"> 
    <FormItem label="主题">
      <Checkbox v-model="theme" label="Light" style="margin-right:8px;"/>
      <Checkbox v-model="checked" label="Circle"/>
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
      <Select style="width:100%;">
        <Option value="0" label="Apple" />
        <Option value="1" label="Banana" />
        <Option value="2" label="Orange" />
      </Select>
    </FormItem>
    <FormItem label="TreeSelect">
      <TreeSelect style="width:100%;" :tree-data="treeData">
      </TreeSelect>
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
     <Switch true-text="Yes" false-text="No" />
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
      disabled:true,
      size:'default',
      theme:false,
      checked:false,
      shape:'',
      treeData: [
        { 
          title:'food', 
          key:'0',
          children :[
            { title:'apple' ,key:'0-1' },
            { title:'orange' ,key:'0-2' },
          ]}
      ]
    }
  }
}
</script>
```