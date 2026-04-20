<template>
  <Tabs v-model="current" @change="change" style="width: 350px">
    <TabPanel key="1" title="Small">
      <Space size="small">
        <Button v-for="x in 5" :key="x">Small</Button>
      </Space>
    </TabPanel>
    <TabPanel key="2" title="Middle ">
      <Space size="middle">
        <Button size="small" v-for="x in 5" :key="x">Middle</Button>
      </Space>
    </TabPanel>
    <TabPanel key="3" title="Large">
      <Space size="large">
        <Button size="small" v-for="x in 5" :key="x">Large</Button>
      </Space>
    </TabPanel>
    <TabPanel key="4" title="Wrap">
      <Space :size="[8, 20]" wrap>
        <Button size="small" v-for="x in 10" :key="x">Wrap</Button>
      </Space>
    </TabPanel>
  </Tabs>
</template>
<script setup lang="ts">
import { ref } from "vue";
const current = ref("1");
const change = (key: string) => {
  console.log(key);
};
</script>
