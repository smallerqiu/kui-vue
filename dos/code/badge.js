let code = {}

code.base = `<Badge count="3">
    <div style="width:50px;height:50px;background:#ddd"></div>
</Badge>`

code.dot = `<Badge dot>
    <div style="width:50px;height:50px;background:#ddd"></div>
</Badge>
<Badge dot style="margin-left:20px;">
    <Icon type="ios-calendar-outline" size="50" color="orange"></Icon>
</Badge>
<Badge dot style="margin-left:20px;">
    <a href="#">我是一个连接</a>
</Badge>`

code.maxCount = `<Badge count="100" max-count="99">
    <div style="width:50px;height:50px;background:#ddd"></div>
</Badge>
<Badge count="10055" max-count="999" style="margin-left:60px;">
    <div style="width:50px;height:50px;background:#ddd"></div>
</Badge>`

code.color = `<Badge count="100" max-count="99" color="orange">
    <div style="width:50px;height:50px;background:#ddd"></div>
</Badge>
<Badge dot color="green" style="margin-left:60px;">
    <div style="width:50px;height:50px;background:#ddd"></div>
</Badge>`

code.badge = `<Badge count="10" style="margin-left:20px;"></Badge>
<Badge count="20" color="blue" style="margin-left:40px;"></Badge>`

code.other = `<div v-for="i in m" style="margin:15px 0;" :key="i">
<Badge count="+" @onClick="add">
   <Button>增加</Button>
</Badge>
<Badge count="-" @onClick="del" style="margin-left:20px;">
   <Input width="200"></Input>
</Badge>
</div>
data() {
    return {
      m: 1,
      code: code
    }
}`

export default code
