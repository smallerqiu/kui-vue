<cn>
### 基本用法
最简单的下拉菜单。
</cn>
<en>
### Basic Usage
The simplest dropdown menu.
</en>

```vue
<template>
  <Dropdown arrow placement="bottom">
    <Button type="text"> Hover me </Button>
    <template #overlay>
      <Menu>
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
    </template>
  </Dropdown>
  <Dropdown trigger="click">
    <Button type="text"> Click me </Button>
    <template #overlay>
      <Menu>
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
    </template>
  </Dropdown>
</template>
<script setup lang="ts">
import { ChevronDown } from "kui-icons";
</script>
```
