<cn>
#### 基础用法
最简单的用法，展示可选中，默认展开功能。
</cn>

```tpl
<template>
  <Tree :data="data"/>
</template>
<script>
export default{
  data(){
    return{
      data: [
        {
          title: 'tree 1',
          expand: true,
          children: [
            {
              title: 'tree 1-1',
              expand: true,
              children: [
                { title: 'leaf 1-1-1' },
                { title: 'leaf 1-1-2' }
              ]
            },
            {
              title: 'tree 1-2',
              expand: true,
              children: [
                { title: 'leaf 1-2-1' },
                { title: 'leaf 1-2-2' }
              ]
            }
          ]
        }
      ],
    }
  }
}
</script>
```