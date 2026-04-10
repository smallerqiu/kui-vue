<cn>
### 多级菜单
传入的菜单里有多个层级。
</cn>
<en>
### Multi-level Menu
The passed menu has multiple levels.
</en>

```vue
<template>
  <Dropdown>
    <Button theme="light">
      Multi-level Menu
      <Icon :type="ChevronDown" />
    </Button>
    <template #overlay>
      <Menu @select="menuClick" :items="items" />
    </template>
  </Dropdown>
</template>
<script setup lang="ts">
import { ChevronDown } from "kui-icons";
const menuClick = ({ key }) => {
  console.log(key);
};
const items = [
  { key: "1-1", title: "1st menu item" },
  { key: "1-2", title: "2nd menu item" },
  {
    key: "2",
    title: "sub menu",
    children: [
      { key: "2-1", title: "3rd menu item" },
      { key: "2-2", title: "4th menu item" },
      {
        key: "2-3",
        title: "sub menu",
        children: [
          { key: "2-3-1", title: "3rd menu item" },
          { key: "2-3-2", title: "4th menu item" },
        ],
      },
    ],
  },
  {
    key: "3",
    title: "disabled sub menu",
    disabled: true,
    children: [
      { key: "3-1", title: "5d menu item" },
      { key: "3-2", title: "6th menu item" },
    ],
  },
];
</script>
```
