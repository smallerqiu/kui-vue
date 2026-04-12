<template>
  <div style="width:256px">
    <Button @click="change" :icon="collapsed ? MenuFold : MenuUnfold" type="primary"></Button>
    <br />
    <br />
    <Menu
      v-model="current"
      :openKeys="openKeys"
      theme="dark"
      :inlineCollapsed="collapsed"
      mode="inline"
      :items="items"
    />
  </div>
</template>
<script setup lang="ts">
import { MenuFold, MenuUnfold, Mail, Grid, Heart, Settings } from "kui-icons";
import { ref } from "vue";
const current = ref(["1-1"]);
const openKeys = ref(["3-1"]);
const collapsed = ref(false);

const change = () => {
  collapsed.value = !collapsed.value;
};

const items = [
  { title: "Option 1", key: "1-1", icon: Mail },
  { title: "Option 2", key: "2-1", icon: Grid },
  {
    title: "Navigation Two",
    key: "3-1",
    icon: Heart,
    children: [
      { title: "Option 5", key: "3-1-1", icon: Mail },
      { title: "Option 6", key: "3-1-2", icon: Mail },
      {
        title: "SubMenu",
        key: "3-1-3",
        icon: Mail,
        children: [
          { title: "Option 7", key: "3-1-3-1", icon: Mail },
          { title: "Option 8", key: "3-1-3-2", icon: Mail },
        ],
      },
    ],
  },
  {
    title: "Navigation Three",
    key: "4-1",
    icon: Settings,
    children: [
      { title: "Option 9", key: "4-1-1", icon: Mail },
      { title: "Option 10", key: "4-1-2", icon: Mail },
      { title: "Option 11", key: "4-1-3", icon: Mail },
      { title: "Option 12", key: "4-1-4", icon: Mail },
    ],
  },
];
</script>