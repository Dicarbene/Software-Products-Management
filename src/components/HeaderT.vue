<script setup>
import { ref } from "vue";
import { useUserStatus } from "@/stores/userStatus";
import { storeToRefs } from "pinia";

import ThemeChangeButton from "./Buttons/ThemeChangeButton.vue";
import LoginModal from '@/components/Modals/LoginModal.vue';
import RegisterModal from '@/components/Modals/RegisterModal.vue';
import NavDropdown from "./Buttons/navDropdown.vue";
import Home from "./Buttons/homeButton.vue";

const lrState = ref({
  loginOpen: false,
  registerOpen: false
});

const userStatusStore = useUserStatus();
const { logged, user } = storeToRefs(userStatusStore);

const state = ref({
  loginOpen: false,
  registerOpen: false,
  logged: false,
})

const close = (ss) => {
  if (ss == "login") {
    state.value.loginOpen = false;
  } else if (ss == "register") {
    state.value.registerOpen = false;
  }
}

</script>

<template>
  <div class="navbar bg-base-100 opacity-90 backdrop-blur text-sans">
    <div class="navbar-start">
      <NavDropdown class=" z-50"/>
      <Home/>
    </div>
    <div class="navbar-center hidden lg:flex">
    </div>
    <div class="navbar-end">
      <ThemeChangeButton />

      <div v-if="!logged">
        <a class="btn btn-primary mr-3 mb-0.5" @click="state.loginOpen = true">Log in</a>
        <a class="btn btn-accent" @click="state.registerOpen = true">Register</a>
      </div>
      <div v-else>
        <a class="btn btn-ghost mr-3">name</a>
        <a @click="logged = false" class="btn btn-ghost">Log out</a>
      </div>
    </div>
  </div>


  <Teleport to="body">
    <LoginModal v-if="state.loginOpen" @close-modal="close('login')" />
  </Teleport>
  <Teleport to="body">
    <RegisterModal v-if="state.registerOpen" @close-modal="close('register')" />
  </Teleport>
</template>
