<script setup>

import ThemeChangeButton from "./Buttons/ThemeChangeButton.vue";
import NavDropdown from "./Buttons/navDropdown.vue";
import Home from "./Buttons/homeButton.vue";
import LoginRegisterGroup from "./ButtonsGroup/LoginRegisterGroup.vue";

</script>

<template>
  <div class="navbar bg-base-100 opacity-80 backdrop-blur text-sans">
    <div class="navbar-start">
      <NavDropdown class="mr-4" />
      <ThemeChangeButton />
    </div>
    <div class="navbar-center hidden lg:flex">
      <Home/>
    </div>
    <div class="navbar-end">
      <LoginRegisterGroup />
    </div>
  </div>

</template>
