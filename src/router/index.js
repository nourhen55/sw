import Vue from 'vue'
import VueRouter from 'vue-router'
import SecondComponent from '../components/prop.vue'
import AdminDashboard from '../components/p2/OfficeDash.vue';
/*import Team from '../views/Team.vue';
import Messages from '../views/Messages.vue';
import Quotes from '../views/Quotes.vue';
import Settings from '../views/Settings.vue';*/
Vue.use(VueRouter)

const routes = [
  {
    path: '/text',
    name: ' text',
    component: () => import('../components/p1/AI.vue')
  },
  {
    path: '/expor',
    name: ' expor',
    component: () => import('../components/p1/ExpOrer.vue')
  },
  /*{ path: '/team', name: 'Équipe', component: Team },
  { path: '/messages', name: 'Messages', component: Messages },
  { path: '/quotes', name: 'Demandes Devis', component: Quotes },
  { path: '/settings', name: 'Paramètres', component: Settings },*/
  {
    path: '/Laravel',
    name: 'Laravel',
    component: () => import('../components/p1/NotrEquipe2.vue')
  },
  {
    path: '/admin-dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
  },
  {
    path: '/equipe',
    name: 'equipe',
    component: () => import('../components/p1/NotrEquipe.vue')
  },
  {
    path: '/login',
    name: 'loginAdmine',
    component: () => import('../components/p2/loginAd.vue')
  },
  {
    path: '/Trav',
    name: 'Trav',
    component: () => import('../components/TraVaille.vue')
  },
  {
    path: '/serv',
    name: 'serv',
    component: () => import('../components/NosServices.vue')
  },
  {
    path: '/con',
    name: 'con',
    component: () => import('../components/p1/NousContact11.vue')
  },
  {
    path: '/devis',
    name: 'devis',
    component: () => import('../components/p1/devis.vue')
  },
  {
    path: '/prop',
    name: 'prop',
    component: () => import('../components/prop.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Resum.vue'),
    children:[
      {
        path: '/prop',
        name: 'prop',
        component: SecondComponent,
      },
    ]
  }
]

const router = new VueRouter({
  mode:'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
})

export default router
