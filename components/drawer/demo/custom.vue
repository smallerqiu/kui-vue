<template>
  <div>
    <Space wrap>
      <Segmented v-model="placement" :options="placements" />
      <Button @click="show = true">Open</Button>
    </Space>
    <Drawer
      v-model="show"
      height="300"
      :placement="placement"
      title="What's your name? "
      cancelText="Cancel"
      okText="Ok"
      @ok="show = false"
    >
      My name is Qiu.
    </Drawer>
  </div>
</template>
<script setup lang="ts">
import type { DrawerPlacementsType } from "kui-vue";
import { ref } from "vue";
const show = ref(false);
const placement = ref<DrawerPlacementsType>("left");
const placements = ["left", "top", "right", "bottom"].map((value) => ({ label: value, value }));
</script>
