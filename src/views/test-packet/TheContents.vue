<template>
    <section id="the-contents" class="bright py-5">
        <!-- START HEADER ROW -->
        <div class="row">
            <div class="columns small-12 text-center">
                <h3>Dein Testpaket enthält</h3>
            </div>
        </div>
        <!-- END HEADER ROW -->
        <!-- START PROCESS ROW -->
        <div class="row">
            <!-- START DIAPERS COLUMN -->
            <div class="columns small-12 large-6">
                <!-- START WRAPPING ROW -->
                <div class="row">
                    <!-- START IMAGE COLUMN -->
                    <div class="columns small-4 pt-5">
                        <img :src="getPrimary('image', 'src')" :alt="getPrimary('image', 'alt')">
                    </div>
                    <!-- END IMAGE COLUMN -->
                    <!-- START DESCRIPTION COLUMN -->
                    <div class="columns small-8 pt-5 pl-0">
                        <h6 class="mb-2 uppercase">{{ getPrimary('description', 'header') }}</h6>
                        <ul>
                            <li v-for="(detail, index) in getPrimary('description', 'details')" :key="index">
                                {{ detail }}
                            </li>
                        </ul>
                    </div>
                    <!-- END DESCRIPTION COLUMN -->
                </div>
                <!-- END WRAPPING ROW -->
            </div>
            <!-- END DIAPERS COLUMN -->
            <!-- START WIPES COLUMN -->
            <div class="columns small-12 large-6">
                <!-- START WRAPPING ROW -->
                <div class="row">
                    <!-- START IMAGE ROW -->
                    <div class="columns small-4 pt-5">
                        <img :src="getSecondary('image', 'src')" :alt="getSecondary('image', 'alt')">
                    </div>
                    <!-- END IMAGE ROW -->
                    <!-- START DESCRIPTION ROW -->
                    <div class="columns small-8 pt-5 pl-0">
                        <h6 class="mb-2 uppercase">{{ getSecondary('description', 'header') }}</h6>
                        <ul>
                            <li v-for="(detail, index) in getSecondary('description', 'details')" :key="index">
                                {{ detail }}
                            </li>
                        </ul>
                    </div>
                    <!-- END DESCRIPTION ROW -->
                </div>
                <!-- END WRAPPING ROW -->
            </div>
            <!-- END WIPES COLUMN -->
        </div>
        <!-- END PROCESS ROW -->
    </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
    // START COMPUTED
    computed: {
        // Mapping required state objects
        ...mapState({
            primary: state => state.products.primary.items,
            secondary: state => state.products.secondary.items,
            activeId: state => state.products.activeId
        })
    },
    methods: {
        /**
         * Provide data requested for primary product
         * @param {String} type 'image' || 'description'
         * @return {Mixed} Array || String
         */
        getPrimary(type, property) {
            let product = this.primary.find(product => product.id === this.activeId);

            return type === 'image' ? this.image(product, property) : this.description(product, property);
        },

        /**
         * Provide data requested for secondary product
         * @param {String} type 'image' || 'description'
         * @return {Mixed} Array || String
         */
        getSecondary(type, property) {
            let name = this.primary.find(product => product.id === this.activeId).secondaryProduct;
            let product = this.secondary.find(product => product.name === name);

            return type === 'image' ? this.image(product, property) : this.description(product, property);
        },

        /**
         * Provide requested image attribute for a specific product
         * @param {Object} item
         * @param {String} property
         * @return {String}
         */
        image(product, property) {
            if (property === 'src') {
                return require('../../assets/img/' + product.thumbnail[property]);
            } else {
                return product.thumbnail[property];
            }
        },

        /**
         * Provide header or description items from product's description
         * @param {Object} product
         * @param {String} property
         * @return {Mixed} Array || String
         */
        description(product, property) {
            return product.description[property];
        }
    }
    // END COMPUTED
};
</script>
