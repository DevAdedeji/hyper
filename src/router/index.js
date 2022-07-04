import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Create_Profile',
    name: 'Create Profile',
    component: () => import('../views/ProfileForm.vue'),
    meta:{
      AuthRequired: true,
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta:{
      AuthRequired: true,
    }
  },
  {
    path: '/transfer',
    name: 'Transfer',
    component: () => import('../views/Transfer.vue'),
    meta:{
      AuthRequired: true,
    }
  },
  {
    path: '/deposit',
    name: 'Deposit',
    component: () => import('../views/Deposit.vue'),
    meta:{
      AuthRequired: true,
    }
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import('../views/Notifications.vue'),
    meta:{
      AuthRequired: true,
    }
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
  let token = localStorage.getItem("hyperToken");
  if(to.meta.AuthRequired){
    if(!token){
      next({
        name: 'Login'
      })
    }else{
      next()
    }
  }
  else if(to.name ==="Home"){
    if(token){
      next({
        name: 'Dashboard'
      })
    }else{
      next()
    }
  }
  else{
    next()
  }
  
})



export default router
