 
单独调试组件专用
 
<template>
  <div style="padding:0px;">
    <Form label-width="150" ref="form" :model="form" :rules="rules">
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
            <Select v-model="form.province" clearable>
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
      <FormItem>
        <Button type="primary" @click="submitForm('form')">Submit</Button>
        <Button style="margin-left: 10px" @click="resetForm('form')">Reset</Button>
      </FormItem> 
    </Form>
  </div>
</template>

<script> 
export default {
  data() {
    return {
      form: {
        switch: true,
        input: "",
        number: "",
        select: '',
        province: '',
        city: '',
        radio:'',
        checkbox:'',
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
  mounted() {
    setTimeout(e => {
      this.form = {
        switch: true,
        input: 123,
        number: 10,
        select: '2',
        province: '3',
        city: '2',
        datepicker: "2010-10-10",
        radios: "1",
        checkbox:true,
        radio:true,
        checkboxs: ['男','女'],
        textarea: '123123232'
      }
    }, 2000)
  },
  methods: {
    submitForm(name) {
      // console.log(this.$refs[name].model)
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success('验证通过')
        } else {
          this.$Message.error('验证失败')
        }
      })
    },
    resetForm(name) {
      this.$refs[name].resetFields()
    },
  }
}
</script>

