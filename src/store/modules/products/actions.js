export default {

    /**
     * Initialize the store with data received from api
     * @param {Object} payload
     */
    initialize({ commit }, payload) {
        commit('populate', { primary: payload.primary, secondary: payload.secondary });
        commit('setActive', payload.activeId);
    },

    setActive({ commit }, payload) {
        commit('setActive', payload);
    }

};
