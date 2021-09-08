<cn>
#### 自定义字符
可以自定义每一个字符。
</cn>

```vue
<template>
  <div>
    <Rate :character="(i)=>i+1" :value="2" :count="9"/>
    <br />
    <br />
    <Rate :icon="(i)=> icons[i]" :value="3"/>
  </div>
</template>
<script>
export default{
  data(){
    return {
      icons:[
        'volume-off-outline',
        'volume-low-outline',
        'volume-medium-outline',
        'volume-high-outline',
        'volume-mute-outline'
      ]
    }
  }
}
</script>
```
