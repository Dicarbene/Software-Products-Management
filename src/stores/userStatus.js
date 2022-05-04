import { defineStore } from "pinia";


export const useUserStatus = defineStore("user", {
  // other options...
  state: () => {
    return {
      Logged: false,
      user: {},
    }
  },
});
