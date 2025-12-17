<cn>
### 菜单隐藏方式
默认是点击关闭菜单，可以关闭此功能。
</cn>

```vue
<template>
  <Dropdown v-model:show="visible">
    <a> Hover me <Icon :type="ChevronDown" /> </a>
    <template #overlay>
      <Menu @select="handleMenuClick">
        <MenuItem key="1"> Not close the menu. </MenuItem>
        <MenuItem key="2"> Not close the menu also. </MenuItem>
        <MenuItem key="3"> Close the menu </MenuItem>
      </Menu>
    </template>
  </Dropdown>
</template>

<script setup>
import { ChevronDown } from 'kui-icons'
import { ref } from "vue";
const visible = ref(false);

const handleMenuClick = (e) => {
  if (e.key === '3') {
    this.visible = false;
  }
},
</script>
```
