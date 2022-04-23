import { defineStore } from "pinia";

export const useThemeSelection = defineStore('theme',{
  state: ()=>{
    return{
      theme: "corporate",
    } 
  },
  actions: {
    change2Dark(){
      this.theme = "dark";
      console.log("dark selected");
    },
    change2Light(){
      this.theme = "corporate";
      console.log("light selected");
    }
  },
});
