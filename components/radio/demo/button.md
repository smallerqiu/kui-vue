<cn>
#### 组合Button使用
结合 `RadioGroup`,`RadioButton` 可以组合使用
</cn>

```vue
<template>
  <div>
    Shape :  <RadioGroup v-model="shape" size="small">
      <RadioButton value="default" label="Default" />
      <RadioButton value="circle" label="Circle" />
    </RadioGroup>
    <br/>
    <br/>
    Theme :  <RadioGroup v-model="theme" size="small">
      <RadioButton value="default" label="Default" />
      <RadioButton value="solid" label="Solid" />
      <RadioButton value="light" label="Light" />
      <RadioButton value="card" label="Card" />
    </RadioGroup>
    <br/>
    <br/>
    Size :  <RadioGroup v-model="size" size="small" :options="sizes">
    </RadioGroup>
    <br/>
    <br/>
    <RadioGroup 
      type="button"
      v-model="date" 
      :size="size" 
      :theme="theme" 
      :shape="shape" 
      :options="dates"> 
    </RadioGroup>
  </div>
</template>
<script>
export default{
  data() {
    return {
      size:'default',
      shape:'default',
      theme:'solid',
      date:0,
      dates:[
        { label:'7天' ,value:0 },
        { label:'1个月' ,value:1 },
        { label:'1季度' ,value:2 },
        { label:'1年' ,value:3 },
        { label:'5年' ,value:4 ,disabled:true }
      ],
      sizes:[
        {label:'Large',value:'large',icon:'logo-apple'},
        {label:'Default',value:'default'},
        {label:'Small',value:'small'},
      ]
    }
  }
}
</script>
```