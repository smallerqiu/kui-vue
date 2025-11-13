<cn>
#### Button 紧凑布局
Button 组件紧凑排列的示例。
</cn>

```vue
<template>
  <Space vertical size="middle">
    <Space compact>
      <Tooltip placement="top" title="Copy">
        <Button :icon="CloudDownloadOutline"></Button>
      </Tooltip>
      <Button :icon="GameControllerOutline"></Button>
      <Button :icon="HeartOutline"></Button>
      <Button :icon="MailOutline"></Button>
      <Button :icon="ShirtOutline"></Button>
      <Dropdown placement="bottom-right">
        <Button :icon="Ellipsis"></Button>
        <template #overlay>
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
      <Button :icon="ShirtOutline" disabled></Button>
      <Button :icon="ShirtOutline"></Button>
      <Button>Button4</Button>
    </Space>
  </Space>
</template>
<script setup>
import {
  Copy,
  CloudDownloadOutline,
  Ellipsis,
  GameControllerOutline,
  HeartOutline,
  MailOutline,
  ShirtOutline,
} from "kui-icons";
</script>
```
