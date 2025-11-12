<cn>
#### 在内部展示
嵌入其他组件内部
</cn>

```vue
<template>
  <div>
    <Button @click="show = true">在Modal</Button>
    <Button @click="show2 = true">在 Drawer</Button>

    <Modal
      v-model:show="show"
      :title="null"
      :footer="null"
      :showClose="false"
      :width="316"
    >
      <DateCalendar v-model:value="date" @change="change"></DateCalendar>
    </Modal>

    <div class="date-demo">
      <div class="date-demo-inner" ref="demo-date">
        <div class="demo-nav"><Icon :type="ChevronBack" />商城首页</div>
        <Drawer
          v-model:show="show2"
          height="340"
          :closable="false"
          :footer="null"
          :title="null"
          :height="300"
          placement="bottom"
          :target="() => $refs['demo-date']"
        >
          <DateCalendar
            v-model:value="date2"
            @change="change2"
            picker-size="small"
          ></DateCalendar>
        </Drawer>
      </div>
    </div>
  </div>
</template>
<script setup>
import { message } from "kui-vue";
import { ChevronBack } from "kui-icons";
import { ref } from "vue";
const show = ref(false),
  show2 = ref(false),
  date = ref(""),
  date2 = ref("");
const change = (date) => {
  show.value = false;
  console.log(date.toString());
  message.info(date.toString());
};
const change2 = (date) => {
  show2.value = false;
  console.log(date.toString());
  message.info(date.toString());
};
</script>
<style lang="less">
.date-demo {
  width: 256px;
  height: 400px;
  border: 1px solid var(--kui-color-border);
  margin-top: 10px;
  position: relative;
  overflow: hidden;
}

.demo-nav {
  border-bottom: 1px solid var(--kui-color-border);
  padding: 8px 10px;
  font-size: 12px;
}
</style>
```
