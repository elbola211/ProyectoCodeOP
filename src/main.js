import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import { createRouter, createWebHashHistory } from 'vue-router'



// Define componentes

const Home = {Temlate: 'Página de Home'}
const Contacto = {Temlate: 'Detalle de contacto'}

// Define las rutas
const routes = [
  { path: '/', component: Home }, // Ruta de la página de inicio (Home.vue)
  { path: '/infoutil', component: InfoUtil }, // Ruta para InfoUtil.vue
  { path: '/destinations', component: Destinations }, // Ruta para Destinations.vue
  { path: '/contacto', component: Contacto }, // Ruta para Contacto.vue
]

// Crea una instancia de VueRouter y pasa las rutas
const router = createRouter({
    history: createWebHashHistory(),
    routes,
  //    mode: 'history' // Opcional: para eliminar el # de las URLs
})

// Monta la aplicación con el enrutador

const app = createApp(App)

app.use(router)

app.mount('#app')
