<cn>
#### 设置换行 
当间距为水平方向时，可使用 wrap 设置是否自动换行，默认情况下为 false。
</cn>

```vue
<template>
  <Flex size="middle" vertical align="flex-start" style="width:300px;">
    <Slider v-model="x" :min="0" :max="100" :step="1"  />
    <Slider v-model="y" :min="0" :max="100" :step="1" />
    <Flex :size="[x,y]" wrap >
      <Button size="small" v-for="x in 10" :key="x">Wrap</Button>
    </Flex>
  </Flex>
</template>
<script>
export default{
  data() {
    return {
      x: 12,
      y: 15
    }
  }
}
</script>
```