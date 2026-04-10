<cn>
### 默认展示
默认会在以上组件展示
</cn>
<en>
### Default Display
Will be displayed by default in the above components.
</en>

```vue
<template>
  <Space vertical block>
    Select:
    <Select :width="220" />
    Table:
    <Table :data="[]" :columns="columns" />
  </Space>
</template>
<script setup lang="ts">
const columns = [{ title: "Name" }, { title: "Age" }];
</script>
```
