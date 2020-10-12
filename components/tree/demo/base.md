<cn>
#### 基础用法
最简单的用法，展示可选中，默认展开功能。
</cn>

```vue
<template>
  showLine: <Switch v-model="showline" /> 
  <Tree :data="data" :show-line="showline"/>
</template>
<script>
export default{
  data() {
    return {
      showline:false,
      data: [
        {
          title: 'tree 1',
          expand: true,
          children: [
            {
              title: 'tree 1-1',
              expand: true,
              disabled: true,
              children: [
                { title: 'leaf 1-1-1', disabled: true },
                {
                  title: 'leaf 1-1-2',
                  expand: true,
                  children: [
                    { title: 'leaf 1-1-2-1' },
                    { title: 'leaf 1-1-2-2' }
                  ]
                }
              ]
            },
            {
              title: 'tree 1-2',
              expand: true,
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