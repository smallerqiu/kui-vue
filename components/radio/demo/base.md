<cn>
#### 基本用法
单独使用可使用 `v-model` 双向绑定数据
</cn>

```vue
<template>
  <div>
    <p>{{checked}}</p>
    <Radio v-model="checked">Radio</Radio>
    <Button @click="checked=!checked" size="small">{{checked?'Uncheck':'Check'}}</Button>
    <br/>
    <br/>
    <Radio label="Radio"/>
  </div>
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