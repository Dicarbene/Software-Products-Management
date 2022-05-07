<script setup>
import UserLine from './userLine.vue';
defineProps({
  result: {
    type: Array,
    default: [
      {
        "id": 793,
        "userId": "Candice.Prohaska40",
        "email": "Domingo_Lakin95@gmail.com",
        "picUrl": "http://loremflickr.com/128/128/cats"
      },
      {
        "id": 824,
        "userId": "Loy_Prohaska",
        "email": "Marge.Wehner93@hotmail.com",
        "picUrl": "http://loremflickr.com/128/128/cats"
      },
      {
        "id": 1031,
        "userId": "America_Prohaska",
        "email": "Lucinda_Leannon@yahoo.com",
        "picUrl": "http://loremflickr.com/128/128/cats"
      },
      {
        "id": 1401,
        "userId": "Serenity.Prosacco38",
        "email": "Ezra.Hermiston@gmail.com",
        "picUrl": "http://loremflickr.com/128/128/cats"
      },
      null
    ]
  },
  pp: {
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
            User
          </th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <UserLine v-for="(data, idx) in result" :data="data" :idx="idx" :page="pp"></UserLine>
      </tbody>
      <!-- foot -->
      <tfoot>
        <th> User </th>
        <th>Name</th>
        <th>Email</th>
      </tfoot>
    </table>
  </div>
</template>