<template>
    <div class="test-packet">
        <the-header :viewport-is-large="viewportIsLarge"/>
        <the-product/>
        <the-process :viewport-is-large="viewportIsLarge"/>
        <the-contents/>
    </div>
</template>

<script>
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
        // Display with respect to viewport size
        this.handleViewportSize(Foundation.MediaQuery.current);
        // Keeping an eye on viewport size and calling handler accordingly
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
         * Define which layout should be used to serve the current view
         * @return {String} The meta property for the current layout
         */
        handleViewportSize(viewportSize) {
            this.viewportIsLarge = viewportSize.includes('large');
        }
    }
    // END METHODS

};
</script>
