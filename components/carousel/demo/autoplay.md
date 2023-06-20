<cn>
#### 自动播放
通过设置 `autoplay` ，可实现定时自动播放，通过 `delay` 设置间隔播放时间，默认 `3000` ，单位毫秒 
</cn>

```vue
<template>
  <div>
    <Carousel autoplay>
      <CarouselItem>1</CarouselItem>
      <CarouselItem>2</CarouselItem>
      <CarouselItem>3</CarouselItem>
      <CarouselItem>4</CarouselItem>
    </Carousel>  
  </div>
</template>
```