<script setup>
import { ref } from 'vue';
import InputGroup from '../Input/inputGroup.vue';
import { useBackendApi } from '@/stores/backendAPI';
const backendAPI = useBackendApi().url;

const username = ref('hello');
const password = ref('world');
const emit = defineEmits(['closeModal'])
const submit= () => {
  console.log(username.value,password.value);
  emit('closeModal');
}
</script>

<template>
  <div class="modal modal-bottom sm:modal-middle modal-open">
    <div class="modal-box">
      <h3 class="font-bold text-2xl text-center">Login</h3>
      <br>
      <label class="btn btn-sm btn-circle absolute right-2 top-2" @click="emit('closeModal')">
      ✕
      </label>
      <div class=" form-control">
        <InputGroup explain="你的账号/邮箱" inputType="Account" placeHolder="info@site.com" v-model="username" />
        <InputGroup explain="你的密码" inputType="PassWord" placeHolder="123456" v-model="password" />
      </div>
      <div class="modal-action">
        <button class="btn" @click="submit">确认</button>
      </div>
    </div>
  </div>
</template>