import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import UserPage from '../views/UserPage.vue'
Vue.use(VueRouter)
const routes = [{
        path: '/user',
        component: UserPage
    },
    {
        path: '/',
        component: HomePage,
        children: [
            // {
            // //嵌套路由，此处path前不能有'/'
            //     path: 'news',
            //     component: News,
            // },
            // {
            //     path: 'message',
            //     component: Message,
            // }
        ]
    }
]
const router = new VueRouter({
    routes
  })
  
  export default router