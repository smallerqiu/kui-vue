<template>
  <section class="index">
    <div class="logo">
      <img :src="logo" />
    </div>
    <h1>KUI for PC 基于VUE 2.x</h1>
    <p class="sub">在追求完美视觉体验的同时也保证了其性能高效。</p>
    <nav>
      <a href="/start">快速上手</a>
      <a href="https://github.com/chuchur/kui" target="_blank">Github</a>
      <a href="https://www.chuchur.com">Blog</a>
    </nav>
    <span v-for="n in 9" :key="n" :class="'blister blister'+n">
      <span class="light"></span>
      <span class="light2"></span>
    </span>
    <footer>
      <p>Copyright ©2009-2018
        <a href="http://www.chuchur.com">禅境花园</a> by chuchur 粤ICP备17111365号 </p>
    </footer>
  </section>
</template>
<style lang="less">

</style>
<script>
export default {
  data() {
    return {
      logo: require("../assets/logo.png")
    };
  }
};
</script>
