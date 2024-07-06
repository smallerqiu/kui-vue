<cn>
#### 基本用法
单独使用可使用 `v-model` 双向绑定数据
</cn>

```vue
<template>
  <Space>
    {{checked}}
    <Radio v-model="checked">Radio</Radio>
    <Button @click="checked=!checked" size="small">{{checked?'Uncheck':'Check'}}</Button>
    <Radio label="Radio"/>
  </Space>
</template>
<script>
export default{
  data() {
    return {
      checked:false
    }
  }
}
</script>
```