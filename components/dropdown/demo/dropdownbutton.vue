<template>
  <Space vertical>
    <DropdownButton @click="handleButtonClick">
      Dropdown
      <template #overlay>
        <Menu @select="handleMenuClick">
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
    </DropdownButton>
    <DropdownButton>
      Dropdown
      <template #overlay>
        <Menu @select="handleMenuClick">
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
    <DropdownButton disabled @click="handleButtonClick">
      Dropdown
      <template #overlay>
        <Menu @select="handleMenuClick">
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
    </DropdownButton>
    <Dropdown>
      <template #overlay>
        <Menu @select="handleMenuClick">
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
      <Button>
        Button
        <Icon :type="PersonAddOutline" />
      </Button>
    </Dropdown>
  </Space>
</template>
<script setup lang="ts">
import { PersonAddOutline } from "kui-icons";

const handleButtonClick = (e) => {
  console.log("click left button", e);
};
const handleMenuClick = (e) => {
  console.log("click", e);
};
</script>