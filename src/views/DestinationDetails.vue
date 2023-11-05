<template>
  <div>
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
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import destinationsData from "./data/destinations.json";

export default {
  name: 'DestinationDetails',
  components: {
    Navbar,
    Footer,
  },
  props: ['id'],
  data() {
    return {
      destination: null, // Aquí almacenaremos los detalles del destino
    };
  },
  mounted() {
    // Llama a un método para cargar los detalles del destino
    this.loadDestinationDetails(this.id);
  },
  methods: {
    loadDestinationDetails(id) {
      // Filtra el destino por ID
      this.destination = destinationsData.find((destino) => destino.id === parseInt(id));
    },
  },
};
</script>
<style></style>
