<template>
  <Space size="middle">
    <Space compact vertical>
      <Button :icon="CloudDownloadOutline" />
      <Button :icon="GameControllerOutline" />
      <Button :icon="HeartOutline" />
      <Button :icon="MailOutline" />
      <Button :icon="ShirtOutline" />
      <Dropdown placement="bottom-right">
        <Button :icon="Ellipsis" />
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
    <!-- <Space compact vertical>
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
    </Space> -->
  </Space>
</template>
<script setup>
import {
  CloudDownloadOutline,
  Ellipsis,
  GameControllerOutline,
  HeartOutline,
  MailOutline,
  ShirtOutline,
} from "kui-icons";
</script>
