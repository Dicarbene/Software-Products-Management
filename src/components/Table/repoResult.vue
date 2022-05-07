<script setup>
import repoline from './repoline.vue';
defineProps({
  result: {
    type: Array,
    default: []
  },
  pp:{
    type: Number,
    default: 0
  }
});
</script>

<template>
  <div class="overflow-x-auto w-full flex">
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th>
            Repo
          </th>
          <th>Name</th>
          <th>Creator</th>
          <th>Description</th>
          <th>Stars</th>
          <th>Watchers</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <repoline v-for="(data,idx) in result" :data="data" :idx="idx" :page="pp"></repoline>
      </tbody>
      <!-- foot -->
      <tfoot>
        <th>
          Repo
        </th>
        <th>Name</th>
        <th>Creator</th>
        <th>Description</th>
        <th>Stars</th>
        <th>Watchers</th>
      </tfoot>
    </table>
  </div>
</template>