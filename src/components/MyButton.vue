<template>
  <button class="my-button">
    <slot></slot>
  </button>
</template>

<script>
    export default {
        name: "MyButton"
    }
</script>

<style scoped>
.lv-button {
  background-color: #766ea5;
  color: #fff;
  outline: none;
  border: none;
}
</style>
