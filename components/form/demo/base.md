<cn>
#### 典型表单
包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。
</cn>

```vue
<template>
  <div style="width:512px;">
   <Form :labelCol="{span:5}" :wrapperCol="{span:16}"> 
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
```