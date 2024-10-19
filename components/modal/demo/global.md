<cn>
#### 全局模式
使用 全局模式
</cn>

```vue
<template>
  <Space>
    <Button @click="show(0)">Success</Button>
    <Button @click="show(1)" type="danger">Error</Button>
    <Button @click="show(2)">Warning</Button>
    <Button @click="show(3)" type="primary">Info</Button>
    <Button @click="show(4)" :icon="Moon">Custom icon</Button>
  </Space>
</template>
<script>
import { Moon } from "kui-icons";
export default{
  data() {
    return {
      Moon
    }
  },
  methods:{
    show(i){
      let t =['操作成功','操作失败','警告警告','操作提示','《静夜思》']
      let c = [
        '恭喜你操作成功！',
        '很遗憾，您可能没有权限！',
        '此操作不可逆转，请谨慎！',
        '你打开了一个窗口！',
        '床前明月光，疑是地上霜，举头望明月，低头思故乡！'
      ]
      let m = ['success','error','warning','info']

      i == 4 ?
      this.$Modal.show({ 
        title: t[i], 
        content: c[i],
        icon: Moon,
        color: '#eccb23' 
      }) :
      this.$Modal[m[i]]({ 
        title:t[i], 
        content:c[i] 
      })
    },
  }
}
</script>
```
