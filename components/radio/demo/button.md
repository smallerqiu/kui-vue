<cn>
#### 组合Button使用
结合 `RadioGroup`,`RadioButton` 可以组合使用
</cn>

```tpl
<template>
  <div>
    <RadioGroup v-model="large" large>
      <RadioButton value="beijing" icon="logo-apple">Beijing</RadioButton>
      <RadioButton value="shanghai">Shanghai</RadioButton>
      <RadioButton value="guangzhou">Guangzhou</RadioButton>
      <RadioButton value="shenzhen">Shenzhen</RadioButton>
      <RadioButton value="wuhan">Wuhan</RadioButton>
    </RadioGroup>
    <br/>
    <br/>
    <RadioGroup v-model="base" circle>
      <RadioButton value="beijing" icon="logo-apple">Beijing</RadioButton>
      <RadioButton value="shanghai">Shanghai</RadioButton>
      <RadioButton value="guangzhou">Guangzhou</RadioButton>
      <RadioButton value="shenzhen">Shenzhen</RadioButton>
      <RadioButton value="wuhan">Wuhan</RadioButton>
    </RadioGroup>
    <br/>
    <br/>
    <RadioGroup v-model="mini" mini hollow type="button" :options="options" />
    <br/>
    <br/>
    <RadioGroup value="beijing" mini disabled>
      <RadioButton value="beijing" icon="logo-apple">Beijing</RadioButton>
      <RadioButton value="shanghai">Shanghai</RadioButton>
      <RadioButton value="guangzhou">Guangzhou</RadioButton>
      <RadioButton value="shenzhen">Shenzhen</RadioButton>
      <RadioButton value="wuhan">Wuhan</RadioButton>
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
        {label:'Beijing',value:'beijing',icon:'logo-apple'},
        {label:'Shanghai',value:'shanghai'},
        {label:'Shenzhen',value:'shenzhen'},
        {label:'Guangzhou',value:'guangzhou',disabled:true},
        {label:'Wuhan',value:'wuhan'},
      ]
    }
  }
}
</script>
```