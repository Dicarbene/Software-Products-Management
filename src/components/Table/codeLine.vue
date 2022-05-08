<script setup>
const props = defineProps(['code'])
</script>

<template>
  <div class="flex px-4 py-2 text-sm hover:bg-gray-200">
    <div class="flex w-1/4">
      <svg class="w-6 h-6 text-blue-600" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        viewBox="0 0 24 24" stroke="currentColor">
        <path
          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z">
        </path>
      </svg>
      <p class="ml-2 cursor-pointer hover:underline hover:text-blue-500">{{code['file_name']}}</p>
    </div>
    <p class="w-1/2 text-left cursor-pointer hover:underline hover:text-blue-500">Avoid updating license
      every year</p>
    <p class="w-1/4 ml-2 text-right">{{code['latest_change_time']}}</p>
  </div>
</template>