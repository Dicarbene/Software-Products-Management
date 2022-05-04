<script setup>
import userCard from "../components/Cards/userCard.vue";
import { useRouter } from "vue-router";
import { useBackendApi } from '@/stores/backendAPI';
import { onBeforeMount, ref, watch } from "vue";

const router = useRouter();
const backendAPI = useBackendApi().url;
const idSeg = ref([]);
const page = ref(1);
const mxVal = ref(1);

const changePage = () => {
  let url = 'http://' + backendAPI + '/users/p=' + page.value;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      idSeg.value = JSON.parse(this.responseText)[2];
      mxVal.value = JSON.parse(this.responseText)[0]["totalNum"];
    }
  });

  xhr.open("GET", url);

  xhr.send();
}

onBeforeMount(() => {
  changePage();
});

watch(page, changePage);

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
  <div class="hero min-h-screen bg-neutral-content">
    <div class="hero-content text-center text-neutral flex-col">
      <h2 class="text-8xl font-bold text-transparent bg-gradient-to-tl from-blue-500 to-green-300 bg-clip-text">
        用户浏览
      </h2>
      <div class="flex flex-row flex-wrap">
        <userCard v-for="n in idSeg" :id="n" @click="toUser(n['userLogId'])" />
      </div>
      <div class="tooltip hover:tooltip-open tooltip-bottom tooltip-primary" :data-tip="mxVal">
        <div class="btn-group self-center">
          <button class="btn hover:btn-active" :class="[page <= 1 ? 'btn-disabled' : '']" @click="page -= 1">«</button>
          <button class="btn">Page {{ page }}</button>
          <button class="btn hover:btn-active" :class="[page >= mxVal ? 'btn-disabled' : '']" @click="page += 1">»</button>
        </div>
      </div>
    </div>
  </div>
</template>