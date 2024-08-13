<cn>
#### Button 紧凑布局
Button 组件紧凑排列的示例。
</cn>

```vue
<template>
  <Space vertical size="middle">
    <space compact>
      <Tooltip placement="top" title="Copy">
        <Button :icon="CloudDownloadOutline"></Button>
      </Tooltip>
      <Button :icon="GameControllerOutline"></Button>
      <Button :icon="HeartOutline"></Button>
      <Button :icon="MailOutline"></Button>
      <Button :icon="ShirtOutline"></Button>
      <Dropdown placement="bottom-right">
        <Button :icon="Ellipsis"></Button> 
        <Menu slot="content">
          <MenuItem>
            <a href="javascript:;">1st menu item</a>
          </MenuItem>
          <MenuItem>
            <a href="javascript:;">2nd menu item</a>
          </MenuItem>
          <MenuItem>
            <a href="javascript:;">3rd menu item</a>
          </MenuItem>
        </Menu>
      </Dropdown>
    </space>
    <space compact>
      <Button type="primary">Button1</Button>
      <Button type="primary">Button2</Button>
      <Button type="primary">Button3</Button>
      <Button type="primary">Button4</Button>
    </space>
    <space compact>
      <Button>Button1</Button>
      <Button>Button2</Button>
      <Button>Button3</Button>
      <Button :icon="ShirtOutline" disabled></Button>
      <Button :icon="ShirtOutline"></Button>
      <Button>Button4</Button>
    </space>
    
  </Space>
</template>
<script>
import { Copy ,CloudDownloadOutline,Ellipsis,GameControllerOutline,HeartOutline,MailOutline,ShirtOutline} from 'kui-icons'
export default{
  data(){
    return{
      Copy ,CloudDownloadOutline,GameControllerOutline,
      HeartOutline,MailOutline,ShirtOutline,Ellipsis
    }
  }
}
</script>
```