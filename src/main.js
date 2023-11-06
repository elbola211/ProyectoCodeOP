import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import './style.css'

import App from './App.vue'
import Home from './views/Home.vue'
import Contacto from './views/Contacto.vue'
import InfoUtil from './views/InfoUtil.vue'
import Destinations from './views/Destinations.vue'
import Opiniones from './views/Opiniones.vue'
import DestinationDetails from './views/DestinationDetails.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/contacto', name: 'contacto', component: Contacto },
  { path: '/infoutil', name: 'infoUtil', component: InfoUtil },
  { path: '/destinos', name: 'destinations', component: Destinations }, 
  { path: '/opiniones', name: 'opinions', component: Opiniones },
  { path: '/destination-details/:id', name: 'destination-details', component: DestinationDetails }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')


