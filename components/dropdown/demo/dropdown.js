let code = {}
code.base = `<Dropdown>
  <a style="margin-right:30px;">下拉菜单
    <Icon type="ios-arrow-down" /></a>
  <DropdownMenu slot="list">
    <DropdownItem>苹果🍎</DropdownItem>
    <DropdownItem>香蕉</DropdownItem>
    <DropdownItem>橘子</DropdownItem>
    <DropdownItem>葡萄</DropdownItem>
  </DropdownMenu>
</Dropdown>
<Dropdown>
  <Button>下拉菜单
    <Icon type="ios-arrow-down" /></Button>
  <DropdownMenu slot="list">
    <DropdownItem>苹果🍎</DropdownItem>
    <DropdownItem>香蕉</DropdownItem>
    <DropdownItem>橘子</DropdownItem>
    <DropdownItem>葡萄</DropdownItem>
  </DropdownMenu>
</Dropdown>`

code.trigger =`<Dropdown>
  <a style="margin-right:10px;">hover展开
    <Icon type="ios-arrow-down" /></a>
  <DropdownMenu slot="list">
    <DropdownItem>苹果🍎</DropdownItem>
    <DropdownItem>香蕉</DropdownItem>
    <DropdownItem>橘子</DropdownItem>
    <DropdownItem>葡萄</DropdownItem>
  </DropdownMenu>
</Dropdown>
<Dropdown trigger="click">
  <Button>click展开
    <Icon type="ios-arrow-down" /></Button>
  <DropdownMenu slot="list">
    <DropdownItem>苹果🍎</DropdownItem>
    <DropdownItem>香蕉</DropdownItem>
    <DropdownItem>橘子</DropdownItem>
    <DropdownItem>葡萄</DropdownItem>
  </DropdownMenu>
</Dropdown>
<Dropdown trigger="custom" :visible="show">
  <Button @click="show=true">custom展开
    <Icon type="ios-arrow-down" /></Button>
  <div slot="list" style="background:#fff;padding:10px;border:1px solid #ddd;">
    我是自定义内容
    <Button mini @click="show=false">关闭</Button>
  </div>
</Dropdown>`

code.helper =`<Dropdown>
  <Button>下拉菜单
    <Icon type="ios-arrow-down" /></Button>
  <DropdownMenu slot="list">
    <DropdownItem>菜单一</DropdownItem>
    <DropdownItem disabled>我被禁用了</DropdownItem>
    <DropdownItem>菜单一</DropdownItem>
    <DropdownItem selected>我被选中了</DropdownItem>
    <DropdownItem icon="md-save">
      <span>保存项目</span>
      <span slot="shortcut">⌘+S</span></DropdownItem>
    <DropdownItem icon="ios-cut">
      <span>剪切</span>
      <span slot="shortcut">⌘+X</span></DropdownItem>
    <DropdownItem divided>我有一条线</DropdownItem>
  </DropdownMenu>
</Dropdown>`
export default code