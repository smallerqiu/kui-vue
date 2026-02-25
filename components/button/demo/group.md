<cn>
### 按钮组合
将多个 `Button` 放入 `ButtonGroup` 内，可实现按钮组合的效果。
</cn>
<en>
### Button Group
Place multiple `Button` components inside `ButtonGroup` to group them.
</en>

```vue
<template>
  <Space>
    <ButtonGroup>
      <Button>Address</Button>
      <Button :icon="PersonOutline"></Button>
    </ButtonGroup>
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
      <template #icon><Icon :type="PersonAddOutline" /></template>
    </DropdownButton>
  </Space>
</template>
<script setup>
import { ChevronDown, PersonOutline, PersonAddOutline } from "kui-icons";

const handleMenuClick = (e) => {
  console.log("click", e);
};
const handleButtonClick = (e) => {
  console.log("click left button", e);
};
</script>
```
