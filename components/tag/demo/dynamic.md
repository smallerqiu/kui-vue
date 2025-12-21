<cn>
### 动态添加和删除
通过 `closeable` 显示关闭按钮
</cn>

```vue
<template>
  <Space wrap>
    <Tag color="blue" closeable v-for="(t, i) in tags" :key="t">{{ t }}</Tag>
    <Input
      v-if="showInput"
      @blur="add"
      size="small"
      style="width:81px"
      ref="inputRef"
      :value="tag"
    />
    <Button @click="show" size="small" :icon="Bookmark" v-show="!showInput">
      New Tag
    </Button>
  </Space>
</template>
<script setup>
import { Bookmark } from "kui-icons";
import { ref, nextTick } from "vue";
const showInput = ref(false);
const tag = ref("");
const tags = ["Apple", "Banana", "Cat", "Dog"];
const inputRef = ref();
const show = () => {
  showInput.value = true;
  nextTick(() => {
    // console.log(inputRef.value)
    inputRef.value.focus();
  });
};
const add = (e) => {
  let value = e.target.value.trim();
  if (value && tags.indexOf(value) === -1) {
    tags.push(value);
  }
  tag.value = "";
  showInput.value = false;
};
</script>
```
