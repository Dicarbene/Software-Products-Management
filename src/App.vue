<script setup>
import HeaderT from './components/HeaderT.vue'
import {themeSelection} from './stores/reactive/themeSelection.js';


</script>

<template>
  <div :data-theme="themeSelection.theme" class="flex flex-col">
    <HeaderT />
    <router-view></router-view>
  </div>
</template>
