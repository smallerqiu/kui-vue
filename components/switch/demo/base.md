<cn>
#### 基本用法
可使用 `v-model` 进行数据双向绑定
</cn>

```vue
<template>
  <Space>
    value:
    {{checked}}
    <KSwitch v-model="checked" />
    <Button @click="checked=!checked" size="small">{{checked?'Uncheck':'Check'}}</Button>
    <KSwitch checked />
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