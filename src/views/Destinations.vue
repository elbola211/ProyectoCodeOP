<template>
    <div>
      <!-- Encabezado -->
      <Navbar />
      <!-- Contenido -->
      <div class="container mx-auto p-4">
        <h1 class="text-3xl font-semibold mb-4">Destinos</h1>
        <!-- Lista de destinos -->
        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <li v-for="destination in destinations" :key="destination.id">
            <div class="bg-white p-4 rounded shadow-md">
              <h2 class="text-xl font-semibold">{{ destination.name }}</h2>
              <p class="text-gray-600">Descripción: {{ destination.description }}</p>
              <router-link :to="{ name: 'destination-details', params: { id: destination.id }}">
                Ver detalles
              </router-link>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import destinationsData from "./data/destinations.json";
  
  export default {
    components: {
      Navbar,
      Footer,
    },
    data() {
      return {
        destinations: destinationsData,
      };
    },
  };
  </script>