<template>
  <div class="wrapper" style="text-align: center">
    <img v-show="responsive.mobile()" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import responsive from '@/hooks/responsive'
</script>

<style></style>
