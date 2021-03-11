<cn>
#### 主题 / 尺寸
设置 `type` 属性可改变组件主题
</cn>

```vue
<template>
  <div>
    <Switch />
    <Switch type="success" />
    <Switch type="danger" />
    <Switch type="warning" />
    <br/>
    <br/>
    <Switch type="success" size="small" v-model="checked"/>

  </div>
</template>
<script>
export default{
  data(){
    return{
      checked:true
    }
  }
}
</script>
```