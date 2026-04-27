<template>
  <Space size="middle">
    <Space compact vertical>
      <Button :icon="Download"></Button>
      <Button :icon="Gamepad2"></Button>
      <Button :icon="Heart"></Button>
      <Button :icon="Mail"></Button>
      <Button :icon="Shirt"></Button>
      <Dropdown placement="bottom-left">
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
    <Space compact vertical>
      <Button theme="dashed">Button1</Button>
      <Button theme="dashed">Button2</Button>
      <Button theme="dashed">Button3</Button>
      <Button theme="dashed">Button4</Button>
    </Space>
    <Space compact vertical>
      <Button>Button1</Button>
      <Button>Button2</Button>
      <Button>Button3</Button>
      <Button>Button4</Button>
    </Space>
  </Space>
</template>
<script setup lang="ts">
import { Download, Ellipsis, Gamepad2, Heart, Mail, Shirt } from "kui-icons";
</script>
