let code = {}

code.base=`<Button>Default</Button>
<Button type="primary">Primary</Button>
<Button type="primary" hollow>hollow</Button>
<Button type="primary" circle>circle</Button> 
<Button type="link" circle>link</Button>`

code.disabled=`<Button type="primary">Primary</Button>
<Button disabled type="primary">disabled</Button>`

code.withIcon = `<Button type="primary" icon="ios-search">搜索</Button>
<Button type="success" icon="ios-cloud-upload-outline">上传</Button>
<Button type="danger" icon="ios-cloud-download-outline">下载</Button>
<Button type="primary" icon="play"/>
<Button type="primary" icon="pause"></Button>
<Button type="primary" icon="stop"></Button>`

code.size =`<Button type="primary">Primary</Button>
<Button type="primary" mini>mini</Button>`

code.group=`<ButtonGroup>
  <Button>待发货</Button>
  <Button>已发货</Button>
  <Button>已签收</Button>
</ButtonGroup>
<ButtonGroup circle>
  <Button>待发货</Button>
  <Button>已发货</Button>
  <Button>已签收</Button>
  </ButtonGroup>
  <ButtonGroup mini>
  <Button>待发货</Button>
  <Button>已发货</Button>
  <Button>已签收</Button>
</ButtonGroup>`
export default code