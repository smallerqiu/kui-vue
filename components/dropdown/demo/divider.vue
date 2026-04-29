<template>
  <Dropdown>
    <Button> 分隔线 <Icon :type="ChevronDown" /> </Button>
    <template #overlay>
      <Menu>
        <MenuItem key="0">
          <a target="_blank" href="https://www.chuchur.com/">1st menu item</a>
        </MenuItem>
        <MenuItem key="1">
          <a target="_blank" href="https://react.k-ui.cn/">2nd menu item</a>
        </MenuItem>
        <MenuDivider />
        <MenuItem key="3" disabled> 3rd menu item（disabled） </MenuItem>
      </Menu>
    </template>
  </Dropdown>
</template>
<script setup lang="ts">
import { ChevronDown } from "kui-icons";
</script>
