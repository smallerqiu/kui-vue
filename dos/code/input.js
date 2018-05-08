let code = {}

code.base = `<Input type="text" width="200" placeholder="请输入内容..."></Input>`

code.clearable = `<Input type="text" width="200" placeholder="请输入内容..." clearable></Input>`

code.withIcon = `<Input type="text" width="200" placeholder="请输入内容..." icon="ios-person" @iconClick="iconClick"></Input>
<Input type="text" width="200" placeholder="请输入内容..." icon="ios-search" @iconClick="iconClick"></Input>
<script> 
export default {  
  methods: {
    iconClick() {
      this.$Message.info("点击图标事件");
    }
  }
};
</script>`

code.size = `<Input type="text" width="200" placeholder="请输入内容..."></Input>
<Input type="text" width="200" mini placeholder="请输入内容..."></Input>
<Input type="text" width="200" mini placeholder="请输入内容1..." icon="ios-person" @iconClick="iconClick"></Input>`


code.textArea = `<Input width="300" type="textarea" :rows="4" placeholder="请输入内容..."></Input>
<Input width="300" type="textarea" :rows="1" placeholder="请输入内容..."></Input>`
code.disabled = `<Input width="300" type="textarea" :rows="4" placeholder="请输入银行卡密码"/>
<Input type="text" width="200" placeholder="请输入内容..." disabled />
`


export default code