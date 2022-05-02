<script setup>
  import { useRouter, useRoute } from "vue-router";
  const router = useRouter();
  const backHome = () => {router.push("/");};
</script>
<template>
  <a @click="backHome" class="btn btn-ghost normal-case text-3xl text-bold">SPM</a>
</template>