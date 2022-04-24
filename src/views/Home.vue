<script setup>
import FooterT from '../components/FooterT.vue'
import { useRouter, useRoute } from 'vue-router'
import { ref,defineEmits } from 'vue';
import LoginModal from '@/components/Modals/LoginModal.vue';
const router = useRouter();
const route = useRoute();
const toBoard = () => {
  router.push('/board');
}
const open = ref(false);
const close = () => {
  open.value = false;
}
</script>

<template>
  <main class="hero from-primary to-secondary bg-gradient-to-br text-primary-content min-h-screen h-auto">
    <div class="hero-content text-center text-neutral">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">软件产品库管理系统</h1>
        <br>
        <button class="btn btn-primary" @click = "open = true">Get Started</button>
        <br><br>
        <p class="mb-5">万旭杰 郑宗泽 李珅</p>

        <Teleport to="body">
          <LoginModal v-if="open" @close-modal = "close"/>
        </Teleport>

      </div>
    </div>
  </main>

  <FooterT />
</template>