<cn>
#### 自定义节点内容
节点的内容支持自定义，可以在节点区添加按钮或图标等内容，渲染方式为 `render`。
</cn>

```vue
<template>
  <Row>
    <Col :span="12" style="border-right:1px solid #eee;padding-right:10px;">
      <p style="text-align:center;">使用 `render-content` 渲染</p>
      <!-- 可以参见 renderContent 方法 -->
      <Tree :data="data" @check="select" :render-content="renderContent" class="demo-tree" />
    </Col>
    <Col :span="12" style="padding-left:10px;">
      <p style="text-align:center;">使用 `scoped slot` 渲染</p>
      <Tree :data="data" @check="select" class="demo-tree">
        <div slot-scope="root, node , data" class="tree-item-actions">
          <span class="tree-title-text">{{data.title}}</span>
          <Button icon="add" size="small" @click="append(data)" />
          <Button icon="remove" size="small" @click="remove(node,data)" />
        </div>
      </Tree>
    </Col>
  </Row>
</template>

<style>
.demo-tree .k-tree-item {
  display: flex;
}
.demo-tree .k-tree-item .k-tree-title {
  flex: 1;
}
.demo-tree .k-tree-item .tree-item-actions {
  display: flex;
}
.demo-tree .k-tree-item .tree-item-actions .tree-title-text {
  flex: 1;
}
</style>
<script>
export default {
  data() {
    return {
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
  methods: {
    append(data) {
      const newChild = { title: 'test', children: [] };
      if (!data.children) {
        this.$set(data, 'children', []);
      }
      this.$set(data, 'expand', true);
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      if (parent) {
        const children = parent.data.children
        const index = children.findIndex(d => d == data);
        children.splice(index, 1);
      }
    },
    renderContent(h, { root, node, data }) {
      return h('div', { class: 'tree-item-actions' }, [
        h('span', { class: 'tree-title-text' }, data.title),
        h('Button', {
          props: {
            size: 'small',
            icon: 'add'
          },
          on: {
            click: e => this.append(data)
          }
        }),
        h('Button', {
          props: {
            size: 'small',
            icon: 'remove'
          },
          on: {
            click: e => this.remove(node, data)
          }
        })
      ])
    },
    select(data) {
      console.log(data)
    }
  }
}
</script>

```