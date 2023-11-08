<template>
 <div id='app'>
    <Navbar />
    <div id='nav'>
      <Home/>
      <router-link to="/"> Home </router-link>
      <router-link to="/contacto"> Contacto </router-link>
      <router-link to="/destinos"> Destinations </router-link>
      <router-link to="/infoutil"> infoUtil </router-link>
      <router-link to="/opiniones"> Opiniones </router-link>
    </div>
    <router-view/>
  </div>

</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'app',
  components: {
    'Navbar': Navbar
  }
}
</script>

