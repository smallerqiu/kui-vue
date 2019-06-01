 
<!--单独调试组件专用-->
 
<template>
  <div style="padding:300px;">
    <Button @click="t">tttttt</Button>
    <AAA v-for="x in a" :key="x.x"></AAA>
  </div>
</template>

<script>
import AAA from './components/test'
export default {
  components: { AAA },
  data() {
    return {
      a: []
    }
  },
  mounted() {

  },
  methods: {
    t() {
      this.a.push({ x: Math.floor(Math.random() * 99999) + 's' })
    }
  }
}
</script>

