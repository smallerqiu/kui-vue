<cn>
#### 基础用法
通过 `v-model` 进行数据双向绑定
</cn>

```vue
<template>
  <div>
    {{date}}
    <br/>
    <DatePicker showTime v-model="date" :disabledDate="disabledDate"/>
    <br/>
    <br/>
    <br/>
    <DatePicker v-model="date"/>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data(){
    return{
      date:''
    }
  },
  methods:{
    disabledDate(current){
      return current && current < moment().endOf('day');
    }
  }
}
</script>
```