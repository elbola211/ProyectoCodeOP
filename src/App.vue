<!-- <template>
</template>

<script>
</script>

<style>
</style> -->

<template>

  <Navbar />
  
  <Opiniones />

  <Footer />


</template>

<script>
  //paso 1: import
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Contacto from "./views/Contact.vue";
import Opiniones from "./views/Opinions.vue";

export default {
  //paso 2: declarar components que se van a usar aqui
  components: {
    Navbar,
    Footer,
    Contacto,
    Opiniones,
  },
  data() {
    return {

    };
  },
  methods: {
 
  },
};
</script>

<style>
</style>

