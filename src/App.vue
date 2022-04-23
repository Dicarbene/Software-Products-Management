<script setup>
import HeaderT from './components/HeaderT.vue'
import { ref } from 'vue'
import { useThemeSelection } from './stores/themeSelection';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
const themeStore = useThemeSelection();
const {theme} = storeToRefs(themeStore);
</script>

<template>
  <div :data-theme="theme" class="flex flex-col">
    <HeaderT />
    <router-view></router-view>
  </div>
</template>
