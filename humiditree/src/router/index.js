import Vue from 'vue'
import Router from 'vue-router'
import Profile from "../components/Profile";
import TreeMap from "../components/TreeMap";
import Start from "../components/Start";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Start
    },
    {
      path: '/profile',
      name: 'Profil',
      component: Profile
    },
    {
      path: '/map',
      name: 'Karte',
      component: TreeMap
    }
  ]
})
