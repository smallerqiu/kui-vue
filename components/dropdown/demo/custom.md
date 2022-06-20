<cn>
#### 菜单隐藏方式
默认是点击关闭菜单，可以关闭此功能。
</cn>

```vue
<template>
  <Dropdown v-model="visible">
    <a>
      Hover me <Icon :type="ChevronDown" />
    </a>
    <Menu slot="content" @click="handleMenuClick">
      <MenuItem key="1">
         Not close the menu.
      </MenuItem>
      <MenuItem key="2">
        Not close the menu also.
      </MenuItem>
      <MenuItem key="3">
        Close the menu
      </MenuItem>
    </Menu>
  </Dropdown>
</template>

<script>
import { ChevronDown } from 'kui-icons'
export default {
  data() {
    return {
      ChevronDown,
      visible: false,
    };
  },
  methods: {
    handleMenuClick(e) {
      if (e.key === '3') {
        this.visible = false;
      }
    },
  },
};
</script>


```