<template>
    <div>
      <!-- Encabezado -->
      <Navbar />
      <!-- Contenido -->
      <div class="container mx-auto p-4 w-screen content-center">
        <!-- Lista de destinos, aquí tiramos de json -->
        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <li v-for="destination in destinations" :key="destination.id">
            <div class="p-4 rounded shadow-md">
              <img :src="destination.image" alt="Imagen de {{ destination.name }}" class="w-full mb-2" />
              <p class="text-gray-600 dark:text-gray-100 text-xl font-semibold">{{ destination.name }}</p>
              <p class="text-gray-600 dark:text-gray-100 text-xl font-semibold">
              <router-link :to="{ name: 'destination-details', params: { id: destination.id }}">
              </router-link></p>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
    //paso 1: import
  import Navbar from "./components/Navbar.vue";
  import Footer from "./components/Footer.vue";
  import Contacto from "./views/Contacto.vue";
  import destinationsData from "./data/destinations.json";
  
  
  export default {
    //paso 2: declarar components que se van a usar aqui
    components: {
      Navbar,
      Footer,
      Contacto,
    },
    data() {
      return {
        destinations: destinationsData,
      };
    },
    methods: {
   
    },
  };
  
  </script>
  
  <style></style>
  