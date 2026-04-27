<template>
  <Tree :data="data" @expand="expand" :expandedKeys="expandedKeys" />
</template>
<script setup lang="ts">
import {
  Folder,
  FolderOpen,
  LogoAndroid,
  LogoApple,
  LogoFeishu,
  LogoQq,
  LogoTwitter,
  LogoWechat,
} from "kui-icons";
import type { TreeExpandEvent } from "..";

const expandedKeys = ["0-0", "1-0", "1-1", "1-2"];
const data = [
  {
    title: "src",
    key: "0-0",
    icon: FolderOpen,
    children: [
      {
        title: "assets",
        key: "1-0",
        icon: FolderOpen,
        children: [
          { title: "main.js", icon: LogoTwitter, disabled: true, key: "1-0-0" },
          { title: "test.py", icon: LogoQq, key: "1-0-1" },
        ],
      },
      {
        title: "pages",
        expand: true,
        key: "1-1",
        icon: FolderOpen,
        children: [
          { title: "index.html", icon: LogoFeishu, key: "1-1-0" },
          { title: "index.md", icon: LogoWechat, key: "1-1-1" },
        ],
      },
      {
        title: "app",
        expand: true,
        key: "1-2",
        icon: FolderOpen,
        children: [
          { title: "zen.apk", icon: LogoAndroid, key: "1-2-0" },
          { title: "zen.ipa", icon: LogoApple, key: "1-2-1" },
        ],
      },
    ],
  },
];
const expand = ({ expanded, node }: TreeExpandEvent) => {
  node.icon = expanded ? FolderOpen : Folder;
};
</script>
