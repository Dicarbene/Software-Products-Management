<script setup>
import repoCard from "@/components/Cards/repoCard.vue";
const idSeg = [];
for (let i = 1; i <= 12; ++i) idSeg.push(i);
</script>

<template>
  <div class="hero min-h-screen bg-neutral-content sm:my-4">
    <div class="hero-content text-center text-neutral flex-col">
      <h2
        class="text-8xl font-bold text-transparent bg-gradient-to-tl from-blue-500 to-green-300 bg-clip-text">
        仓库浏览
      </h2>
      <div class="flex flex-row flex-wrap justify-between">
        <repoCard v-for="n in idSeg" :id="n" />
      </div>
      <div class="btn-group self-center pb-8">
        <button class="btn hover:btn-active">«</button>
        <button class="btn hover:btn-active">Page 1</button>
        <button class="btn hover:btn-active">»</button>
      </div>
    </div>
  </div>
</template>