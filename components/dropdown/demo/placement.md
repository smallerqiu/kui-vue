<cn>
#### 弹出位置
支持 6 个弹出位置。
</cn>

```vue
<template>
  <div id="dropdown-demo-placement">
    <template v-for="(placement, index) in placements">
      <Dropdown :placement="placement">
        <Button>{{ placement }}</Button>
        <Menu slot="content">
          <MenuItem>
            <a target="_blank" rel="noopener noreferrer" href="http://www.chuchur.com/">1st menu item</a>
          </MenuItem>
          <MenuItem>
            <a target="_blank" rel="noopener noreferrer" href="http://www.k-ui.cn/">2nd menu item</a>
          </MenuItem>
          <MenuItem>
            <a target="_blank" rel="noopener noreferrer" href="http://react.k-ui.cn/">3rd menu item</a>
          </MenuItem>
        </Menu>
      </Dropdown>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      placements: ['bottom-left', 'bottom', 'bottom-right', 'top-left', 'top', 'top-right'],
    };
  },
};
</script>
<style scoped>
#dropdown-demo-placement .k-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>


```