<cn>
#### 其它属性
不需要页脚时，可以把 `footer` 为`null`
</cn>

```vue
<template>
  <div>
    <Button @click="show1=true" type="primary">Can move</Button>
    <Button @click="show2=true" type="primary">Open in center</Button>
    <Button @click="show3=true" type="primary">Top 200px</Button>
    <Button @click="show4=true" type="primary">Open max</Button>
    <Button @click="show5=true" type="primary">No mask</Button>
    <Button @click="show6=true" type="primary">No footer</Button>

    <Modal title="Can move" v-model="show1" can-move @ok="show1=false">
      {{text}}
    </Modal>

    <Modal title="Open in center" v-model="show2" is-center @ok="show2=false">
      {{text}}
    </Modal>

    <Modal title="Top 200px" v-model="show3" :top="200" @ok="show3=false">
      {{text}}
    </Modal>

    <Modal title="Open max" v-model="show4" is-max @ok="show4=false">
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
  data(){
    return{
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