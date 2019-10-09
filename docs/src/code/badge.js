let code = {}

code.base = `<Badge count="3">
  <Button>最新消息</Button>
</Badge>
<Badge count="15" color="orange" style="margin:0 30px;">
  <Button>最新评论</Button>
</Badge>
<Dropdown trigger="click">
  <a style="margin-right:30px;">通知列表
    <Icon type="ios-arrow-down" /></a>
  <DropdownMenu slot="list">
    <DropdownItem>紧急通知
      <Badge count="8" mark />
    </DropdownItem>
    <DropdownItem>普通通知
      <Badge count="12" mark />
    </DropdownItem>
  </DropdownMenu>
</Dropdown>`

code.dot = `<Badge dot>
  <div style="width:50px;height:50px;background:#ddd"></div>
</Badge>
<Badge dot style="margin-left:20px;">
  <Icon type="ios-archive" size="30"></Icon>
</Badge>
<Badge dot style="margin-left:20px;">
  <a href="#">我是一个连接</a>
</Badge>`

code.maxCount = `<Badge count="50" max-count="10" color="orange">
  <Button>最新消息</Button>
</Badge>
<Badge count="10055" max-count="999" style="margin-left:60px;" color="green">
  <Button>最新消息</Button>
</Badge>
<Badge count="hot" style="margin-left:60px;">
  <Button>热门</Button>
</Badge>
<Badge count="new" style="margin-left:60px;">
  <Button>最新</Button>
</Badge>`

export default code
