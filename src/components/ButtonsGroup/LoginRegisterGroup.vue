<script setup>
import { ref } from "vue";
import { useUserStatus } from "@/stores/userStatus";
import { storeToRefs } from "pinia";
import LoginModal from '@/components/Modals/LoginModal.vue';
import RegisterModal from '@/components/Modals/RegisterModal.vue';
import { useBackendApi } from '@/stores/backendAPI';
import { useRouter } from "vue-router";

const backendAPI = useBackendApi().url;
const router = useRouter();
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
        state.Logged = true;
        state.user = res;
      });
    }
  });
  xhr.open("GET", url);
  xhr.send();
}

const logout = () => {
  state.value.logged = false;
  userStatusStore.$patch((s) => {
    s.Logged = false;
    s.user = {};
  });
  alert('log out successfully');
}
const close = (ss) => {
  if (ss == "loginOrRegister") {
    state.value.loginOpen = false;
    state.value.registerOpen = false;
  }
}
const toUser = (username) => {
  router.push({
    name: "user",
    params: {
      name: username
    }
  });
};

</script>
<template>
  <div v-if="!Logged">
    <a class="btn btn-primary lg:mr-3 " @click="state.loginOpen = true">Log in</a>
    <a class="btn btn-accent" @click="state.registerOpen = true">Register</a>
  </div>
  <div v-else class="flex hover:cursor-pointer">
    <div class="avatar online" @click="toUser(user[0]['user_log_id'])"
      :class="[user[0]['profile_pic_url'] != null ? '' : 'placeholder']">
      <div class="w-12 rounded-full ring ring-primary hover:ring-secondary-focus ring-offset-base-100 ring-offset-2">
        <img :src="user[0]['profile_pic_url']" class="hover:blur" />
      </div>
    </div>
    <a @click="logout" class="btn btn-ghost">Log out</a>
  </div>

  <Teleport to="body">
    <LoginModal v-if="state.loginOpen" @close-modal="close('loginOrRegister')" @successful-login="logined" />
    <RegisterModal v-if="state.registerOpen" @close-modal="close('loginOrRegister')" />
  </Teleport>
</template>