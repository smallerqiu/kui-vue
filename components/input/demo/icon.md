<cn>
#### 带图标
通过设置 `icon` 属性，可设置输入框图标，只对 `input` 有效。可以快速的实现 ，密码显示隐藏，搜索
</cn>

```tpl
<template>
  <div>
    <Input placeholder="User Name..." icon="ios-person" width="300"/>
    <br/>
    <Input type="password" placeholder="Password..." icon="ios-lock" width="300" />
    <br/>
    <Input placeholder="请输入验证码" icon="ios-disc" width="300">
      <template slot="suffix">
        <span v-if="time==60" @click="sendCode">获取验证码</span>
        <span v-else>{{time}}(s)</span>
      </template>
    </Input>
    <br/>
     <Input placeholder="请填写你要喝的Coffee" icon="ios-cafe" width="300">
      <template slot="suffix">
         <Tooltip content="我是一杯Coffee,如果不知道怎么填，请咨询管理员">
            <Icon type="ios-information-circle-outline" color="orange"/>
         <Tooltip>  
      </template>
    </Input>
    <br/>
    <Input type="text" placeholder="请输入关进行搜索键字..."  @search="search" width="500"/>
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