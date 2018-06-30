let code = {}

code.base =`<Form :label-width="80">
  <FormItem label="Input">
    <Input v-model="form.input"></Input>
  </FormItem>
  <FormItem label="Select">
    <Select v-model="form.select">
      <Option v-for="(x,y) in select" :key="y" :value="x.value">{{x.label}}</Option>
    </Select>
  </FormItem>
  <FormItem label="DatePicker">
    <DatePicker v-model="form.datepicker"></DatePicker>
  </FormItem>
  <FormItem label="Radio">
    <RadioGroup v-model="form.radio">
      <Radio label="0">男</Radio>
      <Radio label="1">女</Radio>
      <Radio label="2">妖</Radio>
    </RadioGroup>
  </FormItem>
  <FormItem label="Checkbox">
    <CheckboxGroup v-model="form.checkbox">
      <Checkbox label="0">男</Checkbox>
      <Checkbox label="1">女</Checkbox>
      <Checkbox label="2">妖</Checkbox>
    </CheckboxGroup>
  </FormItem>
  <FormItem label="Switch">
    <Switch true-text="是" false-text="否"></Switch>
  </FormItem>
  <FormItem label="Text">
    <Input type="textarea" placeholder="情输入..."></Input>
  </FormItem>
  <FormItem>
    <Button type="primary">Submit</Button>
    <Button style="margin-left: 10px">Cancel</Button>
  </FormItem>
</Form>
<script>
export default {
  data(){
    return{
      form: {
        switch: true,
        input: "",
        select: 0,
        datepicker: "",
        radio: "1",
        checkbox: ['0']
      },
    }
  }
}
<\/script>`

code.invalid =`<Form :label-width="80" ref="form" :model="form" :rules="rules" :labelAlign="labelAlign">
  <FormItem label="Input" prop="input">
    <Input v-model="form.input"></Input>
  </FormItem>
  <FormItem label="Select">
    <Row>
      <Col span="12">
      <FormItem  prop="province">
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
    <DatePicker v-model="form.datepicker" clearable></DatePicker>
  </FormItem>
  <FormItem label="Radio" prop="radio">
    <RadioGroup v-model="form.radio">
      <Radio label="0">男</Radio>
      <Radio label="1">女</Radio>
      <Radio label="2">妖</Radio>
    </RadioGroup>
  </FormItem>
  <FormItem label="Checkbox" prop="checkbox">
    <CheckboxGroup v-model="form.checkbox">
      <Checkbox label="0">男</Checkbox>
      <Checkbox label="1">女</Checkbox>
      <Checkbox label="2">妖</Checkbox>
      <Checkbox label="3">鲛人</Checkbox>
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
<script>
export default {
  data() {
    return {
      labelAlign: 'right',
      code: code,
      select: [
        { label: "男", value: "0" },
        { label: "女", value: "1" },
        { label: "妖", value: "2" },
      ],
      form: {
        switch: true,
        input: "",
        province:'',
        city:'',
        select: '',
        datepicker: "",
        radio: "",
        checkbox: [],
        textarea: ''
      },
      rules: {
        input: [{ required: true, trigger: 'blur' }],
        select: [{ required: true, trigger: 'change' }],
        province: [{ required: true, trigger: 'change' }],
        city: [{ required: true, trigger: 'change' }],
        datepicker: [{ required: true, trigger: 'change' }],
        radio: [{ required: true, trigger: 'change' }],
        checkbox: [{ required: true, trigger: 'change', min: 2, max: 3 }],
        textarea: [{ required: true, message: '必填', trigger: 'blur' }, { min: 2, max: 5, message: '长度为2-5个字符', trigger: 'blur' }],
      },
    };
  },
  methods: {
    submitForm(name) {
      console.log(this.$refs[name].model)
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
};
</script>
`
code.customValid = `<Form :model="customForm" :rules="customRules" labelWidth="80" ref="customForm">
  <FormItem label="userName" prop="userName">
    <Input v-model="customForm.userName" />
  </FormItem>
  <FormItem label="password" prop="password">
    <Input v-model="customForm.password" type="password" />
  </FormItem>
  <FormItem label="Confrim" prop="rePassword">
    <Input v-model="customForm.rePassword" type="password" />
  </FormItem>
  <FormItem>
    <Button type="primary" @click="submitForm('customForm')">Submit</Button>
    <Button style="margin-left: 10px" @click="resetForm('customForm')">Reset</Button>
  </FormItem>
</Form>
<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请填写密码'))
      } else {
        if (this.customForm.rePassword !== "") {
          this.$refs.customForm.validateField('rePassword')
        }
        callback()
      }
    };
    const validateRePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else {
        if (this.customForm.password !== value) {
          callback(new Error('两次密码输入不一致'))
        }
        callback()
      }
    };
    const validateUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        if (value.length < 2 || value.length > 6) {
          callback(new Error('用户名长度为2-6位'))
        } else {
          callback()
        }
      }
    };
    return {
      labelAlign: 'right',
      select: [
        { label: "男", value: "0" },
        { label: "女", value: "1" },
        { label: "妖", value: "2" },
      ],
      customRules: {
        userName: [{ validator: validateUserName, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
        rePassword: [{ validator: validateRePass, trigger: 'blur' }],
      },
      customForm: {
        userName: '',
        password: '',
        rePassword: ''
      },
    };
  },
  methods: {
    submitForm(name) {
      console.log(this.$refs[name].model)
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
};
</script>
`

export default code