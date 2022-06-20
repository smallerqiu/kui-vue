<cn>
#### 尺寸
通过 `small` `large` 来设置选择框的大小呈现
</cn>

```vue
<template>
  <div>
    <RadioGroup v-model="size">
      <RadioButton value="large" label="Large"/>
      <RadioButton value="default" label="Default"/>
      <RadioButton value="small" label="Small"/>
    </RadioGroup>
    <br/>
    <DatePicker :size="size" :picker-size="size"/>
    <br/>
    <DatePicker mode="month" placeholder="请选择月份" :size="size" :picker-size="size"/>
    <br/>
    <DatePicker :size="size" mode="range" :picker-size="size"/>
  </div>
</template>
<script>
export default{
  data() {
    return {
      size:'default',
    }
  }
}
</script>
```