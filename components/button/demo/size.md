<cn>
#### 尺寸
`small` 为小尺寸， `large` 为大尺寸
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
    <br/>
    <Button type="primary" :size="size">Primary</Button>
    <Button :size="size">Default</Button>
    <Button type="dashed" :size="size">Dashed</Button>
    <Button type="link" :size="size">Link</Button>
    <br/>
    <Button type="primary" :size="size" icon="cloud-download"></Button>
    <Button type="primary" circle :size="size" icon="cloud-download"></Button>
    <Button type="primary" circle :size="size" icon="cloud-download">Download</Button>
    <Button type="primary" :size="size" icon="cloud-download">Download</Button>

  </div>
</template>
<script>
export default{
  data(){
    return{
      size:'default'
    }
  },
  methods:{
    change(value){
      this.size = value
    }
  }
}
</script>
```