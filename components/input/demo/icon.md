<cn>
#### 带图标
通过设置 `icon` 属性，可设置按钮图标，`icon-align` 设置显示位置 `icon-click` 可触发图标点击事件
</cn>

```tpl
<template>
  <div>
    <Input type="text" placeholder="请输入内容..." icon="ios-person" @icon-click="iconClick" />
    <Input type="text" placeholder="请输入内容..." icon="ios-search" @icon-click="iconClick" />
  </div>
</template>
<script>  
export default {  
  methods: {
    iconClick() {
      this.$Message.info("点击图标事件");
    }
  }
};
</script>
```