<template>
    <div id="product-slider" class="orbit" data-orbit data-auto-play="false" :data-options="setAnimation">
        <div class="orbit-wrapper">
            <ul class="orbit-container">
                <div v-for="(product, index) in products" :key="index">
                    <li :id="product.id" class="orbit-slide">
                        <figure class="orbit-figure">
                            <img class="orbit-image" :src="product.src" :alt="product.alt">
                        </figure>
                    </li>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    // START CONFIGURATION
    props: {
        products: {
            type: Array,
            required: true
        },
        viewportIsLarge: {
            type: Boolean,
            required: true
        }
    },
    // END CONFIGURATION

    // START COMPUTED
    computed: {
        /**
         * Set animation preset with respect to viewport size
         * @return {String}
         */
        setAnimation() {
            // Set animation preset for (large && xlarge && xxlarge)
            let largeUp = 'animInFromLeft:fade-in; animInFromRight:fade-in; animOutToLeft:fade-out; animOutToRight:fade-out;';
            // Set animation preset for (medium && small)
            let mediumDown = 'animInFromLeft:slide-in-left; animInFromRight:slide-in-right; animOutToLeft:slide-out-left; animOutToRight:slide-out-right;';

            return this.viewportIsLarge ? largeUp : mediumDown;
        }
    }
    // END COMPUTED
};
</script>

<style lang="scss" scoped>
</style>
