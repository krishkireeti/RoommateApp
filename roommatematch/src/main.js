import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import FAQ from './components/FAQ.vue'
import Search from './components/Search.vue'


Vue.use(VueRouter);

export const router = new VueRouter({
    mode : 'history',
   routes : [
       { path : '/faq' , component : FAQ},
       { path : '/search' , component : Search},
   ]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


