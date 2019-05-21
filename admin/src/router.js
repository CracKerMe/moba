import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import CategoryEdit from './views/CategoryEdit.vue'
import CategoryList from './views/CategoryList.vue'
import ItemEdit from './views/ItemEdit.vue'
import ItemList from './views/ItemList.vue'
import HeroEdit from './views/HeroEdit.vue'
import HeroList from './views/HeroList.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: 'category/create',
          component: CategoryEdit
        }, {
          path: 'category/edit/:id',
          component: CategoryEdit,
          props: true
        }, {
          path: 'category/list',
          component: CategoryList
        }, {
          path: 'item/create',
          component: ItemEdit
        }, {
          path: 'item/edit/:id',
          component: ItemEdit,
          props: true
        }, {
          path: 'item/list',
          component: ItemList
        }, {
          path: 'hero/create',
          component: HeroEdit
        }, {
          path: 'hero/edit/:id',
          component: HeroEdit,
          props: true
        }, {
          path: 'hero/list',
          component: HeroList
        },
        { path: '*', component: NotFound }
      ]
    },
    { path: '*', component: NotFound }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
