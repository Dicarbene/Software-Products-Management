import { defineStore } from "pinia";


export const useThemeSelection = defineStore('theme',{
  state: ()=>{
    return{
      theme: "corporate",
    } 
  },
  actions: {
    change2Dark(){
      this.theme = "dracula";
      console.log("dark theme selected");
    },
    change2Light(){
      this.theme = "corporate";
      console.log("light theme selected");
    }
  },
});
