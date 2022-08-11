<template>
  <div class="wrapper" style="text-align: center">
    <img v-show="responsive.mobile()" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <h1 v-if="responsive.mobile()">responsive.mobile(): {{ responsive.mobile() }}</h1>
    <h1 v-if="responsive.tablet()">responsive.tablet(): {{ responsive.tablet() }}</h1>
    <h1 v-if="responsive.desktop()">responsive.desktop(): {{ responsive.desktop() }}</h1>
    <h1 v-if="responsive.wide()">responsive.wide(): {{ responsive.wide() }}</h1>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import responsive from '@/hooks/responsive'
</script>

<style></style>
