<cn>
#### 自定义校验规则
自定义验证规则来完成表单验证。
</cn>

```vue
<template>
  <div style="width:600px;">
   <Form :model="form" :rules="rules" ref="form" :labelCol="labelCol" :wrapperCol="wrapperCol">
    <FormItem label="姓名" prop="fullname">
      <Input  clearable />
    </FormItem>
    <FormItem label="身份证号码" prop="IDnumber">
      <Input  placeholder="非必填"/>
    </FormItem>
    <FormItem label="密码" prop="pwd">
      <Input  type="password" placeholder="请输入密码"/>
    </FormItem>
    <FormItem label="重复密码" prop="repwd">
      <Input  type="password" placeholder="请重复输入密码"/>
    </FormItem>
    <FormItem :wrapperCol="{offset:5}">
      <Button type="primary" @click="submit">Submit</Button>
      <Button style="margin-left: 10px" @click="reset">Reset</Button>
    </FormItem>
    </Form>
  </div>
</template>
<script>
export default{
  data(){
    var validateIDNumber = (rule,value,callback)=>{
      if(value && !/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)){
        return  callback(new Error('请输入正确的身份证号码'))
      }
      callback()
    };
    var validatePassword = (rule,value,callback)=>{
      if(!value){
        callback(new Error('请输入密码'))
      }else{
        this.$refs.form.test('repwd')
        callback()
      }
    }
    var validateRePassword = (rule,value,callback)=>{
      if(!value){
        callback(new Error('请再次输入密码'))
      }else if(value!=this.form.pwd){
        callback(new Error('两次密码输入不一致'))
      }else{
        callback()
      }
    }
    return {
      labelCol:{span:5},
      wrapperCol:{span:16},
      form: {
        fullname:'',
        IDnumber:'',
        pwd:'',
        repwd:''
      },
      rules:{
        fullname:[ 
            { required: true, message: '请输入姓名' },
            { message: '姓名只能是中文', pattern: /^[\u4e00-\u9fa5]+$/ },
         ],
        IDnumber:[{ validator:validateIDNumber }],
        pwd:[{ validator:validatePassword }],
        repwd:[{ validator:validateRePassword }],
      }
    }
  },
  methods:{
    submit(){
      this.$refs.form.validate(valid=>{
        this.$Message[valid?'success':'error'](valid?'success':'faild')
      })
    },
    reset(){
      this.$refs.form.reset()
    }
  }
}
</script>
```