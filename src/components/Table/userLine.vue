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
      <div class="font-bold">{{ data['userId'] }}</div>
    </td>
    <td>
      <div class="font-bold">{{ data['email'] }}</div>
    </td>
  </tr>
</template>