<cn>
### 自动播放
通过设置 `autoplay` ，可实现定时自动播放，通过 `delay` 设置间隔播放时间，默认 `3000` ，单位毫秒 
</cn>
<en>
### Autoplay
Enable timed autoplay by setting `autoplay`. Use `delay` to set the interval. The default is `3000` milliseconds.
</en>

```vue
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
<script setup>
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
```
