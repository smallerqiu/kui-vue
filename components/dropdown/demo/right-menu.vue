<template>
  <Dropdown trigger="contextmenu">
    <div
      :style="{
        textAlign: 'center',
        height: '200px',
        lineHeight: '200px',
        color: '#999',
      }"
      class="demo-view-fill"
    >
      Right Click on here
    </div>
    <template #overlay>
      <Menu @select="handle">
        <MenuItem key="news" :icon="Document">New file</MenuItem>
        <MenuItem key="edit" :icon="IconEdit">Edit</MenuItem>
        <MenuItem key="save" :icon="Save">Save</MenuItem>
        <MenuItem key="cut" :icon="Cut">Cut</MenuItem>
        <MenuDivider />
        <MenuItem key="exit" :icon="Exit">Exit</MenuItem>
      </Menu>
    </template>
  </Dropdown>
</template>
<script setup lang="ts">
import { Cut, Document, Exit, IconEdit, Save } from "kui-icons";
import { message, type MenuSelectEvent } from "kui-vue";
const handle = ({ key }: MenuSelectEvent) => {
  message.info("Click on item " + key);
};
</script>
