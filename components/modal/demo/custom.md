<cn>
### 自定义
自定义 `Modal`
</cn>
<en>
### Custom
Custom `Modal`.
</en>

```vue
<template>
  <Space vertical>
    <Button @click="visible1 = true" type="primary">Width: 300px</Button>
    <Button @click="visible2 = true" type="primary">Custom footer</Button>
    <Button @click="visible3 = true" type="primary">Internationalization</Button>
    <Button @click="visible4 = true" type="primary">Asynchronous shutdown</Button>
    <Modal title="Width 300px" v-model="visible1" :width="300" @ok="visible1 = false">
      <p>content</p>
    </Modal>

    <Modal title="Custom footer" v-model="visible2">
      <p>content</p>
      <template #footer>
        <Button :icon="Save" @click="visible2 = false" type="primary">Save</Button>
      </template>
    </Modal>

    <Modal title="Are you ok ?" v-model="visible3" ok-text="Ok" cancel-text="Cancel" @ok="okHandle">
      <p>Yes , I'm fine !</p>
    </Modal>

    <Modal title="Submit forms" v-model="visible4" :loading="loading" @ok="submit" @close="close">
      <p>Name：<Input placeholder="Please input your name" style="width:200px" /></p>
    </Modal>
  </Space>
</template>
<script setup lang="ts">
import { Save } from "kui-icons";
import { ref } from "vue";
const visible1 = ref(false);
const visible2 = ref(false);
const visible3 = ref(false);
const visible4 = ref(false);
const loading = ref(false);
const timer = ref();

const okHandle = () => {
  visible3.value = false;
};
const submit = () => {
  loading.value = true;
  timer.value = setTimeout((e) => {
    loading.value = false;
    visible4.value = false;
  }, 2000);
};
const close = () => {
  loading.value = false;
  clearTimeout(timer.value);
};
</script>
```
