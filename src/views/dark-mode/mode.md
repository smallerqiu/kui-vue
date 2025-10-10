<cn>
#### 切换主题
简单的切换例子, 开箱即用
</cn>

```vue
<template>
  <Button theme="light" @click="switchMode">切换主题</Button>
</template>

<script>
export default {
  methods: {
    switchMode(event){
      this.$Theme.setThemeMode(event, isDark => {
        this.$Message.info(`Current theme mode is ${isDark?'dark':'light'}`)
      })
    }
  },
}
</script>
```