// import { createApp } from 'vue'
// import Router from 'vue-router'


import Home from './views/Home.vue'
import Contacto from './views/Contacto.vue'
import InfoUtil from './views/InfoUtil.vue'
import Destinations from './views/Destinations.vue'
import Opiniones from './views/Opiniones.vue'
import OpinionesDetail from './views/OpinionsDetail.vue'


// createApp.use(Router)

// Define las rutas
//export const routes ({
 // mode:'history',
  //base: process.env.BASE_URL,

  export const routes= [
    { path: '/', name: 'home', component: Home }, 
    { path: '/contacto', name: 'contacto', component: Contacto },
    { path: '/infoutil', name: 'infoUtil', component: InfoUtil },
    { path: '/destinations', name: 'destinations', component: Destinations },
    { path: '/opiniones', name: 'opinions', component: Opiniones },
    { path: '/opiniones/:id', name: 'OpinionesDetail', component: OpinionesDetail } 
  ]

//})




// Monta la aplicación con el enrutador

// const app = createApp(App)

// app.use(router)

//app.mount('#app')
