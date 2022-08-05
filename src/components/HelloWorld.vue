<template>
  <h1>{{ msg }}</h1>
  <p>这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字</p>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<style lang="scss" scoped>
a {
  color: $theme-color;
}
p {
  font-size: 16px;
}
</style>
