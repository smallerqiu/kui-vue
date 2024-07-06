<cn>
#### 按钮组合
将多个 `Button` 放入 `ButtonGroup` 内，可实现按钮组合的效果。
</cn>

```vue
<template>
  <Space>
    <ButtonGroup>
      <Button>待发货</Button>
      <Dropdown placement="bottom-right">
        <Button :icon="ChevronDown"></Button> 
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
    </ButtonGroup>
    <ButtonGroup>
      <Button>通讯录</Button>
      <Button :icon="PersonOutline"></Button> 
    </ButtonGroup>
  </Space>
</template>
<script>
import { ChevronDown ,PersonOutline } from 'kui-icons'
export default{
  data() {
    return {
      PersonOutline ,ChevronDown
    }
  }
}
</script>
```