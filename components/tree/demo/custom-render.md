<cn>
#### 自定义节点内容
节点的内容支持自定义，可以在节点区添加按钮或图标等内容，渲染方式为 `render`。
</cn>

```vue
<template>
  <Row :gutter="30">
    <Col :span="8">
    <Divider>默认</Divider>
    <!-- 默认 -->
    <Tree :data="data" @expand="expand" :expandedKeys="expandedKeys">
      <template v-slot:extra="{ node , parent}">
        <Button icon="add" size="small" @click="append(node)" style="margin-right:5px" />
        <Button icon="remove" size="small" @click="remove(node,parent)" v-if="node.key!='0-0'"/>
      </template>
    </Tree>
    </Col>
    <Col :span="8" style="border-left:1px solid #ddd;border-right:1px solid #ddd;">
    <Divider>使用 `v-slot`</Divider>
    <!-- 使用 v-slot -->
    <Tree :data="data" @expand="expand" :expandedKeys="expandedKeys">
      <template v-slot:title="{node , parent}">
        {{node.title}}
      </template>
      <template v-slot:extra="{ node , parent}">
        <Button icon="add" size="small" @click="append(node)" style="margin-right:5px" />
        <Button icon="remove" size="small" @click="remove(node,parent)" v-if="node.key!='0-0'"/>
      </template>
    </Tree>
    </Col>
    <Col :span="8">
    <Divider>使用 `tree-node`</Divider>
    <!-- 可以参见 renderContent 方法 -->
    <Tree @expand="expand" :expandedKeys="expandedKeys">
      <TreeNode v-for="(item,i) in data" :data="item" :key="item.key" />
      <template v-slot:extra="{node , parent}">
        <Button icon="add" size="small" @click="append(node)" style="margin-right:5px" />
        <Button icon="remove" size="small" @click="remove(node,parent)" v-if="node.key!='0-0'"/>
      </template>
    </Tree>
    </Col>
  </Row>
</template>

<script>
export default {
  data() {
    return {
      expandedKeys: ['0-0'],
      data: [
        {
          title: 'tree 1',
          key: '0-0',
          children: [
            {
              title: 'tree 1-1',
              children: [
                { title: 'leaf 1-1-1' },
                {
                  title: 'leaf 1-1-2',
                  children: [
                    { title: 'leaf 1-1-2-1' },
                    { title: 'leaf 1-1-2-2' }
                  ]
                }
              ]
            },
            {
              title: 'tree 1-2',
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
        },
        {
          title: 'tree 2-1',
          children: [
            { title: 'leaf 2-1-1' },
            { title: 'leaf 2-1-2' }
          ]
        }
      ],
    }
  },
  methods: {
    append(node) {
      const newChild = { title: 'Append Node', children: [] };
      if (!node.children) {
        node.children = []
      }
      //展开节点
      if (this.expandedKeys.indexOf(node.key) < 0) {
        this.expandedKeys.push(node.key)
      }
      //添加子节点
      node.children.push(newChild);
    },
    remove(node, parent) {
      if (parent) {
        const index = parent.findIndex(item => item == node);
        parent.splice(index, 1);
      }
    },
    expand(data) {
      console.log(data)
    }
  }
}
</script>
```