let code = {}

code.base = `<Input placeholder="请输入内容..." />
<Input placeholder="disabled..." disabled />`

code.clearable = `<Input type="text" placeholder="请输入内容..." clearable></Input>`

code.withIcon = `<Input type="text" placeholder="请输入内容..." icon="ios-person" @iconClick="iconClick" />
<Input type="text" placeholder="请输入内容..." icon="ios-search" @iconClick="iconClick" />
<script> 
export default {  
  methods: {
    iconClick() {
      this.$Message.info("点击图标事件");
    }
  }
};
</script>`

code.size = `<Input type="text"  placeholder="Large Input" large icon="logo-apple" icon-align="left" clearable/><br/>
<Input type="text" placeholder="Base Input" icon="logo-apple" clearable icon-align="left"/><br/>
<Input type="text" mini placeholder="Mini Input" icon="logo-apple" @iconClick="iconClick" clearable icon-align="left"/>`


code.textArea = `<Input type="textarea" :rows="4" placeholder="请输入内容..."></Input>
<Input type="textarea" :rows="1" placeholder="请输入内容..."></Input>`


export default code