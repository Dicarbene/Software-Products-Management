<script setup>
import { ref } from 'vue';
import { faker } from '@faker-js/faker';
const props = defineProps({
  id: {
    type: Number,
    default: 0
  },
})
const user = ref({});
const url = 'https://fakestoreapi.com/users/' + props.id;
fetch(url)
  .then(res => res.json())
  .then(json => { user.value = json })
</script>

<template>
  <div class="card card-compact card-side w-content shadow-xl m-4 hover:bg-accent-focus hover:cursor-pointer">
    <figure><img class="mask mask-hexagon" :src="faker.image.imageUrl(80, 80, 'cat', true)"> </figure>
    <div class="card-body">
      <h2 class="card-title">{{ faker.internet.userName() }}</h2>
      <div id="stats" class="flex">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
        <p class="font-bold">132</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        <p class="font-bold">132</p>
      </div>
    </div>
  </div>
</template>