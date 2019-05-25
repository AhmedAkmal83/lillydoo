export default {

    /**
     * Initialize the store with data received from api
     * @param {Object} payload activeId: Number, {primary: []}, {secondary: []}
     */
    initialize({ commit }, payload) {
        commit('populate', { primary: payload.primary, secondary: payload.secondary });
        commit('setActive', payload.activeId);
    },

    /**
     * Set active product
     * @param {Object} payload integer
     */
    setActive({ commit }, payload) {
        commit('setActive', payload);
    }

};
