<template>
  <div>
    <Carousel :value="2" :loop="true" autoplay>
      <CarouselItem v-for="x in 3">{{x}}</CarouselItem>
    </Carousel>
  </div>
</template>