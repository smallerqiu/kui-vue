<cn>
#### 基础用法
最简单的下拉菜单。
</cn>

```vue
<template>
  <Dropdown>
    <Button>
      滑动展开 <Icon :type="ChevronDown" />
    </Button>
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
  <Dropdown show-placement-arrow trigger="normal" placement="bottom" v-model="show">
    <Button theme="light" @click="show=!show">
      Toggle <Icon :type="ChevronDown" />
    </Button>
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

  <Dropdown trigger="click" >
    <Button theme="light">
      Click me <Icon :type="ChevronDown" />
    </Button>
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
</template>
<script>
import { ChevronDown } from 'kui-icons'
export default{
  data() {
    return {
      ChevronDown,
      show:false
    }
  }
}
</script>
```