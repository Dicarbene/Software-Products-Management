import { defineStore } from "pinia";

export const useThemeSelection = defineStore('theme',{
  state: ()=>{
    return{
      theme: "corporate",
    } 
  },
  actions: {
    changeTheme(){
      this.theme = this.theme === "corporate" ? "dark" : "corporate";
    }
  },
});
