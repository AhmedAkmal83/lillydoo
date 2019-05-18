// Primary vue imports
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

// Dependencies imports
import jQuery from 'jquery';
import whatInput from 'what-input';
import Foundation from 'foundation-sites';

// Assigning dependencies' globals
window.$ = window.jQuery = jQuery;
window.whatInput = whatInput;
window.Foundation = Foundation;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
