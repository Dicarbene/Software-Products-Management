<script setup>

</script>
<template>
  <section class="p-5">
    <div class="card lg:card-side bg-base-200 card-compact shadow-xl">
      <figure class="p-2">
        <img src="https://api.lorem.space/image/album?w=200&h=200" alt="Album" />
      </figure>
      <div class="card-body container">
        <h2 class="card-title">{{ title }}</h2>
        <p class="text-left">{{ para }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">More</button>
        </div>
      </div>
    </div>
  </section>
</template>

