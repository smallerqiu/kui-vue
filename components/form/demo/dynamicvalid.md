<cn>
#### 动态校验规则
根据不同情况执行不同的校验规则。
</cn>

```vue
<template>
  <Row >
    <Col :span="16">
      <Form :model="form" ref="form" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <FormItem 
          label="姓名" 
          prop="cname" 
          :rules="[ 
              { required: true, message: '请输入姓名' }
            ]"
        >
          <Input clearable />
        </FormItem>
        <FormItem 
          label="性别" 
          prop="info.gender" 
          :rules="[ 
              { required: true, message: '请输入性别' }
            ]"
        >
          <Select clearable>
            <Option value="1" label="男" />
            <Option value="0" label="女" />
          </Select>
        </FormItem>
        <FormItem 
          label="年龄" 
          prop="info.age" 
          :rules="[ 
              { required: true, message: '请输入年龄' }
            ]"
        >
          <Input clearable />
        </FormItem>
        <FormItem 
          :label="'网址'+item.key"
          :prop="'webs.' + i + '.value'" 
          v-for="(item,i) in form.webs" 
          :key="item.key"
          :rules="{required: true, message: '网址不能为空'}"
        >
          <Input style="width:230px"/>
          <Icon :type="RemoveCircleOutline" @click="e=>remove(i)" v-if="i>0" style="font-size:25px;margin:0 10px" />
        </FormItem>
        <FormItem :wrapperCol="{offset:5}">
          <Button type="primary" @click="submit">Submit</Button>
          <Button @click="add" style="margin:0 10px;">Add</Button>
          <Button @click="reset">Reset</Button>
        </FormItem>
      </Form>
    </Col>
    <Col :span="8">
      <pre style="max-height:320px;overflow:'scroll'">{{JSON.stringify(form, null, 2)}}</pre>
    </Col>
  </div>
</template>
<script>
import { RemoveCircleOutline } from 'kui-icons'
export default{
  data() {
    return {
      RemoveCircleOutline,
      labelCol:{span:5},
      wrapperCol:{span:16},
      count:2,
      form: {
        cname:'',
        info:{
          gender:'',
          age:''
        },
        webs:[
          { value:'', key:'0' },
          { value:'', key:'1' },
        ] ,
      },
    }
  },
  methods:{
    add(){
      let item ={ value:'', key:this.count++ }
      this.form.webs.push(item)
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