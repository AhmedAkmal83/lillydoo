<template>
    <component id="app" :is='layout'>
        <router-view/>
    </component>
</template>

<script>
// Import layouts
import ContentFull from '@/layouts/ContentFull';
import ContentMinimal from '@/layouts/ContentMinimal';

export default {
    // START CONFIGURATION
    components: {
        ContentFull,
        ContentMinimal
    },
    // END CONFIGURATION

    // START COMPUTED
    computed: {
        /**
         * Define which layout should be used to serve the current view
         * @return {String} The meta property for the current layout
         */
        layout() {
            return this.$route.meta.layout;
        }
    },
    // END COMPUTED

    // START HOOKS
    mounted() {
        // Initialize foundation JS
        $(document).foundation();
    }
    // END HOOKS
};
</script>

<style lang="scss">
@import '@/assets/scss/app.scss';
</style>
