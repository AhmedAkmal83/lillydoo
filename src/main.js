// Primary vue imports
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

// Assigning vue to window
window.Vue = Vue;

// Load dependencies
require('./dependencies');

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
