<template>
    <section id="the-product" class="bright py-5">
        <!-- START WRAPPING ROW -->
        <div class="row align-justify">
            <!-- START LEFT SIDE -->
            <div class="columns small-12 large-6">
                <!-- START PRODUCT WRAPPER -->
                <div class="product-wrapper text-center">
                    <!-- START CERITIFICATE IMAGE -->
                    <img src="@/assets/img/certificates/oekotex/oekotex_de.png" alt="Oeko-Tex Certificate" class="oekotex-certificate shadow">
                    <!-- END CERITIFICATE IMAGE -->
                    <!-- START PRODUCT IMAGE -->
                    <div v-for="product in products" :key="product.id">
                        <img v-show="product.id === activeId" :src="getImage('src')" :alt="getImage('alt')">
                    </div>
                    <!-- END PRODUCT IMAGE -->
                </div>
                <!-- END PRODUCT WRAPPER -->
            </div>
            <!-- END LEFT SIDE -->
            <!-- START RIGHT SIDE -->
            <div class="columns small-12 large-5">
                <!-- START MAIN HEADER -->
                <h3 class="mb2">Unser gratis Testpaket</h3>
                <!-- END MAIN HEADER -->
                <!-- START SECONDARY HEADER -->
                <p class="uppercase mb-2">Wähle Deine Größe</p>
                <!-- END SECONDARY HEADER -->
                <!-- START BUTTON GROUP -->
                <base-button-group :products="products" :activeId="activeId" @clicked="setActive"/>
                <!-- END BUTTON GROUP -->
                <!-- START PRODUCT DESCRIPTION -->
                <p>Teste jetzt unsere Windeln und Feuchttücher - In Größe 1 - 3 enthält unser Testpaket unsere Feuchttücher mit 99 % Wasser, ab Gr. 4 erhältst Du unsere Sensitiven Feuchttücher. Wir zahlen die Produkte, Du nur den Versand.</p>
                <!-- END PRODUCT DESCRIPTION -->
                <!-- START COSTS -->
                <ul class="mb-5">
                    <li class="color-primary">
                        Automatischer Übergang ins jederzeit kündbare Windel-Abo für 49,50&nbsp;€ pro Lieferung.
                    </li>
                    <li>
                        Preise inkl. MwSt., ggf. zzgl. <a href="/de/zahlung-und-versand" target="_blank">Versandkosten</a>
                    </li>
                </ul>
                <!-- END COSTS -->
                <!-- START ACTION BUTTON -->
                <a href="#" class="button large expanded mt-3 uppercase">In den Warenkorb legen</a>
                <!-- END ACTION BUTTON -->
            </div>
            <!-- END RIGHT SIDE -->
        </div>
        <!-- END WRAPPING ROW -->
    </section>
</template>

<script>
import BaseButtonGroup from '@/components/BaseButtonGroup';
import { mapState } from 'vuex';

export default {
    // START CONFIGURATION
    components: {
        BaseButtonGroup
    },
    // END CONFIGURATION

    // START COMPUTED
    computed: {
        // Mapping required state objects
        ...mapState({
            products: state => state.products.primary.items,
            activeId: state => state.products.activeId
        })
    },
    // END COMPUTED

    // START METHODS
    methods: {
        /**
         * Start action to set the current active product id in the store
         * @param {Number} id Integer
         */
        setActive(id) {
            this.$store.dispatch('setActive', id);
        },

        /**
         * Provide requested image attribute
         * @param {String} attribute
         * @return {String}
         */
        getImage(attribute) {
            if (attribute === 'src') {
                return require('@/assets/img/' + this.products.find(product => product.id === this.activeId).image[attribute]);
            } else {
                return this.products.find(product => product.id === this.activeId).image[attribute];
            }
        }
    }
    // END METHODS
};
</script>

<style lang="scss" scoped>
.product-wrapper {
    position: relative;
}

.oekotex-certificate {
    position: absolute;
    top: 10%;
    left: 6%;
    width: 30%;
}

@media only screen and #{breakpoint(medium up)} {
    .oekotex-certificate {
        left: 9%;
        width: 28%;
    }
}
</style>
