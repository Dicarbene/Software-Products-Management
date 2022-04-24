import { defineStore } from "pinia";


export const useUserStatus = defineStore("posts", {
  // other options...
  state: () => {
    return {
      Logged: false,
      user: {},
    }
  },
});
