<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useBackendApi } from '@/stores/backendAPI';
const backendAPI = useBackendApi().url;
const username = useRoute().params.name;
const user = ref({});

let url = 'http://' + backendAPI + '/user=' + username;

var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    user.value = JSON.parse(this.responseText);
  }
});

xhr.open("GET", url);
xhr.send();

</script>
<template>
  <div class="bg-base-200 w-full py-10 px-10">
    <div>
      <div class="sm:flex space-x-7 md:items-start items-center">
        <div class="mb-4">
          <img class="rounded-md md:w-80" :src="user[0]['profile_pic_url']" alt="brad" />
        </div>
        <div>
          <h1 class="text-base-content text-4xl font-bold my-2">{{ user[0]['user_log_id'] }}</h1>
          <p class="text-base-content text-xl my-2">最后登录时间:{{ user[0]['latest_logon'] }}</p>
          <p class="text-base-content text-xl my-2">账户创建时间:{{ user[0]['create_time'] }}</p>
        </div>
      </div>
    </div>
    <div class="mt-8 sm:grid grid-cols-2 sm:space-x-4">
      <div class="bg-slate-600 p-6 rounded-md mb-4">
        <span class="text-slate-400 text-md">Website</span>
        <h2 class="text-slate-100 text-2xl font-semibold">{{ user[0]['user_log_id'] }}</h2>
      </div>
      <div class="bg-slate-600 p-6 rounded-md mb-4">
        <span class="text-slate-400 text-md">Email</span>
        <h2 class="text-slate-100 lg:text-2xl text-lg font-semibold">{{ user[0]['email'] }}</h2>
      </div>
    </div>
    <div class="sm:grid lg:grid-cols-4 grid-cols-2 sm:gap-x-4">
      <div class="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
        <div>
          <span class="text-md text-slate-400">Watchers</span>
          <h1 class="text-3xl font-bold text-slate-100">{{ user[3]['starCount'] }}</h1>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-cyan-500" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
      </div>
      <div class="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
        <div>
          <span class="text-md text-slate-400">Watching</span>
          <h1 class="text-3xl font-bold text-slate-100">{{ user[2]['watchCount'] }}</h1>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
      </div>
      <div class="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
        <div>
          <span class="text-md text-slate-400">Public Repos</span>
          <h1 class="text-3xl font-bold text-slate-100">{{ user[1]['productCount'] }}</h1>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 text-yellow-500" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
      </div>
      <div class="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
        <div>
          <span class="text-md text-slate-400">Public Gists</span>
          <h1 class="text-3xl font-bold text-slate-100">40</h1>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 text-red-500" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        </div>
      </div>
    </div>

  </div>
</template>