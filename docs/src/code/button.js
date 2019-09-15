let code = {}

code.base=`<Button>Default</Button>
<Button type="primary">Primary</Button>
<Button type="primary" hollow>hollow</Button>
<Button type="primary" circle>circle</Button> 
<Button type="link" circle>link</Button>`

code.disabled=`<Button type="primary">Primary</Button>
<Button disabled type="primary">disabled</Button>`

code.withIcon = `<Button type="primary" icon="ios-search">搜索</Button>
<Button type="success" icon="ios-arrow-back">Backward</Button>
<Button type="danger" icon="ios-arrow-forward" icon-align="right">Forward</Button>
<Button type="primary" icon="ios-play" circle />
<Button type="primary" icon="ios-pause" />
<Button type="primary" icon="ios-square" />
<Button type="primary" icon="ios-search" loading>loading</Button>
<Button type="primary" :loading="loading" @click="loading=true">loading</Button>`

code.size =`<Button type="primary" large>Large</Button>
<Button type="primary">Base</Button>
<Button type="primary" mini>Mini</Button>`

code.group=`<ButtonGroup large>
  <Button>待发货</Button>
  <Button>已发货</Button>
  <Button>已签收</Button>
</ButtonGroup>
<ButtonGroup circle>
  <Button>待发货</Button>
  <Button>已发货</Button>
  <Button>已签收</Button>
  </ButtonGroup>
<ButtonGroup mini circle>
  <Button  type="success">编辑</Button>
  <Button  type="danger">删除</Button>
  <Button  type="primary">保存</Button>
</ButtonGroup>`
export default code