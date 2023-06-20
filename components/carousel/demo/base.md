<cn>
#### 基本用法
最简单的用法,可以通过 `value(v-model)` 指定初始值
</cn>

```vue
<template>
  <div>
    <Carousel :value="2">
      <CarouselItem>1</CarouselItem>
      <CarouselItem>2</CarouselItem>
      <CarouselItem>3</CarouselItem>
      <CarouselItem>4</CarouselItem>
    </Carousel>  
  </div>
</template>
```