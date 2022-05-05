<script setup>
import { ref } from 'vue';
import SearchGroup from '../components/Input/searchGroup.vue';
import UserResult from '../components/Table/userResult.vue';
const hasResult = ref(false);
</script>
<template>
  <div class="hero min-h-screen flex-col">
    <SearchGroup class="self-start my-2" @result_update="hasResult = true"/>
    <UserResult/>
  </div>
</template>