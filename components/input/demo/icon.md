<cn>
#### 带图标
通过设置 `icon` 属性，可设置输入框图标，只对 `input` 有效。可以快速的实现 ，密码显示隐藏，搜索
</cn>

```vue
<template>
  <div style="width:512px;">
    <Input placeholder="User Name..." icon="ios-person" />
    <Input type="password" placeholder="Password..." icon="ios-lock"  />
    <Input placeholder="请输入验证码" icon="ios-disc"  :maxlength="8">
      <template slot="suffix">
        <span v-if="time==60" @click="sendCode">获取验证码</span>
        <span v-else>{{time}}(s)</span>
      </template>
    </Input>
    <Input placeholder="请填写你要喝的Coffee" icon="ios-cafe" >
    <template slot="suffix">
        <Tooltip title="此处如果不知道怎么填，请咨询管理员">
          <Icon type="ios-information-circle-outline" color="orange"/>
        <Tooltip>  
    </template>
    </Input>
    <Input placeholder="请输入关进行搜索键字..."  @search="search" width="500"/>
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
  beforDestory(){
    clearInterval(this.timer)
  },
  methods: {
    search() {
      this.$Message.info("This is search event");
    },
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