import Vue from 'vue'
import VueRouter from 'vue-router';
import Main from './Main.vue'
import PersonType from "./components/Gateway/PersonType";
import Registration from "./components/Auth/Registration";
import Auth from "./components/Auth/Auth";
import Login from "./components/Auth/Login";
import QuestionsList from "./components/Questions/QuestionsList";
import Questions from "./components/Questions/Questions";
import {store} from "./data/store";
import Congratulation from "./components/Сongratulations/Congratulation";


Vue.config.productionTip = false


Vue.use(VueRouter);

const routes = [
  { path: '/', component: Main, redirect: '/choose', children: [
          { path: '/choose', component: PersonType },
          {
              path: '/auth',
              component : Auth, children: [
                  {
                      path: '/auth/login',
                      component: Login,
                  },
                  {
                      path: '/auth/registration',
                      component: Registration }
              ], redirect: '/auth/login'
          },
          {
              path: '/questions',
              component : Questions, children: [
                  {path: '/questions/list',component: QuestionsList}
              ],
              redirect: '/questions/list'
          },
          {
              path: '/congratulation',
              component: Congratulation
          }
      ] },

];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
    store,
    router,
  render: h => h(Main),
}).$mount('#app')
