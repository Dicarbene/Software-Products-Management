import { ref } from 'vue'

export const themeSelection = ref({
  theme: 'corporate',
  changetheme(){
    this.theme = "dark";
    console.log(this.theme);
  },
  change2Dark(){
    this.theme = "dark";
    console.log("dark");
  },
  change2Light(){
    this.theme = "corporate";
    console.log("light");
  }
})
