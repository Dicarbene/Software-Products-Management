<script setup>
import { ref, watch } from 'vue';
import UserResult from '../components/Table/userResult.vue';
import RepoResult from '../components/Table/repoResult.vue';
import { useBackendApi } from '@/stores/backendAPI';

const backendAPI = useBackendApi().url;
const ss = ref('');
const param = ref('');
const page = ref(1);
const mxVal = ref(1);
const searchResult = ref([]);

const searchStart = () => {
  console.log(page.value)
  if (ss.value == '用户user') {
    const url = `http://${backendAPI}/search/type=user&q=${param.value}&p=${page.value}`;

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        if (JSON.parse(this.responseText)[1] != 0) {
          mxVal.value = JSON.parse(this.responseText)[0]["totalNum"];
          searchResult.value = JSON.parse(this.responseText)[2];
        } else {
          mxVal.value = 0;
          searchResult.value = {};
        }
      }
    });
    xhr.open("GET", url);
    xhr.send();
  } else if (ss.value == '仓库repo') {
    const url = `http://${backendAPI}/search/type=product&q=${param.value}&p=${page.value}`;

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        if (JSON.parse(this.responseText)[1] != 0) {
          mxVal.value = JSON.parse(this.responseText)[0]["totalNum"];
          searchResult.value = JSON.parse(this.responseText)[2];
        } else {
          mxVal.value = 0;
          searchResult.value = {};
        }
      }
    });
    xhr.open("GET", url);
    xhr.send();
  }
};

watch(page, searchStart);
watch(ss,()=>{
  page.value = 1;
});
</script>
<template>
  <div class="hero min-h-screen">
    <div class="form-control mb-24 self-start">
      <div class="input-group mt-8">
        <select class="select select-bordered" v-model="ss">
          <option>用户user</option>
          <option>仓库repo</option>
        </select>
        <input type="text" class="input input-bordered mr-px lg:w-96 w-24" placeholder="请选择搜索你的kunkun" v-model="param">
        <button class="btn btn-primary" @click="searchStart">Search</button>
      </div>
    </div>
    <UserResult v-if="ss === '用户user' && searchResult[0] !== null" class="self-center" :result="searchResult"
      :pp="page" />
    <RepoResult v-else-if="ss === '仓库repo' && searchResult[0] !== null" class="self-center" :result="searchResult"
      :pp="page" />

    <div class="tooltip hover:tooltip-open tooltip-bottom tooltip-primary flex self-end mb-8" :data-tip="mxVal">
      <div class="btn-group self-center">
        <button class="btn hover:btn-active" :class="[page <= 1 ? 'btn-disabled' : '']" @click="page -= 1">«</button>
        <button class="btn">Page {{ page }}</button>
        <button class="btn hover:btn-active" :class="[page >= mxVal ? 'btn-disabled' : '']"
          @click="page += 1">»</button>
      </div>
    </div>

  </div>
</template>