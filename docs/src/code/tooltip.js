let code = {}

code.base =`<Tooltip content="我是提示内容">
  <Button>我是一段文字</Button>
</Tooltip>
<Tooltip content="我是提示内容" dark>
  <Button>我是一段文字</Button>
</Tooltip>`

code.position =`<div style="margin-left:80px;white-space: nowrap;">
  <Tooltip  content="Tooltip的显示内容" placement="top-left">
    <Button>上左</Button>
  </Tooltip>
  <Tooltip  content="Tooltip的显示内容" placement="top">
    <Button>上边</Button>
  </Tooltip>
  <Tooltip  content="Tooltip的显示内容" placement="top-right">
    <Button>上右</Button>
  </Tooltip>
</div>
<div style="float:left;height:150px;width:80px;">
  <Tooltip  content="Tooltip的显示内容" placement="left-top">
    <Button>左上</Button>
  </Tooltip>
  <Tooltip  content="Tooltip的显示内容" placement="left">
    <Button>左边</Button>
  </Tooltip>
  <Tooltip  content="Tooltip的显示内容" placement="left-bottom">
    <Button>左下</Button>
  </Tooltip>
</div>
<div style="margin-left:300px;height:150px;width:80px;">
  <Tooltip  content="Tooltip的显示内容" placement="right-top">
    <Button>右上</Button>
  </Tooltip>
  <Tooltip  content="Tooltip的显示内容" placement="right">
    <Button>右边</Button>
  </Tooltip>
  <Tooltip  content="Tooltip的显示内容" placement="right-bottom">
    <Button>右下</Button>
  </Tooltip>
</div>
<div style="margin-left:80px;white-space: nowrap;">
  <Tooltip  content="Tooltip的显示内容" placement="bottom-left">
    <Button>下左</Button>
  </Tooltip>
  <Tooltip  content="Tooltip的显示内容" placement="bottom">
    <Button>下边</Button>
  </Tooltip>
  <Tooltip  content="Tooltip的显示内容" placement="bottom-right">
    <Button>下右</Button>
  </Tooltip>
</div>`

code.slot = `<Tooltip trigger="click">
<Button>我是个演员</Button>
<div slot="content">
  我独占一行，然后....<br/>
  我独占一行，然后....
</div>
</Tooltip>`

export default code