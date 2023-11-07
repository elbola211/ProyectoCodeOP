<template>
 <div id='app'>
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
  <h1 class="text-blue-800 text-6xl">Hola</h1>
</template>

