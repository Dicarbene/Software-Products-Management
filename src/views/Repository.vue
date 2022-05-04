<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const repoid = useRoute().params.id;
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
          <div class="text-xl font-medium text-blue-700 cursor-pointer hover:underline">tailwindcss</div>
          <span class="mx-1 text-xl font-medium text-gray-800">/</span>
          <div class="text-xl font-semibold text-blue-700 cursor-pointer hover:underline">tailwindcss</div>
        </div>
        <div class="mt-4 mb-2 md:hidden">
          <span class="text-sm">
            A utility-first CSS framework for rapid UI development.
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
                <button type="button"
                  class="flex items-center justify-center px-4 py-1 ml-2 text-center text-white bg-green-600 border border-green-700 rounded-lg focus:outline-none hover:bg-green-700">
                  <svg class="w-5 h-5 mr-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                  <span class="self-center text-sm font-medium">Clone</span>
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
                <div class="flex px-4 py-2 text-sm hover:bg-gray-200">
                  <div class="flex w-1/4">
                    <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                    </svg>
                    <p class="ml-2 cursor-pointer hover:underline hover:text-blue-500">.github</p>
                  </div>
                  <p class="w-1/2 text-left cursor-pointer hover:underline hover:text-blue-500">Drop fs-extra version
                    to..</p>
                  <p class="w-1/4 text-right">2 months ago</p>
                </div>
                <div class="flex px-4 py-2 text-sm hover:bg-gray-200">
                  <div class="flex w-1/4">
                    <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                    </svg>
                    <p class="ml-2 cursor-pointer hover:underline hover:text-blue-500">dist</p>
                  </div>
                  <p class="w-1/2 text-left cursor-pointer hover:underline hover:text-blue-500">Add empty .npmignore so
                    dist files are distributed with releases</p>
                  <p class="w-1/4 ml-2 text-right">3 years ago</p>
                </div>
                <div class="flex px-4 py-2 text-sm hover:bg-gray-200">
                  <div class="flex w-1/4">
                    <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                    </svg>
                    <p class="ml-2 cursor-pointer hover:underline hover:text-blue-500">scripts</p>
                  </div>
                  <p class="w-1/2 text-left cursor-pointer hover:underline hover:text-blue-500">Don't generate color
                    opacity code in color plugins if not necessary</p>
                  <p class="w-1/4 ml-2 text-right">3 months ago</p>
                </div>
                <div class="flex px-4 py-2 text-sm hover:bg-gray-200">
                  <div class="flex w-1/4">
                    <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                    </svg>
                    <p class="ml-2 cursor-pointer hover:underline hover:text-blue-500">src</p>
                  </div>
                  <p class="w-1/2 text-left cursor-pointer hover:underline hover:text-blue-500">Throw if contains a
                    class</p>
                  <p class="w-1/4 ml-2 text-right">last months</p>
                </div>
                <div class="flex px-4 py-2 text-sm hover:bg-gray-200">
                  <div class="flex w-1/4">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z">
                      </path>
                    </svg>
                    <p class="ml-2 cursor-pointer hover:underline hover:text-blue-500">LICENSE</p>
                  </div>
                  <p class="w-1/2 text-left cursor-pointer hover:underline hover:text-blue-500">Avoid updating license
                    every year</p>
                  <p class="w-1/4 ml-2 text-right">3 years ago</p>
                </div>
                <div class="flex px-4 py-2 text-sm hover:bg-gray-200">
                  <div class="flex w-1/4">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z">
                      </path>
                    </svg>
                    <p class="ml-2 cursor-pointer hover:underline hover:text-blue-500">README.md</p>
                  </div>
                  <p class="w-1/2 text-left cursor-pointer hover:underline hover:text-blue-500">Replace logo in README
                  </p>
                  <p class="w-1/4 ml-2 text-right">2 months ago</p>
                </div>
                <div class="flex px-4 py-2 text-sm hover:bg-gray-200">
                  <div class="flex w-1/4">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z">
                      </path>
                    </svg>
                    <p class="ml-2 cursor-pointer hover:underline hover:text-blue-500">package.json</p>
                  </div>
                  <p class="w-1/2 text-left cursor-pointer hover:underline hover:text-blue-500">1.4.6</p>
                  <p class="w-1/4 ml-2 text-right">last month</p>
                </div>
                <div class="flex px-4 py-2 text-sm hover:bg-gray-200">
                  <div class="flex w-1/4">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z">
                      </path>
                    </svg>
                    <p class="ml-2 cursor-pointer hover:underline hover:text-blue-500">tailwind.css</p>
                  </div>
                  <p class="w-1/2 text-left cursor-pointer hover:underline hover:text-blue-500">Undo accidental changes
                    to CDN build process</p>
                  <p class="w-1/4 ml-2 text-right">6 months ago</p>
                </div>
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
                  A utility-first CSS framework for rapid UI development.
                </span>
                <div class="my-4">
                  <a class="flex items-center mb-2 text-base font-semibold text-blue-600 hover:underline" href="#">
                    <svg class="w-4 h-4 mr-2 text-gray-700" fill="none" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1">
                      </path>
                    </svg>
                    tailwindcss.com/</a>
                  <a href="" class="flex items-center mb-2 text-base font-medium text-gray-700 hover:underline">
                    <svg class="w-4 h-4 mr-2 text-gray-700 fill-current mr-2 octicon octicon-book" height="16" mr="2"
                      viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z">
                      </path>
                    </svg>
                    Readme
                  </a>
                  <a href="" class="flex items-center mb-2 text-base font-medium text-gray-700 hover:underline">
                    <svg height="16" class="w-4 h-4 mr-2 text-gray-700 fill-current" mr="2" viewBox="0 0 16 16"
                      version="1.1" width="16" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z">
                      </path>
                    </svg>
                    MIT License
                  </a>
                </div>
              </div>
            </div>
            <div class="px-6 py-6 -mx-10 border-b md:mx-0 md:px-0">
              <p class="text-base font-semibold text-black">Latest release</p>
              <div class="flex mt-4 text-sm font-semibold text-black">
                <svg class="w-4 h-4 mt-1 mr-2 text-green-600" fill="none" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z">
                  </path>
                </svg>
                <div>
                  v1.4.6 <br>
                  <span class="text-xs text-gray-600">on May 8</span>
                </div>
              </div>
              <div class="mt-4 text-xs text-blue-600">+ 75 releases</div>
            </div>
            <div class="px-6 py-6 -mx-10 border-b md:mx-0 md:px-0">
              <div class="flex flex-wrap items-center mt-4 -mx-2 overflow-hidden">
                <img
                  class="object-cover w-10 h-10 mx-2 mt-2 text-white border-2 border-gray-400 rounded-full shadow-sm cursor-pointer md:mt-0"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="" />
                <img
                  class="object-cover w-10 h-10 mx-2 mt-2 text-white border-2 border-gray-400 rounded-full shadow-sm cursor-pointer md:mt-0"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="" />
                <img
                  class="object-cover w-10 h-10 mx-2 mt-2 text-white border-2 border-gray-400 rounded-full shadow-sm cursor-pointer md:mt-0"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  alt="" />
                <img
                  class="object-cover w-10 h-10 mx-2 mt-2 text-white border-2 border-gray-400 rounded-full shadow-sm cursor-pointer md:mt-0"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt="" />
                <img
                  class="object-cover w-10 h-10 mx-2 mt-2 text-white border-2 border-gray-400 rounded-full shadow-sm cursor-pointer md:mt-0"
                  src="https://images.unsplash.com/photo-1553521041-d168abd31de3?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                  alt="" />
                <img
                  class="object-cover w-10 h-10 mx-2 mt-2 text-white border-2 border-gray-400 rounded-full shadow-sm cursor-pointer md:mt-0"
                  src="https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
                  alt="" />
                <img
                  class="object-cover w-10 h-10 mx-2 mt-2 text-white border-2 border-gray-400 rounded-full shadow-sm cursor-pointer md:mt-0"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt="" />
                <img
                  class="object-cover w-10 h-10 mx-2 mt-2 text-white border-2 border-gray-400 rounded-full shadow-sm cursor-pointer md:mt-0"
                  src="https://images.unsplash.com/photo-1460904577954-8fadb262612c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1240&q=80"
                  alt="" />
              </div>
              <p class="pt-2 text-xs font-medium text-blue-700 hover:underline">+ 98 contributors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>