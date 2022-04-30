<script setup>
import FooterT from '../components/FooterT.vue'
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue';
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
  <main class="hero from-primary to-secondary bg-gradient-to-br text-primary-content min-h-screen">
    <div class="hero-content text-center text-neutral flex-col">
      <h1 class="mb-5 text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-green-200 via-pink-200 to-sky-300">
        软件产品库管理系统</h1>
      <h2 class="mb-5 text-lg text-secondary-content text-transparent bg-clip-text bg-gradient-to-tl from-green-200 to-blue-300">
        软件产品库管理系统是一款旨在对软件进行功能性、可靠性管理的系统软件。可以提高软件的管理效率，方便管理员和用户的一些实时管理操作包括对软件信息、项目内容、详细代码进行各方面的管理，为用户提供充足的信息和快捷的查询、修改手段，解决人工管理时所带来的低效率、易错和难管理等问题。
      </h2>
      <div class="max-w-md">
        <br>
        <button class="btn btn-primary btn-xl text-2xl" @click="open = true">Get Started</button>
        <br><br>
        <p class="mb-5 text-secondary-content text-2xl">万旭杰 郑宗泽 李珅</p>

        <Teleport to="body">
          <LoginModal v-if="open" @close-modal="close" />
        </Teleport>

      </div>
    </div>
  </main>

  <FooterT />
</template>