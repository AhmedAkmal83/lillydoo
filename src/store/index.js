import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products/index';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        products
    }
});
