<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import ThemeChangeButton from "./Buttons/ThemeChangeButton.vue";

const router = useRouter();
const route = useRoute();
const logged = ref(false);

const backHome = () => {
  router.push("/");
};
const toBoard = () => {
  router.push("/board");
};
</script>

<template>
  <div class="navbar bg-base-100 opacity-90 backdrop-blur text-sans">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
      </div>
      <a @click="backHome" class="btn btn-ghost normal-case text-xl text-bold">SPM</a>
    </div>
    <div class="navbar-center hidden lg:flex"></div>
    <div class="navbar-end">
      <ThemeChangeButton></ThemeChangeButton>
      <div v-if="!logged">
        <a class="btn btn-primary mr-3 mb-0.5">Log in</a>
        <a class="btn btn-accent">Register</a>
      </div>
      <div v-else>
        <a class="btn btn-ghost mr-3">name</a>
        <a @click="logged = false" class="btn btn-ghost">Log out</a>
      </div>
    </div>
  </div>
</template>
