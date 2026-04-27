<template>
  <div>
    <Carousel vertical>
      <CarouselItem class="item">1</CarouselItem>
      <CarouselItem class="item">2</CarouselItem>
      <CarouselItem class="item">3</CarouselItem>
      <CarouselItem class="item">4</CarouselItem>
    </Carousel>
  </div>
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
