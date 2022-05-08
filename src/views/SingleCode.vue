<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useBackendApi } from "@/stores/backendAPI";
import { useUserStatus } from "@/stores/userStatus";
import Codemirror from "codemirror-editor-vue3";
// language
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/clike/clike.js";
// theme
import "codemirror/theme/dracula.css";
const route = useRoute();
const backendAPI = useBackendApi().url;
const user = useUserStatus().user;
const logged = useUserStatus().Logged;
const username = route.params.user;
const repoid = route.params.id;
const codename = route.params.blob;
const code = ref(`hello world`);
const orgCode = ref(``);

const originalOptions = {
  readOnly: true,
  mode: "text/x-c++src", // Language mode
  lineNumbers: true, // Show line number
  smartIndent: true, // Smart indent
  indentUnit: 2, // The smart indent unit is 2 spaces in length
  foldGutter: true, // Code folding
  styleActiveLine: true, // Display the style of the selected row
  lineWrapping: true,
}
const cmOptions = ref({
  mode: "text/x-c++src", // Language mode
  theme: "dracula", // Theme
  lineNumbers: true, // Show line number
  smartIndent: true, // Smart indent
  indentUnit: 4, // The smart indent unit is 2 spaces in length
  styleActiveLine: true, // Display the style of the selected row
  lineWrapping: true,
});



let url = `http://${backendAPI}/user=${username}/product=${repoid}/code=${codename}`;
var xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    code.value = JSON.parse(this.responseText)[0]['url'];
    orgCode.value = JSON.parse(this.responseText)[0]['url'];
  }
});
xhr.open("GET", url);
xhr.send();
const change = () => {
  console.log(code.value);
}
</script>
<template>
  <div class="flex justify-between">
    <Codemirror v-model:value="orgCode" :options="originalOptions" border placeholder="test placeholder" class=" max-w-screen-sm" />
    <Codemirror v-model:value="code" :options="cmOptions" border placeholder="test placeholder" @change="change" class=" max-w-screen-sm" />
  </div>
  <button class="btn btn-success w-20 self-center mb-2" :class="[logged?'':'btn-disabled']" @click="updateBlob">update</button>
</template>
<style scoped>
</style>
