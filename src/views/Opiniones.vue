<template>  
  <div class="opinions"> 
       
      <div v-for="item in data" :key="item.id">
        <!-- <RouterLink
        :to="{
              name: 'OpinionDetail',
              params: { id: getId(item.id) }}">          
        </RouterLink>

        <Opinion_Card :item="item"/> -->
      <RouterLink :to="{ name: 'OpinionesDetail', params: { id: item.id } }">
        <Opinion_Card :item="item" @click="redirectToOpinionDetail(item.id)" />
      </RouterLink>
        
      </div>

  </div>
</template>

<script>

import Opinion_Card from "../components/Opinion_Card.vue";


export default {
  name: "Opiniones",
  components: { Opinion_Card },
  data() {
    return {
        data: [],
        loading: false,
        error: false,
    };
  },
  mounted() {
    this.getOpinions();
  },
  methods: {
    async getOpinions() {
      this.loading = true;
      try {
        const response = await fetch("../Server/BaseDatosOpiniones.json");
        const data = await response.json();        
        this.loading = false;
        (this.data = data);
        return (this.data);
      } catch {
        this.loading = false;
        this.error = true;
      }
    },
    redirectToOpinionDetail(id) {
    this.$router.push({ name: 'OpinionesDetail', params: { id } });
  }
  },
}

</script>

<style>
@import "../../src/style.css";
</style>