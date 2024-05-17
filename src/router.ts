import { createRouter, createWebHistory } from 'vue-router'

import Error404 from '@/views/404.vue'
import Character from '@/views/Character.vue'
import Characters from '@/views/Characters.vue'
import Episode from '@/views/Episode.vue'
import Episodes from '@/views/Episodes.vue'
import Location from '@/views/Location.vue'
import Locations from '@/views/Locations.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/:pathMatch(.*)*', component: Error404 },
    { path: '/', component: Characters },
    { path: '/locations', component: Locations },
    { path: '/episodes', component: Episodes },
    { path: '/character/:id', component: Character },
    { path: '/location/:id', component: Location },
    { path: '/episode/:id', component: Episode },
  ],
})
