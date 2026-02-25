<cn>
### 基本用法
使用 `v-model` 进行数据双向绑定
</cn>
<en>
### Basic Usage
Use `v-model` for two-way data binding.
</en>

```vue
<template>
  <Space vertical>
    <Button @click="visible = true" type="primary">Open</Button>
    <Button @click="visible1 = true" type="primary">Click the overlay to close</Button>

    <Modal title="Basic Modal" v-model="visible" @ok="okHandle">
      <p>This is the content of a basic modal.</p>
      <p>More content...</p>
    </Modal>

    <Modal title="Basic Modal" v-model="visible1" @ok="visible1 = false" :mask-closable="true">
      <p>This is the content of a basic modal.</p>
      <p>More content...</p>
    </Modal>
  </Space>
</template>
<script setup>
import { ref } from "vue";
const visible = ref(false);
const custom = ref(false);
const visible1 = ref(false);
const okHandle = () => {
  visible.value = false;
};
</script>
```
