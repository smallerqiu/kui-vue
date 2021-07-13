<cn>
#### 禁用节点
设置属性 `disabled` 可以禁用节点。
</cn>

```vue
<template>
  <Tree :data="data" checkable @check="check" 
    :checkedKeys="checkedKeys"
    :expandedKeys="expandedKeys" />
</template>
<script>
export default {
  data() {
    return {
      expandedKeys: ['0-0', '1-0', '1-1'],
      checkedKeys: ['1-0-0'],
      data: [
        {
          title: 'tree 1',
          key: '0-0',
          children: [
            {
              title: 'tree 1-1',
              key: '1-0',
              disabled: true,
              children: [
                { title: 'leaf 1-1-1',key:'1-0-0', disabled: true },
                { title: 'leaf 1-1-2' }
              ]
            },
            {
              title: 'tree 1-2',
              key: '1-1',
              children: [
                { title: 'leaf 1-2-1' },
                { title: 'leaf 1-2-2' }
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