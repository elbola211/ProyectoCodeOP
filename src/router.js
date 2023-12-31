import Home from './views/Home.vue'
import Contacto from './views/Contacto.vue'
import Opiniones from './views/Opiniones.vue'
import OpinionesDetail from './views/OpinionsDetail.vue'
import Destinations from './views/Destinations.vue'
import DestinationDetails from './views/DestinationDetails.vue'

  export const routes= [
    { path: '/', name: 'home', component: Home }, 
    { path: '/contacto', name: 'contacto', component: Contacto },
    { path: '/opiniones', name: 'opinions', component: Opiniones },
    { path: '/opiniones/:id', name: 'OpinionesDetail', component: OpinionesDetail },
    { path: '/destinos', name: 'destinations', component: Destinations },
    { path: '/destinos/:id', name: 'destinationDetails', component: DestinationDetails } 
  ]
