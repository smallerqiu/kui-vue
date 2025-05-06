
<cn>
#### 基本用法
通过 `v-model:show` 双向绑定 `Drawer` 是否展示 , title 为null或false时不显示标题
</cn>

```vue
<template>
  <div>
    <Space>
      <Button @click="show=!show">普通抽屉</Button>
      <Button @click="show2=!show2">Width 30%</Button>
      <Button @click="show3=!show3">点蒙层不关闭</Button>
      <Button @click="show4=!show4">没有蒙层</Button>
    </Space>
    <Drawer v-model:show="show"  :footer="null" @ok="show=false">
      <p>something ...</p>
      <p>something ...</p>
      <p>something ...</p>
    </Drawer>
    <Drawer v-model:show="show2" width="30%" title="Width 30%" @ok="show2=false">
      <p>something ...</p>
      <p>something ...</p>
      <p>something ...</p>
    </Drawer>
    <Drawer v-model:show="show3" title="Click mask to close" :mask-closable="false" @ok="show3=false">
      <p>something ...</p>
      <p>something ...</p>
      <p>something ...</p>
    </Drawer>
    <Drawer v-model:show="show4" title="Click mask to close" :mask="false" @ok="submit" :loading="loading">
      <p>something ...</p>
      <p>something ...</p>
      <p>something ...</p>
    </Drawer>
  </div>
</template>
<script setup>
import { ref } from "vue";
const show = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
const loading = ref(false)


const submit = ()=>{
  loading.value = true
  setTimeout(() => {
    show4.value = false
    loading.value = false
  }, 2000);
}
</script>
```