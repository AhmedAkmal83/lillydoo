<template>
    <section class="the-product py-5">
        <div class="row align-justify mx-0">
            <div class="columns small-12 large-6">

            </div>
            <div class="columns small-12 large-5">
                <h2 class="mb2">Unser gratis Testpaket</h2>

                <p class="uppercase mb-2">Wähle Deine Größe</p>

                <base-button-group :buttons="buttons"/>

                <p>smallTeste jetzt unsere Windeln und Feuchttücher - In Größe 1 - 3 enthält unser Testpaket unsere Feuchttücher mit 99 % Wasser, ab Gr. 4 erhältst Du unsere Sensitiven Feuchttücher. Wir zahlen die Produkte, Du nur den Versand.</p>

                <ul class="mb-5">
                    <li class="color-primary">
                        Automatischer Übergang ins jederzeit kündbare Windel-Abo für 49,50&nbsp;€ pro Lieferung.
                    </li>
                    <li>
                        Preise inkl. MwSt., ggf. zzgl. <a href="/de/zahlung-und-versand" target="_blank">Versandkosten</a>
                    </li>
                </ul>

                <a href="#" class="button large expanded mt-3 uppercase">In den Warenkorb legen</a>
            </div>

        </div>
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
            buttons: [
                { l1: '1', l2: '(2-3 KG)' },
                { l1: '2', l2: '(3-4 KG)' },
                { l1: '3', l2: '(4-7 KG)' },
                { l1: '4', l2: '(7-10 KG)' },
                { l1: '5', l2: '(10-12 KG)' }
            ]
        };
    }
    // END DATA
};
</script>
