<cn>
#### 表单验证
在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。
</cn>

```vue
<template>
  <div style="width:600px;">
    <Form :model="form" :size="size" :rules="rules" ref="form" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <FormItem label="Size">
        <RadioGroup v-model="size" >
          <RadioButton value="large" label="Large" />
          <RadioButton value="default" label="Default" />
          <RadioButton value="small" label="Small" />
        </RadioGroup>
      </FormItem>
      <FormItem label="E-mail" prop="email">
        <Input  clearable />
      </FormItem>
      <FormItem label="Number" prop="number">
        <InputNumber />
      </FormItem>
      <FormItem label="Password" prop="password">
        <Input type="password" />
      </FormItem>
      <FormItem label="Confirm Password" prop="repassword">
        <Input type="password" />
      </FormItem>
      <FormItem label="Phone Number" prop="phone">
        <Input  />
      </FormItem>
      <FormItem label="Captcha" prop="captcha">
          <Input>
            <Button slot="suffix"  :disabled="time!=60" style="width:100px;"  @click="sendCode">{{time==60?'获取验证码':time+'(s)'}}</Button>
          </Input>
      </FormItem>
      <FormItem label="Country">
        <FormItem prop="country">
          <Select clearable style="width:100%">
            <Option value="0" label="China" />
            <Option value="1" label="Russia" />
          </Select>
        </FormItem>
        <FormItem prop="city">
          <Select clearable style="width:100%">
            <Option value="0" label="Shanghai" />
            <Option value="1" label="Wuhan" />
            <Option value="2" label="Hangzhou" />
          </Select>
        </FormItem>
      </FormItem>
      <FormItem label="TreeSelect" prop="tree">
        <TreeSelect style="width:100%;" :tree-data="treeData">
        </TreeSelect>
      </FormItem>
      <FormItem label="Slider" prop="slider">
        <Slider />
      </FormItem>
      <FormItem label="Gender" prop="gender">
        <RadioGroup >
          <Radio value="0" label="Girl" />
          <Radio value="1" label="Boy" />
        </RadioGroup>
      </FormItem>
      <FormItem label="One" prop="one">
        <Radio label="Only One?" />
      </FormItem>
      <FormItem label="System" prop="system">
        <RadioGroup >
          <RadioButton value="0" label="Mac OS" />
          <RadioButton value="1" label="Windows" />
          <RadioButton value="2" label="Linux" />
        </RadioGroup>
      </FormItem>
      <FormItem label="Birthday" prop="birthday">
        <DatePicker clearable  />
      </FormItem>
      <FormItem label="Hobby" prop="hobby">
        <CheckboxGroup >
          <Checkbox value="0" label="Football" />
          <Checkbox value="1" label="Music" />
          <Checkbox value="2" label="Photograph" />
          <Checkbox value="3" label="Tennis" />
        </CheckboxGroup>
      </FormItem>
      <FormItem label="Hardcore" prop="hardcore">
        <Switch true-text="Yes" false-text="No"  />
      </FormItem>
      <FormItem label="Other" prop="other">
        <TextArea placeholder="最多只能输入10个字符" v-model="form.other" />
      </FormItem>
      <FormItem prop="readme" :wrapperCol="{offset:6}">
        <Checkbox>我已阅读 <a>服务条款</a> </Checkbox>
      </FormItem>
      <FormItem :wrapperCol="{offset:6}">
        <Button type="primary" @click="submit" >Submit</Button>
        <Button style="margin:0 10px" @click="reset" >Reset</Button>
        <Button type="dashed" @click="setValue" >Set Value</Button>
      </FormItem>
    </Form>

  </div>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value !== this.form.password) {
        return callback(new Error('两次密码不一致'))
      }
      callback()
    };
    var validateReadme = (rule, value, callback) => {
      if (value !== true) {
        return callback(new Error('请阅读服务条款'))
      }
      callback()
    };
    return {
      labelCol:{span:6},
      wrapperCol:{span:16},
      time: 60,
      size:'default',
      treeData: [
        { 
          title:'food', 
          key:'0',
          children :[
            { title:'apple' ,key:'0-1' },
            { title:'orange' ,key:'0-2' },
          ]}
      ],
      form: {
        email: '',
        number:'',
        password: '',
        repassword: '',
        phone: '',
        captcha: '',
        slider:5,
        tree:'',
        gender: '',
        one: false,
        system:'',
        birthday: '',
        country: '',
        city: '',
        hobby: [],
        hardcore: '',
        other: '',
        readme: false
      },
      rules: {
        email: [
          { type: 'mail', message: '请输入有效的电子邮箱' },
          { required: true, message: '请输入电子邮箱' },
        ],
        number:[
          { type: 'number', message: '请输入有效的请输入数字' },
          { required: true, message: '请输入数字' },
        ],
        password: [
          { min: 8, max: 20, message: '密码长度请控制在8-20位之间', trigger: 'blur' },
          { required: true, message: '请输入密码' },
        ],
        repassword: [
          { min: 8, max: 20, message: '密码长度请控制在8-20位之间', trigger: 'blur' },
          { validator: validatePass },
          { required: true, message: '请重复输入密码' },
        ],
        phone: [
          { type: 'mobile', message: '请输入正确的手机号码' },
          { required: true, message: '请输入手机号' },
        ],
        birthday: [
          { required: true, message: '请选择出生日期' },
        ],
        country: [
          { required: true, message: '请选择国家' },
        ],
        tree: [
          { required: true, message: '请选择Food' },
        ],
        city: [
          { required: true, message: '请选择城市' },
        ],
        captcha: [
          { type: 'number', message: '验证码为数字' },
          { required: true, message: '请输入验证码' },
        ],
        slider: [
          { min: 3, message: '最小值为3' },
          { max: 50, message: '最大值为50' },
        ],
        gender: [
          { required: true, message: '请选择性别' },
        ],
        one: [
          { required: true, message: '霸王选项' },
        ],
        system: [
          { required: true, message: '请选择系统类型' },
        ],
        hardcore: [
          { required: true, message: '霸王选项' },
        ],
        readme: [
          { validator: validateReadme },
        ],
        hobby: [
          { required: true, message: '请选择爱好' },
          { max: 3, message: '最多只能选择3个爱好' },
          { min: 2, message: '最少选择2个爱好' },
        ],
        other: [
          { required: true, message: '请填写其他信息' },
          { max: 10, message: '最多只能输入10个字符' },
        ]

      }
    }
  },
  methods: {
    setValue() {
      this.form = {
        email: 'master@k-ui.cn',
        password: 'abc@123@123',
        repassword: 'abc@123@123',
        phone: '13888888888',
        captcha: '8888',
        gender: '1',
        slider:5,
        number:5,
        tree:'0',
        system: '0',
        one: true,
        birthday: '1995-05-05',
        country: '1',
        city: '1',
        hobby: ['0', '1'],
        hardcore: true,
        other: '测试数据',
        readme: true
      }
    },
    sendCode() {
      this.time = 59
      this.$Message.success("验证码发送成功，请注意查收");
      clearInterval(this.timer)
      this.timer = setInterval(e => {
        if (this.time < 1) {
          clearInterval(this.timer)
          this.time = 60
        } else {
          this.time--
        }
      }, 1000)
    },
    submit() {
      this.$refs.form.validate(valid => {
        this.$Message[valid ? 'success' : 'error'](valid ? 'success' : 'faild')
      })
    },
    reset() {
      this.$refs.form.reset()
    }
  }
}
</script>

```