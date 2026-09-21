<script setup lang="ts">
import { ref } from "vue";
import {
  Button,
  Popup,
  Space,
  type PopupOpenReason,
  type PopupOpenChangeDetail,
  type PopupRef,
} from "kui-vue";
const open = ref(false);
const reason = ref<PopupOpenReason>("programmatic");
const popup = ref<PopupRef | null>(null);
const onOpenChange = (_open: boolean, detail: PopupOpenChangeDetail) => {
  reason.value = detail.reason;
};
</script>
<template>
  <Space vertical>
    <Space>
      <Button @click.stop="popup?.open()">Open via ref</Button>
      <Popup ref="popup" v-model:open="open" trigger="manual" @open-change="onOpenChange">
        <Button @click="open = !open">Toggle controlled popup</Button>
        <template #overlay="{ close }">
          <Space vertical>
            <span>Click outside or press Escape.</span>
            <Button @click="close">Close from inside</Button>
          </Space>
        </template>
      </Popup>
    </Space>
    <span role="status">Open: {{ open }} · Reason: {{ reason }}</span>
  </Space>
</template>
