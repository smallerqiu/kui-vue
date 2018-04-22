let code = {}

code.base=`<Button>Default</Button>
<Button type="primary">Primary</Button>
<Button type="gray">gray</Button>
<Button type="success">Success</Button>
<Button type="warning">Warning</Button>
<Button type="danger">Danger</Button>
<Button type="link">link</Button>
<div style="margin:20px 0;">
  <Button hollow>Default</Button>
  <Button type="primary" hollow>Primary</Button>
  <Button type="gray" hollow>gray</Button>
  <Button type="success" hollow>Success</Button>
  <Button type="warning" hollow>Warning</Button>
  <Button type="danger" hollow>Danger</Button>
  <Button type="link" hollow>link</Button>
</div>
<Button circle>Default</Button>
<Button type="primary" circle>Primary</Button>
<Button type="gray" circle>gray</Button>
<Button type="success" circle>Success</Button>
<Button type="warning" circle>Warning</Button>
<Button type="danger" circle>Danger</Button>
<Button type="link" circle>link</Button>`

code.disabled= `<Button disabled>Default</Button>
<Button disabled type="primary">Primary</Button>
<Button disabled type="gray">gray</Button>
<Button disabled type="success">Success</Button>
<Button disabled type="warning">Warning</Button>
<Button disabled type="danger">Danger</Button>
<Button disabled type="link">link</Button>
<div style="margin:20px 0;">
  <Button disabled hollow>Default</Button>
  <Button disabled type="primary" hollow>Primary</Button>
  <Button disabled type="gray" hollow>gray</Button>
  <Button disabled type="success" hollow>Success</Button>
  <Button disabled type="warning" hollow>Warning</Button>
  <Button disabled type="danger" hollow>Danger</Button>
  <Button disabled type="link" hollow>link</Button>
</div>`

code.withIcon =`<Button type="primary" icon="ios-search">搜索</Button>
<Button type="success" icon="ios-cloud-upload-outline">上传</Button>
<Button type="danger" icon="ios-cloud-download-outline">下载</Button>
<Button type="primary" icon="play"></Button>
<Button type="primary" icon="pause"></Button>
<Button type="primary" icon="stop"></Button>`

code.size =`<Button mini>Default</Button>
<Button type="primary" mini>Primary</Button>
<Button type="gray" mini>gray</Button>
<Button type="success" mini>Success</Button>
<Button type="warning" mini>Warning</Button>
<Button type="warning" mini icon="alert-circled">Warning</Button>
<Button type="danger" mini>Danger</Button>
<Button type="link" mini>link</Button>`

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