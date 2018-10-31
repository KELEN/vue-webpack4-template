import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'amfe-flexible'
import VueResource from 'vue-resource'
import axios from './util/axios'
import utils from './util/utils'

Vue.use(VueResource)

import eventBus from './util/eventBus'
Vue.prototype.$eventBus = eventBus
Vue.prototype.$axios = axios;
Vue.prototype.$utils = utils;

import routes from './router'

Vue.use(VueRouter)
const router = new VueRouter({
    // mode:'history',
    routes: routes
});

import filters from './filters/filters';

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

// 兼容IOS设置页面title
Vue.prototype.setTitle = function (title) {
    document.title = title;
    let ua = navigator.userAgent;
    if (/\bMicroMessenger\/([\d\.]+)/.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
        var i = document.createElement('iframe');
        i.src = '';
        i.style.display = 'none';
        i.onload = function () {
            setTimeout(function () {
                i.remove();
            }, 9);
        };
        document.body.appendChild(i);
    }
};

Vue.prototype.isTencent = function () {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger" || ua.match(/QQ/i) == "qq") {
        return true;
    } else {
        return false;
    }
}

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
