import { defineStore } from "pinia";


export const useBackendApi = defineStore('backend',{
  state: ()=>{
    return{
      url: '112.126.88.45:3000',
    } 
  },
  actions: {
  },
});
