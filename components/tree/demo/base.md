<cn>
#### 基础用法
最简单的用法，展示可选中，默认展开功能。
</cn>

```vue
<template>
  <Tree :data="data" :expandedKeys="expandedKeys"/>
</template>
<script>
export default{
  data() {
    return {
      expandedKeys:['0-1','1-1','1-1-2','1-2'],
      data: [
        {
          title: 'tree 1',
          key: '0-1',
          children: [
            {
              title: 'tree 1-1',
              key: '1-1',
              disabled: true,
              children: [
                { title: 'leaf 1-1-1', disabled: true },
                {
                  title: 'leaf 1-1-2',
                  key: '1-1-2',
                  children: [
                    { title: 'leaf 1-1-2-1' },
                    { title: 'leaf 1-1-2-2' }
                  ]
                }
              ]
            },
            {
              title: 'tree 1-2',
              key: '1-2',
              children: [
                { title: 'leaf 1-2-1' },
                { title: 'leaf 1-2-2' }
              ]
            },
            {
              title: 'tree 1-3',
              children: [
                { title: 'leaf 1-3-1' },
                { title: 'leaf 1-3-2' }
              ]
            }
          ]
        }
      ],
    }
  },
}
</script>
```