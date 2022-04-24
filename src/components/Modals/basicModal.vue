<script setup>

</script>

<template>
  <div class="modal modal-bottom sm:modal-middle modal-open">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
      <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
      <div class="modal-action">
        <button class="btn" @click="$emit('closeModal')">Yay!</button>
      </div>
    </div>
  </div>
</template>