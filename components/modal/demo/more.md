<cn>
### 其它属性
不需要页脚时，可以把 `footer` 为`null`
</cn>

```vue
<template>
  <Space vertical>
    <Button @click="show1 = true" type="primary">可以拖动</Button>
    <Button @click="show2 = true" type="primary">居中显示</Button>
    <Button @click="show3 = true" type="primary">顶部 200px</Button>
    <Button @click="show4 = true" type="primary">最大化</Button>
    <Button @click="show5 = true" type="primary">没有蒙层</Button>
    <Button @click="show6 = true" type="primary">没有页脚</Button>

    <Modal title="Draggable" :show.sync="show1" draggable @ok="show1 = false">
      {{ text }}
    </Modal>

    <Modal title="Centered" :show.sync="show2" centered @ok="show2 = false">
      {{ text }}
    </Modal>

    <Modal
      title="Top 200px"
      :show.sync="show3"
      :top="200"
      @ok="show3 = false"
    >
      {{ text }}
    </Modal>

    <Modal title="Maximized" :show.sync="show4" maximized @ok="show4 = false">
      {{ text }}
    </Modal>

    <Modal
      title="Click mask dont't be close"
      :show.sync="show5"
      :mask="false"
      :mask-closable="false"
      @ok="show5 = false"
    >
      {{ text }}
    </Modal>

    <Modal
      title="No footer"
      :show.sync="show6"
      :footer="null"
      @ok="show6 = false"
    >
      {{ text }}
    </Modal>
  </Space>
</template>
<script setup>
import { ref } from "vue";
const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);
const show4 = ref(false);
const show5 = ref(false);
const show6 = ref(false);
const text = `A long time ago, In a beautiful kingdom, 
  there lived a young king and queen, 
  the people loved them so much; `;
</script>
```
