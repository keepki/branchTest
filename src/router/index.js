import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/components/regist/register'
import Login from'@/components/login'
import Main from '@/components/main/content'
import Zhuye from '@/components/show/zhuye'
Vue.use(VueRouter)

const routes = [
 {
    path:'/login',
    component:Login
  },
  {
    path:'/',
    redirect:'/login'
  },{
    path:'/register',
    component:Register
  },{
    path:'/main',
    component:Main,
    children: [
      {
        path:'zhuye',
        component:Zhuye
      },
      
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//前置路由守卫监视非法跳转(无token的跳转)
/*router.beforeEach((to,from,next) => {
  if(to.path=='/main'){
    const token=localStorage.getItem('token')//如果要访问的地址是主页则进行token比对，
    //从localstorage取出自己存的token（这里的后台登陆没有存）
    if(token){
      next()//有token则放行允许通过
    }
    else{
      next('/login')//没有的话强制跳转到登录界面
    }
  }
  else{
    next()
  }
})*/
export default router
