<template>
  <div>
    <Navbar />
    <div class="container mx-auto p-4">
      <!-- Contenido de tu vista aquí -->
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'SimpleView',
  components: {
    Navbar,
    Footer,
  },
};
</script>