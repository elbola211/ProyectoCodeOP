<template>
    <div class="px-4 py-4 shadow-lg" v-if="opinion">
        <img :src="opinion.foto"/>        
        <h6>Nombre:<br />{{opinion.nombre}}</h6>
        <h6>Ciudad:<br />{{opinion.ciudad}}</h6>
        <h6>Opinión comida:<br />{{opinion.opinionComida}}</h6>
        <h6>Coste vida:<br />{{opinion.costeVida}}</h6>
        <h6>Opinion general:<br />{{opinion.opinionGeneral}}</h6>
        
    </div>

    <!-- loaging & error -->
  <iframe
    v-if="loading"
    src="https://giphy.com/embed/xTkcEQACH24SMPxIQg"
    width="480"
    height="480"
    frameBorder="0"
    class="giphy-embed"
    allowFullScreen
  ></iframe>
  <iframe
    v-if="error"
    src="https://giphy.com/embed/xTkcEQACH24SMPxIQg"
    width="480"
    height="480"
    frameBorder="0"
    class="giphy-embed"
    allowFullScreen
  ></iframe>
    
</template>
  
<script>
    export default {
    name: "Opinion",
    data() {
    return {
      opinion: null,
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
        const response = await fetch("../Server/BaseDatosOpiniones.json");        
        const data = await response.json();
        this.loading = false;
        this.opinion = data[this.$route.params.id];        
        return (this.opinion);
      } catch {
        this.loading = false;
        this.error = true;
      }      
    },
},
}

</script>
  
<style></style>