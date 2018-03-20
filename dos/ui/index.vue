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
  </section>
</template>
<script>
export default {
  data() {
    return {
      logo: require("../logo.png")
    };
  }
};
</script>
