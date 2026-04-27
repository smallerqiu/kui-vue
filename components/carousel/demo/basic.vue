<template>
  <Carousel :value="2" :loop="true" autoplay :height="300">
    <CarouselItem v-for="x in 3" class="item">{{ x }}</CarouselItem>
  </Carousel>
</template>

<style lang="less" scoped>
.item {
  color: #fff;
  background: var(--kui-color-primary);
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  display: flex;
}
</style>
