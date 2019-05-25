export default {

    /**
     * Populate the store with data received from api
     * @param {Object} state
     * @param {Object} payload {primary: []}, {secondary: []}
     */
    populate(state, payload) {
        state.primary = payload.primary;
        state.secondary = payload.secondary;
    },

    /**
     * Set active product
     * @param {Object} state
     * @param {Number} payload integer
     */
    setActive(state, payload) {
        state.activeId = payload;
    }

};
