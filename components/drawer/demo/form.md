<cn>
#### 表单模式
`type` 值为 `form` 时内容将呈现表单模式，有页头和页尾, 可自定义页尾
</cn>

```tpl
<template>
  <div>
    <Button @click="show1=true">普通表单</Button>
    <Button @click="show2=true">自定义</Button>
    <Drawer v-model="show1" title="表单验证" type="form" @ok="submitForm" @cancel="resetForm">
      <Form label-width="100" ref="form" :model="form" :rules="rules" label-align="left">
        <FormItem label="Input" prop="input">
          <Input v-model="form.input" clearable icon="ios-home"></Input>
        </FormItem>
        <FormItem label="Number" prop="number">
          <Input v-model="form.number" number clearable></Input>
        </FormItem>
        <FormItem label="Select">
          <Row>
            <Col span="12">
            <FormItem prop="province">
              <Select v-model="form.province" clearable transfer>
                <Option value="0">北京</Option>
                <Option value="1">上海</Option>
                <Option value="2">广州</Option>
                <Option value="3">深圳</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="11" offset="1">
            <FormItem prop="city">
              <Select v-model="form.city" clearable>
                <Option value="0">南山区</Option>
                <Option value="1">龙华区</Option>
                <Option value="2">福田区</Option>
                <Option value="3">宝安区</Option>
              </Select>
            </FormItem>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="DatePicker" prop="datepicker">
          <DatePicker v-model="form.datepicker" clearable format="YYYY/MM/DD hh:mm:ss"></DatePicker>
        </FormItem>
        <FormItem label="Radio" prop="radio">
          <Radio v-model="form.radio">男</Radio>
        </FormItem>
        <FormItem label="RadioGroup" prop="radios">
          <RadioGroup v-model="form.radios">
            <Radio label="0">男</Radio>
            <Radio label="1">女</Radio>
            <Radio label="2">妖</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="Checkbox" prop="checkbox">
          <Checkbox v-model="form.checkbox">男</Checkbox>
        </FormItem>
        <FormItem label="CheckboxGroup" prop="checkboxs">
          <CheckboxGroup v-model="form.checkboxs">
            <Checkbox label="男">男</Checkbox>
            <Checkbox label="女">女</Checkbox>
            <Checkbox label="妖">妖</Checkbox>
            <Checkbox label="鲛人">鲛人</Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="Text" prop="textarea">
          <Input type="textarea" placeholder="情输入..." v-model="form.textarea"></Input>
        </FormItem>
      </Form>
    </Drawer>
    <Drawer v-model="show2" title="我是自定义标题" type="form">
      <p>我是自定义内容</p>
      <div slot="footer">
        <Button>取消</Button>
        <Button type="danger">驳回</Button>
        <Button type="success">通过</Button>
      </div>
    </Drawer>
  </div>
</template>
<script>
export default {
  data(){
    return{
      show1: false, show2: false,
      form: {
        switch: true,
        input: "",
        number: "",
        select: '',
        province: '',
        city: '',
        radio: '',
        checkbox: '',
        datepicker: "",
        radios: "",
        checkboxs: [],
        textarea: ''
      },
      rules: {
        input: [{ required: true, trigger: 'blur' }],
        number: [{ required: true, trigger: 'blur', type: 'number', min: 5, max: 10 }],
        select: [{ required: true, trigger: 'change' }],
        province: [{ required: true, trigger: 'change' }],
        city: [{ required: true, trigger: 'change' }],
        datepicker: [{ required: true, trigger: 'change' }],
        radios: [{ required: true, trigger: 'change' }],
        radio: [{ required: true, trigger: 'change' }],
        checkbox: [{ required: true, trigger: 'change' }],
        checkboxs: [{ required: true, trigger: 'change', min: 2, max: 3, message: '长度为2-3个字符', }],
        textarea: [{ required: true, message: '必填', trigger: 'blur' }, { min: 2, max: 5, message: '长度为2-5个字符', trigger: 'blur' }],
      },
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$Message.success('验证通过')
          this.show1 = false
        } else {
          this.$Message.error('验证失败')
        }
      })
    },
    resetForm() {
      this.$refs.form.resetFields()
    },    
  }
}
</script>
```