<template>
  <div class="demo-page">
    <Page v-model:current="current" :total="50" />
    <Button @click="test">test</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 1
    }
  },
  methods: {
    test() {
      this.current = 2
    }
  }
}
</script>