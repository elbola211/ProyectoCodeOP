<template>
 <div id='app'>
    <Navbar />
    <div id='nav'></div>
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

