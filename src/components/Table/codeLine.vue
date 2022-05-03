<script setup>
const props = defineProps(['num'])
</script>

<template>
  <tr>
    <th>{{ props.num }}</th>
    <td>Cy Ganderton</td>
    <td>Quality Control Specialist</td>
    <td>Blue</td>
  </tr>
</template>