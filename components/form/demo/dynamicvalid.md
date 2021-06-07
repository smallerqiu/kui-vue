<cn>
#### 动态校验规则
根据不同情况执行不同的校验规则。
</cn>

```vue
<template>
  <div style="width:600px;">
   <Form :model="form" ref="form" :labelCol="labelCol" :wrapperCol="wrapperCol">
    <FormItem 
      label="姓名" 
      prop="fullname" 
      :rules="[ 
          { required: true, message: '请输入姓名' },
          { message: '姓名只能是中文', pattern: /^[\u4e00-\u9fa5]+$/ },
        ]"
    >
      <Input v-model="form.fullname" clearable />
    </FormItem>
    <FormItem 
      label='网址' 
      :prop="'webs.' + i + '.value'" 
      v-for="(item,i) in form.webs" 
      :key="i"
      :rules="{required: true, message: '网址不能为空'}"
    >
      <Input v-model="item.value" style="width:230px"/>
      <Icon type="remove-circle-outline" @click="e=>remove(i)" v-if="i>0" size="25" style="margin:0 10px" color="red"/>
    </FormItem>
    <FormItem :wrapperCol="{offset:5}">
      <Button type="primary" @click="submit">Submit</Button>
      <Button @click="add" style="margin:0 10px;">Add</Button>
      <Button @click="reset">Reset</Button>
    </FormItem>
    </Form>
  </div>
</template>
<script>
export default{
  data(){
    return {
      labelCol:{span:5},
      wrapperCol:{span:16},
      count:1,
      form: {
        fullname:'',
        webs:[
          { value:'', index:0 },
          { value:'', index:1 },
        ] ,
      },
    }
  },
  methods:{
    add(){
      let count = this.count
      let item ={value:'',index:count}
      this.form.webs.push(item)
      this.count+=1
    },
    remove(index){
      // let item = this.form.webs.filter(x=>x.index==index)[0]
      // let index = this.form.webs.indexOf(item)
      this.form.webs.splice(index, 1)
    },
    submit(){
      this.$refs.form.validate(valid=>{
        this.$Message[valid?'success':'error'](valid?'success':'faild')
      })
    },
    reset(){
      this.$refs.form.reset()
    }
  }
}
</script>
```