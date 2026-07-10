<template>
  <Modal v-model="isModalVisible" title="涉密核心资产审批" :footer="null">
    <Watermark :content="['审批专用', '张三 2026-07-10', 'IP: 192.168.1.100']">
      <div style="padding: 24px; height: 400px">
        <h4>核心敏感薪酬表单</h4>
      </div>
    </Watermark>
  </Modal>
  <Drawer v-model="isDrawerVisible" title="涉密核心资产审批" :footer="null">
    <Watermark :content="['审批专用', '张三 2026-07-10', 'IP: 192.168.1.100']">
      <div style="padding: 24px; height: 400px">
        <h4>核心敏感薪酬表单</h4>
      </div>
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
