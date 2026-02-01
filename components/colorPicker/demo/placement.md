<cn>
### 弹出位置
支持 6 个弹出位置 , 如果上面的空间不够，色盘会自动在下面展示
</cn>

```vue
<template>
  <Space id="dropdown-demo-placement" wrap>
    <template v-for="placement in placements">
      <ColorPicker value="red" size="small" :placement="placement">
        <Button>{{ placement }}</Button>
      </ColorPicker>
    </template>
  </Space>
</template>

<script setup>
const placements = ["bottom-left", "bottom", "bottom-right", "top-left", "top", "top-right"];
</script>
```
