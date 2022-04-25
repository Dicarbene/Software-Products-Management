<script setup>
  defineProps({
    explain: String,
    inputType: String,
    placeHolder: String,
  })
</script>
<template>
  <label class="label">
    <span class="label-text">{{explain}}</span>
  </label>
  <label class="input-group">
    <!---使用中文会有bug， 暂时使用英文替代-->
    <span class="">{{inputType}}</span>
    <input type="text" :placeholder="placeHolder" class="input input-bordered w-full">
  </label>
</template>