import Vue from 'vue';
import Router from 'vue-router';
import TestPacket from './views/TestPacket.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'test-packet',
            meta: { layout: 'content-minimal' },
            component: TestPacket
        },
        {
            path: '/alternate',
            name: 'test-packet-alternate',
            meta: { layout: 'content-full' },
            component: TestPacket
        }
    ]
});
