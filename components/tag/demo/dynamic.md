<cn>
#### 动态添加和删除
通过 `closeable` 显示关闭按钮
</cn>

```tpl
<template>
  <div>
    <Tag color="blue" closeable v-for="m in count" :key="m">标签{{m}}</Tag>
    <Tag @click="count++">增加</Tag>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 3
    }
  }
}
</script>
```