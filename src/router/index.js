import Vue from 'vue'
import Router from 'vue-router'
// const Router = resolve => require(['vue-router'], resolve);

// import HelloWorld from '@/components/HelloWorld'

const HelloWorld = resolve => require(['@/components/HelloWorld'], resolve);
// const HelloWorld = r => require.ensure([], () => r(require('components/HelloWorld')), 'HelloWorld')
const MainPublic = resolve => require(['@/components/page/MainPublic'], resolve);
const Test = resolve => require(['@/components/Test'], resolve);
const IndexPublic = resolve => require(['@/components/public/IndexPublic'], resolve);
const login = resolve => require(['@/components/page/login'], resolve);
const register = resolve => require(['@/components/page/register'], resolve);


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPublic',
      component: MainPublic,
      meta: {
        title: '公共首页'
      },
      children:[
        {
          path:'',
          component:IndexPublic,
          // children:[
          //     {
          //         path:'/publicproductlist/publicannoucement',
          //         name:'HelloWorld',
          //         component:HelloWorld
          //     }
          // ],
          meta: {
            title: '首页'
          }
        },
        {
            path:'/publicproductlist',
            component:Test,
            children:[
                {
                    path:'/publicproductlist/publicannoucement',
                    name:'HelloWorld',
                    component:HelloWorld
                }
            ],
            meta: {
              title: '商品中心'
            }
        },
        {
          path:'/publicannoucement',
          name:'Hello',
          component:HelloWorld,
          meta: {
            title: '企业公告'
          }
        }
     ]
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/helloworld',
      name: 'Hello',
      component: HelloWorld,
      meta: {
        title: 'helloword'
      }
    },
    {
      path: '/test',
      name: 'testtmp',
      component: Test,
      meta: {
        title: '测试一波'
      }
    }
  ]
})
