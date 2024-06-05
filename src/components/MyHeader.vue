<template>
  <div class="my-header">
    <h1 class="header-title">
      <slot name="title"></slot>
    </h1>
    <h2 class="title-author">
      <slot name="author"></slot>
    </h2>
  </div>
</template>

<script>
    export default {
        name: "MyHeader"
    }
</script>