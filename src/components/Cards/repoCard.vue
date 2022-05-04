<script setup>
const props = defineProps({
  id: {
    type: Object,
    default: {}
  },
})
</script>

<template>
  <!-- Card -->
  <a href="#"
    class="w-72 bg-neutral-content shadow-xl rounded-2xl  p-5 hover:bg-accent-focus delay-100 duration-200 my-2 hover:cursor-pointer">

    <!-- Header -->
    <div class="flex flex-col">
      <div class="flex flex-row">
        <img src="https://picsum.photos/40/40" class="rounded-xl" />
        <p class="ml-3">
          <span class="text-neutral font-bold text-lg">{{id['creator']}}/</span>
          <span class="text-neutral font-bold text-lg">{{id['productName']}}</span>
        </p>
      </div>
    </div>

    <!-- Content -->
    <p class="text-sm text-neutral mt-3">
      {{id['introduction']}}
    </p>
  </a>
</template>