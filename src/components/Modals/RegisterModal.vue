<script setup>
import { ref } from 'vue';
import InputGroup from '../Input/inputGroup.vue';
const username = ref('');
const password = ref('');
const email = ref('');
const emit = defineEmits(['closeModal'])
const submit= () => {
  console.log(username.value,password.value,email.value);
  emit('closeModal');
}
</script>

<template>
  <div class="modal modal-bottom sm:modal-middle modal-open">
    <div class="modal-box">
      <h3 class="font-bold text-2xl text-center">Register</h3>
      <br>
      <label class="btn btn-sm btn-circle absolute right-2 top-2" @click="$emit('closeModal')">
      ✕
      </label>
      <div class="form-control">
        <InputGroup explain="你的账户" inputType="Account" placeHolder="palytoxin" v-model="username"/>
        <InputGroup explain="你的密码" inputType="Password" placeHolder="kunkun123" v-model="password" />
        <InputGroup explain="你的邮箱" inputType="Email" placeHolder="info@site.com" v-model="email" />
      </div>
      <div class="modal-action">
        <button class="btn" @click="submit">确认</button>
      </div>
    </div>
  </div>
</template>