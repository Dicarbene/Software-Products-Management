
<template>
  <div v-if="open" class="card w-96 bg-base-100 shadow-xl fixed. inset-x-0 top-0 m-80">
    <div class="card-body">
      <h2 class="card-title">Card title!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" @click="open = false">Buy Now</button>
      </div>
    </div>
  </div>
</template>