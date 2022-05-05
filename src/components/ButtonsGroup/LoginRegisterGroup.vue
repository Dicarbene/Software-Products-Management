<script setup>
import { ref } from "vue";
import { useUserStatus } from "@/stores/userStatus";
import { storeToRefs } from "pinia";
import LoginModal from '@/components/Modals/LoginModal.vue';
import RegisterModal from '@/components/Modals/RegisterModal.vue';
import { useBackendApi } from '@/stores/backendAPI';
const backendAPI = useBackendApi().url;

const userStatusStore = useUserStatus();
const { Logged, user } = storeToRefs(userStatusStore);

const state = ref({
  loginOpen: false,
  registerOpen: false,
  logged: false,
})
const logined = (username) => {
  state.value.logged = true;

  const url = `http://${backendAPI}/user=${username}`;
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      const res = JSON.parse(this.responseText);
      userStatusStore.$patch((state) => {
        state.Logged=true;
        state.user=res;
      });
    }
  });
  xhr.open("POST", url);
  xhr.send(data);
}
const logout = () =>{
  state.value.logged = false;
  userStatusStore.$patch((state) => {
    state.Logged=false;
    state.user={};
  });
}
const close = (ss) => {
  if (ss == "loginOrRegister") {
    state.value.loginOpen = false;
    state.value.registerOpen = false;
  }
}
</script>
<template>
  <div v-if="!Logged.value">
    <a class="btn btn-primary mr-3 mb-0.5" @click="state.loginOpen = true">Log in</a>
    <a class="btn btn-accent" @click="state.registerOpen = true">Register</a>
  </div>
  <div v-else>
    <a class="btn btn-ghost mr-3">name</a>
    <a @click="Logged.value" class="btn btn-ghost">Log out</a>
  </div>

  <Teleport to="body">
    <LoginModal v-if="state.loginOpen" @close-modal="close('loginOrRegister')" @successful-login="logined" />
    <RegisterModal v-if="state.registerOpen" @close-modal="close('loginOrRegister')" />
  </Teleport>
</template>