import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'amfe-flexible'
import routes from './router'
import axios from './util/axios'
import utils from './util/utils'
import eventBus from './util/eventBus'

Vue.prototype.$eventBus = eventBus
Vue.prototype.$axios = axios;
Vue.prototype.$utils = utils;

Vue.use(VueRouter)
const router = new VueRouter({
    // mode:'history',
    routes: routes
});

import filters from './filters/filters';
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
