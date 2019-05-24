<template>
    <section id="the-process" class="dark py-5">
        <!-- START HEADER ROW -->
        <div class="row">
            <div class="columns small-12 text-center">
                <h2>Wie es funktioniert</h2>
            </div>
        </div>
        <!-- END HEADER ROW -->
        <!-- START PROCESS ROW -->
        <div class="row">
            <!-- START PACKAGE COLUMN -->
            <div class="columns small-12 large-4 flex-container flex-dir-column align-middle pt-5">
                <font-awesome-layers class="mb-4" :class="viewportIsLarge ? 'fa-5x' : 'fa-10x'">
                    <font-awesome-icon  :icon="['far', 'circle']" class="icon-circle" />
                    <font-awesome-icon icon="gift" transform="shrink-8" class="color-primary" />
                </font-awesome-layers>
                <h6 class="mb-2 uppercase">Dein Testpaket</h6>
                <p class="mb-2 text-center">Wir schenken Dir die Produkte,<br>Du übernimmst nur das Porto.</p>
            </div>
            <!-- END PACKAGE COLUMN -->
            <!-- START FELXIBILITY COLUMN -->
            <div class="columns small-12 large-4 flex-container flex-dir-column align-middle pt-5">
                <font-awesome-layers class="mb-4" :class="viewportIsLarge ? 'fa-5x' : 'fa-10x'">
                    <font-awesome-icon  :icon="['far', 'circle']" class="icon-circle" />
                    <font-awesome-icon icon="lock-open" transform="shrink-8 left-0.8" class="color-primary" />
                </font-awesome-layers>
                <h6 class="mb-2 uppercase">Deine Flexibilität</h6>
                <p class="mb-2 text-center">Erste Monatsbox nach 14 Tagen für 49,50 € erhalten. Oder noch vor der ersten Lieferung kündigen.</p>
                <p class="mt-4 text-center"><a href="/de/windel-abo" target="_blank">Erfahre hier mehr über das <br>LILLYDOO Windel-Abo.</a></p>
            </div>
            <!-- END FELXIBILITY COLUMN -->
            <!-- START MONTHLY COLUMN -->
            <div class="columns small-12 large-4 flex-container flex-dir-column align-middle pt-5">
                <font-awesome-layers class="mb-4" :class="viewportIsLarge ? 'fa-5x' : 'fa-10x'">
                    <font-awesome-icon  :icon="['far', 'circle']" class="icon-circle" />
                    <font-awesome-icon icon="box" transform="shrink-8" class="color-primary" />
                    <font-awesome-icon icon="sync-alt" transform="shrink-20 down-1.75" class="color-white" />
                </font-awesome-layers>
                <h6 class="mb-2 uppercase">Deine Monatsbox</h6>
                <p class="mb-2 text-center">Jederzeit Designs oder Lieferintervalle anpassen oder die Windelgröße ändern.</p>
            </div>
            <!-- END MONTHLY COLUMN -->
        </div>
        <!-- END PROCESS ROW -->
    </section>
</template>

<script>
export default {
    // START CONFIGURATION
    props: {
        viewportIsLarge: {
            type: Boolean,
            required: true
        }
    }
    // END CONFIGURATION
};
</script>

<style lang="scss" scoped>
.icon-circle {
    color: transparent !important;
    border: 2px solid black;
    border-radius: 50%;
}
</style>
