<script setup>
import userCard from "../components/Cards/userCard.vue";
import { onBeforeMount, onMounted, ref } from "vue";
const idSeg = [];
for (let i = 1; i <= 10; ++i) idSeg.push(i);
</script>

<template>
  <div class="hero min-h-screen bg-neutral-content">
    <div class="hero-content text-center text-neutral flex-col">
      <h2
        class="text-8xl font-bold text-transparent bg-gradient-to-tl from-blue-500 to-green-300 bg-clip-text">
        用户浏览
      </h2>
      <div class="flex flex-row flex-wrap">
        <userCard v-for="n in idSeg" :id="n" />
      </div>
      <div class="btn-group self-center pb-8">
        <button class="btn">«</button>
        <button class="btn">Page 1</button>
        <button class="btn">»</button>
      </div>
    </div>
  </div>
</template>