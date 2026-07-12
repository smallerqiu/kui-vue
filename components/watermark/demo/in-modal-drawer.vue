<template>
  <Modal v-model="isModalVisible" title="涉密核心资产审批">
    <Watermark :content="['审批专用', '张三 2026-07-10', 'IP: 192.168.1.100']">
      <Flex style="background-color: #f5f5f510; height: 500px" align="center" justify="center">
        <p>核心敏感数据</p>
      </Flex>
    </Watermark>
  </Modal>
  <Drawer v-model="isDrawerVisible" title="涉密核心资产审批">
    <Watermark :content="['审批专用', '张三 2026-07-10', 'IP: 192.168.1.100']">
      <Flex style="background-color: #f5f5f510; height: 500px" align="center" justify="center">
        <p>核心敏感数据</p>
      </Flex>
    </Watermark>
  </Drawer>
  <Space>
    <Button @click="isModalVisible = true">Show in Modal</Button>
    <Button @click="isDrawerVisible = true">Show in Drawer</Button>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const isModalVisible = ref(false);
const isDrawerVisible = ref(false);
</script>
