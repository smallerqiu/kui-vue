<template>
  <div style="width:600px;">
    <Form :model="form" :size="size" :rules="rules" ref="form" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <FormItem :wrapperCol="{offset:6}">
        <Button style="margin:0 10px" @click="reset" :size="size">Reset</Button>
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
      form: {
        email: '',
        password: '',
        repassword: '',
        phone: '',
        captcha: '',
        gender: '',
        one: false,
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
        city: [
          { required: true, message: '请选择城市' },
        ],
        captcha: [
          { type: 'number', message: '验证码为数字' },
          { required: true, message: '请输入验证码' },
        ],
        gender: [
          { required: true, message: '请选择性别' },
        ],
        one: [
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

