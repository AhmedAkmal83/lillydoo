import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

export default {

    state: {
        activeId: null,
        primary: {
            name: '',
            items: []
        },
        secondary: {
            name: '',
            items: []
        }
    },
    actions,
    getters,
    mutations

};
