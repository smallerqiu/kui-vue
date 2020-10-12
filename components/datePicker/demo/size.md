<cn>
#### 尺寸
通过 `mini` `large` 来设置选择框的大小呈现
</cn>

```vue
<template>
  <div>
    <RadioGroup v-model="size">
      <RadioButton value="large" label="Large"/>
      <RadioButton value="default" label="Default"/>
      <RadioButton value="mini" label="Mini"/>
    </RadioGroup>
    <br/>
    <DatePicker :mini="mini" :large="large" />
    <br/>
    <DatePicker mode="month" placeholder="请选择月份" :mini="mini" :large="large" />
    <br/>
    <DatePicker :mini="mini" :large="large" mode="range"/>
  </div>
</template>
<script>
export default{
  data(){
    return{
      size:'default',
    }
  },
  computed:{
    mini(){
      return this.size == 'mini'
    },
    large(){
      return this.size == 'large'
    }
  }
}
</script>
```