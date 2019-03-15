import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';
// import VueResource from 'vue-resource';
// Vue.use(VueResource);

import cn from "./components/cn.vue";
import en from "./components/en.vue";
Vue.use(VueRouter);
const routes = [
    {
        path:"/",
        component: cn
    },
    {
        path:"/en",
        component: en
    }
];

var router =  new VueRouter({
    routes
});

new Vue({
  el: '#app',
  router,
  render(h) {
    return h(App)
  }
});
