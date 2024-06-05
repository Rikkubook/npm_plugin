<template>
  <carousel :items-to-show="1.5">
    <slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'MyCarousel',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: #b4b8ffaa;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>