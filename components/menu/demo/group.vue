<template>
  <div style="width: 256px">
    <Menu v-model="current" :openKeys="openKeys" mode="inline" @openChange="openChange">
      <MenuGroup title="Application">
        <MenuItem key="1-1" :icon="Mail">Navigation One</MenuItem>
        <MenuItem key="1-2" :icon="Heart">Navigation Two</MenuItem>
        <MenuItem key="1-3" :icon="Settings" disabled>Navigation Three</MenuItem>
      </MenuGroup>
      <MenuDivider />
      <SubMenu key="sub1" title="Navigation Four" :icon="Mail">
        <MenuGroup title="Options">
          <MenuItem key="4-1">Option 1</MenuItem>
          <MenuItem key="4-2">Option 2</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuItem key="4-3">Option 3</MenuItem>
      </SubMenu>
    </Menu>
  </div>
</template>
<script setup lang="ts">
import { Heart, Mail, Settings } from "kui-icons";
import { ref } from "vue";

const current = ref(["1-1"]);
const openKeys = ref(["sub1"]);
const openChange = (keys: string[]) => {
  openKeys.value = keys;
};
</script>
