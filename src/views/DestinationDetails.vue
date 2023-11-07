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
import destinationsData from "../../server/destinations.json";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Contacto from "../views/Contacto.vue";

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
    console.log('ID recibido:', id); // Verificar el ID
      this.destination = destinationsData.find((destino) => destino.id === parseInt(id));
        console.log('Datos del destino:', this.destination);
  },
},
};
</script>
<style></style>