
<script setup>
import { ref } from 'vue';
import InputGroup from '../Input/inputGroup.vue';
import { useBackendApi } from '@/stores/backendAPI';
const backendAPI = useBackendApi();
const backurl = ref(backendAPI.url.slice(0,-5));
const port = ref(backendAPI.url.slice(-4));
const emit = defineEmits(['closeModal'])
const submit = () => {
  const url = `${backurl.value}:${port.value}`;
  backendAPI.$patch((state) => {
    state.url = url;
  });
  emit('closeModal');
}
</script>

<template>
  <div class="modal modal-bottom sm:modal-middle modal-open">
    <div class="modal-box">
      <h3 class="font-bold text-2xl text-center">Backend API Setting</h3>
      <br>
      <label class="btn btn-sm btn-circle absolute right-2 top-2" @click="$emit('closeModal')">
        ✕
      </label>
      <div class=" form-control">
        <InputGroup explain="后端网址" inputType="site" placeHolder="192.168.0.0" v-model="backurl" />
        <InputGroup explain="端口" inputType="Account" placeHolder="3000" v-model="port" />
      </div>
      <div class="modal-action justify-between">
        <p class="font-bold mr-8 self-start">结果:&nbsp;&nbsp;&nbsp;{{backurl}}:{{port}}</p>
        <button class="btn" @click="submit">确认</button>
      </div>
    </div>
  </div>
</template>