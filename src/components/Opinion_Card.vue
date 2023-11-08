<template>
    <div class="px-4 py-4 shadow-lg" v-if="item">
      <img class="mx-auto" :src="item.foto"/>    
      <h3 class="text-center">Nombre: {{ item.nombre }}</h3>
      <h5 class="text-center">Destino: {{ item.ciudad }}</h5>      
    </div>
  </template>
  
  <script>
  export default {
    name: "Opinion",
    props: ["item"],
    data() {
      return {
  
      };
    },
  
   
  };
  </script>
  
  <style></style>