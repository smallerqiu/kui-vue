<cn>
### 自定义图标
可以针对不同的节点定制图标。
 </cn>
<en>
### Custom Icons
Icons can be customized for different nodes.
</en>

```vue
<template>
  <Tree :data="data" @expand="expand" :expandedKeys="expandedKeys" />
</template>
<script setup>
import {
  FolderOpenOutline,
  FolderOutline,
  LogoFeishu,
  LogoTwitter,
  LogoQq,
  LogoWechat,
  LogoAndroid,
  LogoApple,
} from "kui-icons";

const expandedKeys = ["0-0", "1-0", "1-1", "1-2"];
const data = [
  {
    title: "src",
    key: "0-0",
    icon: FolderOpenOutline,
    children: [
      {
        title: "assets",
        key: "1-0",
        icon: FolderOpenOutline,
        children: [
          { title: "main.js", icon: LogoTwitter, disabled: true, key: "1-0-0" },
          { title: "test.py", icon: LogoQq, key: "1-0-1" },
        ],
      },
      {
        title: "pages",
        expand: true,
        key: "1-1",
        icon: FolderOpenOutline,
        children: [
          { title: "index.html", icon: LogoFeishu, key: "1-1-0" },
          { title: "index.md", icon: LogoWechat, key: "1-1-1" },
        ],
      },
      {
        title: "app",
        expand: true,
        key: "1-2",
        icon: FolderOpenOutline,
        children: [
          { title: "zen.apk", icon: LogoAndroid, key: "1-2-0" },
          { title: "zen.ipa", icon: LogoApple, key: "1-2-1" },
        ],
      },
    ],
  },
];
const expand = ({ expanded, node }) => {
  node.icon = expanded ? FolderOpenOutline : FolderOutline;
};
</script>
```
