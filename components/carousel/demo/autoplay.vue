<template>
  <div>
    <Space>
      <Button @click="goTo">goTo 2</Button>
      <Button @click="prev">Prev</Button>
      <Button @click="next">Next</Button>
    </Space>
    <br />
    <br />
    <Carousel autoplay :loop="true" ref="refCarousel">
      <CarouselItem class="item">1</CarouselItem>
      <CarouselItem class="item">2</CarouselItem>
      <CarouselItem class="item">3</CarouselItem>
      <CarouselItem class="item">4</CarouselItem>
    </Carousel>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const refCarousel = ref();

const next = () => {
  refCarousel.value.next();
};

const prev = () => {
  refCarousel.value.prev();
};

const goTo = () => {
  refCarousel.value.goTo(2);
};
</script>

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
