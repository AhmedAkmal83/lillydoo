<template>
    <div class="test-packet">
        <the-header :viewport-is-large="viewportIsLarge"/>
        <the-product :viewport-is-large="viewportIsLarge"/>
        <the-process :viewport-is-large="viewportIsLarge"/>
        <the-contents/>
    </div>
</template>

<script>
// Import main view sections
import TheHeader from './test-packet/TheHeader';
import TheProduct from './test-packet/TheProduct';
import TheProcess from './test-packet/TheProcess';
import TheContents from './test-packet/TheContents';

export default {
    // START CONFIGURATION
    components: {
        TheHeader,
        TheProduct,
        TheProcess,
        TheContents
    },

    props: {
        backendData: {
            type: Object,
            required: true
        }
    },
    // END CONFIGURATION

    // START DATA
    data() {
        return {
            viewportIsLarge: null
        };
    },
    // END DATA

    // START HOOKS
    created() {
        // Initial display with respect to current viewport size
        this.handleViewportSize(Foundation.MediaQuery.current);
        // Keeping an eye on viewport size and calling handler whenever changed
        $(window).on('changed.zf.mediaquery', (event, newSize, oldSize) => {
            this.handleViewportSize(newSize);
        });
        // Dispatch action to populate store data
        this.$store.dispatch('initialize', this.backendData);
    },
    // END HOOKS

    // START METHODS
    methods: {
        /**
         * Update boolean indicating if current viewport size is (large || xlarge || xxlarge)
         * @param {String} viewportSize small || medium || large || xlarge || xxlarge
         */
        handleViewportSize(viewportSize) {
            this.viewportIsLarge = viewportSize.includes('large');
        }
    }
    // END METHODS

};
</script>
