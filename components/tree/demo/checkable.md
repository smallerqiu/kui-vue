<cn>
#### 可勾选
设置属性 `checkable` 可以对节点进行勾选。
</cn>

```vue
<template>
  <Tree :data="data" checkable :checkedKeys="checkedKeys" :expandedKeys="expandedKeys" @check="check" />
</template>
<script>
export default {
  data() {
    return {
      checkedKeys: ['1-1', 'aa', ],
      expandedKeys: ['1-1', '1-1-2', '1-2', '0-1'],
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
                { title: 'leaf 1-1-1' },
                { title: 'leaf 1-1-2' }
              ]
            },
            {
              title: 'tree 1-2',
              key: '1-2',
              children: [
                { title: 'leaf 1-2-1', key: 'aa' },
                { title: 'leaf 1-2-2', key: 'bb' }
              ]
            }
          ]
        }
      ],
    }
  },
  methods: {
    check(data) {
      console.log(data)
    }
  }
}
</script>

```