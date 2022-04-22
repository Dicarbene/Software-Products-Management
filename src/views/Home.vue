<script setup>
import { ref } from 'vue'
import FooterT from '../components/FooterT.vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter();
const route = useRoute();
const toBoard = () => {
  router.push('/board');
}
const open = ref(false);
</script>

<template>
  <main class="hero from-primary to-secondary bg-gradient-to-br text-primary-content min-h-screen h-auto">
    <div class="hero-content text-center text-neutral">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">软件产品库管理系统</h1>
        <br>
        <button class="btn btn-primary modal-button" @click="open = true">Get Started</button>
        <br><br>
        <p class="mb-5">万旭杰 郑宗泽 李珅</p>

        <Teleport to="body">
          <div v-if="open" class="card w-96 bg-base-100 shadow-xl fixed. inset-x-0 top-0 m-80">
            <div class="card-body">
              <h2 class="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary" @click="open = false">Buy Now</button>
              </div>
            </div>
          </div>
        </Teleport>

      </div>
    </div>
  </main>

  <FooterT />
</template>