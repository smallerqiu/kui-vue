<cn>
#### 其它属性
不需要页脚时，可以把 `footer` 为`null`
</cn>

```vue
<template>
  <div>
    <Button @click="show1=true" type="primary">可以拖动</Button>
    <Button @click="show2=true" type="primary">居中显示</Button>
    <Button @click="show3=true" type="primary">顶部 200px</Button>
    <Button @click="show4=true" type="primary">最大化</Button>
    <Button @click="show5=true" type="primary">没有蒙层</Button>
    <Button @click="show6=true" type="primary">没有页脚</Button>

    <Modal title="Draggable" v-model="show1" draggable @ok="show1=false">
      {{text}}
    </Modal>

    <Modal title="Centered" v-model="show2" centered @ok="show2=false">
      {{text}}
    </Modal>

    <Modal title="Top 200px" v-model="show3" :top="200" @ok="show3=false">
      {{text}}
    </Modal>

    <Modal title="Maximized" v-model="show4" maximized @ok="show4=false">
      {{text}}
    </Modal>

    <Modal title="Click mask dont't be close" v-model="show5" :mask="false" :mask-closable="false" @ok="show5=false">
      {{text}}
    </Modal>

    <Modal title="No footer" v-model="show6" :footer="null" @ok="show6=false">
      {{text}}
    </Modal>
  </div>
</template>
<script>
export default{
  data() {
    return {
      show1:false,
      show2:false,
      show3:false,
      show4:false,
      show5:false,
      show6:false,
      text : `A long time ago, In a beautiful kingdom, 
  there lived a young king and queen, 
  the people loved them so much; `
    }
  }
} 
</script>
```