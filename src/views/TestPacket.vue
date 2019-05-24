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
    // END CONFIGURATION

    // START DATA
    data() {
        return {
            viewportIsLarge: null
        };
    },
    // END DATA

    // START METHODS
    methods: {
        /**
         * Define which layout should be used to serve the current view
         * @return {String} The meta property for the current layout
         */
        handleViewportSize(viewportSize) {
            this.viewportIsLarge = viewportSize.includes('large');
        }
    },
    // END METHODS

    // START HOOKS
    created() {
        this.handleViewportSize(Foundation.MediaQuery.current);
        $(window).on('changed.zf.mediaquery', (event, newSize, oldSize) => {
            this.handleViewportSize(newSize);
        });
    }
    // END HOOKS
};
</script>
