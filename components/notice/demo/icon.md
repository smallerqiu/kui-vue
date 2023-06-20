<cn>
#### 自定义图标
自定义图标
</cn>

```vue
<template>
  <div>
    <Button @click="alipay" :icon="LogoAlipay"></Button>
    <Button @click="wechat" :icon="LogoWechat"></Button>
  </div>
</template>
<script>
import { LogoAlipay, LogoWechat } from "kui-icons";
export default{  
  data() {
    return {
       LogoAlipay, LogoWechat
    }
  },
  methods:{
    alipay() {
      this.$Notice.open({
        icon:LogoAlipay,
        color:'#0082ff',
        title: "尊敬的用户你好",
        content: "我们很高兴通知您，您下个月花呗12900元，不用还了！",
        duration: 10
      });
    },
    wechat() {
      let h = this.$createElement

      let content = h('div',{},[
        h('p',{ attrs : {style:'margin:10px 0'} },'微信新增了一些新功能，我们邀请您体验！'),
        h('Button',{ props:{ type:'primary' } },'去看看')
      ])

      this.$Notice.open({
        icon:LogoWechat,
        color:'#00ff9e',
        title: "尊敬的用户你好",
        content,//: "微信新增了一些新功能，我们邀请您体验！",
        duration: 10
      });
    }
  }
}
</script>
```