<cn>
#### 自定义图标
可以针对不同的节点定制图标。
</cn>

```vue
<template>
  <Tree :data="data" @expand="expand" :expandedKeys="expandedKeys" />
</template>
<script>
export default {
  data() {
    return {
      expandedKeys: ['0-0', '1-0', '1-1', '1-2'],
      data: [
        {
          title: 'src',
          key: '0-0',
          icon: 'folder-open-outline',
          children: [
            {
              title: 'assets',
              key: '1-0',
              icon: 'folder-open-outline',
              children: [
                { title: 'main.js', icon: 'logo-twitter', disabled: true },
                { title: 'test.py', icon: 'logo-qq' }
              ]
            },
            {
              title: 'pages',
              expand: true,
              key: '1-1',
              icon: 'folder-open-outline',
              children: [
                { title: 'index.html', icon: 'logo-feishu' },
                { title: 'index.md', icon: 'logo-wechat' }
              ]
            },
            {
              title: 'app',
              expand: true,
              key: '1-2',
              icon: 'folder-open-outline',
              children: [
                { title: 'zen.apk', icon: 'logo-android' },
                { title: 'zen.ipa', icon: 'logo-apple' }
              ]
            }
          ]
        }
      ],
    }
  },
  methods: {
    expand({ expanded, node }) {
      node.icon = expanded ? 'folder-open-outline' : 'folder-outline'
    }
  }
}
</script>
```