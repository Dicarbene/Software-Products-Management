import { defineStore } from "pinia";


export const useBackendApi = defineStore('backend',{
  state: ()=>{
    return{
      url: '192.168.50.102:3000',
    } 
  },
  actions: {
  },
});
