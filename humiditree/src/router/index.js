import Vue from 'vue'
import Router from 'vue-router'
import Profile from "../components/Profile";
import TreeMap from "../components/TreeMap";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: TreeMap
    },
    {
      path: '/profile',
      name: 'Profil',
      component: Profile
    }
  ]
})
