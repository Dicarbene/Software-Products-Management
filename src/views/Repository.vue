<script setup>
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useBackendApi } from '@/stores/backendAPI';
import CodeLine from '@/components/Table/codeLine.vue';
const router = useRouter();
const backendAPI = useBackendApi().url;
const repoid = useRoute().params.id;
const username = useRoute().params.user;
const repodata = ref([{ "id": 9, "product_id": 11, "creator_log_id": "zzz", "file_name": "file_1_for_zzz", "latest_change_time": "2022-05-08T22:49:27.000Z" }, { "id": 10, "product_id": 11, "creator_log_id": "zzz", "file_name": "file_2_for_zzz", "latest_change_time": "2022-05-09T00:45:55.000Z" }, { "id": 11, "product_id": 11, "creator_log_id": "zzz", "file_name": "file_3_for_zzz", "latest_change_time": "2022-05-08T17:48:49.000Z" }, { "id": 12, "product_id": 11, "creator_log_id": "zzz", "file_name": "file_4_for_zzz", "latest_change_time": "2022-05-08T17:48:52.000Z" }]);
const codedata = ref([{
  "id": 9,
  "product_id": 11,
  "creator_log_id": "zzz",
  "file_name": "file_1_for_zzz",
  "latest_change_time": "2022-05-08T17:48:32.000Z"
}]);
let url = `http://${backendAPI}/user=${username}/product=`;
console.log(repoid);
url += repoid;
var xhr = new XMLHttpRequest();
xhr.withCredentials = false;
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    repodata.value = JSON.parse(this.responseText);
    codedata.value = JSON.parse(this.responseText)[3];
  }
});
xhr.open("GET", url);
xhr.send();

const toUser = () => {
  router.push({
    name: "user",
    params: {
      name: username
    }
  });
}
const toCode = (state) => {
  router.push({
    name: "code",
    params: {
      id: repoid,
      user: username,
      blob: state['file_name']
    }
  })
}
</script>

<template>
  <div class="bg-white">
    <div class="px-6 mt-4 overflow-x-hidden lg:px-10">
      <div class="flex flex-col md:flex-row md:justify-between">
        <div class="flex items-center">
          <span>
            <svg class="w-4 h-4 mr-2 text-gray-600 fill-current" viewBox="0 0 16 16" version="1.1" width="16"
              height="16" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
              </path>
            </svg>
          </span>
          <div class="text-xl font-medium text-blue-700 cursor-pointer hover:underline" @click="toUser">{{ username }}</div>
          <span class="mx-1 text-xl font-medium text-gray-800">/</span>
          <div class="text-xl font-semibold text-blue-700 cursor-pointer hover:underline">{{ repoid }}
          </div>
        </div>
        <div class="mt-4 mb-2 md:hidden">
          <span class="text-sm">
            {{ repodata[0]['introduction']  }}
          </span>
        </div>
        <div class="hidden md:block md:flex md:justify-between">
          <div class="flex text-center border rounded-lg md:border-none">
            <div
              class="flex items-center px-2 py-1 bg-gray-200 border-gray-400 cursor-pointer md:rounded-l-lg md:border-t md:border-l md:border-b hover:bg-gray-300">
              <svg class="hidden w-4 h-4 mr-1 text-gray-700 md:block" fill="none" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                </path>
              </svg>
              <span class="self-center text-sm font-medium">Watch</span>
              <svg class="w-3 h-3 ml-1 text-gray-700 fill-current" fill="none" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            <div
              class="px-2 py-1 text-sm font-semibold border border-t border-gray-400 rounded-r-lg cursor-pointer hover:text-blue-600">
              423</div>
          </div>
          <div class="flex mx-4">
            <div
              class="flex items-center px-2 py-1 bg-gray-200 border-t border-b border-l border-gray-400 rounded-l-lg cursor-pointer hover:bg-gray-300">
              <svg class="w-4 h-4 mr-1 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <span class="self-center text-sm font-medium">Unstar</span>
            </div>
            <div
              class="px-2 py-1 text-sm font-semibold border border-t border-gray-400 rounded-r-lg cursor-pointer hover:text-blue-600">
              24.1k</div>
          </div>
        </div>
        <div class="flex justify-between md:hidden">
          <button type="button"
            class="flex justify-center w-1/2 py-1 mr-2 text-center bg-gray-100 border border-gray-400 rounded-lg focus:outline-none hover:bg-gray-200">
            <div class="flex items-center px-2">
              <svg class="w-4 h-4 mr-1 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <span class="self-center text-sm font-medium">Unstar</span>
            </div>
          </button>
          <button type="button"
            class="flex justify-center w-1/2 py-1 ml-2 text-center bg-gray-100 border border-gray-400 rounded-lg focus:outline-none hover:bg-gray-300">
            <div class="flex items-center px-2">
              <svg class="w-4 h-4 mr-1 text-gray-700" fill="none" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                </path>
              </svg>
              <span class="self-center text-sm font-medium">Watch</span>
              <svg class="w-3 h-3 ml-1 text-gray-700 fill-current" fill="none" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div class="flex items-center justify-between px-10 mt-6 -mx-10 border-b select-none md:mt-4">
        <div class="flex">
          <div class="flex items-center px-4 pb-2 text-sm border-b-2 border-orange-400 cursor-pointer">
            <svg class="hidden w-5 h-5 mr-1 text-gray-700 md:block" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
            Code
          </div>
        </div>
        <div class="flex items-start pb-2 cursor-pointer md:hidden">
          <svg class="w-5 h-5 text-gray-700 fill-current" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
            </path>
          </svg>
        </div>
      </div>
      <div class="container pb-10 mx-auto mt-8">
        <div class="md:flex">
          <div class="w-full mr-4 md:w-3/4">
            <div class="flex justify-between">
              <div class="flex hidden md:block md:flex">
                <button type="button"
                  class="flex items-center justify-center px-4 py-1 ml-2 text-center bg-gray-100 border border-gray-400 rounded-lg focus:outline-none hover:bg-gray-300">
                  <span class="self-center text-sm font-medium">Add file</span>
                </button>
              </div>
              <button type="button"
                class="flex items-center justify-center px-6 py-1 ml-2 text-center bg-gray-100 border border-gray-400 rounded-lg md:hidden focus:outline-none hover:bg-gray-300">
                <svg class="w-5 h-5 text-gray-700 fill-current" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                  </path>
                </svg>
              </button>
            </div>
            <div class="my-4">
              <div class="flex justify-between px-4 py-3 bg-indigo-100 border border-indigo-200 rounded-t-lg">
                <div class="flex items-center">
                  <img class="w-6 h-6 mr-2 rounded-md" src="https://avatars3.githubusercontent.com/in/2141?s=60&v=4"
                    alt="">
                  <p class="text-sm font-semibold">dependabot-preview</p>
                  <span class="ml-2 text-sm text-gray-600">committed 3 days ago</span>
                </div>
                <div class="hidden md:block md:flex">
                  <a href=""
                    class="flex items-center mb-1 text-sm font-medium text-gray-700 hover:underline hover:text-blue-500">
                    <svg class="w-4 h-4 mr-2 fill-current octicon octicon-history text-gray" height="16" text="gray"
                      viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z">
                      </path>
                    </svg>
                    2,954 commits
                  </a>
                </div>
              </div>
              <div class="hidden text-center border-b border-l border-r rounded-b-lg md:block">
                <CodeLine v-for="data in codedata" :code="data" @click="toCode(data)" />
              </div>

              <div class="py-2 text-center border-b border-l border-r rounded-b-lg md:hidden">
                <p class="text-blue-600 cursor-pointer hover:underline">View code</p>
              </div>
            </div>
            <div class="py-6 border-b md:border md:rounded-lg md:px-8">
              <div class="font-semibold text-black">README.md</div>
            </div>
          </div>
          <div class="ml-4 md:w-1/4">
            <div class="hidden md:block">
              <p class="text-base font-semibold text-black">About</p>
              <div class="pb-2 mt-4 border-b">
                <span class="text-sm lg:text-base">
                  {{ repodata[0]['introduction']  }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>