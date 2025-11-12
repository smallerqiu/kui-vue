<template>
  <Space>
    <ButtonGroup>
      <Button>通讯录</Button>
      <Button :icon="PersonOutline"></Button>
    </ButtonGroup>
    <DropdownButton>
      Dropdown
      <template #overlay>
        <Menu @click="handleMenuClick">
          <MenuItem key="1">
            <Icon :type="PersonAddOutline" />
            1st menu item
          </MenuItem>
          <MenuItem key="2">
            <Icon :type="PersonAddOutline" />
            2nd menu item
          </MenuItem>
          <MenuItem key="3">
            <Icon :type="PersonAddOutline" />
            3rd item
          </MenuItem>
        </Menu>
      </template>
      <template #icon><Icon :type="PersonAddOutline" /></template>
    </DropdownButton>
  </Space>
</template>
<script setup>
import { ChevronDown, PersonOutline, PersonAddOutline } from "kui-icons";
</script>
