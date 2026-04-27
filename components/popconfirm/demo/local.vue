<template>
  <Space>
    <Popconfirm title="Are you sure delete this content?" @ok="ok" @cancel="cancel">
      <Button type="danger">Delete</Button>
    </Popconfirm>
    <Popconfirm
      title="Are you sure delete this task?"
      ok-text="Yes"
      cancel-text="No"
      @ok="ok"
      @cancel="cancel"
    >
      <Button type="primary">Confirm</Button>
    </Popconfirm>
  </Space>
</template>
<script setup lang="ts">
import { message } from "kui-vue";
const ok = () => {
  message.success("Clicked on ok");
};
const cancel = () => {
  message.info("Clicked on cancel");
};
</script>