<cn>
#### 辅助校验
校验一些数据类型
</cn>

```vue
<template>
  <div style="width:600px">
    <Form name="rules" :model="form" :rules="rules" @submit="submit" :wrapperCol="wrapperCol" :labelCol="labelCol">
      <FormItem label="Number" prop="number">
        <Input clearable placeholder="校验数字" />
      </FormItem>
      <FormItem label="Text" prop="text">
        <Input clearable placeholder="校验字符长度" />
      </FormItem>
      <FormItem label="E-mail" prop="email">
        <Input clearable placeholder="校验邮箱" />
      </FormItem>
      <FormItem label="Phone Number" prop="phone">
        <Input placeholder="校验手机号" />
      </FormItem>
      <FormItem label="Password" prop="pwd">
        <Input type="password" placeholder="校验密码" />
      </FormItem>
      <FormItem label="Confirm Password" prop="repwd">
        <Input type="password" placeholder="校验重复密码" />
      </FormItem>
      <FormItem label="Country">
        <FormItem prop="country">
          <Select clearable>
            <Option value="0" label="China" />
            <Option value="1" label="Russia" />
          </Select>
        </FormItem>
        <FormItem prop="city">
          <Select clearable>
            <Option value="0" label="Shanghai" />
            <Option value="1" label="Wuhan" />
            <Option value="2" label="Hangzhou" />
          </Select>
        </FormItem>
      </FormItem>
      <FormItem label="Hobby" prop="hobbys">
        <CheckboxGroup>
          <Checkbox value="0" label="Football" />
          <Checkbox value="1" label="Music" />
          <Checkbox value="2" label="Photograph" />
          <Checkbox value="3" label="Tennis" />
        </CheckboxGroup>
      </FormItem>
      <FormItem label="Other" prop="other">
        <TextArea placeholder="校验文本长度" />
      </FormItem>
      <FormItem :wrapperCol="{offset:6}">
        <Button type="primary" htmlType="submit">Submit</Button>
        <Button style="margin:0 10px" htmlType="reset">Reset</Button>
        <Button type="dashed" @click="setValue">Set Value</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value !== this.form.pwd) {
        return callback(new Error('两次密码不一致'))
      }
      callback()
    }
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
      form: {
        number: '',
        text: '',
        email: '',
        phone: '',
        pwd: '',
        repwd: '',
        country: '',
        city: '',
        hobbys: [],
        other: ''
      },
      rules: {
        number: [
          { required: true, message: '请填写数字' },
          { type: 'number', message: '只能填写数字' },
        ],
        text: [
          { required: true, message: '此项必填' },
          { max: 5, message: '最多只能输入5个字符' },
        ],
        email: [
          { type: 'mail', message: '请输入有效的电子邮箱' },
          { required: true, message: '请输入电子邮箱' },
        ],
        pwd: [
          { min: 8, max: 20, message: '密码长度请控制在8-20位之间', trigger: 'blur' },
          { required: true, message: '请输入密码' },
        ],
        repwd: [
          { min: 8, max: 20, message: '密码长度请控制在8-20位之间', trigger: 'blur' },
          { validator: validatePass },
          { required: true, message: '请重复输入密码' },
        ],
        phone: [
          { type: 'mobile', message: '请输入正确的手机号码' },
          { required: true, message: '请输入手机号' },
        ],
        country: [
          { required: true, message: '请选择国家' },
        ],
        city: [
          { required: true, message: '请选择城市' },
        ],
        hobbys: [
          { required: true, message: '请选择爱好' },
          { max: 3, message: '最多只能选择3个爱好' },
          { min: 2, message: '最少选择2个爱好' },
        ],
        other: [
          { required: true, message: '请填写其他信息' },
          { max: 5, message: '最多只能输入5个字符' },
        ]
      }
    }

  },
  methods: {
    setValue() {
      this.form = {
        number: 123,
        text: 'bacd',
        email: 'master@k-ui.cn',
        pwd: 'abc@123@123',
        repwd: 'abc@123@123',
        phone: '13888888888',
        country: '1',
        city: '1',
        hobbys: ['0', '1'],
        other: 'abcd',
      }
    },

    sendCode() {
      Message.success("验证码发送成功，请注意查收");
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

    submit({valid, model}) {
      this.$Message[valid ? 'success' : 'error'](valid ? 'success' : 'faild')
      console.log(model)
    }
  }
}
</script>
```