<script setup>
  import { ref } from 'vue';

</script>

<template>
  <div class="form-control mb-24">
    <div class="input-group">
      <select class="select select-bordered">
        <option disabled selected>搜索选项</option>
        <option>用户user</option>
        <option>仓库repo</option>
      </select>
      <input type="text" class="input input-bordered mr-px w-96" placeholder="请选择搜索你的kunkun">
      <button class="btn btn-primary" @click="">Search</button>
    </div>
  </div>
</template>