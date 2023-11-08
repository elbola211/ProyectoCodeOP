<template>
  <div class="destination-details">
    <!-- Encabezado -->
    <Navbar />
    <!-- Contenido -->
    <div class="container mx-auto p-4 w-screen content-center">
      <template v-if="destination">
        <h2>{{ destination.name }}</h2>
        <p>{{ destination.description }}</p>
        <img :src="destination.image" alt="Imagen de {{ destination.name }}" />
      </template>
      <template v-else>
        <p>Ningún destino para mostrar.</p>
      </template>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: 'DestinationDetails',
  components: {
    Navbar,
    Footer,
  },
  props: ['id'],
  data() {
    return {
      destination: null,
    };
  },
  mounted() {
    this.loadDestinationDetails(this.id);
  },
  methods: {
    loadDestinationDetails(id) {
      this.loading = true;
      fetch("../server/destinations.json") // Asegúrate de que la ruta sea correcta
        .then(response => response.json())
        .then(data => {
          this.loading = false;
          this.destination = data.find(destino => destino.id === parseInt(id));
          console.log('Datos del destino:', this.destination);
        })
        .catch(error => {
          this.loading = false;
          console.error('Error loading data:', error);
          this.error = true;
        });
    },
  },
};
</script>
<style></style>