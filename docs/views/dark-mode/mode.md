<cn>
#### 切换主题
简单的切换例子
</cn>

```vue
<template>
  <Button theme="light" @click="switchMode">切换主题</Button>
</template>

<script>
export default {
  methods: {
    switchMode(){
      const body = document.body;
      if (body.hasAttribute('theme-mode')) {
          body.removeAttribute('theme-mode');
          // localStorage.removeItem('theme')
      } else {
          body.setAttribute('theme-mode', 'dark');
          // localStorage.setItem('theme','dark')
      }
    }
  },
}
</script>
```