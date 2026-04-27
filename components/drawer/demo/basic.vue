<template>
  <div>
    <Space wrap>
      <Button @click="show = !show">Open</Button>
      <Button @click="show2 = !show2">Width 30%</Button>
      <Button @click="show3 = !show3">Click mask can't close</Button>
      <Button @click="show4 = !show4">No mask</Button>
    </Space>
    <Drawer v-model="show" :footer="false" @ok="show = false">
      <p>something ...</p>
      <p>something ...</p>
      <p>something ...</p>
    </Drawer>
    <Drawer v-model="show2" width="30%" title="Width 30%" @ok="show2 = false">
      <p>something ...</p>
      <p>something ...</p>
      <p>something ...</p>
    </Drawer>
    <Drawer v-model="show3" title="Click mask to close" :mask-closable="false" @ok="show3 = false">
      <p>something ...</p>
      <p>something ...</p>
      <p>something ...</p>
    </Drawer>
    <Drawer
      v-model="show4"
      title="Click mask to close"
      :mask="false"
      @ok="submit"
      :loading="loading"
    >
      <p>something ...</p>
      <p>something ...</p>
      <p>something ...</p>
    </Drawer>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const show = ref(false);
const show2 = ref(false);
const show3 = ref(false);
const show4 = ref(false);
const loading = ref(false);

const submit = () => {
  loading.value = true;
  setTimeout(() => {
    show4.value = false;
    loading.value = false;
  }, 2000);
};
</script>
