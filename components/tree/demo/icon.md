<cn>
#### 自定义图标
可以针对不同的节点定制图标。
</cn>

```vue
<template>
  <Tree :data="data" @expand="expand" :expandedKeys="expandedKeys" />
</template>
<script>
import { FolderOpenOutline,FolderOutline,LogoFeishu,LogoTwitter,LogoQq,LogoWechat,LogoAndroid,LogoApple } from "kui-icons";
export default {
  data() {
    return {
      FolderOpenOutline,FolderOutline,
      expandedKeys: ['0-0', '1-0', '1-1', '1-2'],
      data: [
        {
          title: 'src',
          key: '0-0',
          icon: FolderOpenOutline,
          children: [
            {
              title: 'assets',
              key: '1-0',
              icon: FolderOpenOutline,
              children: [
                { title: 'main.js', icon: LogoTwitter, disabled: true },
                { title: 'test.py', icon: LogoQq }
              ]
            },
            {
              title: 'pages',
              expand: true,
              key: '1-1',
              icon: FolderOpenOutline,
              children: [
                { title: 'index.html', icon: LogoFeishu },
                { title: 'index.md', icon: LogoWechat }
              ]
            },
            {
              title: 'app',
              expand: true,
              key: '1-2',
              icon: FolderOpenOutline,
              children: [
                { title: 'zen.apk', icon: LogoAndroid },
                { title: 'zen.ipa', icon: LogoApple }
              ]
            }
          ]
        }
      ],
    }
  },
  methods: {
    expand({ expanded, node }) {
      node.icon = expanded ? FolderOpenOutline : FolderOutline
    }
  }
}
</script>
```