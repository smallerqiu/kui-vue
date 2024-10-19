<cn>
#### 文案展现
给评分组件加上文案展示。
</cn>

```vue
<template>
  <Space>
    <Rate :tooltips="desc" v-model="value"/> 
    {{ value ? desc[value-1] : ''}}
  </Space>
</template>
<script>
export default{
  data() {
    return { 
      value:3 ,
      desc:['terrible', 'bad', 'normal', 'good', 'wonderful']
    }
  }
}
</script>
```