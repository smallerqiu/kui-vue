<cn>
#### 组合Button使用
结合 `RadioGroup`,`RadioButton` 可以组合使用
</cn>

```tpl
<template>
  <div>
    <RadioGroup v-model="large" large>
      <RadioButton value="beijing" icon="logo-apple">北京</RadioButton>
      <RadioButton value="shanghai">上海</RadioButton>
      <RadioButton value="guangzhou">广州</RadioButton>
      <RadioButton value="shenzhen">深圳</RadioButton>
      <RadioButton value="wuhan">武汉</RadioButton>
    </RadioGroup>
    <br/>
    <br/>
    <RadioGroup v-model="base" circle>
      <RadioButton value="beijing" icon="logo-apple">北京</RadioButton>
      <RadioButton value="shanghai">上海</RadioButton>
      <RadioButton value="guangzhou">广州</RadioButton>
      <RadioButton value="shenzhen">深圳</RadioButton>
      <RadioButton value="wuhan">武汉</RadioButton>
    </RadioGroup>
    <br/>
    <br/>
    <RadioGroup v-model="mini" mini hollow type="button" :options="options" />
    <br/>
    <br/>
    <RadioGroup value="beijing" mini disabled>
      <RadioButton value="beijing" icon="logo-apple">北京</RadioButton>
      <RadioButton value="shanghai">上海</RadioButton>
      <RadioButton value="guangzhou">广州</RadioButton>
      <RadioButton value="shenzhen">深圳</RadioButton>
      <RadioButton value="wuhan">武汉</RadioButton>
    </RadioGroup>
  </div>
</template>
<script>
export default{
  data(){
    return{
      large:'wuhan',
      base:'shanghai',
      mini:'beijing',
      options:[
        {label:'北京',value:'beijing',icon:'logo-apple'},
        {label:'上海',value:'shanghai'},
        {label:'深圳',value:'shenzhen'},
        {label:'广州',value:'guangzhou',disabled:true},
        {label:'武汉',value:'wuhan'},
      ]
    }
  }
}
</script>
```