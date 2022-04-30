<script setup>
import { ref } from 'vue';
let user = ref({});
fetch('https://fakestoreapi.com/users/1')
  .then(res => res.json())
  .then(json => { user.value = json })
</script>

<template>
  <div class="flex flex-row flex-wrap">
    <div class="card card-compact card-side bg-base-100 shadow-xl m-2">
      <figure><img class="mask mask-hexagon" src="https://api.lorem.space/image/face?w=80&h=80" /></figure>
      <div class="card-body max-w-sm min-w-sm p-2">
        <h2 class="card-title">{{ user.username }}</h2>
        <p class="wrap">{{ JSON.stringify(user.name) }}</p>
      </div>
    </div>
  </div>
</template>