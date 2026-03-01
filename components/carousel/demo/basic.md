<cn>
### 基本用法
最简单的用法,可以通过 `value(v-model)` 指定初始值
</cn>
<en>
### Basic Usage
The simplest usage. You can specify the initial value via `value (v-model)`.
</en>

```vue
<template>
  <div>
    <Carousel :value="2" :loop="true" autoplay>
      <CarouselItem v-for="x in 3">{{x}}</CarouselItem>
    </Carousel>
  </div>
</template>
```
