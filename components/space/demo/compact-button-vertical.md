<cn>
#### 垂直方向紧凑布局
垂直方向的紧凑布局，目前仅支持 Button 组合。
</cn>

```vue
<template>
  <Space size="middle">
    <space compact vertical>
      <Button :icon="CloudDownloadOutline"></Button>
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
    <space compact vertical>
      <Button type="dashed">Button1</Button>
      <Button type="dashed">Button2</Button>
      <Button type="dashed">Button3</Button>
      <Button type="dashed">Button4</Button>
    </space>
    <space compact vertical>
      <Button>Button1</Button>
      <Button>Button2</Button>
      <Button>Button3</Button>
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