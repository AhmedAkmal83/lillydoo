<template>
    <section id="the-product" class="bright py-5">
        <!-- START WRAPPING ROW -->
        <div class="row align-justify">
            <!-- START LEFT SIDE -->
            <div class="columns small-12 large-6">
                <div v-for="product in products" :key="product.id">
                    <img v-show="product.selected" :src="buildImageSource(product.id)" alt="">
                </div>
            </div>
            <!-- END LEFT SIDE -->
            <!-- START RIGHT SIDE -->
            <div class="columns small-12 large-5">
                <!-- START MAIN HEADER -->
                <h2 class="mb2">Unser gratis Testpaket</h2>
                <!-- END MAIN HEADER -->
                <!-- START SECONDARY HEADER -->
                <p class="uppercase mb-2">Wähle Deine Größe</p>
                <!-- END SECONDARY HEADER -->
                <!-- START BUTTON GROUP -->
                <base-button-group :products="products" @clicked="handleClick"/>
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

export default {
    // START CONFIGURATION
    components: {
        BaseButtonGroup
    },
    // END CONFIGURATION

    // START DATA
    data() {
        return {
            products: [
                {
                    id: 1,
                    selected: true,
                    button: {
                        l1: '1',
                        l2: '(2-3 KG)'
                    },
                    image: {
                        src: 'test-packet/lillydoo-testpaket-10.jpg',
                        alt: 'Lillydoo Testpaket mit Windeln in Größe 1 und 15 Feuchttüchern'
                    }
                },
                {
                    id: 2,
                    selected: false,
                    button: {
                        l1: '2',
                        l2: '(3-4 KG)'
                    },
                    image: {
                        src: 'test-packet/lillydoo-testpaket-20.jpg',
                        alt: 'Lillydoo Testpaket mit Windeln in Größe 2 und 15 Feuchttüchern'
                    }
                },
                {
                    id: 3,
                    selected: false,
                    button: {
                        l1: '3',
                        l2: '(4-7 KG)'
                    },
                    image: {
                        src: 'test-packet/lillydoo-testpaket-30.jpg',
                        alt: 'Lillydoo Testpaket mit Windeln in Größe 3 und 15 Feuchttüchern'
                    }
                },
                {
                    id: 4,
                    selected: false,
                    button: {
                        l1: '4',
                        l2: '(7-10 KG)'
                    },
                    image: {
                        src: 'test-packet/lillydoo-testpaket-40.jpg',
                        alt: 'Lillydoo Testpaket mit Windeln in Größe 4 und 15 Feuchttüchern'
                    }
                },
                {
                    id: 5,
                    selected: false,
                    button: {
                        l1: '5',
                        l2: '(10-12 KG)'
                    },
                    image: {
                        src: 'test-packet/lillydoo-testpaket-50.jpg',
                        alt: 'Lillydoo Testpaket mit Windeln in Größe 5 und 15 Feuchttüchern'
                    }
                }
            ]
        };
    },
    // END DATA

    // START METHODS
    methods: {
        /**
         * Handle switching between products
         * @param {Number} id Integer
         */
        handleClick(id) {
            this.products.forEach(product => { product.selected = product.id === id; });
        },

        /**
         * Build the relative path to product image
         * @param {Number} id Integer
         * @return {String}
         */
        buildImageSource(id) {
            return require('@/assets/img/' + this.products.find(product => product.id === id).image.src);
        }
    }
    // END METHODS
};
</script>
