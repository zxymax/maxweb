import Vue from 'vue'
import Router from 'vue-router'

// import Home from '@/components/Home'
// import Stars from '@/components/Stars'
// import About from '@/components/About'

const Home = () => import(/* webpackChunkName: "Home" */ '@/components/Home.vue')
const Stars = () => import(/* webpackChunkName: "Stars" */ '@/components/Stars.vue')
const About = () => import(/* webpackChunkName: "About" */ '@/components/About.vue')

Vue.use(Router)

export default new Router({
  routes: [
    
    {
    	path: '/home',
    	component: Home,
    	name: 'Home'
    },
    {
    	path: '/stars',
    	component: Stars,
    	name: 'Stars'
    },
    {
    	path: '/about',
    	component: About,
    	name: 'About'
    }
  ]
})
