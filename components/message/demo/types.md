<cn>
#### 提示类型
通过 `type` 来设置提示类型
</cn>

```vue
<template>
  <div>
    <Button @click="warning" type="warning">Warning </Button>
    <Button @click="success" type="success">Success </Button>
    <Button @click="error" type="danger">Error</Button>
  </div>
</template>
<script>
export default{
  methods:{
    warning() {
      this.$Message.warning("警告提示");
      },
    success() {
      this.$Message.success("成功提示");
    },
    error() {
      this.$Message.error("错误提示");
    }
  }
}
</script>
```