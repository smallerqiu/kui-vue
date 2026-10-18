<template>
  <Space vertical block>
    <RadioGroup type="button" :options="options" v-model="tier" />
    <ListPanel :theme="tier" summary="3 users" :selected-count="selectedKeys.length">
      <template #selection="{ count }">
        <strong>{{ count }} selected</strong>
        <Button size="small" theme="plain">Disable</Button>
        <Button size="small" theme="plain" @click="selectedKeys = []">Clear</Button>
      </template>
      <template #filters>
        <Input :icon="Search" placeholder="Search users" style="width: 200px" />
      </template>
      <Table :data="data" :columns="columns" checkable v-model:selected-keys="selectedKeys" />
    </ListPanel>
  </Space>
</template>

<script setup lang="ts">
import { Search } from "kui-icons";
import type { Column, SurfaceThemeType, TableKey } from "kui-vue";
import { ref } from "vue";

// The panel does not plate itself: the tier it is given is painted on the card it renders under the header,
// so the five options change the plate and frame of the whole panel rather than one part of it. `solid` is
// the tier that moves content — the result summary turns to light-on-primary text and the bulk-action strip
// swaps its grey plate for a pale one on the primary. Select a row to make that strip appear.
const tiers: SurfaceThemeType[] = ["outline", "fill", "plain", "solid", "dashed"];
const options = tiers.map((value) => ({ label: value, value }));
const tier = ref<SurfaceThemeType>("outline");
const selectedKeys = ref<TableKey[]>([1]);
const columns: Column[] = [
  { title: "Name", key: "name" },
  { title: "Role", key: "role" },
];
const data = [
  { key: 1, name: "Alex", role: "Admin" },
  { key: 2, name: "Mia", role: "Editor" },
  { key: 3, name: "Leo", role: "Viewer" },
];
</script>
