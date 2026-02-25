<cn>
### 弹出位置
支持 6 个弹出位置。
</cn>
<en>
### Popup Position
Supports 6 popup positions.
</en>

```vue
<template>
  <Space id="dropdown-demo-placement" wrap>
    <template v-for="(placement, index) in placements">
      <Dropdown :placement="placement">
        <Button>{{ placement }}</Button>
        <template #overlay>
          <Menu>
            <MenuItem>
              <a target="_blank" rel="noopener noreferrer" href="http://www.chuchur.com/">
                1st menu item
              </a>
            </MenuItem>
            <MenuItem>
              <a target="_blank" rel="noopener noreferrer" href="http://www.k-ui.cn/">
                2nd menu item
              </a>
            </MenuItem>
            <MenuItem>
              <a target="_blank" rel="noopener noreferrer" href="http://react.k-ui.cn/">
                3rd menu item
              </a>
            </MenuItem>
          </Menu>
        </template>
      </Dropdown>
    </template>
  </Space>
</template>

<script setup>
const placements = ["bottom-left", "bottom", "bottom-right", "top-left", "top", "top-right"];
</script>
```
