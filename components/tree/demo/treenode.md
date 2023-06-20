<cn>
#### 自定义节点
使用 `TreeNode` 自定义节点。
</cn>

```vue
<template>
    <Tree :expandedKeys="expandedKeys">
      <TreeNode title="Tree 1" key="t-1">
        <TreeNode title="leaf 1-1" key="l-1-1" disabled :icon="LogoApple">
          <TreeNode title="leaf 1-1-1" key="l-1-1-1" disabled/>
          <TreeNode title="leaf 1-2-1" key="l-1-2-1" />
        </TreeNode>
        <TreeNode title="leaf 1-2" key="l-1-2">
          <TreeNode title="leaf 1-2-1" key="l-1-2-1" />
          <TreeNode title="leaf 1-2-2" key="l-1-2-2" />
        </TreeNode>
        <TreeNode title="leaf 1-3" key="l-1-3">
          <TreeNode title="leaf 1-3-1" key="l-1-3-1" />
          <TreeNode title="leaf 1-3-2" key="l-1-3-2" />
        </TreeNode>
      </TreeNode>
      <TreeNode title="Tree 2" key="t-2">
        <TreeNode title="leaf 2-1" key="l-2-1">
          <TreeNode title="leaf 2-1" key="l-2-1-1" />
        </TreeNode>
        <TreeNode title="leaf 2-2" key="l-2-2">
          <TreeNode title="leaf 2-2" key="l-2-2-1" />
        </TreeNode>
        <TreeNode title="leaf 2-3" key="l-2-3">
          <TreeNode title="leaf 2-3" key="l-2-3-1" />
        </TreeNode>
      </TreeNode>
    </Tree>
</template>
<script>
import { LogoApple } from "kui-icons";
export default {
  data() {
    return {
      LogoApple,
      expandedKeys: ['t-1', 't-2'],
    }
  },
}
</script>
```