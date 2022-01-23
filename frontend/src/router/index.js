import { createRouter, createWebHistory } from 'vue-router'
//import routerv from 'vue-router'
import Home from '../views/Home.vue'
import crearCuenta from '../views/crearCuenta.vue'
import encuestaPsicometrica from '../views/encuestaPsicometrica.vue'
import entrarPerfil from '../views/entrarPerfil.vue'
import recuperarContrasena from '../views/recuperarContrasena.vue'
import allport from '../views/allport.vue'
import kostick from '../views/kostick.vue'
import encProf from '../views/encuestaContProfesionales.vue'
import introBigFive from '../views/introBigFive.vue'
import iniciarSesion from '../views/iniciarSesion.vue'
import contactanos from '../views/contactanos.vue'
import bigFive from '../views/bigFive.vue'
import bigFive10 from '../views/bigFive10.vue'
import bigFive2 from '../views/bigFive2.vue'
import bigFive3 from '../views/bigFive3.vue'
import bigFive4 from '../views/bigFive4.vue'
import bigFive5 from '../views/bigFive5.vue'
import bigFive6 from '../views/bigFive6.vue'
import bigFive7 from '../views/bigFive7.vue'
import bigFive8 from '../views/bigFive8.vue'
import bigFive9 from '../views/bigFive9.vue'
import MBTI from '../views/MBTI.vue'
import ayuda from '../views/ayuda.vue'
import privacidad from '../views/privacidad.vue'
import nosotros from '../views/nosotros.vue'
import 'es6-promise/auto'
//import Vue from 'vue'

//Vue.use(router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/MBTI',
    name: 'MBTI',
    component: MBTI
  },
  {
    path: '/crearCuenta',
    name: 'crearCuenta',
    component: crearCuenta
  },
  {
    path: '/iniciarSesion',
    name: 'iniciarSesion',
    component: iniciarSesion
  },
  {
    path: '/encuestaPsicometrica',
    name: 'encuestaPsicometrica',
    component: encuestaPsicometrica
  },
  {
    path: '/entrarPerfil',
    name: 'entrarPerfil',
    component: entrarPerfil
  },
  {
    path: '/recuperarContrasena',
    name: 'rec}uperarContrasena',
    component: recuperarContrasena
  },
  {
    path: '/allport',
    name: 'TestAllport',
    component: allport
  },
  {
    path: '/kostick',
    name: 'TestKostick',
    component: kostick
  },

  {
    path: '/introBigFive',
    name: 'introBigFive',
    component: introBigFive
  },

  {
    path: '/testProfesionales',
    name: 'testProfesionales',
    component: encProf
  },
  {path: '/contacta',
    name: 'contacta',
    component: contactanos
  },
  {path: '/bigFive',
  name: 'bigFive',
  component: bigFive
  },
  {path: '/bigFive2',
  name: 'bigFive2',
  component: bigFive2
  },
  {path: '/bigFive3',
  name: 'bigFive3',
  component: bigFive3
  },
  {path: '/bigFive3',
  name: 'bigFive3',
  component: bigFive3
  },
  {path: '/bigFive4',
  name: 'bigFive4',
  component: bigFive4
  },
  {path: '/bigFive5',
  name: 'bigFive5',
  component: bigFive5
  },
  {path: '/bigFive6',
  name: 'bigFive6',
  component: bigFive6
  },
  {path: '/bigFive7',
  name: 'bigFive7',
  component: bigFive7
  },
  {path: '/bigFive8',
  name: 'bigFive8',
  component: bigFive8
  },
  {path: '/bigFive9',
  name: 'bigFive9',
  component: bigFive9
  },
  {path: '/bigFive10',
  name: 'bigFive10',
  component: bigFive10
  },
  {path: '/ayuda',
  name: 'ayuda',
  component: ayuda
  },
  {path: '/nosotros',
  name: 'nosotros',
  component: nosotros
  },
  {path: '/privacidad',
  name: 'privacidad',
  component: privacidad
  },
//  {path: '*',
//	redirect: 'iniciarSesion'
//  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
