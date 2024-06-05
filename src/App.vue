<script setup>
import HelloWorld from './components/HelloWorld.vue'
import MyButton from './components/MyButton.vue'
import MyHeader from './components/MyHeader.vue'
import MyCarousel from './components/MyCarousel.vue'
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <MyButton>Button</MyButton>
  <hr>
  <MyButton :type="'a'">A</MyButton>
  <MyHeader>
    <template #title> Title</template>
    <template #author> Author</template>
  </MyHeader>
  <MyCarousel>測適用</MyCarousel>
</template>

<style scoped>
</style>
