<template>
  <div>
    <Transfer
      v-model="selected"
      :data-source="items"
      :operations="['加入', '移除']"
      @change="handleChange"
      @select-change="handleSelectChange"
    />
    <p class="event-log">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

type Key = string | number;

const selected = ref<Key[]>([4]);
const message = ref("请选择并移动项目");
const items = ["Design", "Development", "Testing", "Deployment"].map((title, index) => ({
  key: index + 1,
  title,
}));
const handleChange = (_targetKeys: Key[], direction: "left" | "right", movedKeys: Key[]) => {
  message.value = `${direction === "right" ? "加入" : "移除"}：${movedKeys.join(", ")}`;
};
const handleSelectChange = (sourceKeys: Key[], targetKeys: Key[]) => {
  if (sourceKeys.length || targetKeys.length) {
    message.value = `左侧已选 ${sourceKeys.length} 项，右侧已选 ${targetKeys.length} 项`;
  }
};
</script>

<style scoped>
.event-log {
  margin-top: 16px;
  color: var(--kui-color-text-description);
}
</style>
