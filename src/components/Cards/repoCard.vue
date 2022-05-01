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
  <!-- Card -->
  <a href="#"
    class="w-72 bg-base-100 border shadow-xl rounded-md  p-5 hover:bg-secondary-focus delay-100 duration-200 my-2">

    <!-- Header -->
    <div class="flex flex-col">
      <div class="flex flex-row">
        <img src="https://picsum.photos/40/40" class="rounded" />
        <p class="ml-3">
          <span class="text-base-content font-semibold">facebook/</span>
          <span class="text-base-content font-semibold">react</span>
        </p>
      </div>
    </div>

    <!-- Content -->
    <p class="text-xs text-base-content mt-3">
      {{ faker.lorem.sentence() }}
    </p>
    <div id="stats" class="flex justify-end mt-2 bottom-0 left-0">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
      <p class="font-bold">132</p>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
      <p class="font-bold">132</p>
    </div>
  </a>
</template>