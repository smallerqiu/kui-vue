<cn>
#### 反向
设置 `reverse` 可以将滑动条置反。
</cn>

```vue
<template>
  <div style="width:520px;">
    <Slider v-model="v1" :reverse="reverse" />
    <Slider v-model="v2" range :reverse="reverse" :marks="{ 40: '40°C', 50: '50°C' }" />
    Reversed:
    <Switch v-model="reverse" size="small" />
  </div>
</template>
<script>
export default{
  data(){
    return {
     v1: 30,
     v2: [35,60],
     reverse: true ,
    }
  }
}
</script>
```