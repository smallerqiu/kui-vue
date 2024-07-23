
<cn>
#### 基本用法
通过 `v-model` 双向绑定 `Drawer` 是否展示 , title 为null或false时不显示标题
</cn>

```vue
<template>
  <div>
    <Space>
      <Button @click="show=!show">普通抽屉</Button>
      <Button @click="show2=!show2">Width 30%</Button>
      <Button @click="show3=!show3">点蒙层关闭</Button>
      <Button @click="show4=!show4">没有蒙层</Button>
    </Space>
    <Drawer v-model="show"  :footer="null" @ok="show=false">
      <p>something ...</p>
      <p>something ...</p>
      <p>something ...</p>
    </Drawer>
    <Drawer v-model="show2" width="30%" title="Width 30%" @ok="show2=false">
      <p>something ...</p>
      <p>something ...</p>
      <p>something ...</p>
    </Drawer>
    <Drawer v-model="show3" title="Click mask to close" :mask-closable="true" @ok="show3=false">
      <p>something ...</p>
      <p>something ...</p>
      <p>something ...</p>
    </Drawer>
    <Drawer v-model="show4" title="Click mask to close" :mask="false" @ok="submit" :loading="loading">
      <p>something ...</p>
      <p>something ...</p>
      <p>something ...</p>
    </Drawer>
  </div>
</template>
<script>
export default{
  data() {
    return {
      show:false,
      show2:false,
      show3:false,
      show4:false,
      loading:false,
    }
  },
  methods:{
    submit(){
      this.loading = true
      setTimeout(() => {
        this.show4 = false
        this.loading = false
      }, 2000);
    }
  }
}
</script>
```