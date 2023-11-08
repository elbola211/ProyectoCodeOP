<template>
  <div class="px-4 py-4" v-if="destination">
    <img :src="destination.image" alt="Imagen de {{ destination.name }}" class="w-1/2 mb-2" />   
  </div>

  <!-- Loading & Error Handling -->
  <div v-else>
    <p v-if="loading">Cargando...</p>
    <p v-if="error">Hubo un error al cargar los datos.</p>
  </div>
</template>

<script>
export default {
  name: "DestinationDetails",
  data() {
    return {
      destination: null,
      loading: false,
      error: false,
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      this.loading = true;
      try {
        const response = await fetch("../../Server/destinations.json");        
        const data = await response.json();
        this.loading = false;
        this.destination = data[this.$route.params.id];
        console.log('Datos del destino:', this.destination); // Agrega este log para depurar
      } catch (error) {
        console.error('Error:', error); // Agrega este log para depurar
        this.loading = false;
        this.error = true;
      }
    },
       imageLoadError() {
      console.error("Error al cargar la imagen:", this.destination.image);
    },
  },
}
</script>
<style></style>