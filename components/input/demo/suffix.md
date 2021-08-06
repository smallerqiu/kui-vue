<cn>
#### 扩展
suffix 扩展
</cn>

```vue
<template>
  <div style="width:256px;">
    <Input placeholder="请输入验证码" icon="disc"  :maxlength="8">
      <template slot="suffix">
        <span v-if="time==60" @click="sendCode">获取验证码</span>
        <span v-else>{{time}}(s)</span>
      </template>
    </Input>
    <Input placeholder="请填写你要喝的Coffee" icon="cafe" >
      <template slot="suffix">
          <Tooltip title="此处如果不知道怎么填，请咨询管理员">
            <Icon type="information-circle-outline" color="orange"/>
          </Tooltip>  
      </template>
    </Input>
    <Input placeholder="请输入金额" suffix="元"/>
    <Input placeholder="请输入金额" suffix=".00"/>
  </div>
</template>
<script>  
export default {  
  data(){
    return{
      time:60,
      timer:null
    }
  },
  beforDestroy(){
    clearInterval(this.timer)
  },
  methods: {
    sendCode(){
      this.time = 59
      this.$Message.success("验证码发送成功，请注意查收");
      this.timer = setInterval(e=>{
          if(this.time < 0){
            clearInterval(this.timer)
            this.time = 60
          }else{
            this.time--
          }
      },1000)
    }
  }
};
</script>
```