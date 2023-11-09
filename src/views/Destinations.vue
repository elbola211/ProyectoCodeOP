<template>
  <div class="destinations">
    <div class="container mx-auto p-4 w-screen content-center">
      <!-- Verifica si hay datos para mostrar -->
      <div v-if="!loading && !error">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div v-for="destination in data" :key="destination.id">
            <div class="p-4">
              <router-link :to="{ name: 'destinationDetails', params: { id: destination.id } }">
                <img :src="destination.image" alt="Imagen de {{ destination.name }}" class="w-full mb-2" />
                <p class="text-gray-400 text-xl font-light">{{ destination.name }}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- Muestra un mensaje de carga si es necesario -->
      <div v-else-if="loading">
        <p>Cargando destinos...</p>
      </div>
      <!-- Muestra un mensaje de error si es necesario -->
      <div v-else>
        <p>Hubo un error al cargar los destinos.</p>
      </div>
    </div>
  </div>
</template>

<script>
import destinationsData from "../../server/destinations.json";

export default {
  name: "Destinations",
  data() {
    return {
      data: [],
      loading: true,
      error: false,
    };
  },
  mounted() {
    this.data = destinationsData; // Asignar los datos del JSON a "data"
    this.loading = false; // Indicar que la carga ha finalizado
    console.log('Data in Destinations.vue:', this.data);
  },
};
</script>

<style></style>