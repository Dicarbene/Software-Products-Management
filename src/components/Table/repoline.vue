<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: {}
  },
  idx:{
    type: Number,
    default: 0
  },
  page:{
    type: Number,
    default: 0
  }
});

</script>
<template>
  <tr>
    <th>
      {{(page-1)*5+idx+1}}
    </th>
    <td>
      <div class="font-bold">{{ data['productName'] }}</div>
    </td>
    <td>
      <div class="font-bold">{{ data['creator'] }}</div>
    </td>
    <td>
      <div class="font-bold">{{ data['introduction'] }}</div>
    </td>
    <th>
      <div class="font-bold">{{ data['totalWatch'] }}</div>
    </th>
    <th>
      <div class="font-bold">{{ data['totalStar'] }}</div>
    </th>
  </tr>
</template>