<script setup>

import ThemeChangeButton from "./Buttons/ThemeChangeButton.vue";
import NavDropdown from "./Buttons/navDropdown.vue";
import Home from "./Buttons/homeButton.vue";
import LoginRegisterGroup from "./ButtonsGroup/LoginRegisterGroup.vue";

</script>

<template>
  <div class="navbar bg-base-100 opacity-90 backdrop-blur text-sans">
    <div class="navbar-start">
      <NavDropdown />
    </div>
    <div class="navbar-center hidden lg:flex">
      <Home/>
    </div>
    <div class="navbar-end">
      <ThemeChangeButton />
      <LoginRegisterGroup />
    </div>
  </div>

</template>
