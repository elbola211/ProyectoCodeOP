<template>
  <div id='app'>
    <div id='nav'>
      <Home/>
      <router-link to="/"> Home </router-link>
      <router-link to="/contacto"> Contacto </router-link>
      <!-- <router-link to="/destinations"> Destinations </router-link>
      <router-link to="/infoUtil"> infoUtil </router-link>
      <router-link to="/opiniones"> Opiniones </router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>



<style scoped>

#app {
  color:blue;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> 
