<template>
  <Navbar />
  <div class="destinations">
    <div class="container mx-auto p-4 w-screen content-center">
      <!-- Verifica si hay datos para mostrar -->
      <div v-if="!loading && !error">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div v-for="destination in data" :key="destination.id">
            <div class="p-4">
              <p class="text-gray-600 dark:text-gray-100 text-xl font-semibold">{{ destination.name }}</p>
              <router-link :to="{ name: 'destination-details', params: { id: destination.id } }">
                <img :src="destination.image" alt="Imagen de {{ destination.name }}" class="w-full mb-2" />
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
    <Footer />
  </div>
</template>

<script>
import destinationsData from "../../server/destinations.json";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Contacto from "../views/Contacto.vue";

export default {
  name: "Destinations",
  data() {
    return {
      data: [],
      loading: true,
      error: false,
    };
  },
  components: {
    Navbar,
    Footer,
    Contacto,
  },
  mounted() {
    this.data = destinationsData; // Simplemente asignamos los datos del JSON a "data"
    this.loading = false; // Indicamos que la carga ha finalizado
    console.log('Data in Destinations.vue:', this.data);
  },
};
</script>

<style></style>