<template>
  <Space vertical size="middle">
    <Space compact>
      <Tooltip placement="top" title="Copy">
        <Button :icon="CloudDownload"></Button>
      </Tooltip>
      <Button :icon="Gamepad2"></Button>
      <Button :icon="Heart"></Button>
      <Button :icon="Mail"></Button>
      <Button :icon="Shirt"></Button>
      <Dropdown placement="bottom-right">
        <Button :icon="Ellipsis"></Button>
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
    </Space>
    <Space compact>
      <Button type="primary">Button1</Button>
      <Button type="primary">Button2</Button>
      <Button type="primary">Button3</Button>
      <Button type="primary">Button4</Button>
    </Space>
    <Space compact>
      <Button>Button1</Button>
      <Button>Button2</Button>
      <Button>Button3</Button>
      <Button :icon="Shirt" disabled></Button>
      <Button :icon="Shirt"></Button>
      <Button>Button4</Button>
    </Space>
  </Space>
</template>
<script setup lang="ts">
import { CloudDownload, Ellipsis, Gamepad2, Heart, Mail, Shirt } from "kui-icons";
</script>
