<template>
  <a v-if="type==='a'" :href="link" class="my-button">
    <slot></slot>
  </a>
  <button v-else @click="fun()" class="my-button">
    <slot></slot>
  </button>
</template>

<script setup>
defineOptions({
  name: 'MyButton'
})

const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  fun: {
    type: Function,
    default: ()=>({}),
  },
  link: {
    type: String,
    default: ''
  },
});


</script>

<style scoped>
.my-button {
  background-color: #766ea5;
  color: #fff;
  outline: none;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
}
</style>
