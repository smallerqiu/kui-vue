<template>
  <Space>
    <ButtonGroup>
      <Button>Address</Button>
      <Button :icon="User"></Button>
    </ButtonGroup>
    <DropdownButton @click="handleButtonClick">
      Dropdown
      <template #overlay>
        <Menu @select="handleMenuClick">
          <MenuItem key="1">
            <Icon :type="UserPlus" />
            1st menu item
          </MenuItem>
          <MenuItem key="2">
            <Icon :type="UserPlus" />
            2nd menu item
          </MenuItem>
          <MenuItem key="3">
            <Icon :type="UserPlus" />
            3rd item
          </MenuItem>
        </Menu>
      </template>
      <template #icon><Icon :type="UserPlus" /></template>
    </DropdownButton>
  </Space>
</template>
<script setup lang="ts">
import { User, UserPlus } from "kui-icons";
import type { MenuSelectEvent } from "kui-vue";
const handleMenuClick = (e: MenuSelectEvent) => {
  console.log("click", e);
};
const handleButtonClick = (e: MouseEvent) => {
  console.log("click left button", e);
};
</script>
