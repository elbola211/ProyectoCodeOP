import { createApp } from 'vue'
import Router from 'vue-router'
import './style.css'

import Home from './views/Home.vue'
import Contacto from './views/Contacto.vue'
import InfoUtil from './views/InfoUtil.vue'
import Destinations from './views/Destinations.vue'
import DestinationDetails from './views/DestinationDetails.vue'; 
createApp.use(Router)

// Define las rutas
export default new Router({
  mode:'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home }, 
  { path: '/contacto', name: 'contacto', component: Contacto },
    // { path: '/infoutil', name: 'infoUtil', component: InfoUtil },
   { path: '/destinations', name: 'destinations', component: Destinations }, 
   {
    path: '/destination-details/:id', 
    name: 'destination-details',
    component: DestinationDetails, 
  },
  ]
})



// Monta la aplicación con el enrutador

const app = createApp(App)

app.use(router)

app.mount('#app')
