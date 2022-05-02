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
    class="w-72 bg-neutral-content shadow-xl rounded-2xl  p-5 hover:bg-accent-focus delay-100 duration-200 my-2">

    <!-- Header -->
    <div class="flex flex-col">
      <div class="flex flex-row">
        <img src="https://picsum.photos/40/40" class="rounded" />
        <p class="ml-3">
          <span class="text-neutral font-bold text-lg">facebook/</span>
          <span class="text-neutral font-bold text-lg">react</span>
        </p>
      </div>
    </div>

    <!-- Content -->
    <p class="text-sm text-neutral mt-3">
      {{ faker.lorem.sentence() }}
    </p>
  </a>
</template>