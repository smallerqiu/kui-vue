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
      <CarouselItem>1</CarouselItem>
      <CarouselItem>2</CarouselItem>
      <CarouselItem>3</CarouselItem>
      <CarouselItem>4</CarouselItem>
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