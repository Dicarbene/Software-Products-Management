<script setup>
import InputGroup from '../Input/inputGroup.vue';
</script>

<template>
  <div class="modal modal-bottom sm:modal-middle modal-open">
    <div class="modal-box">
      <h3 class="font-bold text-xl text-center">Login</h3>
      <br>
      <div class="form-control">
        <InputGroup explain="你的账号/邮箱" inputType="Account" placeHolder="info@site.com" />
        <InputGroup explain="你的密码" inputType="PassWord" placeHolder="123456" />
      </div>
      <div class="modal-action">
        <button class="btn" @click="$emit('closeModal')">确认</button>
      </div>
    </div>
  </div>
</template>